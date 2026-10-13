(function () {
  "use strict";

  const KANUN = window.KANUN || { meta: {}, items: [], notes: {} };
  const SORULAR = window.SORULAR || [];
  const HAP = window.HAP || { bolumler: [], sureler: [], sayilar: [] };
  const SINIF = window.SINIFLAR || { nice: [], lokarno: [], bilgi: {} };
  const KLV = window.KILAVUZ || { giris: [], bolumler: [], sorular: [] };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const app = $("#app");
  const LETTERS = ["A", "B", "C", "D", "E"];
  const EXAM_NAMES = { marka: "Marka", patent: "Patent", ortak: "Ortak", karma: "Marka + Patent" };

  // ---------- Kalıcı ayarlar (tarayıcıda) ----------
  const KEY = "smk-vekillik-v1";
  let store = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { store = {}; }
  store.stats = store.stats || {};
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* depolama yok */ } }

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const escB = (s) => esc(s).replace(/&lt;(\/?)b&gt;/g, "<$1b>");
  const trLower = (s) => String(s || "").toLocaleLowerCase("tr-TR");
  const stripTags = (s) => String(s || "").replace(/<[^>]+>/g, "");
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  // ---------- Yazı boyutu ----------
  const FS_STEPS = [0.85, 0.92, 1, 1.1, 1.2, 1.32, 1.45, 1.6];
  let fsIdx = FS_STEPS.indexOf(store.fs); if (fsIdx < 0) fsIdx = 2;
  function applyFs() {
    document.documentElement.style.setProperty("--fs", FS_STEPS[fsIdx]);
    $("#fsVal").textContent = Math.round(FS_STEPS[fsIdx] * 100) + "%";
    $("#fsDown").disabled = fsIdx === 0; $("#fsUp").disabled = fsIdx === FS_STEPS.length - 1;
    store.fs = FS_STEPS[fsIdx]; save();
  }
  $("#fsDown").onclick = () => { if (fsIdx > 0) { fsIdx--; applyFs(); } };
  $("#fsUp").onclick = () => { if (fsIdx < FS_STEPS.length - 1) { fsIdx++; applyFs(); } };
  applyFs();

  // ---------- Tema ----------
  if (store.theme) document.documentElement.setAttribute("data-theme", store.theme);
  $("#themeBtn").onclick = () => {
    const cur = document.documentElement.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next); store.theme = next; save();
  };

  // ---------- Sesli okuma ----------
  const TTS = (() => {
    const synth = window.speechSynthesis;
    let voice = null, queue = [], playing = false, paused = false, onDone = null, token = 0;
    const player = $("#player"), ptext = $("#playerText"), rateSel = $("#ttsRate"), pauseBtn = $("#ttsPause");
    if (store.rate) rateSel.value = String(store.rate);
    rateSel.onchange = () => { store.rate = parseFloat(rateSel.value); save(); };
    function pickVoice() {
      if (!synth) return;
      const vs = synth.getVoices();
      voice = vs.find((v) => /^tr(-|_|$)/i.test(v.lang) && /google|natural|online/i.test(v.name)) ||
        vs.find((v) => /^tr(-|_|$)/i.test(v.lang)) || null;
    }
    if (synth) { pickVoice(); synth.onvoiceschanged = pickVoice; }

    function normalize(t) {
      return stripTags(t)
        .replace(/⟦\d+⟧/g, "")
        .replace(/\bSMK\b/g, "Sınai Mülkiyet Kanunu")
        .replace(/\bTMK\b/g, "Türk Medeni Kanunu").replace(/\bTBK\b/g, "Türk Borçlar Kanunu").replace(/\bTTK\b/g, "Türk Ticaret Kanunu")
        .replace(/\bYİDK\b/g, "Yeniden İnceleme ve Değerlendirme Kurulu")
        .replace(/\bm\.\s?(\d+)\/(\d+)-([a-zçğıöşü])\b/g, "madde $1, fıkra $2, bent $3")
        .replace(/\bm\.\s?(\d+)\/(\d+)/g, "madde $1, fıkra $2")
        .replace(/\bm\.\s?(\d+)/g, "madde $1")
        .replace(/^\s*(I{1,3}|IV|V)\.\s/gm, (m, r) => ({ I: "Bir", II: "İki", III: "Üç", IV: "Dört", V: "Beş" }[r] + ". "))
        .replace(/\s+/g, " ").trim();
    }
    function chunk(text) {
      const parts = normalize(text).split(/(?<=[.!?;:])\s+/);
      const out = []; let cur = "";
      for (const p of parts) {
        if ((cur + " " + p).length > 220 && cur) { out.push(cur); cur = p; } else cur = cur ? cur + " " + p : p;
      }
      if (cur) out.push(cur);
      // çok uzun tek cümleleri virgüllerden böl
      return out.flatMap((c) => c.length <= 260 ? [c] : c.split(/(?<=,)\s+/));
    }
    function stop() {
      token++; queue = []; playing = false; paused = false;
      if (synth) synth.cancel();
      player.hidden = true; pauseBtn.textContent = "Duraklat";
      $$(".speaking").forEach((e) => e.classList.remove("speaking"));
      const cb = onDone; onDone = null; if (cb) cb(false);
    }
    // items: [{text, label, el}]
    function play(items, done) {
      if (!synth) { flash("Bu tarayıcı sesli okumayı desteklemiyor. Chrome veya Edge kullanın."); return; }
      stop();
      if (!voice) pickVoice();
      onDone = done || null;
      const my = token;
      queue = items.flatMap((it) => chunk(it.text).map((c, i) => ({ c, label: it.label, el: it.el, first: i === 0 })));
      playing = true; player.hidden = false;
      const next = () => {
        if (my !== token) return;
        const item = queue.shift();
        if (!item) { playing = false; player.hidden = true; $$(".speaking").forEach((e) => e.classList.remove("speaking")); const cb = onDone; onDone = null; if (cb) cb(true); return; }
        if (item.first && item.el) {
          $$(".speaking").forEach((e) => e.classList.remove("speaking"));
          item.el.classList.add("speaking");
          if (item.el.getBoundingClientRect().top > innerHeight * 0.8 || item.el.getBoundingClientRect().top < 60) item.el.scrollIntoView({ block: "center", behavior: "smooth" });
        }
        ptext.textContent = item.label || "Okunuyor…";
        const u = new SpeechSynthesisUtterance(item.c);
        u.lang = "tr-TR"; if (voice) u.voice = voice;
        u.rate = parseFloat(rateSel.value) || 1;
        u.onend = next; u.onerror = (e) => { if (e.error !== "interrupted" && e.error !== "canceled") next(); };
        synth.speak(u);
      };
      next();
    }
    pauseBtn.onclick = () => {
      if (!synth) return;
      if (paused) { synth.resume(); paused = false; pauseBtn.textContent = "Duraklat"; }
      else { synth.pause(); paused = true; pauseBtn.textContent = "Devam"; }
    };
    $("#ttsStop").onclick = stop;
    return { play, stop, say: (text, label, el) => play([{ text, label, el }]), get playing() { return playing; }, hasVoice: () => !!voice };
  })();

  const autoBtn = $("#ttsAuto");
  function setAuto(v) { store.auto = v; save(); autoBtn.setAttribute("aria-pressed", String(!!v)); }
  setAuto(!!store.auto);
  autoBtn.onclick = () => {
    setAuto(!store.auto);
    flash(store.auto ? "Sesli okuma açık: sorular ve açıklamalar otomatik okunacak." : "Otomatik sesli okuma kapatıldı.");
    if (store.auto && view === "quiz") readQuestion(); else if (!store.auto) TTS.stop();
  };

  const SPEAK_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path class="wave" d="M16 8.5a5 5 0 0 1 0 7"/></svg>';
  const speakBtn = (attrs, label = "Dinle") => `<button class="icon-btn" ${attrs}>${SPEAK_SVG}${label}</button>`;

  let flashTimer;
  function flash(msg) {
    let el = $("#flash");
    if (!el) { el = document.createElement("div"); el.id = "flash"; el.className = "notice"; el.setAttribute("role", "status");
      Object.assign(el.style, { position: "fixed", top: "calc(env(safe-area-inset-top,0px) + 5rem)", left: "50%", transform: "translateX(-50%)", zIndex: 40, boxShadow: "var(--shadow)", maxWidth: "calc(100% - 32px)" });
      document.body.appendChild(el); }
    el.textContent = msg; el.hidden = false;
    clearTimeout(flashTimer); flashTimer = setTimeout(() => (el.hidden = true), 3200);
  }

  // ---------- Kanun yardımcıları ----------
  const ARTS = KANUN.items.filter((x) => x.type === "article");
  const artId = (a) => (a.gecici ? "g" : "m") + String(a.no).split(/\s/)[0].replace("/", "-");
  const artLabel = (a) => (a.gecici ? "Geçici Madde " : "Madde ") + a.no;
  const artText = (a) => `${artLabel(a)}. ${a.title ? a.title + ". " : ""}${a.paras.join(" ")}`;

  // "SMK m.5/1-b" gibi atıfları tıklanabilir yap
  function linkRefs(html) {
    return html.replace(/(SMK\s+(geçici\s+)?m\.\s?(\d+)(?:\/\d+)?(?:-[a-zçğıöşü])?)/gi, (m, all, gec, no) =>
      `<span class="ref-link" role="link" tabindex="0" data-art="${gec ? "g" : "m"}${no}" title="Kanun metninde aç">${all}</span>`);
  }
  document.addEventListener("keydown", (e) => {
    const b = e.target.closest && e.target.closest("[data-art]");
    if (b && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openArticle(b.dataset.art); }
  });
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-art]");
    if (b) { e.preventDefault(); openArticle(b.dataset.art); }
  });

  // ---------- Router ----------
  let view = "ana";
  const VIEWS = { ana: renderHome, hap: renderHap, kilavuz: renderKilavuz, kanun: renderKanun, siniflar: renderSiniflar };
  function go(v, opts) {
    TTS.stop();
    view = v;
    $$(".mainnav a").forEach((a) => a.classList.toggle("active", a.dataset.nav === v));
    if (VIEWS[v]) { if (location.hash !== "#" + v) history.replaceState(null, "", "#" + v); VIEWS[v](opts); }
    if (!opts || !opts.keepScroll) window.scrollTo({ top: 0 });
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-nav]");
    if (a) { e.preventDefault(); go(a.dataset.nav); }
  });
  window.addEventListener("hashchange", () => { const h = location.hash.slice(1); if (VIEWS[h] && h !== view) go(h); });

  // ---------- Ana sayfa ----------
  function poolFor(exam) {
    if (exam === "marka") return SORULAR.filter((q) => q.exam === "marka" || q.exam === "ortak");
    if (exam === "patent") return SORULAR.filter((q) => q.exam === "patent" || q.exam === "ortak");
    return SORULAR.slice();
  }
  function progressFor(pool) {
    const solved = pool.filter((q) => store.stats[q.id] && store.stats[q.id].c > 0).length;
    return { solved, total: pool.length, pct: pool.length ? Math.round((solved / pool.length) * 100) : 0 };
  }
  function wrongIds() { return Object.keys(store.stats).filter((id) => store.stats[id].last === false); }

  function renderHome() {
    const cards = [
      { k: "marka", tag: "Marka vekilliği", h: "Marka", p: "SMK marka, coğrafi işaret, tasarım, Madrid, Nice ve ortak konular." },
      { k: "patent", tag: "Patent vekilliği", h: "Patent", p: "Patent, faydalı model, çalışan buluşları, PCT, EPC ve ortak konular." },
      { k: "karma", tag: "Karma çalışma", h: "İkisi birden", p: "Tüm soru havuzu karışık sırayla. Hem marka hem patent." },
    ];
    const wrong = wrongIds().length;
    app.innerHTML = `
      <section class="hero">
        <div>
          <div class="eyebrow">TÜRKPATENT · Patent ve Marka Vekilliği Sınavı</div>
          <h1>Bir haftada <em>6769 sayılı SMK</em>’yı soru soru çalış.</h1>
          <p class="lead">Sınav formatında beş şıklı sorular. İşaretlediğin anda doğru mu yanlış mı görürsün; her şıkkın neden doğru ya da yanlış olduğu kanun maddesiyle açıklanır.</p>
        </div>
        <div class="stamp-card" aria-label="Sınav özeti">
          <div class="row"><span>Değerlendirme</span><span>100 puan</span></div>
          <div class="row"><span>Başarı barajı</span><span>en az 70</span></div>
          <div class="row"><span>Soru biçimi</span><span>5 şık, tek doğru</span></div>
          <div class="row"><span>Soru havuzu</span><span>${SORULAR.length} soru</span></div>
          <div class="row"><span>Kanun metni</span><span>${ARTS.filter((a) => !a.gecici).length ? 193 : 0} madde + ${ARTS.filter((a) => a.gecici).length} geçici</span></div>
        </div>
      </section>

      <div class="section-title"><h2>Hangi sınava çalışıyorsun?</h2><span class="hint">Seçince konu ve soru sayısını belirlersin.</span></div>
      <div class="modes">
        ${cards.map((c) => { const pr = progressFor(poolFor(c.k)); return `
          <button class="mode ${c.k}" data-exam="${c.k}">
            <span class="tag">${c.tag}</span>
            <h3>${c.h}</h3>
            <p>${c.p}</p>
            <div class="bar" aria-hidden="true"><i style="width:${pr.pct}%"></i></div>
            <div class="meta"><span>Doğru çözülen</span><b>${pr.solved} / ${pr.total}</b></div>
          </button>`; }).join("")}
      </div>

      <div class="section-title"><h2>Çalışma araçları</h2></div>
      <div class="links">
        <a class="link-card" href="#hap" data-nav="hap"><span class="num">HAP</span><b>Kesinlikle bilinmesi gerekenler</b><span>Hap bilgiler, süreler tablosu, sınav tuzakları.</span></a>
        <a class="link-card" href="#kilavuz" data-nav="kilavuz"><span class="num">KILAVUZ</span><b>Marka inceleme kılavuzu</b><span>Kurumun ret nedenlerini ve benzerliği nasıl incelediği.</span></a>
        <a class="link-card" href="#kanun" data-nav="kanun"><span class="num">6769</span><b>Kanun maddesini oku</b><span>SMK’nın güncel tam metni, arama ve sesli okuma.</span></a>
        <a class="link-card" href="#siniflar" data-nav="siniflar"><span class="num">NICE 1–45</span><b>Tescil sınıfları</b><span>Nice mal/hizmet sınıfları ve Lokarno tasarım sınıfları.</span></a>
        <button class="link-card" id="wrongBtn" ${wrong ? "" : "disabled"}><span class="num">TEKRAR</span><b>Yanlışlarım</b><span>${wrong ? wrong + " soruyu yeniden çöz." : "Henüz yanlış yaptığın soru yok."}</span></button>
      </div>

      <div class="section-title"><h2>Sınav hakkında</h2></div>
      <div class="info-grid">
        <div class="panel">
          <h3>Resmî çerçeve</h3>
          <ul>
            <li>Sınav, TÜRKPATENT tarafından <b>Patent Vekilliği ve Marka Vekilliği Sınav, Sicil ve Disiplin Yönetmeliği</b>ne (RG 7/4/2021, sayı 31447) göre yapılır.</li>
            <li>Patent vekilliği ve marka vekilliği sınavları <b>ayrı ayrı</b> düzenlenir.</li>
            <li>2023 değişikliğiyle sınav <b>tek aşamalı</b> hâle getirildi (önceden genel ve mesleki yeterlik olarak iki aşamalıydı).</li>
            <li>Sınav <b>100 tam puan</b> üzerinden değerlendirilir; en az <b>70 puan</b> alan başarılı sayılır.</li>
          </ul>
          <p class="src">Kaynak: <a href="https://www.mevzuat.gov.tr/File/GeneratePdf?mevzuatNo=38501&mevzuatTur=KurumVeKurulusYonetmeligi&mevzuatTertip=5" target="_blank" rel="noopener">Yönetmelik (mevzuat.gov.tr)</a> · <a href="https://www.turkpatent.gov.tr/vekil-sicil-islemleri" target="_blank" rel="noopener">TÜRKPATENT vekil sicil işlemleri</a>. Tarih, soru sayısı ve konu ağırlıkları için güncel sınav ilanını kontrol et.</p>
        </div>
        <div class="panel">
          <h3>Çalışılacak konular</h3>
          <ul>
            <li><b>6769 sayılı SMK</b>: marka, coğrafi işaret ve geleneksel ürün adı, tasarım, patent, faydalı model, ortak hükümler. Geçmiş sınavlarda en çok mutlak/nispi ret nedenleri, yayıma itiraz, hükümsüzlük, iptal ve süreler soruldu.</li>
            <li><b>Uluslararası anlaşmalar</b>: Paris Sözleşmesi, Madrid Protokolü, PCT, Avrupa Patent Sözleşmesi, TRIPS, Nice, Lokarno, Viyana, Strazburg, Budapeşte.</li>
            <li><b>Temel hukuk</b>: Medeni Kanun başlangıç hükümleri ve kişiler hukuku, Borçlar Kanunu vekâlet sözleşmesi, Ticaret Kanunu ticari işletme, ticaret unvanı ve haksız rekabet.</li>
          </ul>
          <p class="src">Sorular bu uygulama için SMK’nın güncel metni esas alınarak hazırlanmıştır; resmî çıkmış soruların birebir kopyası değildir.</p>
        </div>
      </div>`;
    $$(".mode").forEach((b) => (b.onclick = () => renderSetup(b.dataset.exam)));
    const wb = $("#wrongBtn"); if (wb) wb.onclick = () => startQuiz(SORULAR.filter((q) => wrongIds().includes(q.id)), "karma", "Yanlışlarım");
  }

  // ---------- Kurulum ----------
  function renderSetup(exam) {
    TTS.stop(); view = "setup";
    $$(".mainnav a").forEach((a) => a.classList.remove("active"));
    const pool = poolFor(exam);
    const topics = [];
    pool.forEach((q) => { let t = topics.find((x) => x.name === q.topic); if (!t) topics.push((t = { name: q.topic, n: 0, exam: q.exam })); t.n++; });
    const order = { marka: 0, patent: 0, ortak: 1 };
    topics.sort((a, b) => order[a.exam] - order[b.exam] || b.n - a.n);
    const sel = new Set(topics.map((t) => t.name));
    let count = 20, onlyNew = false;
    app.innerHTML = `
      <section class="setup">
        <div>
          <div class="eyebrow">${esc(EXAM_NAMES[exam])} · soru çözümü</div>
          <h1>Ne kadar ve hangi konudan?</h1>
        </div>
        <div class="field">
          <div class="label">Konular <span class="hint">(${pool.length} soru)</span></div>
          <div class="actions"><button class="btn small" id="allT">Tümünü seç</button><button class="btn small" id="noneT">Temizle</button></div>
          <div class="chips" id="topics">
            ${topics.map((t) => `<button class="chip" aria-pressed="true" data-t="${esc(t.name)}"><span class="badge ${t.exam}" style="padding:.05rem .3rem">${t.exam === "ortak" ? "O" : t.exam === "marka" ? "M" : "P"}</span>${esc(t.name)} <small>${t.n}</small></button>`).join("")}
          </div>
        </div>
        <div class="field">
          <div class="label">Soru sayısı</div>
          <div class="seg" id="countSeg">
            ${[10, 20, 40, 100, 0].map((n) => `<button data-n="${n}" aria-pressed="${n === count}">${n === 0 ? "Tümü" : n}</button>`).join("")}
          </div>
        </div>
        <div class="field">
          <label><input type="checkbox" id="onlyNew"> Önce henüz doğru çözmediğim soruları getir</label>
        </div>
        <div class="actions">
          <button class="btn seal" id="startBtn">Başla</button>
          <span class="hint" id="selInfo"></span>
        </div>
        <p class="notice">Kısayollar: <span class="kbd">A</span>–<span class="kbd">E</span> veya <span class="kbd">1</span>–<span class="kbd">5</span> şık seçer, <span class="kbd">→</span> sonraki soru, <span class="kbd">←</span> önceki soru, <span class="kbd">S</span> soruyu sesli okur.</p>
      </section>`;
    const info = () => {
      const n = pool.filter((q) => sel.has(q.topic)).length;
      $("#selInfo").textContent = `${n} uygun soru · ${count === 0 ? n : Math.min(count, n)} soru sorulacak`;
      $("#startBtn").disabled = n === 0;
    };
    $$("#topics .chip").forEach((c) => (c.onclick = () => {
      const t = c.dataset.t; if (sel.has(t)) sel.delete(t); else sel.add(t);
      c.setAttribute("aria-pressed", String(sel.has(t))); info();
    }));
    $("#allT").onclick = () => { topics.forEach((t) => sel.add(t.name)); $$("#topics .chip").forEach((c) => c.setAttribute("aria-pressed", "true")); info(); };
    $("#noneT").onclick = () => { sel.clear(); $$("#topics .chip").forEach((c) => c.setAttribute("aria-pressed", "false")); info(); };
    $$("#countSeg button").forEach((b) => (b.onclick = () => { count = +b.dataset.n; $$("#countSeg button").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); info(); }));
    $("#onlyNew").onchange = (e) => (onlyNew = e.target.checked);
    $("#startBtn").onclick = () => {
      let qs = shuffle(pool.filter((q) => sel.has(q.topic)));
      if (onlyNew) qs.sort((a, b) => ((store.stats[a.id]?.c > 0) - (store.stats[b.id]?.c > 0)));
      if (count) qs = qs.slice(0, count);
      startQuiz(qs, exam);
    };
    info();
    window.scrollTo({ top: 0 });
  }

  // ---------- Quiz ----------
  let Q = null; // {list, idx, answers:[], exam, title}
  function startQuiz(list, exam, title) {
    if (!list.length) { flash("Seçime uyan soru yok."); return; }
    Q = { list, idx: 0, answers: new Array(list.length).fill(null), exam, title: title || EXAM_NAMES[exam] };
    view = "quiz"; renderQuestion();
  }
  function renderQuestion() {
    TTS.stop();
    const q = Q.list[Q.idx], ans = Q.answers[Q.idx];
    const done = Q.answers.filter((a) => a !== null).length;
    const ok = Q.answers.filter((a, i) => a !== null && a === Q.list[i].answer).length;
    const answered = ans !== null;
    app.innerHTML = `
      <section class="quiz">
        <div>
          <div class="qhead">
            <span class="counter">Soru ${Q.idx + 1} / ${Q.list.length}</span>
            <div class="progress" aria-hidden="true"><i style="width:${(done / Q.list.length) * 100}%"></i></div>
          </div>
          <article class="qcard" id="qcard">
            <div class="qtools" style="margin:0 0 .9rem">
              <span class="badge ${q.exam}">${esc(EXAM_NAMES[q.exam] || q.exam)}</span>
              <span class="badge topic">${esc(q.topic)}</span>
            </div>
            <p class="qtext" id="qtext">${esc(q.q)}</p>
            <ol class="options" id="opts">
              ${q.options.map((o, i) => {
                let cls = "";
                if (answered) cls = i === q.answer ? "correct" : i === ans ? "wrong" : "dim";
                const why = answered && q.why && q.why[i] ? `<span class="why">${i === q.answer ? "<b>Doğru.</b> " : ""}${linkRefs(esc(q.why[i]))}</span>` : "";
                const tag = answered ? "div" : "button";
                return `<li><${tag} class="opt ${cls}" data-i="${i}"><span class="letter">${LETTERS[i]}</span><span>${esc(o)}${why}</span></${tag}></li>`;
              }).join("")}
            </ol>
            ${answered ? `<div class="verdict ${ans === q.answer ? "ok" : "bad"}" role="status">
                ${ans === q.answer ? "Doğru cevap." : `Yanlış. Doğru cevap ${LETTERS[q.answer]}.`}
                ${q.ref ? `<span class="ref">${linkRefs(esc(q.ref))}</span>` : ""}
              </div>` : ""}
            <div class="qtools">
              ${speakBtn('id="readQ"', "Soruyu dinle")}
              ${answered ? speakBtn('id="readW"', "Açıklamayı dinle") : ""}
            </div>
          </article>
          <div class="qnav">
            <button class="btn" id="prevBtn" ${Q.idx === 0 ? "disabled" : ""}>← Önceki</button>
            ${Q.idx < Q.list.length - 1 ? `<button class="btn primary" id="nextBtn">Sonraki →</button>` : `<button class="btn seal" id="finishBtn">Sonucu gör</button>`}
          </div>
        </div>
        <aside class="side">
          <div class="panel">
            <div class="eyebrow" style="margin-bottom:.6rem">${esc(Q.title)}</div>
            <div class="score">
              <div><b style="color:var(--ok)">${ok}</b><small>Doğru</small></div>
              <div><b style="color:var(--bad)">${done - ok}</b><small>Yanlış</small></div>
              <div><b>${Q.list.length - done}</b><small>Boş</small></div>
            </div>
          </div>
          <div class="panel">
            <div class="eyebrow" style="margin-bottom:.6rem">Sorular</div>
            <div class="dots">${Q.list.map((x, i) => `<button class="dot ${Q.answers[i] === null ? "" : Q.answers[i] === x.answer ? "ok" : "bad"} ${i === Q.idx ? "cur" : ""}" data-go="${i}" aria-label="Soru ${i + 1}">${i + 1}</button>`).join("")}</div>
          </div>
          <div class="actions"><button class="btn small" id="finishEarly">Bitir</button><button class="btn small" data-nav="ana">Ana sayfa</button></div>
        </aside>
      </section>`;
    $$("#opts button.opt").forEach((b) => (b.onclick = () => answer(+b.dataset.i)));
    $("#prevBtn").onclick = () => move(-1);
    const nb = $("#nextBtn"); if (nb) nb.onclick = () => move(1);
    const fb = $("#finishBtn"); if (fb) fb.onclick = renderResult;
    $("#finishEarly").onclick = renderResult;
    $$("[data-go]").forEach((b) => (b.onclick = () => { Q.idx = +b.dataset.go; renderQuestion(); }));
    $("#readQ").onclick = () => readQuestion(true);
    const rw = $("#readW"); if (rw) rw.onclick = readExplanation;
    if (store.auto && !answered) readQuestion();
  }
  function questionSpeech(q) {
    return q.q + ". " + q.options.map((o, i) => `${LETTERS[i]} şıkkı: ${o}`).join(". ");
  }
  function readQuestion() {
    if (!Q) return;
    const q = Q.list[Q.idx];
    TTS.say(questionSpeech(q), `Soru ${Q.idx + 1}`, $("#qcard"));
  }
  function readExplanation() {
    const q = Q.list[Q.idx], ans = Q.answers[Q.idx];
    const items = [{ text: ans === q.answer ? "Doğru cevap." : `Yanlış. Doğru cevap ${LETTERS[q.answer]} şıkkı.`, label: "Sonuç" }];
    q.options.forEach((o, i) => items.push({ text: `${LETTERS[i]} şıkkı. ${q.why ? q.why[i] : ""}`, label: `${LETTERS[i]} şıkkı açıklaması`, el: $$("#opts .opt")[i] }));
    TTS.play(items);
  }
  function answer(i) {
    const q = Q.list[Q.idx];
    if (Q.answers[Q.idx] !== null) return;
    Q.answers[Q.idx] = i;
    const st = store.stats[q.id] || { s: 0, c: 0 };
    st.s++; if (i === q.answer) st.c++; st.last = i === q.answer;
    store.stats[q.id] = st; save();
    renderQuestion();
    if (store.auto) readExplanation();
    $("#qcard").scrollIntoView({ block: "nearest" });
  }
  function move(d) {
    const n = Q.idx + d; if (n < 0 || n >= Q.list.length) return;
    Q.idx = n; renderQuestion(); window.scrollTo({ top: 0 });
  }
  document.addEventListener("keydown", (e) => {
    if (view !== "quiz" || !Q || e.target.closest("input,select,textarea") || e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key.toLowerCase();
    const map = { a: 0, b: 1, c: 2, d: 3, e: 4, "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 };
    if (k in map && Q.answers[Q.idx] === null && map[k] < Q.list[Q.idx].options.length) { answer(map[k]); e.preventDefault(); }
    else if (e.key === "ArrowRight") move(1);
    else if (e.key === "ArrowLeft") move(-1);
    else if (k === "s") readQuestion();
  });

  function renderResult() {
    TTS.stop(); view = "result";
    const total = Q.list.length;
    const ok = Q.answers.filter((a, i) => a === Q.list[i].answer).length;
    const blank = Q.answers.filter((a) => a === null).length;
    const score = Math.round((ok / total) * 100);
    const byTopic = {};
    Q.list.forEach((q, i) => { const t = (byTopic[q.topic] = byTopic[q.topic] || { n: 0, ok: 0, exam: q.exam }); t.n++; if (Q.answers[i] === q.answer) t.ok++; });
    const C = 2 * Math.PI * 58;
    const wrongs = Q.list.filter((q, i) => Q.answers[i] !== null && Q.answers[i] !== q.answer);
    app.innerHTML = `
      <section style="display:grid;gap:1.5rem;max-width:900px">
        <div class="result-head">
          <svg class="ring" viewBox="0 0 140 140" role="img" aria-label="Puan ${score}">
            <circle class="bg" cx="70" cy="70" r="58"></circle>
            <circle class="fg" cx="70" cy="70" r="58" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - score / 100)}" style="stroke:${score >= 70 ? "var(--ok)" : "var(--seal)"}"></circle>
            <text x="70" y="74" text-anchor="middle">${score}</text>
            <text class="sub" x="70" y="94" text-anchor="middle">/ 100</text>
          </svg>
          <div style="display:grid;gap:.5rem">
            <div class="eyebrow">${esc(Q.title)} · sonuç</div>
            <h1 style="font-size:1.7rem">${ok} doğru, ${total - ok - blank} yanlış${blank ? `, ${blank} boş` : ""}</h1>
            <p class="pass ${score >= 70 ? "ok" : "bad"}">${score >= 70 ? "70 barajının üzerindesin." : `Baraj 70. ${70 - score} puan daha gerekiyor.`}</p>
            <div class="actions">
              ${wrongs.length ? `<button class="btn seal" id="redoWrong">Yanlışları tekrar çöz (${wrongs.length})</button>` : ""}
              <button class="btn" id="review">Soruları gözden geçir</button>
              <button class="btn" data-nav="ana">Ana sayfa</button>
            </div>
          </div>
        </div>
        <div class="panel" style="overflow-x:auto">
          <h3>Konu bazında</h3>
          <table class="topic-table">
            <thead><tr><th>Konu</th><th></th><th style="text-align:right">Doğru</th></tr></thead>
            <tbody>${Object.entries(byTopic).sort((a, b) => a[1].ok / a[1].n - b[1].ok / b[1].n).map(([t, v]) => {
              const p = Math.round((v.ok / v.n) * 100);
              return `<tr><td>${esc(t)}</td><td style="width:40%"><div class="minibar"><i style="width:${p}%;background:${p >= 70 ? "var(--ok)" : "var(--seal)"}"></i></div></td><td class="n">${v.ok}/${v.n}</td></tr>`;
            }).join("")}</tbody>
          </table>
        </div>
      </section>`;
    const rw = $("#redoWrong"); if (rw) rw.onclick = () => startQuiz(wrongs, Q.exam, "Yanlışlar");
    $("#review").onclick = () => { Q.idx = 0; view = "quiz"; renderQuestion(); };
    window.scrollTo({ top: 0 });
  }

  // ---------- Kanun okuyucu ----------
  let kanunRendered = false;
  function paraHtml(p, term) {
    let h = esc(p).replace(/⟦(\d+)⟧/g, (m, n) => `<sup class="fn" title="${esc(KANUN.notes[n] || "")}">[${n}]</sup>`);
    if (term) {
      const re = new RegExp("(" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      h = h.replace(/(<[^>]+>)|([^<]+)/g, (m, tag, txt) => tag || txt.replace(re, "<mark>$1</mark>"));
    }
    return h;
  }
  function articleHtml(a, term) {
    return `<section class="art" id="${artId(a)}" data-id="${artId(a)}">
      <div class="art-title"><span class="art-no">${esc(artLabel(a).toUpperCase())}</span><span>${esc(a.title || "")}</span><span class="spacer"></span>
        ${speakBtn(`data-say="${artId(a)}"`)} ${speakBtn(`data-from="${artId(a)}"`, "Buradan itibaren")}
      </div>
      ${a.paras.map((p) => `<p class="${/^[a-zçğıöşü]{1,2}\)\s|^\d+\)\s/.test(p) ? "item" : ""}">${paraHtml(p, term)}</p>`).join("")}
    </section>`;
  }
  function renderKanun(opts) {
    const m = KANUN.meta;
    const tocItems = KANUN.items.map((x, i) => {
      if (x.type === "heading" && x.level <= 3) return `<button class="tl l${x.level}" data-h="h${i}">${esc(x.label ? x.label + " · " : "")}${esc(x.name)}</button>`;
      return "";
    }).join("");
    app.innerHTML = `
      <div class="reader">
        <aside class="toc" aria-label="İçindekiler">
          <input type="search" id="lawSearch" placeholder="Kanunda ara (ör. rüçhan)" aria-label="Kanunda ara">
          <div class="goto"><input type="number" id="gotoNo" min="1" max="193" placeholder="Madde" aria-label="Madde numarası"><button class="btn small" id="gotoBtn">Git</button></div>
          <div class="eyebrow" style="margin:.4rem 0">İçindekiler</div>
          ${tocItems}
          <button class="tl l1" data-h="gecici">Geçici Maddeler</button>
        </aside>
        <article class="law" id="law">
          <header class="law-head">
            <div class="eyebrow">Kanun No. ${esc(m.no)} · Kabul ${esc(m.kabul)}</div>
            <h1>${esc(m.ad)}</h1>
            <div class="meta">${esc(m.rg)}’de yayımlanmıştır. Metin, değişiklikler işlenmiş güncel hâlidir. <a href="${esc(m.kaynak)}" target="_blank" rel="noopener">Resmî metin: mevzuat.gov.tr</a></div>
            <div class="actions" style="margin-top:.4rem">${speakBtn('id="readAll"', "Baştan sesli oku")}</div>
          </header>
          <div id="lawBody"></div>
        </article>
      </div>`;
    const body = $("#lawBody");
    function full() {
      let gecDone = false;
      body.innerHTML = KANUN.items.map((x, i) => {
        if (x.type === "heading") return `<div class="h${x.level}" id="h${i}">${x.label ? `<span class="lab">${esc(x.label)}</span>` : ""}<div class="nm">${esc(x.name)}</div></div>`;
        let pre = "";
        if (x.gecici && !gecDone) { gecDone = true; pre = `<div class="h2" id="gecici"><div class="nm">Geçici Maddeler</div></div>`; }
        return pre + articleHtml(x);
      }).join("") + `<div class="notes"><b>Dipnotlar</b>${Object.entries(KANUN.notes).map(([n, t]) => `<p>[${n}] ${esc(t)}</p>`).join("")}</div>`;
    }
    full();
    let tmr;
    $("#lawSearch").oninput = (e) => {
      clearTimeout(tmr);
      tmr = setTimeout(() => {
        const term = e.target.value.trim();
        if (term.length < 2) { full(); return; }
        const lt = trLower(term);
        const hits = ARTS.filter((a) => trLower(a.title + " " + a.paras.join(" ")).includes(lt));
        body.innerHTML = `<p class="search-info">“${esc(term)}” için ${hits.length} madde bulundu.</p>` + hits.map((a) => articleHtml(a, term)).join("");
      }, 200);
    };
    const goto = () => { const n = $("#gotoNo").value.trim(); if (n) openArticle("m" + n); };
    $("#gotoBtn").onclick = goto;
    $("#gotoNo").onkeydown = (e) => { if (e.key === "Enter") goto(); };
    $$(".toc [data-h]").forEach((b) => (b.onclick = () => { if ($("#lawSearch").value) { $("#lawSearch").value = ""; full(); } const t = document.getElementById(b.dataset.h); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); }));
    $("#readAll").onclick = () => readFrom(0);
    body.addEventListener("click", (e) => {
      const s = e.target.closest("[data-say]"), f = e.target.closest("[data-from]");
      if (s) { const a = ARTS.find((x) => artId(x) === s.dataset.say); TTS.say(artText(a), artLabel(a), document.getElementById(artId(a))); }
      if (f) readFrom(ARTS.findIndex((x) => artId(x) === f.dataset.from));
    });
    kanunRendered = true;
    if (opts && opts.art) setTimeout(() => scrollToArt(opts.art), 30);
  }
  function readFrom(i) {
    const list = ARTS.slice(i, i + 40);
    TTS.play(list.map((a) => ({ text: artText(a), label: artLabel(a), el: document.getElementById(artId(a)) })));
  }
  function scrollToArt(id) {
    const el = document.getElementById(id);
    if (!el) { flash("Bu madde bulunamadı."); return; }
    el.scrollIntoView({ block: "start" });
    el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
  }
  function openArticle(id) {
    if (view === "kanun" && !$("#lawSearch").value) { scrollToArt(id); return; }
    go("kanun", { art: id });
  }

  // ---------- Hap bilgiler ----------
  let hapTab = null;
  function renderHap() {
    const tabs = HAP.bolumler.map((b) => ({ id: b.id, ad: b.ad })).concat([{ id: "_sure", ad: "Süreler tablosu" }, { id: "_sayi", ad: "Sayılarla SMK" }]);
    if (!hapTab || !tabs.find((t) => t.id === hapTab)) hapTab = tabs[0] ? tabs[0].id : "_sure";
    app.innerHTML = `
      <div style="display:grid;gap:.4rem;margin-bottom:1.2rem">
        <div class="eyebrow">Sınavda kesinlikle bilinmesi gerekenler</div>
        <h1 style="font-size:1.9rem">Hap bilgiler</h1>
        <p class="hint" style="max-width:70ch">Geçmiş sınavlarda en çok sorulan noktalar, süreler ve tuzaklar. Kırmızı rakamlar ezberlenecek değerlerdir; madde etiketine tıklayınca kanun metni açılır.</p>
      </div>
      <div class="tabs" role="tablist">${tabs.map((t) => `<button role="tab" data-tab="${t.id}" aria-selected="${t.id === hapTab}">${esc(t.ad)}</button>`).join("")}</div>
      <div id="hapBody"></div>`;
    $$(".tabs [data-tab]").forEach((b) => (b.onclick = () => { hapTab = b.dataset.tab; TTS.stop(); renderHap(); }));
    const body = $("#hapBody");
    if (hapTab === "_sure") {
      const kitaplar = { marka: "Marka", ci: "Coğrafi işaret", tasarim: "Tasarım", patent: "Patent / FM", ortak: "Ortak" };
      body.innerHTML = `
        <div class="search-row">
          <input type="search" id="sureQ" placeholder="Süre ara (ör. itiraz, yenileme)" aria-label="Süre ara">
          <select id="sureK" aria-label="Kitap"><option value="">Tüm konular</option>${Object.entries(kitaplar).map(([k, v]) => `<option value="${k}">${v}</option>`).join("")}</select>
          ${speakBtn('id="sureRead"', "Listeyi dinle")}
        </div>
        <div class="table-wrap"><table class="sure"><thead><tr><th>Konu</th><th>Süre</th><th>Madde</th><th>Alan</th></tr></thead><tbody id="sureRows"></tbody></table></div>`;
      const draw = () => {
        const q = trLower($("#sureQ").value), k = $("#sureK").value;
        const rows = HAP.sureler.filter((r) => (!k || r.kitap === k) && (!q || trLower(r.konu + " " + r.sure).includes(q)));
        $("#sureRows").innerHTML = rows.map((r) => `<tr><td>${escB(r.konu)}</td><td class="s">${escB(r.sure)}</td><td class="r">${linkRefs(esc(r.ref || ""))}</td><td><span class="badge ${r.kitap === "patent" ? "patent" : r.kitap === "ortak" ? "ortak" : "marka"}">${esc(kitaplar[r.kitap] || r.kitap)}</span></td></tr>`).join("") || `<tr><td colspan="4">Sonuç yok.</td></tr>`;
        return rows;
      };
      $("#sureQ").oninput = draw; $("#sureK").onchange = draw; draw();
      $("#sureRead").onclick = () => TTS.play(draw().map((r) => ({ text: `${r.konu}: ${r.sure}.`, label: stripTags(r.konu) })));
      return;
    }
    if (hapTab === "_sayi") {
      body.innerHTML = `<div class="numbers">${HAP.sayilar.map((s) => `<div>${linkRefs(escB(s))}</div>`).join("")}</div>
        <div class="actions" style="margin-top:1rem">${speakBtn('id="sayiRead"', "Hepsini dinle")}</div>`;
      $("#sayiRead").onclick = () => TTS.play(HAP.sayilar.map((s, i) => ({ text: s, label: `Bilgi ${i + 1}`, el: $$(".numbers div")[i] })));
      return;
    }
    const b = HAP.bolumler.find((x) => x.id === hapTab);
    body.innerHTML = `
      <div class="actions" style="margin-bottom:1rem">${speakBtn('id="secRead"', "Bu bölümü baştan dinle")}<span class="hint">${b.kartlar.length} kart</span></div>
      <div class="cards">${b.kartlar.map((k, i) => `
        <article class="hap" id="hap-${i}">
          <h3><span>${escB(k.baslik)}</span></h3>
          <ul>${k.maddeler.map((m) => `<li>${linkRefs(escB(m))}</li>`).join("")}</ul>
          ${k.tuzak ? `<div class="trap"><strong>Tuzak</strong>${escB(k.tuzak)}</div>` : ""}
          <div class="foot">${k.ref ? linkRefs(esc(k.ref)) : ""}<span style="flex:1"></span>${speakBtn(`data-hap="${i}"`)}</div>
        </article>`).join("")}</div>`;
    const cardText = (k) => `${k.baslik}. ${k.maddeler.join(". ")}. ${k.tuzak ? "Dikkat, tuzak: " + k.tuzak : ""}`;
    $$("[data-hap]", body).forEach((btn) => (btn.onclick = () => { const i = +btn.dataset.hap; TTS.say(cardText(b.kartlar[i]), stripTags(b.kartlar[i].baslik), $("#hap-" + i)); }));
    $("#secRead").onclick = () => TTS.play(b.kartlar.map((k, i) => ({ text: cardText(k), label: stripTags(k.baslik), el: $("#hap-" + i) })));
  }

  // ---------- Marka İnceleme Kılavuzu ----------
  let klvTab = null;
  function renderKilavuz() {
    if (!KLV.bolumler.length) { app.innerHTML = `<div class="empty">Kılavuz içeriği yüklenemedi.</div>`; return; }
    if (!klvTab || !KLV.bolumler.find((b) => b.id === klvTab)) klvTab = KLV.bolumler[0].id;
    const b = KLV.bolumler.find((x) => x.id === klvTab);
    const klvQs = SORULAR.filter((q) => q.id && q.id.startsWith("KLV"));
    app.innerHTML = `
      <div style="display:grid;gap:.6rem;margin-bottom:1.2rem">
        <div class="eyebrow">TÜRKPATENT · Marka İnceleme Kılavuzu</div>
        <h1 style="font-size:1.9rem">Kurum bir markayı nasıl inceler?</h1>
        <div style="display:grid;gap:.5rem;max-width:72ch">${KLV.giris.map((p) => `<p class="hint" style="font-size:.95rem">${linkRefs(escB(p))}</p>`).join("")}</div>
        <div class="actions">
          ${klvQs.length ? `<button class="btn seal" id="klvQuiz">Kılavuz sorularını çöz (${klvQs.length})</button>` : ""}
          ${speakBtn('id="klvRead"', "Bu bölümü baştan dinle")}
          <a class="btn small" href="https://www.turkpatent.gov.tr/" target="_blank" rel="noopener">Resmî kılavuz: turkpatent.gov.tr</a>
        </div>
      </div>
      <div class="tabs" role="tablist">${KLV.bolumler.map((x) => `<button role="tab" data-kt="${esc(x.id)}" aria-selected="${x.id === klvTab}">${esc(x.ad)}</button>`).join("")}</div>
      <div class="cards">${b.konular.map((k, i) => `
        <article class="hap" id="klv-${i}">
          <h3><span>${escB(k.baslik)}</span></h3>
          <p style="font-size:.93rem">${linkRefs(escB(k.aciklama))}</p>
          ${k.kabul && k.kabul.length ? `<div><div class="eyebrow" style="color:var(--ok)">Tescil edilebilir</div><ul>${k.kabul.map((x) => `<li>${escB(x)}</li>`).join("")}</ul></div>` : ""}
          ${k.ret && k.ret.length ? `<div><div class="eyebrow" style="color:var(--bad)">Reddedilir</div><ul>${k.ret.map((x) => `<li>${escB(x)}</li>`).join("")}</ul></div>` : ""}
          ${k.ipucu ? `<div class="trap"><strong>Sınav ipucu</strong>${escB(k.ipucu)}</div>` : ""}
          <div class="foot">${k.ref ? linkRefs(esc(k.ref)) : ""}<span style="flex:1"></span>${speakBtn(`data-klv="${i}"`)}</div>
        </article>`).join("")}</div>`;
    $$("[data-kt]").forEach((x) => (x.onclick = () => { klvTab = x.dataset.kt; TTS.stop(); renderKilavuz(); }));
    const txt = (k) => `${k.baslik}. ${k.aciklama}. ${k.kabul && k.kabul.length ? "Tescil edilebilir örnekler: " + k.kabul.join("; ") + ". " : ""}${k.ret && k.ret.length ? "Reddedilen örnekler: " + k.ret.join("; ") + ". " : ""}${k.ipucu ? "Sınav ipucu: " + k.ipucu : ""}`;
    $$("[data-klv]").forEach((x) => (x.onclick = () => { const k = b.konular[+x.dataset.klv]; TTS.say(txt(k), stripTags(k.baslik), $("#klv-" + x.dataset.klv)); }));
    $("#klvRead").onclick = () => TTS.play(b.konular.map((k, i) => ({ text: txt(k), label: stripTags(k.baslik), el: $("#klv-" + i) })));
    const kq = $("#klvQuiz"); if (kq) kq.onclick = () => startQuiz(shuffle(klvQs), "marka", "Marka İnceleme Kılavuzu");
  }

  // ---------- Tescil sınıfları ----------
  let sinifTab = "nice";
  function renderSiniflar() {
    app.innerHTML = `
      <div style="display:grid;gap:.4rem;margin-bottom:1.2rem">
        <div class="eyebrow">Marka ve tasarım tescil sınıfları</div>
        <h1 style="font-size:1.9rem">Tescil sınıfları</h1>
        <p class="hint" style="max-width:70ch">Nice Sınıflandırması marka başvurularında mal ve hizmetleri 45 sınıfa ayırır: 1–34 mallar, 35–45 hizmetler. Lokarno Sınıflandırması tasarımlar için kullanılır.</p>
      </div>
      <div class="tabs" role="tablist">
        <button role="tab" data-st="nice" aria-selected="${sinifTab === "nice"}">Nice (marka) · 45 sınıf</button>
        <button role="tab" data-st="lokarno" aria-selected="${sinifTab === "lokarno"}">Lokarno (tasarım) · ${SINIF.lokarno.length} sınıf</button>
        <button role="tab" data-st="bilgi" aria-selected="${sinifTab === "bilgi"}">Anlaşmalar hakkında</button>
      </div>
      <div id="sBody"></div>`;
    $$("[data-st]").forEach((b) => (b.onclick = () => { sinifTab = b.dataset.st; TTS.stop(); renderSiniflar(); }));
    const body = $("#sBody");
    if (sinifTab === "bilgi") {
      const groups = [["nice", "Nice Anlaşması"], ["lokarno", "Lokarno Anlaşması"], ["viyana", "Viyana Anlaşması"]];
      body.innerHTML = `<div class="cards">${groups.filter(([k]) => SINIF.bilgi[k]).map(([k, ad]) => `
        <article class="hap"><h3>${ad}</h3><ul>${SINIF.bilgi[k].map((s) => `<li>${escB(s)}</li>`).join("")}</ul>
        <div class="foot"><span style="flex:1"></span>${speakBtn(`data-bilgi="${k}"`)}</div></article>`).join("")}</div>`;
      $$("[data-bilgi]").forEach((b) => (b.onclick = () => TTS.say(SINIF.bilgi[b.dataset.bilgi].join(". "), "Bilgi", b.closest(".hap"))));
      return;
    }
    const isNice = sinifTab === "nice";
    const list = isNice ? SINIF.nice : SINIF.lokarno;
    body.innerHTML = `
      <div class="search-row">
        <input type="search" id="clsQ" placeholder="${isNice ? "Ürün veya hizmet ara (ör. kozmetik, sigorta, yazılım)" : "Tasarım ürünü ara (ör. mobilya)"}" aria-label="Sınıflarda ara">
        ${isNice ? `<select id="clsT" aria-label="Tür"><option value="">Mal ve hizmet</option><option value="mal">Mallar (1–34)</option><option value="hizmet">Hizmetler (35–45)</option></select>` : ""}
      </div>
      ${isNice ? `<div class="class-grid-mini" aria-label="Sınıfa git">${list.map((c) => `<button class="${c.tur === "hizmet" ? "h" : "m"}" data-jump="${c.no}">${c.no}</button>`).join("")}</div>` : ""}
      <p class="search-info" id="clsInfo"></p>
      <div class="class-list" id="clsList"></div>`;
    const draw = () => {
      const q = trLower($("#clsQ").value.trim()), t = isNice ? $("#clsT").value : "";
      const rows = list.filter((c) => (!t || c.tur === t) && (!q || trLower([c.no, c.baslik, c.not, (c.ornekler || []).join(" "), (c.ipuclari || []).join(" ")].join(" ")).includes(q)));
      $("#clsInfo").textContent = q || t ? `${rows.length} sınıf listeleniyor.` : "";
      $("#clsList").innerHTML = rows.map((c) => `
        <details class="cls ${isNice ? c.tur : "lok"}" id="cls-${c.no}" ${q ? "open" : ""}>
          <summary><span class="cno">${esc(c.no)}</span><span><span class="ctype">${isNice ? (c.tur === "mal" ? "Mal" : "Hizmet") : "Lokarno"}</span><br><span class="ctitle">${esc(c.baslik)}</span></span><span>${speakBtn(`data-cls="${esc(c.no)}"`)}</span></summary>
          <div class="cbody">
            ${c.not ? `<div><h4>Açıklayıcı not</h4><p>${esc(c.not)}</p></div>` : ""}
            ${c.ornekler && c.ornekler.length ? `<div><h4>Örnek mal / hizmetler</h4><div class="tagcloud">${c.ornekler.map((o) => `<span>${esc(o)}</span>`).join("")}</div></div>` : ""}
            ${c.ipuclari && c.ipuclari.length ? `<div class="trap"><strong>Sık karıştırılan</strong>${c.ipuclari.map(esc).join("<br>")}</div>` : ""}
          </div>
        </details>`).join("") || `<div class="empty">Sonuç yok. Başka bir kelime deneyin.</div>`;
      $$("[data-cls]").forEach((b) => (b.onclick = (e) => {
        e.preventDefault(); e.stopPropagation();
        const c = list.find((x) => String(x.no) === b.dataset.cls);
        TTS.say(`${isNice ? "Nice" : "Lokarno"} sınıf ${c.no}. ${c.baslik}. ${c.not || ""} ${c.ornekler ? "Örnekler: " + c.ornekler.join(", ") : ""}`, `Sınıf ${c.no}`, b.closest(".cls"));
      }));
    };
    $("#clsQ").oninput = draw; if (isNice) $("#clsT").onchange = draw; draw();
    $$("[data-jump]").forEach((b) => (b.onclick = () => {
      if ($("#clsQ").value || $("#clsT").value) { $("#clsQ").value = ""; $("#clsT").value = ""; draw(); }
      const d = $("#cls-" + b.dataset.jump); if (d) { d.open = true; d.scrollIntoView({ behavior: "smooth", block: "start" }); }
    }));
  }

  // ---------- PWA: çevrimdışı ve ana ekrana yükleme ----------
  let installEvt = null;
  const installBtn = $("#installBtn");
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installEvt = e; installBtn.hidden = false; });
  window.addEventListener("appinstalled", () => { installBtn.hidden = true; flash("Uygulama yüklendi. Ana ekranından açabilirsin."); });
  installBtn.onclick = async () => {
    if (!installEvt) return;
    installEvt.prompt();
    try { await installEvt.userChoice; } catch (e) { /* yok say */ }
    installEvt = null; installBtn.hidden = true;
  };
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register("sw.js").catch(() => { /* bu ortamda desteklenmiyor */ });
  }

  // ---------- Başlat ----------
  const start = location.hash.slice(1);
  go(VIEWS[start] ? start : "ana");
})();
