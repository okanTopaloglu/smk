"""data/questions/*.json dosyalarını doğrulayıp data/sorular.js içinde birleştirir.

Kullanım: python3 tools/build.py
"""
import glob
import json
import os
import re
import subprocess
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

qs, errors = [], []
for path in sorted(glob.glob("data/questions/*.json")):
    for q in json.load(open(path, encoding="utf-8")):
        q["_src"] = os.path.basename(path)
        qs.append(q)

# Marka İnceleme Kılavuzu soruları kilavuz.js içinde durur
if os.path.exists("data/kilavuz.js"):
    out = subprocess.run(
        ["node", "-e", "global.window={};require('./data/kilavuz.js');process.stdout.write(JSON.stringify(window.KILAVUZ.sorular||[]))"],
        capture_output=True, text=True, check=True)
    for q in json.loads(out.stdout):
        q["_src"] = "kilavuz.js"
        qs.append(q)

seen = set()
for q in qs:
    qid = q.get("id")
    if qid in seen:
        errors.append(f"tekrarlanan id {qid}")
    seen.add(qid)
    if q.get("exam") not in ("marka", "patent", "ortak"):
        errors.append(f"{qid}: exam={q.get('exam')}")
    if len(q.get("options", [])) != 5 or len(q.get("why", [])) != 5:
        errors.append(f"{qid}: şık/açıklama sayısı {len(q.get('options', []))}/{len(q.get('why', []))}")
    if not isinstance(q.get("answer"), int) or not 0 <= q["answer"] <= 4:
        errors.append(f"{qid}: answer={q.get('answer')}")
    for k in ("q", "topic"):
        if not q.get(k):
            errors.append(f"{qid}: boş {k}")

# Kanunda olmayan SMK madde atıflarını yakala
kanun = open("data/kanun.js", encoding="utf-8").read()
data = json.loads(kanun[len("window.KANUN = "):-2])
nos = {a["no"].split()[0] for a in data["items"] if a["type"] == "article" and not a["gecici"]}
for q in qs:
    text = " ".join([q.get("ref", "")] + q.get("why", []))
    for m in re.finditer(r"SMK\s+m\.\s?(\d+)", text):
        if m.group(1) not in nos and not (166 <= int(m.group(1)) <= 184):
            errors.append(f"{q['id']}: SMK m.{m.group(1)} kanunda yok")

for q in qs:
    q.pop("_src", None)
with open("data/sorular.js", "w", encoding="utf-8") as f:
    f.write("window.SORULAR = ")
    json.dump(qs, f, ensure_ascii=False)
    f.write(";\n")

print("toplam soru:", len(qs))
print("sınav:", dict(Counter(q["exam"] for q in qs)))
print("cevap dağılımı:", dict(sorted(Counter(q["answer"] for q in qs).items())))
print("hata:", len(errors))
for e in errors:
    print("  -", e)
