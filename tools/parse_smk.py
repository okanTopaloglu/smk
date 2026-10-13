"""6769 sayılı SMK metnini (acik-mevzuat metin.md) madde bazlı JSON'a çevirir.

Kullanım: python3 tools/parse_smk.py data/src/6769-smk.md data/kanun.js
"""
import json
import re
import sys

SRC, OUT = sys.argv[1], sys.argv[2]
text = open(SRC, encoding="utf-8").read()

# Üst bilgi (markdown başlığı) atlanır; kanun "BAŞLANGIÇ HÜKÜMLERİ" ile başlar.
body = text[text.index("BAŞLANGIÇ HÜKÜMLERİ"):]
end_marker = "6769 SAYILI KANUNA EK VE DEĞİŞİKLİK"
body, tail = body.split(end_marker, 1)

blocks = [b.strip() for b in re.split(r"\n\s*\n", body) if b.strip()]

ORD = r"(BİRİNCİ|İKİNCİ|ÜÇÜNCÜ|DÖRDÜNCÜ|BEŞİNCİ|ALTINCI|YEDİNCİ|SEKİZİNCİ|DOKUZUNCU|ONUNCU)"
HEAD_RE = re.compile(rf"^{ORD} (KİTAP|KISIM|BÖLÜM)$")
ART_RE = re.compile(r"^(GEÇİCİ MADDE|MADDE|Madde)\s+(\d+(?:/[A-Z])?(?:\s+ila\s+\d+)?)\s*(?:-|–|$)\s*(.*)$", re.S)
PARA_START = re.compile(r"^(\(\d+\)|[a-zçğıöşü]{1,2}\)\s|\d+\)\s|\[\d+\]$)")
LEVEL = {"KİTAP": 1, "KISIM": 2, "BÖLÜM": 3}


def join(block):
    s = " ".join(line.strip() for line in block.splitlines())
    s = re.sub(r"\s+", " ", s)
    # dipnot işaretleri: " [1]" -> özel işaret
    s = re.sub(r"\s*\[(\d+)\]", r"⟦\1⟧", s)
    s = re.sub(r"^\(\s+(\d+)\)", r"(\1)", s)
    return s.strip()


def is_art(b):
    return bool(ART_RE.match(b.splitlines()[0].strip()))


items = []
cur = None
i = 0
items.append({"type": "heading", "level": 1, "label": "BAŞLANGIÇ HÜKÜMLERİ", "name": join(blocks[1])})
i = 2
while i < len(blocks):
    b = blocks[i]
    first = b.splitlines()[0].strip()
    m = HEAD_RE.match(first)
    if m and len(b.splitlines()) == 1:
        name = join(blocks[i + 1]) if i + 1 < len(blocks) else ""
        items.append({"type": "heading", "level": LEVEL[m.group(2)], "label": first, "name": name})
        cur = None
        i += 2
        continue
    # yalnız "(2)" gibi fıkra numarası içeren blok bir sonraki blokla birleşir
    if re.fullmatch(r"\(\s*\d+\)", first) and len(b.splitlines()) == 1 and i + 1 < len(blocks):
        blocks[i + 1] = first + " " + blocks[i + 1]
        i += 1
        continue
    # iki bloğa bölünmüş madde başlığı
    if (i + 2 < len(blocks) and is_art(blocks[i + 2]) and not is_art(b) and not is_art(blocks[i + 1])
            and not PARA_START.match(first) and not PARA_START.match(blocks[i + 1])
            and not re.search(r"[.:;,]$", join(b))):
        blocks[i + 1] = b + "\n" + blocks[i + 1]
        i += 1
        continue
    # bir sonraki blok madde başlangıcıysa bu blok madde başlığıdır
    if i + 1 < len(blocks) and is_art(blocks[i + 1]) and not is_art(b) and not PARA_START.match(first):
        title = join(b)
        a = ART_RE.match(join(blocks[i + 1]))
        kind, no, rest = a.group(1), a.group(2), a.group(3)
        cur = {"type": "article", "no": no, "gecici": kind.startswith("GEÇİCİ"), "title": title, "paras": []}
        rest = rest.lstrip("- ").strip()
        if rest:
            cur["paras"].append(rest)
        items.append(cur)
        i += 2
        continue
    if is_art(b):
        a = ART_RE.match(join(b))
        kind, no, rest = a.group(1), a.group(2), a.group(3)
        cur = {"type": "article", "no": no, "gecici": kind.startswith("GEÇİCİ"), "title": "", "paras": []}
        rest = rest.lstrip("- ").strip()
        if rest:
            cur["paras"].append(rest)
        items.append(cur)
        i += 1
        continue
    s = join(b)
    if cur is None:
        # bölüm adından sonra gelen ara başlık vb.
        items.append({"type": "heading", "level": 4, "label": "", "name": s})
        i += 1
        continue
    if re.fullmatch(r"(⟦\d+⟧)+", s) and cur["paras"]:
        cur["paras"][-1] += s
    elif cur["paras"] and re.fullmatch(r"\(\d+\)", cur["paras"][-1]):
        cur["paras"][-1] += " " + s
    elif cur["paras"] and not PARA_START.match(s) and not re.search(r"[.:;,)]\s*(⟦\d+⟧)*$", cur["paras"][-1]):
        cur["paras"][-1] += " " + s
    else:
        cur["paras"].append(s)
    i += 1

# Dipnotlar
notes = {}
for m in re.finditer(r"\[(\d+)\]\s*\n(.*?)(?=\n\s*\[\d+\]\s*\n|\Z)", tail, re.S):
    notes[m.group(1)] = re.sub(r"\s+", " ", m.group(2)).strip()

arts = [x for x in items if x["type"] == "article"]
meta = {
    "ad": "SINAİ MÜLKİYET KANUNU",
    "no": "6769",
    "kabul": "22/12/2016",
    "rg": "10/1/2017 tarihli ve 29944 sayılı Resmî Gazete",
    "kaynak": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6769&MevzuatTur=1&MevzuatTertip=5",
}
with open(OUT, "w", encoding="utf-8") as f:
    f.write("window.KANUN = ")
    json.dump({"meta": meta, "items": items, "notes": notes}, f, ensure_ascii=False)
    f.write(";\n")
print("articles:", len(arts), "headings:", len(items) - len(arts), "notes:", len(notes))
print("untitled:", [a["no"] for a in arts if not a["title"]])
