// Sınavda Kesinlikle Bilinmesi Gerekenler — Hap Bilgiler
// SMK bilgileri 6769 sayılı Kanunun konsolide metni (data/src/6769-smk.md) ile tek tek doğrulanmıştır.
window.HAP = {
  bolumler: [
    /* ===================== MARKA ===================== */
    {
      id: "marka", ad: "Marka", ikon: "®",
      kartlar: [
        {
          baslik: "Marka olabilecek işaretler",
          maddeler: [
            "Kişi adları dâhil sözcükler, şekiller, <b>renkler</b>, harfler, sayılar, <b>sesler</b>, malların veya ambalajlarının biçimi marka olabilir.",
            "İki şart: <b>ayırt edicilik</b> + korumanın konusunun açık ve kesin anlaşılacağı şekilde <b>sicilde gösterilebilirlik</b>.",
            "Her başvuruyla sadece <b>bir</b> markanın tescili istenebilir (m.11/2)."
          ],
          ref: "SMK m.4, m.11/2",
          tuzak: "SMK “çizimle/grafikle gösterilebilme” şartı aramaz; ölçüt “sicilde gösterilebilirlik”tir."
        },
        {
          baslik: "Mutlak ret nedenleri (m.5/1) — Kurum resen",
          maddeler: [
            "(a) m.4'e uymayan, (b) ayırt edici niteliği olmayan, (c) tanımlayıcı (cins, vasıf, miktar, coğrafi kaynak, zaman…) işaretler.",
            "(ç) Aynı/aynı türdeki mallar için önceki marka ile <b>aynı veya ayırt edilemeyecek kadar benzer</b> işaretler.",
            "(d) Herkesçe kullanılan/meslek grubunu ayırt eden; (e) malın doğasından, teknik sonuçtan veya asli değerden kaynaklanan şekil.",
            "(f) Halkı yanıltan; (g) Paris <b>6ter</b> işaretleri; (ğ) halka mal olmuş/izinsiz armalar; (h) <b>dinî</b> değer/semboller.",
            "(ı) Kamu düzeni/genel ahlaka aykırı; (i) <b>tescilli coğrafi işaretten oluşan veya onu içeren</b> işaretler."
          ],
          ref: "SMK m.5/1",
          tuzak: "Benzerlik ret nedeni (ç) mutlak ret nedenidir ama sadece “aynı veya ayırt edilemeyecek kadar benzer” + “aynı tür” mal/hizmet hâlinde; karıştırılma ihtimali ise nispi (m.6/1)."
        },
        {
          baslik: "Mutlak retten kurtulma yolları",
          maddeler: [
            "Başvuru tarihinden önce kullanımla <b>ayırt edicilik kazanılmışsa</b> (b), (c), (d) bentlerine göre ret yapılamaz.",
            "(ç) bendi için önceki marka sahibinin <b>noter onaylı muvafakatnamesi</b> sunulursa ret yapılamaz.",
            "Hükümsüzlükte de (b), (c), (d) için hükümsüzlük talebinden önce kazanılan ayırt edicilik markayı kurtarır (m.25/4)."
          ],
          ref: "SMK m.5/2, m.5/3, m.25/4",
          tuzak: "Muvafakatname yalnızca (ç) bendini aşar; (e) şekil yasağı kullanımla kazanılan ayırt edicilikle aşılamaz."
        },
        {
          baslik: "Nispi ret nedenleri (m.6) — sadece itiraz üzerine",
          maddeler: [
            "6/1: Önceki marka ile <b>karıştırılma ihtimali</b> (ilişkilendirilme dâhil); 6/2: <b>ticari vekil/temsilcinin</b> izinsiz başvurusu.",
            "6/3: Tescilsiz marka/ticarette kullanılan işaret için önceden hak elde edilmişse; 6/4: Paris <b>6bis</b> tanınmış marka (aynı/benzer mal).",
            "6/5: <b>Tanınmış/itibarlı</b> önceki marka — aynı, benzer veya <b>farklı</b> mallar; haksız yarar/itibar zararı/ayırt ediciliğin zedelenmesi.",
            "6/6: Başkasının <b>ad, ticaret unvanı, fotoğraf, telif</b> veya diğer fikri mülkiyet hakkı; 6/9: <b>kötüniyetli</b> başvuru.",
            "6/7: Yenilenmeyen ortak/garanti markası <b>3 yıl</b>; 6/8: yenilenmeyen marka <b>2 yıl</b> (o sürede kullanılmış olmak şartıyla)."
          ],
          ref: "SMK m.6",
          tuzak: "Kötüniyet (6/9) Kurumca resen değil, itiraz üzerine incelenir; m.5'te yer almaz."
        },
        {
          baslik: "Başvuru, şeklî inceleme ve sınıflandırma",
          maddeler: [
            "Zorunlu unsurlar: form, marka örneği, mal/hizmet listesi, ücret; ortak/garanti markada <b>teknik şartname</b>.",
            "(a)-(ç) unsurlarında eksiklik varsa başvuru tarihi eksikliğin giderildiği <b>tarih, saat, dakika</b> itibarıyla kesinleşir.",
            "Şeklî eksiklik için <b>2 ay</b> süre; giderilmezse işlemden kaldırılır.",
            "Sınıflandırma <b>Nis Anlaşması</b>; aynı sınıfta olmak benzerliğe, farklı sınıfta olmak benzemezliğe <b>karine değildir</b>.",
            "Başvuru <b>tescile kadar</b> mal/hizmet bazında bölünebilir."
          ],
          ref: "SMK m.11, m.15",
          tuzak: "(d), (e), (f) bentlerindeki eksiklikler (şartname, rüçhan ücreti, Latin harf karşılığı) başvuru tarihini etkilemez."
        },
        {
          baslik: "Markada rüçhan hakkı",
          maddeler: [
            "Paris/DTÖ ülkesindeki ilk başvurudan itibaren <b>6 ay</b>; aynı marka ve aynı mal/hizmet için.",
            "Sergi rüçhanı: teşhir tarihinden itibaren <b>6 ay</b>; resmî açılıştan önce teşhirde süre sergiye konulma tarihinden başlar.",
            "Talep başvuruyla birlikte ücretle; rüçhan belgesi başvuru tarihinden itibaren <b>3 ay</b> içinde verilmezse talep yapılmamış sayılır.",
            "Birden fazla rüçhanda hak, geçerli olan <b>ilk</b> rüçhan tarihi itibarıyla başlar."
          ],
          ref: "SMK m.12, m.13",
          tuzak: "Markada rüçhan 6 ay; patent/faydalı modelde 12 ay. Taraf olmayan devlette yapılan başvuru da (karşılıklılıkla) rüçhan doğurabilir (m.12/2)."
        },
        {
          baslik: "Üçüncü kişi görüşleri",
          maddeler: [
            "Başvurunun yayımından sonra <b>tescile kadar</b> herkes yazılı ve gerekçeli görüş sunabilir.",
            "Konusu: m.5 mutlak ret nedenleri — <b>(ç) bendi hariç</b>.",
            "Görüş sunan, Kurum nezdindeki işlemlere <b>taraf olamaz</b>."
          ],
          ref: "SMK m.17",
          tuzak: "Görüş bildirmek itiraz değildir; süre 2 ay değil, tescile kadardır."
        },
        {
          baslik: "Yayıma itiraz",
          maddeler: [
            "Bültende yayımdan itibaren <b>2 ay</b>; m.5 veya m.6'ya dayanarak, yazılı ve gerekçeli.",
            "Gerekçe ve <b>ücret</b> itiraz süresi içinde sunulmalı/ödenmeli; aksi hâlde itiraz yapılmamış sayılır.",
            "Kurum tarafları uzlaşmaya teşvik edebilir — <b>6325 sayılı Arabuluculuk Kanunu</b> uygulanır."
          ],
          ref: "SMK m.18, m.19/4",
          tuzak: "Süre bildirimden değil, Bülten yayımından başlar ve ek süre yoktur."
        },
        {
          baslik: "Kullanım ispatı (itiraz ve davalarda def'i)",
          maddeler: [
            "6/1 itirazında itiraza dayanak marka başvuru/rüçhan tarihinde Türkiye'de en az <b>5 yıldır tescilli</b> ise uygulanır.",
            "Başvuru sahibinin <b>talebi üzerine</b> itiraz sahibi önceki <b>5 yıllık</b> sürede ciddi kullanımı veya haklı sebebi ispatlar.",
            "İspat edilemezse itiraz reddedilir; kısmi kullanımda sadece kullanılan mallar esas alınır.",
            "Hükümsüzlük (m.25/7) ve tecavüz (m.29/2) davalarında <b>def'i</b> olarak ileri sürülür; 5 yıl hesabında <b>dava tarihi</b> esas."
          ],
          ref: "SMK m.19/2, m.25/7, m.29/2",
          tuzak: "Kurum kullanım ispatını resen istemez; başvuru sahibinin talebi gerekir."
        },
        {
          baslik: "Karara itiraz ve Kurul",
          maddeler: [
            "Kurum kararından zarar gören taraf, kararın <b>bildiriminden</b> itibaren <b>2 ay</b> içinde itiraz eder.",
            "Ücret ve gerekçe aynı süre içinde; süreden sonra gerekçe <b>değiştirilemez ve yeni gerekçe eklenemez</b>.",
            "İtirazları <b>Kurul</b> (Yeniden İnceleme ve Değerlendirme Dairesi — YİDD) inceler ve <b>Kurumun nihai kararını</b> verir.",
            "Kurum kararlarına karşı davalarda görevli ve yetkili mahkeme: <b>Ankara Fikri ve Sınai Haklar Hukuk Mahkemesi</b>."
          ],
          ref: "SMK m.20, m.21, m.156/2",
          tuzak: "Yayıma itiraz süresi yayımdan, karara itiraz süresi bildirimden başlar."
        },
        {
          baslik: "Tescil ve hakkın doğumu",
          maddeler: [
            "Marka koruması <b>tescil yoluyla</b> elde edilir; haklar üçüncü kişilere karşı tescilin <b>yayım tarihi</b> itibarıyla hüküm ifade eder.",
            "Başvurunun yayımından sonraki fiiller için tazminat davası açılabilir; ama mahkeme tescil yayımından önce karar veremez.",
            "Aşamalar tamamlanmadan yapılan tescil geçersizdir; ancak tescilden <b>2 yıl</b> geçince tescil durumu etkilenmez.",
            "Sicil <b>alenidir</b>."
          ],
          ref: "SMK m.7/1, m.7/4, m.22",
          tuzak: "Koruma süresi tescil tarihinden değil başvuru tarihinden başlar; ama haklar tescilin yayımıyla ileri sürülür."
        },
        {
          baslik: "Hakkın kapsamı ve sınırları",
          maddeler: [
            "Yasaklanabilir kullanımlar: mala koyma, piyasaya sürme, <b>ithal/ihraç</b>, iş evrakı/reklam, <b>alan adı/anahtar sözcük</b>, <b>ticaret unvanı</b> olarak kullanma, hukuka aykırı karşılaştırmalı reklam.",
            "Dürüst kullanım istisnaları: kendi <b>ad/adres</b>, tanımlayıcı açıklama, <b>yedek parça/aksesuar</b> için amaç belirtme.",
            "Sözlük/ansiklopedide jenerik izlenim: elektronikte derhâl, basılıda <b>ilk baskıda</b> düzeltme (m.8).",
            "Hakkın tüketilmesi: izinle piyasaya sunulan üründe hak tükenir; ama değiştirme/kötüleştirme önlenebilir (m.152)."
          ],
          ref: "SMK m.7, m.8, m.152",
          tuzak: "İhracat amaçlı kullanım hem tecavüz fiili olabilir hem de kullanma zorunluluğu bakımından “kullanım” sayılır."
        },
        {
          baslik: "Koruma süresi ve yenileme",
          maddeler: [
            "Koruma süresi <b>başvuru tarihinden</b> itibaren <b>10 yıl</b>; <b>onar yıllık</b> dönemlerle sınırsız yenilenir.",
            "Yenileme: süre bitiminden önceki <b>6 ay</b> içinde; kaçırılırsa bitişten itibaren <b>6 ay</b> içinde <b>ek ücretle</b>.",
            "Mal/hizmetlerin bir kısmı için yenilenebilir; ortak markada gruptaki <b>bir</b> işletmenin talebi yeterli.",
            "Yenileme, önceki sürenin bittiği tarihi <b>izleyen günden</b> itibaren hüküm doğurur."
          ],
          ref: "SMK m.23",
          tuzak: "Yenileme talebi “marka sahibi” tarafından yapılır; tasarımdaki 5+6+6 düzeni aynıdır ama tasarım en fazla 25 yıl."
        },
        {
          baslik: "Kullanma zorunluluğu",
          maddeler: [
            "<b>Tescil tarihinden</b> itibaren <b>5 yıl</b> içinde haklı sebep olmadan ciddi kullanılmayan veya kullanımına <b>5 yıl kesintisiz</b> ara verilen marka iptal edilir.",
            "Ayırt edici karakteri değiştirmeden <b>farklı unsurlarla</b> kullanım = kullanım.",
            "Sadece <b>ihracat amacıyla</b> mal/ambalaj üzerinde kullanım = kullanım.",
            "Marka sahibinin <b>izniyle</b> (lisans alan) kullanım = sahibin kullanımı."
          ],
          ref: "SMK m.9",
          tuzak: "5 yıl başvuru tarihinden değil TESCİL tarihinden başlar; kullanım Türkiye'de olmalıdır."
        },
        {
          baslik: "Hükümsüzlük (mahkeme)",
          maddeler: [
            "m.5 veya m.6 hâllerinden biri varsa <b>mahkeme</b> karar verir.",
            "Davacı: <b>menfaati olanlar, Cumhuriyet savcıları, ilgili kamu kurumları</b>; davalı: sicildeki marka sahibi; <b>Kurum taraf değildir</b>.",
            "<b>Sessiz kalma</b>: sonraki markanın kullanımını bilip <b>5 yıl</b> ses çıkarmayan, kötüniyet yoksa hükümsüzlük isteyemez.",
            "Etki: <b>başvuru tarihinden</b> itibaren, koruma hiç doğmamış sayılır; kesinleşmiş-uygulanmış kararlar ve sözleşmeler etkilenmez.",
            "Kısmi hükümsüzlük mümkün; marka örneğini değiştiren karar verilemez."
          ],
          ref: "SMK m.25, m.27",
          tuzak: "Hükümsüzlük mahkemeden, iptal Kurumdan istenir."
        },
        {
          baslik: "İptal (Kurum)",
          maddeler: [
            "Hâller: (a) kullanmama (m.9), (b) <b>yaygın ad</b> hâline gelme, (c) halkı yanıltma, (ç) teknik şartnameye (m.32) aykırı kullanım.",
            "İlgili kişiler Kurumdan ister; yetki yayımdan <b>7 yıl</b> sonra (<b>10.01.2024</b>) mahkemelerden Kuruma geçti (m.192, geç. m.4).",
            "5 yıl dolduktan sonra talebe kadar ciddi kullanım varsa talep reddedilir; ancak talepten önceki <b>3 ay</b>daki “talep düşünülerek” yapılan kullanım sayılmaz.",
            "Marka sahibi tebliğden itibaren <b>1 ay</b> içinde cevap verir; süre içinde istenirse <b>1 aya kadar</b> ek süre.",
            "Etki: iptal talebinin <b>Kuruma sunulduğu tarihten</b>; talep üzerine daha önceki bir tarihten."
          ],
          ref: "SMK m.26, m.27/2, m.192",
          tuzak: "Hükümsüzlük geçmişe (başvuru tarihine) etkili; iptal kural olarak talep tarihinden itibaren etkilidir."
        },
        {
          baslik: "Lisans ve ticari vekil",
          maddeler: [
            "Aksi kararlaştırılmadıkça lisans <b>inhisari değildir</b>; lisans alan devredemez, <b>alt lisans veremez</b>.",
            "İnhisari lisansta lisans veren başkasına lisans veremez; hakkını açıkça saklı tutmadıkça <b>kendisi de kullanamaz</b>.",
            "Ticari vekil/temsilci adına izinsiz tescil: marka sahibi kullanımın yasaklanmasını ve <b>tescilin kendisine devrini</b> isteyebilir (m.10)."
          ],
          ref: "SMK m.24, m.10",
          tuzak: "Lisans alan kalite şartlarına uymazsa marka sahibi tescilden doğan haklarını ona karşı da ileri sürebilir."
        },
        {
          baslik: "Garanti markası ve ortak marka",
          maddeler: [
            "<b>Garanti</b>: sahibinin kontrolünde birçok işletmenin ortak özellik, üretim usulü, coğrafi menşe ve kalitesini garanti eder; <b>sahibi kendisi kullanamaz</b>.",
            "<b>Ortak</b>: işletmeler grubunun mallarını diğerlerinden ayırır; tescil ve vazgeçme için gruptaki işletmeler <b>birlikte</b> hareket eder.",
            "Başvuruyla <b>teknik şartname</b> zorunlu; düzeltme için bildirimden itibaren <b>6 ay</b>.",
            "Ortak markayı kullanmaya yetkili işletme <b>tek başına dava</b> açabilir; devir/ortak marka lisansı sicile kayıtla geçerli (m.148/7)."
          ],
          ref: "SMK m.31, m.32, m.148/7",
          tuzak: "Garanti markası sahibinin veya ona iktisaden bağlı işletmenin mallarında kullanımı yasaktır."
        },
        {
          baslik: "Marka tecavüzü ve cezalar",
          maddeler: [
            "İktibas/iltibas yoluyla üretme, satma, ithal/ihraç, bulundurma: <b>1-3 yıl hapis</b> + <b>20.000 güne</b> kadar adli para.",
            "Marka koruma işaretini izinsiz kaldırma: <b>1-3 yıl</b> + <b>5.000 gün</b>; yetkisiz devir/lisans/rehin: <b>2-4 yıl</b> + <b>5.000 gün</b>.",
            "Ceza için markanın <b>Türkiye'de tescilli</b> olması şart; soruşturma/kovuşturma <b>şikâyete bağlı</b>.",
            "Satıcı malı nereden aldığını bildirip üreticinin ortaya çıkmasını sağlarsa <b>cezaya hükmolunmaz</b> (etkin pişmanlık)."
          ],
          ref: "SMK m.29, m.30",
          tuzak: "SMK'da hapis cezası yalnızca MARKA için vardır; patent, tasarım ve coğrafi işaret için cezai hüküm yoktur."
        },
        {
          baslik: "Hakkın sona ermesi ve vazgeçme",
          maddeler: [
            "Sona erme: süre dolup <b>yenilenmeme</b> veya <b>vazgeçme</b>; sebebin gerçekleştiği andan itibaren hüküm.",
            "Vazgeçme yazılı bildirilir, <b>sicile kayıt tarihi</b> itibarıyla hüküm doğurur; tamamı veya bir kısmı için.",
            "Sicildeki hak ve lisans sahiplerinin <b>izni olmadan</b> vazgeçilemez.",
            "Başvuru tescilden önce <b>geri çekilebilir</b>."
          ],
          ref: "SMK m.28",
          tuzak: "Vazgeçme Bülten yayımı tarihinde değil, sicile kayıt tarihinde hüküm doğurur."
        }
      ]
    },

    /* ===================== COĞRAFİ İŞARET & GÜA ===================== */
    {
      id: "ci", ad: "Coğrafi İşaret & GÜA", ikon: "📍",
      kartlar: [
        {
          baslik: "Menşe adı vs. mahreç işareti",
          maddeler: [
            "Coğrafi işaret: belirgin nitelik, ün veya özellikleriyle kökeni olan yöre/bölge/ülke ile <b>özdeşleşmiş ürünü</b> gösteren işaret.",
            "<b>Menşe adı</b>: tüm/esas özellikleri doğal ve beşerî unsurlardan; üretim, işleme ve diğer işlemlerin <b>tümü</b> bölgede.",
            "<b>Mahreç işareti</b>: üretim, işleme ve diğer işlemlerden <b>en az biri</b> bölgede.",
            "Coğrafi yer adı içermeyen, geleneksel olarak kullanılan adlar da menşe adı/mahreç işareti olabilir."
          ],
          ref: "SMK m.34/1-2",
          tuzak: "“Tümü bölgede” = menşe adı; “en az biri bölgede” = mahreç işareti. Menşe adında istisnaen ülke de olabilir."
        },
        {
          baslik: "Geleneksel ürün adı (GÜA)",
          maddeler: [
            "Menşe adı/mahreç kapsamına girmeyen, piyasada en az <b>30 yıl</b> geleneksel kullanımı kanıtlanan ad.",
            "Şartlardan <b>en az biri</b>: geleneksel üretim/işleme yöntemi veya bileşim; ya da geleneksel hammadde/malzeme.",
            "Amblemsiz kullanımı SMK hükümlerine <b>tabi değildir</b>; amblem kullanımı zorunlu değil.",
            "GÜA koruması marka ve coğrafi işaret gibi kazanılmış haklara halel getirmez."
          ],
          ref: "SMK m.34/3, m.45/5, m.46/4",
          tuzak: "Amblem kullanımı COĞRAFİ İŞARET için zorunlu, GÜA için zorunlu değildir."
        },
        {
          baslik: "Koruma kapsamındaki ürünler ve tescil edilmeyecek adlar",
          maddeler: [
            "Ürünler: <b>gıda, tarım, maden, el sanatları ve sanayi</b> ürünleri.",
            "Tescil edilmez: ürünün <b>öz adı</b> olmuş adlar, halkı yanıltan bitki çeşidi/hayvan ırkı adları, kamu düzenine aykırı adlar.",
            "Kendi ülkesinde korunmayan, koruması sona eren veya kullanılmayan yabancı adlar tescil edilmez.",
            "Tescilli/başvurulu coğrafi işaretle eş sesli ve yanıltıcı adlar tescil edilmez."
          ],
          ref: "SMK m.33, m.35",
          tuzak: "Tescil edilen coğrafi işaretin sonradan öz ada (jenerik) dönüştüğü kabul edilmez (m.44/4)."
        },
        {
          baslik: "Başvuru hakkı",
          maddeler: [
            "<b>Üretici grupları</b> (kanuni oluşumuna bakılmaksızın aynı ürünün üreticileri birliği).",
            "Ürünle/coğrafi alanla ilgili <b>kamu kurum ve kuruluşları</b>, kamu kurumu niteliğindeki meslek kuruluşları.",
            "Kamu yararına çalışan veya üyelerinin ekonomik çıkarını koruyan <b>dernek, vakıf, kooperatif</b>.",
            "Ürünün <b>tek üreticisi</b> varsa, bunu ispat eden üretici."
          ],
          ref: "SMK m.36",
          tuzak: "Herhangi bir tek üretici başvuramaz; ancak ürünün TEK üreticisi olduğunu ispatlayan başvurabilir."
        },
        {
          baslik: "İnceleme ve itiraz",
          maddeler: [
            "Başvuruda kimlik bilgisi yoksa başvuru <b>yapılmamış sayılır</b>; bu karar nihaidir, itiraz edilemez.",
            "Diğer eksiklikler için talep hâlinde <b>iki defayı geçmemek</b> üzere ek süre verilir.",
            "Ret kararına başvuru sahibi bildirimden itibaren <b>2 ay</b> içinde itiraz eder.",
            "Üçüncü kişiler/önceki hak sahipleri Bülten yayımından itibaren <b>3 ay</b> içinde itiraz eder; kamu kurumlarından <b>ücret alınmaz</b>.",
            "İtirazları <b>Kurul</b> inceler; itiraz sonucu değişen başvurunun son hâli yayımlanır, bu yayıma itiraz edilemez."
          ],
          ref: "SMK m.38, m.40",
          tuzak: "Coğrafi işarette yayıma itiraz süresi 3 ay; markada 2 ay."
        },
        {
          baslik: "Tescil ve hakkın kapsamı",
          maddeler: [
            "Yayımdan itibaren <b>3 ay</b> itirazsız geçen başvuru, bildirimden itibaren <b>2 ay</b> içinde tescil ücreti ödenirse tescil edilir.",
            "Haklar tescilin Bültende yayımı tarihinden itibaren hüküm ifade eder.",
            "Tescil, tescil ettirene <b>inhisari hak sağlamaz</b>; şartlara uyan tüm üreticiler kullanır.",
            "“Tarzında, tipinde, usulü” ifadeleri veya <b>tercüme</b> ile kullanım da önlenebilir."
          ],
          ref: "SMK m.41, m.44",
          tuzak: "SMK'da coğrafi işaret/GÜA için yenileme veya belirli bir koruma süresi öngörülmemiştir."
        },
        {
          baslik: "Kullanım ve amblem",
          maddeler: [
            "Sicildeki şartlara uygun üretim/pazarlama yapanlar kullanır; tescil ettirene <b>bildirim</b> yaparlar.",
            "Coğrafi işarette ad, <b>amblem</b> ile birlikte ürün/ambalaj üzerinde kullanılır; amblem <b>zorunludur</b>.",
            "Ürün üzerinde kullanılamıyorsa amblem işletmede kolayca görülecek şekilde bulundurulur.",
            "İyiniyetli, yanıltıcı olmayan <b>kişi adı/unvan</b> kullanımı ihlal sayılmaz (m.47)."
          ],
          ref: "SMK m.46, m.47",
          tuzak: "Amblem zorunluluğu Kanunun yayımından 1 yıl sonra yürürlüğe girmiştir (m.192/1-b)."
        },
        {
          baslik: "Denetim",
          maddeler: [
            "Denetimi başvuruda belirtilen ve Kurumca yeterliliği onaylanan <b>denetim mercii</b> yapar; değişiklik Kurum onayıyla.",
            "Denetim raporları tescilin yayımından itibaren <b>yılda bir</b> Kuruma sunulur; şikâyette erken istenebilir.",
            "Raporda eksiklik varsa tescil ettirene bildirilir, <b>6 ay</b> içinde giderilmesi istenir.",
            "Tescil ettiren denetim masraflarını <b>denetlenenlerden</b> talep edebilir."
          ],
          ref: "SMK m.49",
          tuzak: "Denetim yapılmaması m.50'ye göre hükümsüzlük sebebidir."
        },
        {
          baslik: "Değişiklik ve tescil ettirende değişiklik",
          maddeler: [
            "Tescile konu özelliklerde değişiklik talebini <b>menfaati bulunanlar</b> yapar; yayımdan itibaren <b>3 ay</b> itiraz süresi.",
            "Kesinleşen değişiklikler yayım tarihinden itibaren en geç <b>1 yıl</b> içinde uygulanır.",
            "Tescil ettiren şartları kaybederse yayımdan itibaren <b>3 ay</b> içinde ilgililer değişiklik talep edebilir; talep yoksa hak <b>sona erer</b>."
          ],
          ref: "SMK m.42, m.43",
          tuzak: "Değişikliğe itiraz süresi de 3 aydır (2 ay değil)."
        },
        {
          baslik: "Markalarla ilişki",
          maddeler: [
            "Coğrafi işaretin tescilinden <b>sonra</b> yapılan çatışan marka başvurusu reddedilir; tescilliyse dava ile hükümsüz kılınabilir.",
            "Coğrafi işaretten <b>önce iyiniyetle</b> tescil edilmiş/kullanım hakkı kazanılmış marka korunur.",
            "Tanınmış bir markayla karışacak adların coğrafi işaret/GÜA tescili, önceki hak sahibinin <b>itirazı üzerine</b> engellenir.",
            "Tescilli coğrafi işaretten oluşan/onu içeren işaretler markada <b>mutlak ret</b> nedenidir (m.5/1-i)."
          ],
          ref: "SMK m.48, m.5/1-i",
          tuzak: "Önceki iyiniyetli marka coğrafi işaretle ortadan kalkmaz."
        },
        {
          baslik: "Hükümsüzlük",
          maddeler: [
            "<b>Menfaati olanlar</b> mahkemeden ister; dava sicildeki tescil ettirene karşı açılır, <b>Kurum taraf değildir</b>.",
            "Sebepler: m.33-35, 37, 39 şartlarına aykırılık; başvuru hakkı olmayanca tescil; denetimin yapılmaması.",
            "Etki: koruma <b>hiç doğmamış</b> sayılır; kesinleşmiş ve uygulanmış kararlar/sözleşmeler etkilenmez."
          ],
          ref: "SMK m.50, m.51",
          tuzak: "Coğrafi işarette iptal kurumu yoktur; sona erme yolları hükümsüzlük, vazgeçme ve m.43 değişikliğidir."
        },
        {
          baslik: "Vazgeçme ve tecavüz davası",
          maddeler: [
            "Tescil ettiren hak ve denetim sorumluluğundan vazgeçebilir; yayımı izleyen <b>3 ay</b> içinde talep yoksa tescil <b>terkin</b> edilir.",
            "Kullanma hakkı sahipleri tecavüzü tescil ettirene <b>noter</b> kanalıyla bildirir; <b>3 ay</b> içinde dava açılmazsa kendileri açar.",
            "Ciddi zarar tehlikesinde süreye bağlı olmaksızın <b>ihtiyati tedbir</b> istenebilir."
          ],
          ref: "SMK m.52, m.53/2, m.54/2",
          tuzak: "Tescilli olduğuna dair kaydın ürün/faturada olmaması fiili tecavüz olmaktan çıkarmaz (m.53/3)."
        },
        {
          baslik: "Coğrafi işaret/GÜA'ya özgü sınırlamalar",
          maddeler: [
            "Lisans, devir, intikal, haciz ve benzeri hukuki işlemlere <b>konu olamaz</b>; teminat gösterilemez.",
            "<b>Manevi tazminat</b> talep edilemez (m.149/4).",
            "Yoksun kalınan kazanç hükümleri (m.151) <b>uygulanmaz</b>.",
            "GÜA'ya m.146, 147, 149, 150, 152, 153, 154, 156, 159 ve 161 uygulanır (m.164)."
          ],
          ref: "SMK m.148/1, m.149/4, m.151/6, m.164",
          tuzak: "Coğrafi işaret bir “sınai mülkiyet hakkı”dır (m.2) ama hukuki işlemlere konu olamaz."
        }
      ]
    },

    /* ===================== TASARIM ===================== */
    {
      id: "tasarim", ad: "Tasarım", ikon: "✎",
      kartlar: [
        {
          baslik: "Tasarım ve ürün tanımı",
          maddeler: [
            "Tasarım: ürünün tümü/parçası veya süslemesinin çizgi, şekil, biçim, renk, malzeme, yüzey dokusu gibi özelliklerinden kaynaklanan <b>görünümü</b>.",
            "Ürün: <b>bilgisayar programları hariç</b>; ambalaj, birleşik ürün parçaları, <b>grafik semboller</b>, <b>tipografik karakterler</b> dâhil.",
            "Tescilli tasarım + <b>ilk kez Türkiye'de</b> kamuya sunulmuşsa <b>tescilsiz tasarım</b> olarak korunur."
          ],
          ref: "SMK m.55",
          tuzak: "Tescilsiz tasarım koruması için ilk kamuya sunumun Türkiye'de olması gerekir."
        },
        {
          baslik: "Yenilik ve ayırt edicilik",
          maddeler: [
            "<b>Yenilik</b>: aynısı başvuru/rüçhan tarihinden önce <b>dünyanın herhangi bir yerinde</b> kamuya sunulmamış olmalı.",
            "Sadece <b>küçük ayrıntılarda</b> farklılık gösteren tasarımlar aynı kabul edilir.",
            "<b>Ayırt edicilik</b>: <b>bilgilenmiş kullanıcı</b> üzerindeki genel izlenimin farklı olması; tasarımcının <b>seçenek özgürlüğü</b> dikkate alınır.",
            "Birleşik ürün parçası: normal kullanımda <b>görünür</b> olmalı; normal kullanım <b>bakım, servis, onarım hariç</b> son kullanıcı kullanımıdır."
          ],
          ref: "SMK m.56",
          tuzak: "Patentteki “uzman kişi” ölçütü tasarımda “bilgilenmiş kullanıcı”dır."
        },
        {
          baslik: "Kamuya sunma ve hoşgörü süresi",
          maddeler: [
            "Kamuya sunma: sergileme, satış, kullanma, tarif, yayım, tanıtım vb.",
            "<b>Gizlilik şartıyla</b> üçüncü kişiye açıklama kamuya sunma <b>sayılmaz</b>.",
            "Başvuru/rüçhan tarihinden önceki <b>12 ay</b> içinde tasarımcı/halefi (veya izinli/kötüye kullanan 3. kişi) tarafından sunum yenilik ve ayırt ediciliği etkilemez."
          ],
          ref: "SMK m.57",
          tuzak: "Tasarımda da patentteki gibi hoşgörü süresi 12 aydır (6 ay değil)."
        },
        {
          baslik: "Koruma dışı hâller",
          maddeler: [
            "<b>Kamu düzeni/genel ahlaka</b> aykırı tasarımlar.",
            "Ürünün <b>teknik fonksiyonunun zorunlu kıldığı</b> görünüm özellikleri.",
            "Başka ürüne <b>mekanik montaj</b> için belirli biçim ve boyutta üretilmesi zorunlu özellikler (must-fit).",
            "Paris 6ter alametleri ile halka mal olmuş işaretlerin uygunsuz kullanımı.",
            "<b>Modüler sistem</b> tasarımları ise korunur; FSEK koruması da ayrıca devam eder."
          ],
          ref: "SMK m.58",
          tuzak: "Modüler sistem bağlantı tasarımları must-fit istisnasına rağmen korunur (m.58/5)."
        },
        {
          baslik: "Hakkın kapsamı ve sınırları",
          maddeler: [
            "Tescilsiz tasarım sadece <b>kopyalamaya</b> karşı korur; bağımsız yapılan tasarım kopya sayılmaz.",
            "Kapsam dışı: özel/ticari olmayan fiiller, <b>deneme</b>, kaynak gösterilerek eğitim/referans, yabancı gemi/uçak onarımı.",
            "Birleşik ürün onarım parçası: piyasaya ilk sürülmeden <b>3 yıl sonra</b> kullanımı ihlal değildir.",
            "Bakanlıkça yayımlanan <b>eşdeğer parçalar</b>ın 3 yıl içinde kullanımı da ihlal değildir.",
            "Yayım ertelemeli tasarımlar görsel yayımlanana kadar tescilsiz tasarım gibi (kopyalamaya karşı) korunur."
          ],
          ref: "SMK m.59",
          tuzak: "Tescilli tasarım kopyalama şartı aramaz; bu şart tescilsiz tasarım içindir."
        },
        {
          baslik: "Önceki kullanımdan doğan hak",
          maddeler: [
            "Başvurudan önce bağımsız olarak yapılan tasarımı <b>iyiniyetle</b> ticari amaçla ülke içinde kullanan/ciddi hazırlık yapan kişi.",
            "İşletmenin <b>makul ihtiyaçları</b> ölçüsünde kullanabilir; sicile kaydedilir.",
            "Lisansla <b>genişletilemez</b>, ancak <b>işletmeyle birlikte</b> devredilebilir."
          ],
          ref: "SMK m.60",
          tuzak: "Patentte de aynı ilke vardır (m.87)."
        },
        {
          baslik: "Başvuru ve çoklu başvuru",
          maddeler: [
            "Zorunlu: form, yayıma elverişli <b>görsel anlatım</b>, ürün adı, tasarımcı adları, hakkın nasıl elde edildiği.",
            "Başvuru tarihi (a) form ve (b) görsel anlatım eksiksizse Kurumca alındığı tarihte kesinleşir.",
            "Sınıflandırma: <b>Lokarno Anlaşması</b>; ürün adı, sınıf ve tarifname <b>koruma kapsamını etkilemez</b>.",
            "<b>Çoklu başvuru</b>: süslemeler hariç tüm ürünler <b>aynı sınıfta</b> olmalı; her tasarım ayrı değerlendirilir.",
            "Ücret ödenmezse başvuru <b>yapılmamış sayılır</b>."
          ],
          ref: "SMK m.61, m.64",
          tuzak: "Görsel anlatımdaki yazılı ibareler kavramlar üzerinde inhisari hak sağlamaz (m.61/6)."
        },
        {
          baslik: "Tasarımda rüçhan",
          maddeler: [
            "Paris/DTÖ ülkesinde tasarım veya <b>faydalı model</b> başvurusundan itibaren <b>6 ay</b>.",
            "Sergi rüçhanı: teşhir tarihinden itibaren <b>6 ay</b>.",
            "Talep başvuruyla; belgeler başvuru tarihinden itibaren <b>3 ay</b> içinde.",
            "Sergi rüçhanı, Paris rüçhan süresini <b>uzatmaz</b>; rüçhan eksikliği sadece rüçhan hakkını kaybettirir."
          ],
          ref: "SMK m.62, m.63, m.64/5",
          tuzak: "Faydalı model başvurusuna dayanarak tasarımda 6 aylık rüçhan istenebilir."
        },
        {
          baslik: "Kurum incelemesi (resen ret)",
          maddeler: [
            "Reddedilir: tasarım/ürün tanımına uymayan, kamu düzeni/ahlaka aykırı, m.3 dışı kişilerce yapılan başvurular.",
            "Paris 6ter ve halka mal olmuş işaretlerin uygunsuz kullanımı.",
            "<b>Yeni olmadığı tespit edilen</b> tasarımlar resen reddedilir.",
            "Kısmi ret: (b) ve (ç) bentlerinde mümkün; kalan kısım tasarım kimliğini korumalı."
          ],
          ref: "SMK m.64/6-7",
          tuzak: "Ayırt edicilik Kurumca resen incelenmez; tescil sonrası itiraz (m.67) veya hükümsüzlükle ileri sürülür."
        },
        {
          baslik: "Yayımın ertelenmesi",
          maddeler: [
            "Başvuruyla birlikte, başvuru/rüçhan tarihinden itibaren <b>30 ay</b> erteleme istenebilir.",
            "Tasarım tescil edilir ama görsel ve dosya üçüncü kişilere <b>kapalı</b> tutulur.",
            "Süre sonunda yayım ücreti ödenmezse koruma <b>hiç doğmamış</b> sayılır.",
            "Erteleme süresinde tecavüz davası için sicil ve dosya bilgilerinin davalıya <b>bildirilmiş</b> olması şart."
          ],
          ref: "SMK m.66",
          tuzak: "Yayım ertelemeli tasarımın yayım tarihi, görsellerin yayımlandığı tarihtir."
        },
        {
          baslik: "Tescile itiraz (yayım sonrası)",
          maddeler: [
            "Üçüncü kişiler tescilin <b>yayımından</b> itibaren <b>3 ay</b> içinde, ücretini ödeyerek itiraz eder.",
            "Gerekçeler: tanıma aykırılık, yenilik/ayırt edicilik yokluğu, m.58/4, <b>kötüniyet</b>, fikri mülkiyet hakkının yetkisiz kullanımı.",
            "Kurum kararlarına başvuru sahibi bildirimden itibaren <b>2 ay</b> içinde itiraz eder; itirazları <b>Kurul</b> inceler.",
            "İtiraz sahibinden <b>1 ay</b> içinde ek bilgi/belge istenebilir; itirazın kabulü <b>hükümsüzlük</b> sonucunu doğurur."
          ],
          ref: "SMK m.67, m.68",
          tuzak: "Tasarımda itiraz tescilden SONRA yapılır (markada tescilden önce yayıma itiraz)."
        },
        {
          baslik: "Koruma süresi ve yenileme",
          maddeler: [
            "Tescilli tasarım: başvuru tarihinden itibaren <b>5 yıl</b>; beşer yıllık yenilemelerle toplam <b>25 yıla</b> kadar.",
            "Tescilsiz tasarım: kamuya ilk sunulduğu tarihten itibaren <b>3 yıl</b>.",
            "Yenileme bitişten önceki <b>6 ay</b> içinde; kaçırılırsa bitişten itibaren <b>6 ay</b> içinde ek ücretle."
          ],
          ref: "SMK m.69",
          tuzak: "Tescilsiz tasarım yenilenemez; 3 yıl başvurudan değil ilk kamuya sunumdan başlar."
        },
        {
          baslik: "Hak sahipliği, ortaklık ve gasp",
          maddeler: [
            "Hak tasarımcıya veya haleflerine aittir; ortaklıkta anlaşma yoksa <b>TMK paylı mülkiyet</b> hükümleri.",
            "Her paydaş kendi payında tasarruf eder, bildirimle kullanır, dava açar (diğerlerine <b>1 ay</b> içinde bildirim); <b>lisans için oybirliği</b>.",
            "Gasp talepleri yayımdan/kamuya sunumdan itibaren <b>3 yıl</b> içinde; <b>kötüniyette süre yok</b>.",
            "İyiniyetli önceki kullanıcı, gerçek hak sahibinin sicile kaydının bildiriminden itibaren <b>2 ay</b> içinde inhisari olmayan lisans isteyebilir."
          ],
          ref: "SMK m.70, m.71, m.72",
          tuzak: "Patentte gasp süresi 2 yıl, tasarımda 3 yıl."
        },
        {
          baslik: "Çalışanların tasarımları",
          maddeler: [
            "Görev gereği veya işletme deneyimine dayanarak yapılan tasarımların hak sahibi <b>işverendir</b> (aksi kararlaştırılmadıkça).",
            "İşyeri bilgi ve araçlarından yararlanılarak yapılan diğer tasarımlar: <b>talep edilirse</b> işverenin; çalışan <b>bedel</b> isteyebilir.",
            "Öğretim elemanlarının tasarımlarında gelirin <b>en az yarısı</b> tasarımcıya verilir.",
            "Hizmet ilişkisi dışındaki iş görme sözleşmelerinde <b>sözleşme</b> belirleyicidir."
          ],
          ref: "SMK m.73, m.74",
          tuzak: "Öğretim elemanı payı: tasarımda en az 1/2, buluşta en az 1/3 (m.121/8)."
        },
        {
          baslik: "Hükümsüzlük (mahkeme)",
          maddeler: [
            "Sebepler: tanıma aykırılık, yenilik/ayırt edicilik yokluğu, m.58/4, kötüniyet, yetkisiz FM hakkı kullanımı, <b>hak sahipliği</b>, önceki tarihli başvuru.",
            "Önceki başvuru sebebini sadece <b>önceki hak sahibi</b>, hak sahipliği sebebini sadece <b>hak sahibi</b> ileri sürer.",
            "Dava koruma süresince veya hakkın sona ermesini izleyen <b>5 yıl</b> içinde açılabilir.",
            "Etki <b>geçmişe</b> dönük; kesinleşmiş-uygulanmış kararlar/sözleşmeler etkilenmez."
          ],
          ref: "SMK m.77, m.78, m.79",
          tuzak: "Hak sona erdikten sonra da 5 yıl içinde hükümsüzlük davası açılabilir."
        }
      ]
    },

    /* ===================== PATENT ===================== */
    {
      id: "patent", ad: "Patent", ikon: "⚙",
      kartlar: [
        {
          baslik: "Patentlenebilirlik şartları",
          maddeler: [
            "Teknolojinin her alanındaki buluşlara: <b>yenilik</b> + <b>buluş basamağı</b> + <b>sanayiye uygulanabilirlik</b>.",
            "Buluş basamağı: tekniğin bilinen durumuna göre ilgili alandaki <b>uzmana göre aşikâr olmama</b>.",
            "Sanayiye uygulanabilirlik: <b>tarım dâhil</b> sanayinin herhangi bir dalında üretilebilme/kullanılabilme."
          ],
          ref: "SMK m.82/1, m.83/4, m.83/6",
          tuzak: "Faydalı modelde buluş basamağı aranmaz; sadece yenilik + sanayiye uygulanabilirlik."
        },
        {
          baslik: "Buluş sayılmayanlar (m.82/2)",
          maddeler: [
            "<b>Keşifler</b>, bilimsel teoriler, matematiksel yöntemler.",
            "Zihni faaliyet, <b>iş faaliyeti</b> veya oyunlara ilişkin plan, kural ve yöntemler.",
            "<b>Bilgisayar programları</b>; estetik mahsuller, edebiyat/sanat/bilim eserleri; <b>bilginin sunumu</b>.",
            "Bunlar ancak “<b>kendisi</b>” olarak talep edildiğinde patentlenebilirlik dışında kalır."
          ],
          ref: "SMK m.82/2",
          tuzak: "Bilgisayar programıyla gerçekleştirilen teknik bir buluş patentlenebilir; dışlanan programın “kendisi”dir."
        },
        {
          baslik: "Patent verilmeyen buluşlar (m.82/3)",
          maddeler: [
            "<b>Kamu düzeni/genel ahlaka</b> aykırı buluşlar (sadece mevzuatla yasaklanmış olmak aykırılık sayılmaz).",
            "<b>Bitki çeşitleri, hayvan ırkları</b> ve esas olarak biyolojik işlemler — <b>mikrobiyolojik</b> işlemler/ürünler hariç.",
            "İnsan/hayvan vücuduna uygulanacak <b>teşhis, cerrahi ve tedavi</b> yöntemleri (bu yöntemlerde kullanılan ürünler hariç).",
            "İnsan bedeni/gen dizisinin <b>sadece keşfi</b>; insan klonlama, eşey hattı değiştirme, embriyonun ticari kullanımı."
          ],
          ref: "SMK m.82/3-6",
          tuzak: "Tedavi yöntemi patentlenemez ama o yöntemde kullanılan ilaç/terkip patentlenebilir."
        },
        {
          baslik: "Yenilik, tekniğin bilinen durumu ve hoşgörü süresi",
          maddeler: [
            "Tekniğin bilinen durumu: başvuru tarihinden önce <b>dünyanın her yerinde</b> yazılı, sözlü, kullanım vb. ile erişilebilir her şey.",
            "Önceki tarihli olup sonra yayımlanan <b>ulusal patent/FM başvurularının ilk içerikleri</b> yenilikte dikkate alınır; <b>buluş basamağında alınmaz</b>.",
            "Hoşgörü süresi: başvuru/rüçhan tarihinden önceki <b>12 ay</b> içinde buluşu yapanın vb. açıklaması zarar vermez.",
            "Hoşgörü sonuçları <b>süreyle sınırlı değildir</b>; ispat yükü ileri sürene aittir."
          ],
          ref: "SMK m.83, m.84",
          tuzak: "Önceki tarihli ulusal başvuru (PCT/EPC ile Türkiye'ye gelenler dâhil) yeniliği bozar ama aşikârlık değerlendirmesine girmez."
        },
        {
          baslik: "Patent hakkının kapsamı ve sınırları",
          maddeler: [
            "Ürünün üretimi, satışı, kullanımı, <b>ithali</b>; usulün kullanımı; usulle <b>doğrudan</b> elde edilen ürün önlenebilir.",
            "Kapsam dışı: özel/ticari olmayan fiiller, <b>deneme</b>, <b>ilaç ruhsatı</b> için test ve deneyler (Bolar).",
            "Eczanede <b>reçeteye</b> özgü seri olmayan hazırlama; geçici olarak ülkede bulunan Paris ülkesi araçları.",
            "<b>Dolaylı kullanım</b> (m.86) ve iyiniyetli <b>önceki kullanım</b> hakkı (m.87): işletmeyle birlikte devredilir."
          ],
          ref: "SMK m.85, m.86, m.87",
          tuzak: "Usul patentinde yeni ürün varsa ispat yükü tersine döner: davalı farklı usulü ispatlar (m.141/2)."
        },
        {
          baslik: "Koruma kapsamı: istemler",
          maddeler: [
            "Koruma kapsamını <b>istemler</b> belirler; yorumda <b>tarifname ve resimler</b> kullanılır.",
            "<b>Eşdeğerlik</b>: aynı işlevi, aynı şekilde görüp aynı sonucu veren unsur eşdeğerdir (tecavüz iddiası tarihine göre).",
            "Başvuru sahibinin işlemler sırasındaki <b>beyanları</b> dikkate alınır; istemler örneklerle sınırlı yorumlanmaz.",
            "Özet sadece teknik bilgi amaçlıdır; koruma kapsamında <b>kullanılmaz</b> (m.92/5)."
          ],
          ref: "SMK m.89, m.92/5",
          tuzak: "Özet, kapsam belirlemede ve m.83/3 tekniğin bilinen durumunda kullanılmaz."
        },
        {
          baslik: "Başvuru ve başvuru tarihi",
          maddeler: [
            "Unsurlar: form, tarifname, istemler, resimler, özet, ücret bilgisi.",
            "Tarih için <b>3 unsur</b>: patent talebi, kimlik/iletişim bilgisi, <b>tarifname</b> (veya önceki başvuruya atıf).",
            "Paris/DTÖ veya karşılıklılık ülkesi dilinde verilebilir; <b>Türkçe çeviri</b> ve eksikler başvurudan itibaren <b>2 ay</b> içinde (bildirimsiz).",
            "Genetik kaynağa dayanıyorsa kaynağın nereden alındığı açıklanır; buluşu yapan isminin gizli tutulmasını isteyebilir.",
            "<b>Buluş bütünlüğü</b>: tek buluş/tek genel buluş fikri; bölünmüş başvurunun tarihi <b>ilk başvurunun tarihidir</b>, geçmiş yılların yıllık ücretleri de ödenir (m.91)."
          ],
          ref: "SMK m.90, m.91, m.95",
          tuzak: "Başvuru tarihi için istemler şart değildir; tarifname yeterlidir."
        },
        {
          baslik: "Patentte rüçhan",
          maddeler: [
            "Paris/DTÖ ülkesindeki (Türkiye dâhil) ilk başvurudan itibaren <b>12 ay</b>.",
            "Sergi rüçhanı: teşhir tarihinden itibaren <b>12 ay</b>.",
            "Talep başvuruyla veya başvurudan itibaren <b>2 ay</b> içinde; belgeler başvurudan itibaren <b>3 ay</b> içinde.",
            "<b>Çoklu rüçhan</b> (farklı ülkeler, hatta istem başına) mümkün; süreler <b>en erken</b> rüçhan tarihinden işler."
          ],
          ref: "SMK m.93, m.94",
          tuzak: "Rüçhan süresi (m.93/1) için işlemlerin devam ettirilmesi talep edilemez (m.107/4)."
        },
        {
          baslik: "Araştırma ve yayım",
          maddeler: [
            "Araştırma talebi başvuruyla veya başvurudan itibaren <b>12 ay</b> içinde (bildirimsiz); yoksa geri çekilmiş sayılır.",
            "<b>Cumhurbaşkanı</b> 12 aylık süreyi <b>yarısına kadar</b> indirebilir.",
            "Araştırma raporu düzenlenemezse başvuru sahibi <b>3 ay</b> içinde itiraz/değişiklik sunar.",
            "Başvuru/rüçhan tarihinden itibaren <b>18 ay</b> dolunca (veya erken yayım talebiyle) yayımlanır; yayımdan itibaren <b>geçici koruma</b>.",
            "Yayımdan sonra üçüncü kişiler görüş sunabilir ama <b>taraf olamaz</b>."
          ],
          ref: "SMK m.96, m.97",
          tuzak: "Haberdar edilen tecavüzcüye karşı koruma yayımdan önce de doğar (m.97/5)."
        },
        {
          baslik: "İnceleme ve patentin verilmesi",
          maddeler: [
            "İnceleme talebi araştırma raporunun bildiriminden itibaren <b>3 ay</b> içinde; yoksa geri çekilmiş sayılır.",
            "Uygunsuzluk bildirimleri en fazla <b>3</b> kez; her birine cevap için <b>3 ay</b>.",
            "Patent için gereken değişiklikler bildirimden itibaren <b>2 ay</b> içinde.",
            "Patentin verilmesi Kurumca geçerlilik/yararlılık <b>garantisi değildir</b>."
          ],
          ref: "SMK m.98",
          tuzak: "Bildirim sayısı “üçten fazla olamaz”; cevap süresi de 3 ay — ikisini karıştırma."
        },
        {
          baslik: "Patente itiraz ve Kurum kararlarına itiraz",
          maddeler: [
            "Üçüncü kişiler patentin verilmesi kararının yayımından itibaren <b>6 ay</b> içinde ücretle itiraz eder.",
            "Gerekçeler: m.82-83 şartları yok, <b>yetersiz açıklama</b>, başvurunun ilk hâlinin kapsamını aşma.",
            "Patent sahibi itiraz bildiriminden itibaren <b>3 ay</b> içinde görüş/değişiklik sunar; <b>Kurul</b> inceler.",
            "Kısmi uygunlukta değişiklik için <b>2 ay</b>; diğer Kurum kararlarına bildirimden itibaren <b>2 ay</b> içinde itiraz (m.100)."
          ],
          ref: "SMK m.99, m.100",
          tuzak: "Hak sahipliği (gasp) itiraz gerekçesi değildir; hükümsüzlük davası veya gasp davası konusudur."
        },
        {
          baslik: "Koruma süresi ve yıllık ücretler",
          maddeler: [
            "Patent <b>20 yıl</b>, faydalı model <b>10 yıl</b>; başvuru tarihinden; <b>uzatılamaz</b>.",
            "Yıllık ücret başvurudan itibaren <b>2. yılın sonunda</b> başlar; vade başvuru tarihine denk gelen ay ve gün.",
            "Vadede ödenmezse <b>6 ay</b> içinde ek ücretle; o da yoksa hak <b>vade tarihi itibarıyla</b> sona erer.",
            "Sona erme bildiriminden itibaren <b>2 ay</b> içinde <b>telafi ücreti</b> ödenirse hak yeniden geçerlilik kazanır; bildirim en geç <b>1 yıl</b> içinde yapılır."
          ],
          ref: "SMK m.101",
          tuzak: "Ek patent ve gizli patent başvurusu için yıllık ücret ödenmez; kanuni tekel nedeniyle kullanılamıyorsa da ödenmez (m.88/4)."
        },
        {
          baslik: "İşlemlerin devamı ve hakların yeniden tesisi",
          maddeler: [
            "<b>İşlemlerin devamı</b>: süreye uyulmamanın sonucunun bildiriminden itibaren <b>2 ay</b> içinde ücretle.",
            "<b>Yeniden tesis</b>: gereken özen gösterildiyse, engelin kalkmasından itibaren <b>2 ay</b>, her hâlde sürenin bitiminden itibaren <b>1 yıl</b> içinde.",
            "Hak kaybı ile yeniden tesisin yayımı arasında iyiniyetle kullanan, buluşu <b>ücretsiz</b> kullanmaya devam edebilir.",
            "Telafi ücreti süresi, <b>rüçhan süresi</b> ve bu iki kurumun kendi süreleri için işlemlerin devamı istenemez."
          ],
          ref: "SMK m.107",
          tuzak: "İşlemlerin devamı için “özen” şartı yoktur; yeniden tesis için “gereken özen” şarttır."
        },
        {
          baslik: "Hak sahipliği ve gasp",
          maddeler: [
            "Patent isteme hakkı buluşu yapana/haleflerine aittir; bağımsız aynı buluşta <b>önce başvurana</b> (önceki başvuru yayımlanmışsa).",
            "Gerçek hak sahibi lehine karar kesinleşince <b>3 ay</b> içinde: başvuruyu üstlenme, yeni başvuru veya ret talebi.",
            "Patent gaspı davası: patentin verildiğinin yayımından itibaren <b>2 yıl</b>; <b>kötüniyette</b> koruma süresi sonuna kadar.",
            "İyiniyetli eski sahip <b>2 ay</b>, lisans alan <b>4 ay</b> içinde inhisari olmayan lisans isteyebilir.",
            "Ortak patentte <b>lisans için oybirliği</b>; patent devir/hak tesisi için <b>bölünemez</b>."
          ],
          ref: "SMK m.109, m.110, m.111, m.112",
          tuzak: "Kurum nezdinde başvuru sahibinin hak sahibi olmadığı iddia edilemez; yol dava açmaktır (m.110/1)."
        },
        {
          baslik: "Hizmet buluşu ve bildirim",
          maddeler: [
            "<b>Hizmet buluşu</b>: görev gereği veya büyük ölçüde işletmenin deneyim ve çalışmalarına dayanarak iş ilişkisi sırasında yapılan buluş; diğerleri <b>serbest buluş</b>.",
            "Çalışan hizmet buluşunu <b>yazılı ve gecikmeksizin</b> işverene bildirir; serbest buluş olana kadar <b>gizli</b> tutar.",
            "İşveren düzeltme gereken hususları bildirimden itibaren <b>2 ay</b> içinde bildirir; yoksa bildirim geçerli sayılır.",
            "Öğrenciler ve ücretsiz, süresiz stajyerler de “çalışan” hükümlerine tabidir."
          ],
          ref: "SMK m.113, m.114",
          tuzak: "Kamu çalışanlarında bedel gelirin en az 1/3'ü; kurum kendisi kullanıyorsa bir defaya mahsus net ücretin 10 katını aşamaz (m.113/5)."
        },
        {
          baslik: "İşverenin hak talebi ve bedel",
          maddeler: [
            "İşveren bildirimden itibaren <b>4 ay</b> içinde yazılı olarak <b>tam veya kısmi</b> hak talep eder; yoksa buluş <b>serbest</b> olur.",
            "Tam hak talebinde haklar bildirimin çalışana ulaşmasıyla işverene geçer; çalışan <b>makul bedel</b> ister.",
            "Kısmi hak talebinde buluş serbest olur; işveren kullanma hakkı kazanır; çalışanın talebine <b>2 ay</b> içinde cevap vermezse hakkı sona erer.",
            "Tam hak talep eden işveren <b>patent başvurusu yapmakla yükümlü</b>; işveren hakkından vazgeçerken çalışanın cevap süresi <b>3 ay</b> (m.118).",
            "Hakkaniyete aykırılık itirazı iş sözleşmesinin bitiminden itibaren en geç <b>6 ay</b> içinde (m.117)."
          ],
          ref: "SMK m.115, m.116, m.117, m.118",
          tuzak: "Sözleşme serbestisi hizmet buluşunda patent başvurusundan, serbest buluşta bildirimden SONRA başlar."
        },
        {
          baslik: "Serbest buluş, üniversite ve kamu destekli buluşlar",
          maddeler: [
            "Serbest buluş da bildirilir; işveren <b>3 ay</b> içinde “serbest değildir” itirazı yapabilir; işletme alanındaysa teklife <b>3 ay</b> içinde cevap.",
            "İşverenin iflasında çalışanın <b>önalım</b> hakkı var; bedel alacağı <b>imtiyazlı</b> alacaktır (m.120).",
            "Üniversite: hak talep ederse <b>başvuru yükümlü</b>; gelirin en az <b>1/3</b>'ü buluşu yapana.",
            "Kamu destekli projede faydalanan kişi bildirimden itibaren <b>1 yıl</b> içinde hak sahipliği tercihini bildirir; kamu kurumuna <b>bedelsiz lisans</b>."
          ],
          ref: "SMK m.119, m.120, m.121, m.122",
          tuzak: "Üniversitelerde m.115, 116, 118 ve 119/4 uygulanmaz (m.121/5)."
        },
        {
          baslik: "Ek patent ve gizli patent",
          maddeler: [
            "Ek patent: asıl buluşu geliştiren buluş için; asıl patent belgesi kararının yayımına kadar başvurulur.",
            "Ek patentin süresi asıl patentin bitimine kadar; <b>yıllık ücret ödenmez</b>; asıl patent buluş basamağında tekniğin bilinen durumu sayılmaz.",
            "Faydalı model için <b>ek başvuru yapılamaz</b>.",
            "Gizli patent: Kurum <b>MSB</b>'ye gönderir; MSB <b>3 ay</b> içinde gizlilik kararını bildirir; gizlilik süresince yıllık ücret yok, <b>Devletten tazminat</b>."
          ],
          ref: "SMK m.123, m.124",
          tuzak: "Asıl patent hükümsüz olursa ek patent otomatik hükümsüz olmaz; 3 ay içinde bağımsız patente dönüşüm istenmelidir."
        },
        {
          baslik: "Zorunlu lisans",
          maddeler: [
            "Sebepler: <b>kullanmama</b>, <b>bağımlı patent</b>, <b>kamu yararı</b>, eczacılık ürünü ihracatı (TRIPS protokolü), ıslahçı, rekabeti bozucu faaliyet.",
            "Kullanmama: patentin verilmesinin yayımından <b>3 yıl</b> veya başvurudan <b>4 yıl</b> (hangisi geç dolarsa) sonra; kullanıma <b>3 yıldan</b> fazla ara.",
            "Rekabet ihlali → <b>Rekabet Kurumu</b>; kamu yararı → <b>Cumhurbaşkanı</b>; diğerleri → mahkeme.",
            "Patent sahibine görüş için <b>1 ay</b>; mahkeme <b>1 ay</b> içinde karar verir (uzatılamaz).",
            "Zorunlu lisans <b>inhisari değildir</b> (kamu yararı hariç); alt lisans ve ithal hakkı yok; esas olarak yurt içi pazar için."
          ],
          ref: "SMK m.129-133",
          tuzak: "Kamu yararı gerekçeli zorunlu lisans inhisari olabilir; diğerleri olamaz."
        },
        {
          baslik: "Patentin hükümsüzlüğü",
          maddeler: [
            "Kurumun nihai kararından sonra <b>mahkeme</b>: patentlenebilirlik yok, yetersiz açıklama, kapsamı aşma, hak sahipliği yok, koruma kapsamının aşılması.",
            "Davacı: menfaati olanlar, Cumhuriyet savcıları, kamu kurumları; hak sahipliği sebebini sadece <b>buluşu yapan/halefleri</b>.",
            "Dava koruma süresince veya hakkın sona ermesini izleyen <b>5 yıl</b> içinde.",
            "Kısmi hükümsüzlük istem bazında; <b>bir istemin kısmen</b> hükümsüzlüğüne karar verilemez.",
            "Etki geçmişe dönük; sona eren patentin konusu <b>kamuya</b> ait olur (m.140)."
          ],
          ref: "SMK m.138, m.139, m.140",
          tuzak: "Mahkeme, itiraz sonrası nihai yayımdan önce (a)-(c) sebepleri hakkında karar veremez (m.138/2)."
        }
      ]
    },

    /* ===================== FAYDALI MODEL ===================== */
    {
      id: "fm", ad: "Faydalı Model", ikon: "🔧",
      kartlar: [
        {
          baslik: "Faydalı model şartları",
          maddeler: [
            "<b>Yeni</b> (m.83/1) ve <b>sanayiye uygulanabilir</b> (m.83/6) buluşlar faydalı modelle korunur.",
            "<b>Buluş basamağı aranmaz</b>.",
            "Yenilik değerlendirmesinde buluş konusuna <b>katkı sağlamayan teknik özellikler</b> dikkate alınmaz."
          ],
          ref: "SMK m.142/1-2",
          tuzak: "Faydalı modelde de dünya çapında mutlak yenilik aranır; sadece buluş basamağı aranmaz."
        },
        {
          baslik: "Faydalı modelle korunamayanlar",
          maddeler: [
            "m.82/2-3'teki tüm istisnalara ek olarak:",
            "<b>Kimyasal ve biyolojik</b> maddeler/usuller ve bunlarla elde edilen ürünler.",
            "<b>Eczacılıkla</b> ilgili maddeler/usuller ve ürünleri; <b>biyoteknolojik</b> buluşlar.",
            "<b>Usuller</b> ve usullerle elde edilen ürünler."
          ],
          ref: "SMK m.142/3",
          tuzak: "Faydalı model yalnızca ürün buluşları içindir; usul faydalı modelle korunamaz."
        },
        {
          baslik: "Faydalı model başvuru süreci",
          maddeler: [
            "Eksikler ve Türkçe çeviri başvurudan itibaren <b>2 ay</b> içinde (bildirimsiz); şeklî eksiklik için bildirimden <b>2 ay</b>.",
            "Araştırma talebi: şeklî uygunluğun bildiriminden itibaren <b>2 ay</b> içinde ücretle; yoksa geri çekilmiş sayılır.",
            "Araştırma raporu yayımından itibaren <b>3 ay</b>: başvuru sahibi itiraz eder, üçüncü kişiler <b>görüş</b> bildirir.",
            "Değişiklik gerekiyorsa bildirimden itibaren <b>2 ay</b>; <b>inceleme raporu aşaması yoktur</b>."
          ],
          ref: "SMK m.143",
          tuzak: "Patentte araştırma talebi 12 ay, faydalı modelde şeklî uygunluk bildiriminden itibaren 2 ay."
        },
        {
          baslik: "Faydalı modelin verilmesi ve itiraz yolları",
          maddeler: [
            "Faydalı model verildikten sonra m.99 <b>itiraz usulü işletilemez</b>; sadece <b>mahkemeden hükümsüzlük</b> istenir.",
            "Ret kararına karşı m.100'e göre bildirimden itibaren <b>2 ay</b> içinde itiraz.",
            "Verilmesi Kurumca geçerlilik/yararlılık <b>garantisi değildir</b>."
          ],
          ref: "SMK m.143/11-13, m.100",
          tuzak: "Faydalı modele “tescil sonrası 6 ay itiraz” yoktur; bu patente özgüdür."
        },
        {
          baslik: "Koruma süresi ve yıllık ücret",
          maddeler: [
            "Koruma süresi başvuru tarihinden itibaren <b>10 yıl</b>; <b>uzatılamaz</b>.",
            "Yıllık ücret, ek ücret (<b>6 ay</b>) ve telafi (<b>2 ay</b>) hükümleri m.145 yoluyla uygulanır.",
            "Başvuru <b>18 ay</b> sonra (veya erken talep üzerine) yayımlanır (m.97)."
          ],
          ref: "SMK m.101/1, m.97/1, m.145",
          tuzak: "Patent 20 yıl, faydalı model 10 yıl — ikisi de yenilenemez/uzatılamaz."
        },
        {
          baslik: "Dönüştürme",
          maddeler: [
            "Patent → FM: işlemleri devam eden başvuruda talep edilir; bildirimden itibaren <b>1 ay</b> içinde belge ve araştırma ücreti.",
            "FM → Patent: en geç araştırma raporunun bildirimini izleyen <b>3 ay</b> sonuna kadar; sonra <b>1 ay</b> içinde belge/ücret.",
            "Rüçhan hakkı dönüşen başvuruya da tanınır.",
            "Dönüştürülmüş başvuru <b>yeniden dönüştürülemez</b>."
          ],
          ref: "SMK m.104",
          tuzak: "1 ay içinde şartlar yerine getirilmezse dönüştürme talebi yapılmamış sayılır, başvuru eski türüyle devam eder."
        },
        {
          baslik: "Faydalı modelin hükümsüzlüğü",
          maddeler: [
            "<b>Mahkeme</b>: m.142 şartları yok, yetersiz açıklama, ilk hâlin kapsamını aşma, hak sahipliği yok.",
            "Davacı: menfaati olanlar, Cumhuriyet savcıları, kamu kurumları; hak sahipliği sebebi sadece buluşu yapan/halefleri.",
            "Dava koruma süresince veya sona ermeyi izleyen <b>5 yıl</b> içinde; kısmi hükümsüzlük istem bazında."
          ],
          ref: "SMK m.144",
          tuzak: "Bir istemin kısmen hükümsüzlüğüne karar verilemez."
        },
        {
          baslik: "Patent hükümlerinin uygulanması ve çifte koruma yasağı",
          maddeler: [
            "Açık hüküm yoksa ve niteliğe aykırı değilse <b>patent hükümleri</b> faydalı modele de uygulanır.",
            "Aynı kişiye, aynı buluş için, aynı koruma kapsamıyla bağımsız olarak birden fazla patent/FM veya <b>ikisi birlikte verilmez</b>.",
            "Rüçhan (<b>12 ay</b>) ve hoşgörü süresi (<b>12 ay</b>) faydalı model için de geçerlidir.",
            "Tecavüz fiilleri patentle ortak düzenlenir (m.141)."
          ],
          ref: "SMK m.145, m.93, m.84, m.141",
          tuzak: "Faydalı model başvurusu, tasarım başvurusu için 6 aylık rüçhan da doğurabilir (m.62/1)."
        }
      ]
    },

    /* ===================== ORTAK HÜKÜMLER ===================== */
    {
      id: "ortak", ad: "Ortak Hükümler & Yaptırımlar", ikon: "⚖",
      kartlar: [
        {
          baslik: "Genel süre kuralı",
          maddeler: [
            "Kanunda/yönetmelikte süre belirlenmemişse Kurum nezdindeki işlemlerde süre bildirimden itibaren <b>2 ay</b>.",
            "Süreye uyulmazsa talep <b>yapılmamış</b> sayılır.",
            "Eksik ücret: bildirimden itibaren <b>1 ay</b> içinde tamamlanır (m.15, 18, 20, 23, 69 hariç)."
          ],
          ref: "SMK m.146, m.161/3",
          tuzak: "Eksik ücret tamamlama (1 ay) yayıma itiraz, karara itiraz, yenileme ve şeklî incelemede uygulanmaz."
        },
        {
          baslik: "Ortak temsilci ve vekil",
          maddeler: [
            "Birden çok hak sahibinde vekil yoksa işlemleri <b>ortak temsilci</b> yürütür (geri çekme/vazgeçme hariç).",
            "Atanmamışsa formda adı geçen <b>ilk</b> hak sahibi ortak temsilcidir; yurt dışındaysa vekil zorunlu.",
            "Yerleşim yeri yurt dışında olanlar <b>ancak vekille</b> işlem yapar; aksi hâlde işlem yapılmamış sayılır.",
            "Vekile yapılan tebligat <b>asile</b> yapılmış sayılır."
          ],
          ref: "SMK m.147, m.160",
          tuzak: "Marka vekili: marka, tasarım, coğrafi işaret, GÜA; patent vekili: patent, faydalı model ve TASARIM (m.2)."
        },
        {
          baslik: "Tebligat",
          maddeler: [
            "Elektronik tebligat: posta kutusuna ilk girişte, her hâlde konulmayı izleyen <b>10. günün</b> sonunda yapılmış sayılır.",
            "İlanen tebligat Bülten üzerinden; yayımdan <b>7 gün</b> sonra yapılmış sayılır.",
            "Elektronik tebligat için kişinin <b>onayı</b> gerekir."
          ],
          ref: "SMK m.160/6-7",
          tuzak: "İlanen tebligatta Tebligat Kanunu m.29 değil, Bülten usulü uygulanır."
        },
        {
          baslik: "Hukuki işlemler",
          maddeler: [
            "Sınai mülkiyet hakkı devredilebilir, mirasla geçer, lisans/rehin/teminat/haciz konusu olabilir; <b>işletmeden bağımsız</b>.",
            "Hukuki işlemler <b>yazılı</b> şekle tabi; <b>devir sözleşmeleri noter onaylı</b> olmalı.",
            "Sicile kaydedilmeyen işlemler <b>iyiniyetli üçüncü kişilere</b> karşı ileri sürülemez.",
            "Paylı hakta <b>önalım</b>: satışın bildiriminden itibaren <b>3 ay</b>, her hâlde satıştan itibaren <b>2 yıl</b>; cebri artırmada yok."
          ],
          ref: "SMK m.148",
          tuzak: "Lisans yazılı şekle tabidir ama noter onayı sadece DEVİR için şarttır."
        },
        {
          baslik: "Tecavüz hâlinde talepler",
          maddeler: [
            "<b>Tespit</b>, muhtemel tecavüzün <b>önlenmesi</b>, <b>durdurulması</b>, tecavüzün kaldırılması ve <b>maddi-manevi tazminat</b>.",
            "Ürün ve münhasıran kullanılan cihazlara <b>elkoyma</b>; bunlar üzerinde <b>mülkiyet</b> tanınması (değeri tazminattan düşülür).",
            "Şekil değiştirme, marka silme, kaçınılmazsa <b>imha</b>; kesinleşmiş kararın <b>ilanı</b>.",
            "İlan hakkı kesinleşmeden sonra <b>3 ay</b> içinde talep edilmezse düşer."
          ],
          ref: "SMK m.149",
          tuzak: "Coğrafi işaret ve GÜA'da manevi tazminat istenemez (m.149/4)."
        },
        {
          baslik: "Tazminat ve yoksun kalınan kazanç",
          maddeler: [
            "Zarar = fiili kayıp + yoksun kalınan kazanç; itibar zararı için <b>ayrıca</b> tazminat.",
            "Hak sahibinin <b>seçimine</b> göre: (a) muhtemel gelir, (b) tecavüz edenin <b>net kazancı</b>, (c) <b>makul lisans bedeli</b>.",
            "(a) veya (b) seçilmiş ve hak belirleyici etkense <b>hakkaniyete uygun pay</b> eklenir.",
            "Patent kullanılmıyorsa hesap zorunlu olarak <b>lisans bedeli</b> yöntemiyle yapılır."
          ],
          ref: "SMK m.150, m.151",
          tuzak: "Seçim hakkı mahkemeye değil hak sahibine aittir."
        },
        {
          baslik: "Hakkın tükenmesi ve dava açılamayacak kişiler",
          maddeler: [
            "Hak sahibi veya izniyle piyasaya sunulan ürünlerle ilgili sonraki fiiller hakkın <b>kapsamı dışındadır</b>.",
            "Marka sahibi ürünün <b>değiştirilerek/kötüleştirilerek</b> ticari kullanımını önleyebilir.",
            "<b>Kişisel ihtiyaç</b> ölçüsünde elinde bulunduran/kullanan kişilere karşı hukuk davası açılamaz, şikâyet yapılamaz.",
            "Tazminat ödeyen kişinin piyasaya sürdüğü ürünleri ticari amaçla kullananlara da dava açılamaz."
          ],
          ref: "SMK m.152, m.153",
          tuzak: "Tükenme için hak sahibinin izni şarttır; izinsiz piyasaya sürülen ürün için hak tükenmez."
        },
        {
          baslik: "Tecavüzün olmadığının tespiti davası",
          maddeler: [
            "Menfaati olan herkes hak sahibinden görüş ister; tebliğden itibaren <b>1 ay</b> içinde cevap yoksa/kabul edilmezse dava açar.",
            "Bildirim <b>dava şartı değildir</b>; dava sicildeki tüm hak sahiplerine tebliğ edilir.",
            "Kendisine karşı tecavüz davası açılmış kişi bu davayı <b>açamaz</b>; hükümsüzlük davasıyla birlikte açılabilir."
          ],
          ref: "SMK m.154",
          tuzak: "Hak sahibine önceden görüş sorulmaması davayı usulden reddettirmez."
        },
        {
          baslik: "Önceki tarihli hakların etkisi",
          maddeler: [
            "Marka, patent veya tasarım hakkı sahibi, <b>daha önceki</b> rüçhan/başvuru tarihli hak sahibinin açtığı tecavüz davasında kendi tescilini <b>savunma</b> olarak ileri süremez.",
            "Tescilli olmak tek başına tecavüz iddiasına karşı koruma sağlamaz."
          ],
          ref: "SMK m.155",
          tuzak: "Sonraki tarihli tescil sahibi, önce hükümsüzlük kararı beklenmeden tecavüzden sorumlu tutulabilir."
        },
        {
          baslik: "Görevli ve yetkili mahkeme",
          maddeler: [
            "Görevli: <b>Fikri ve sınai haklar hukuk/ceza mahkemeleri</b>; yoksa asliye hukuk/asliye ceza.",
            "Kurum kararlarına karşı ve Kurum aleyhine davalar: <b>Ankara FSHHM</b> (görevli ve yetkili).",
            "Hak sahibinin açtığı davalar: <b>davacının yerleşim yeri</b>, fiilin işlendiği veya etkilerinin görüldüğü yer.",
            "Üçüncü kişilerin hak sahibine açtığı davalar: <b>davalının yerleşim yeri</b>; yurt dışındaysa vekilin işyeri, o da yoksa Kurum merkezi."
          ],
          ref: "SMK m.156",
          tuzak: "Kurul kararlarının iptali/hükümsüzlük istemli davalardaki kararlar kesinleşmedikçe icra edilemez (m.162)."
        },
        {
          baslik: "Zamanaşımı",
          maddeler: [
            "Sınai mülkiyet hakkı ve GÜA'dan doğan özel hukuk taleplerinde <b>TBK zamanaşımı</b> hükümleri uygulanır.",
            "Haksız fiil tazminatı (TBK m.72): öğrenmeden itibaren <b>2 yıl</b>, her hâlde fiilden itibaren <b>10 yıl</b>.",
            "Fiil aynı zamanda suç ise ve ceza zamanaşımı daha uzunsa o uygulanır (TBK m.72)."
          ],
          ref: "SMK m.157; TBK m.72",
          tuzak: "SMK kendi içinde ayrı bir zamanaşımı süresi öngörmez; TBK'ya atıf yapar."
        },
        {
          baslik: "Lisans alanın dava hakkı",
          maddeler: [
            "<b>İnhisari</b> lisans alan (aksi kararlaştırılmamışsa) hak sahibinin açabileceği davaları <b>kendi adına</b> açar.",
            "<b>İnhisari olmayan</b> lisans alan önce hak sahibinden dava açmasını ister; <b>3 ay</b> içinde açılmazsa kendisi açar.",
            "Ciddi zarar tehlikesinde süre dolmadan <b>ihtiyati tedbir</b> isteyebilir; tedbir verilirse dava da açabilir."
          ],
          ref: "SMK m.158",
          tuzak: "Coğrafi işarette kullanıcılar için de benzer 3 ay kuralı vardır (m.53/2)."
        },
        {
          baslik: "İhtiyati tedbir",
          maddeler: [
            "Dava açma hakkı olanlar, tecavüzün <b>gerçekleştiğini</b> veya ciddi ve etkin hazırlık yapıldığını ispatla tedbir ister.",
            "Kapsam: fiillerin önlenmesi/durdurulması; <b>gümrük ve serbest bölgeler dâhil</b> elkoyma; <b>teminat</b>.",
            "Hüküm yoksa <b>HMK (6100)</b> uygulanır."
          ],
          ref: "SMK m.159",
          tuzak: "Elkoyma, tecavüze konu olmayan diğer ürünlerin üretimini engellemeyecek şekilde yapılır."
        },
        {
          baslik: "Cezai yaptırımlar — genel tablo",
          maddeler: [
            "SMK'daki tek ceza maddesi <b>m.30</b> (marka); patent, tasarım, coğrafi işaret için hapis cezası <b>yoktur</b>.",
            "Marka suçları <b>şikâyete bağlı</b>; ceza için markanın <b>Türkiye'de tescilli</b> olması şart.",
            "Tüzel kişi faaliyetinde işlenirse <b>güvenlik tedbirleri</b> uygulanır.",
            "<b>Hızlı imha</b>: muhafazası güç suç eşyası numune alınıp maliyeye gönderilir; imha <b>3 kişilik</b> komisyon huzurunda (m.163)."
          ],
          ref: "SMK m.30, m.163",
          tuzak: "Tescilsiz marka için SMK m.30 cezası uygulanamaz; ancak haksız rekabet (TTK m.62) gündeme gelebilir."
        },
        {
          baslik: "Hükümsüzlük — karşılaştırmalı özet",
          maddeler: [
            "Marka: m.25, dava süresi sınırı yok, <b>5 yıl sessiz kalma</b>; Kurum taraf değil.",
            "Tasarım/patent/FM: koruma süresince + sona ermeyi izleyen <b>5 yıl</b>.",
            "Tümünde etki <b>geçmişe</b> dönük; kesinleşmiş-uygulanmış kararlar ve sözleşmeler korunur (hakkaniyet iadesi saklı).",
            "Kesinleşen kararı mahkeme Kuruma <b>resen</b> gönderir; sicilden terkin edilir."
          ],
          ref: "SMK m.25-27, m.78, m.138-139, m.144",
          tuzak: "Kullanmama/yaygın ad nedeniyle iptal sadece markaya özgüdür (Kurum karar verir); patent ve tasarımda kullanmama hakkı sona erdirmez."
        }
      ]
    },

    /* ===================== ULUSLARARASI ===================== */
    {
      id: "uluslararasi", ad: "Uluslararası Anlaşmalar", ikon: "🌐",
      kartlar: [
        {
          baslik: "Paris Sözleşmesi — temel ilkeler",
          maddeler: [
            "<b>20 Mart 1883</b> tarihli; sınai mülkiyetin korunmasına ilişkin temel çok taraflı sözleşme (WIPO yönetir).",
            "<b>Ulusal muamele</b> (m.2), <b>rüçhan hakkı</b> (m.4), patentlerin ve markaların <b>bağımsızlığı</b> (m.4bis, m.6).",
            "Türkiye'de <b>8.8.1975</b> tarihli ve 7/10464 sayılı BKK ile onaylanmıştır (SMK m.2/ğ).",
            "Haksız rekabete karşı koruma (m.10bis) ve sergilerde <b>geçici koruma</b> (m.11)."
          ],
          ref: "Paris Sözl.; SMK m.2/ğ, m.3",
          tuzak: "Paris'te “en çok kayrılan ulus” ilkesi yoktur; o TRIPS ile gelmiştir."
        },
        {
          baslik: "Paris — rüçhan süreleri",
          maddeler: [
            "Patent ve <b>faydalı model</b>: <b>12 ay</b>.",
            "Endüstriyel tasarım ve <b>marka</b>: <b>6 ay</b>.",
            "Süre ilk usulüne uygun başvuru tarihinden başlar; ilk başvurunun sonucu önemsizdir.",
            "SMK karşılıkları: marka m.12, tasarım m.62, patent/FM m.93."
          ],
          ref: "Paris m.4; SMK m.12, 62, 93",
          tuzak: "Tasarımda rüçhan faydalı model başvurusuna da dayanabilir; süre yine 6 aydır."
        },
        {
          baslik: "Paris — marka hükümleri",
          maddeler: [
            "<b>6bis</b>: tanınmış markalar → SMK m.6/4.",
            "<b>6ter</b>: devlet armaları, bayraklar, resmî damga ve uluslararası kuruluş işaretleri → SMK m.5/1-g.",
            "<b>6quinquies</b>: menşe ülkede tescilli markanın “olduğu gibi” (telle quelle) kabulü.",
            "<b>6septies</b>: ticari vekil/temsilcinin izinsiz tescili → SMK m.6/2, m.10."
          ],
          ref: "Paris m.6bis-6septies",
          tuzak: "6bis tanınmış marka nispi ret (itirazla), 6ter işaretleri mutlak ret nedenidir."
        },
        {
          baslik: "Paris — patent hükümleri",
          maddeler: [
            "Kullanmama nedeniyle zorunlu lisans: başvurudan <b>4 yıl</b> veya patentin verilmesinden <b>3 yıl</b> (hangisi geç dolarsa) önce istenemez (m.5A).",
            "Ücretlerin ödenmesi için en az <b>6 ay</b> ek süre (m.5bis).",
            "Geçici olarak ülkede bulunan gemi/uçak/kara taşıtlarında kullanım ihlal değil (m.5ter) → SMK m.85/3-d."
          ],
          ref: "Paris m.5A, 5bis, 5ter; SMK m.130",
          tuzak: "SMK m.130'daki 3 yıl/4 yıl düzeni Paris m.5A ile uyumludur."
        },
        {
          baslik: "Madrid Protokolü",
          maddeler: [
            "Markaların uluslararası tescili; Madrid Anlaşması <b>1891</b>, Protokol <b>1989</b>; WIPO Uluslararası Bürosu (Cenevre) yürütür.",
            "Türkiye Protokole <b>97/9731</b> sayılı BKK ile katıldı (1999'da yürürlük).",
            "Başvuru <b>menşe ofis</b> üzerinden yapılır; Türkiye'de Kuruma yapılmış ulusal başvuru ile <b>aynı sonuçları</b> doğurur.",
            "Uluslararası başvuru uluslararası başvuru tarihinin <b>ilk saat ve dakikasında</b> yapılmış sayılır; aynı tarihte küçük tescil numarası önceliklidir."
          ],
          ref: "SMK m.14",
          tuzak: "Madrid ile tek bir “uluslararası marka” doğmaz; belirlenen her ülkede ulusal tescil etkisi doğar."
        },
        {
          baslik: "Madrid — süreler",
          maddeler: [
            "Uluslararası tescilin süresi <b>10 yıl</b>, yenilenebilir.",
            "Temel başvuru/tescile <b>5 yıl</b> bağımlılık (merkezi saldırı).",
            "Temel marka düşerse <b>3 ay</b> içinde ulusal başvuruya <b>dönüştürme</b> (transformation), aynı tarihle.",
            "Ret bildirimi süresi <b>12 ay</b>; beyanla <b>18 ay</b> (itiraz hâlinde daha sonra da)."
          ],
          ref: "Madrid Protokolü m.5, 6, 9quinquies",
          tuzak: "5 yıllık bağımlılık süresi uluslararası tescil tarihinden başlar."
        },
        {
          baslik: "PCT (Patent İşbirliği Antlaşması)",
          maddeler: [
            "<b>1970 Washington</b>; Türkiye <b>96/7772</b> sayılı BKK ile katıldı (1996).",
            "Tek uluslararası başvuru + <b>uluslararası araştırma</b> + rüçhandan itibaren <b>18 ay</b>da uluslararası yayım.",
            "Ulusal aşamaya giriş: rüçhan tarihinden itibaren <b>30 ay</b> (PCT m.22 ve 39).",
            "PCT ile Türkiye'de ulusal aşamaya giren başvurular SMK m.83/3'te <b>tekniğin bilinen durumuna</b> dâhildir."
          ],
          ref: "SMK m.83/3-a",
          tuzak: "PCT patent VERMEZ; patent verme yetkisi ulusal/bölgesel ofislerdedir."
        },
        {
          baslik: "EPC (Avrupa Patent Sözleşmesi)",
          maddeler: [
            "<b>1973 Münih</b>; Avrupa Patent Ofisi (EPO) tek başvuruyla Avrupa patenti verir.",
            "Türkiye <b>2000/842</b> sayılı BKK ile katıldı (2000).",
            "Avrupa patenti verildikten sonra her ülkede <b>ulusal patent</b> demeti gibi etki doğurur (validasyon).",
            "Türkiye'nin belirlendiği ve belirleme ücretinin ödendiği Avrupa başvuruları tekniğin bilinen durumuna dâhildir (m.83/3-b)."
          ],
          ref: "SMK m.83/3-b",
          tuzak: "EPC bir AB düzenlemesi değildir; AB üyesi olmayan Türkiye de taraftır."
        },
        {
          baslik: "TRIPS",
          maddeler: [
            "DTÖ Kuruluş Anlaşması (<b>15.4.1994</b>, Marakeş) eki; fikri mülkiyette <b>asgari</b> koruma standartları.",
            "<b>Ulusal muamele</b> + <b>en çok kayrılan ulus</b> ilkesi.",
            "Asgari süreler: patent <b>20 yıl</b> (başvurudan), tasarım <b>10 yıl</b>, marka ilk tescil ve yenileme <b>en az 7 yıl</b>, sınırsız yenileme.",
            "Değiştiren Protokol (6471 sayılı Kanun): eczacılık ürünü ihracatı için zorunlu lisans → SMK m.129/1-ç."
          ],
          ref: "SMK m.3/c, m.129/1-ç",
          tuzak: "SMK m.3 korumayı Paris'e ek olarak DTÖ Anlaşması kapsamındaki kişilere de tanır."
        },
        {
          baslik: "Sınıflandırma anlaşmaları",
          maddeler: [
            "<b>Nis (Nice)</b>: marka mal/hizmet sınıflandırması — <b>45 sınıf</b> (1-34 mal, 35-45 hizmet); SMK m.11/3.",
            "<b>Lokarno</b>: endüstriyel tasarım ürün sınıflandırması; SMK m.61/5 (97/9731 BKK).",
            "<b>Viyana</b>: markaların <b>şekil unsurlarının</b> sınıflandırması.",
            "<b>Strazburg</b>: Uluslararası Patent Sınıflandırması (<b>IPC</b>)."
          ],
          ref: "SMK m.11/3, m.61/5",
          tuzak: "Viyana = şekil unsurları (logo), Nis = mal/hizmet; karıştırma."
        },
        {
          baslik: "Budapeşte Anlaşması",
          maddeler: [
            "Patent işlemleri amacıyla <b>mikroorganizmaların tevdiinin</b> uluslararası kabulü.",
            "Tek bir uluslararası tevdi makamına tevdi tüm taraf ülkelerde geçerli.",
            "Materyal erişilemez olursa yeniden tevdi ve belge suretinin <b>4 ay</b> içinde Kuruma gönderilmesi gerekir.",
            "Türkiye <b>97/9731</b> sayılı BKK ile katıldı."
          ],
          ref: "SMK m.92/2-3",
          tuzak: "Tevdi edilen biyolojik materyal, yazılı açıklamayı tamamlayıcı “yeterli açıklama” sayılır."
        },
        {
          baslik: "Lahey Anlaşması",
          maddeler: [
            "Endüstriyel tasarımların <b>uluslararası tescili</b> (WIPO).",
            "Türkiye <b>1999 Cenevre Senedi</b>ne taraftır.",
            "Tek başvuruda aynı Lokarno sınıfından <b>100</b>'e kadar tasarım.",
            "Tescil <b>5 yıl</b>, yenilenebilir; Cenevre Senedinde asgari toplam koruma <b>15 yıl</b>."
          ],
          ref: "Lahey Anlaşması (Cenevre Senedi)",
          tuzak: "Lahey tasarım, Madrid marka, PCT patent içindir."
        },
        {
          baslik: "WIPO ve DTÖ",
          maddeler: [
            "<b>WIPO</b>: 1967 Stockholm Sözleşmesi ile kurulan BM uzman kuruluşu; Paris, Madrid, PCT, Lahey, Nis, Lokarno, Strazburg, Viyana, Budapeşte'yi yönetir.",
            "<b>DTÖ</b>: TRIPS'i yönetir; uyuşmazlık çözüm mekanizması vardır.",
            "SMK m.3: Paris veya DTÖ kapsamında başvuru hakkı olanlar ve <b>karşılıklılık</b> ilkesi kapsamındaki kişiler korunur."
          ],
          ref: "SMK m.3",
          tuzak: "EPC'yi WIPO değil Avrupa Patent Teşkilatı (EPO) yönetir."
        }
      ]
    },

    /* ===================== TEMEL HUKUK ===================== */
    {
      id: "temel", ad: "Temel Hukuk", ikon: "§",
      kartlar: [
        {
          baslik: "TMK m.1 — Hukukun uygulanması ve kaynakları",
          maddeler: [
            "Kanun, <b>sözüyle ve özüyle</b> değindiği bütün konularda uygulanır.",
            "Kanunda hüküm yoksa hâkim <b>örf ve âdet</b> hukukuna göre karar verir.",
            "O da yoksa hâkim, kendisi <b>kanun koyucu olsaydı</b> koyacağı kurala göre karar verir.",
            "Hâkim karar verirken <b>bilimsel görüşler</b> ve <b>yargı kararlarından</b> yararlanır."
          ],
          ref: "TMK m.1",
          tuzak: "Bilimsel görüşler ve yargı kararları bağlayıcı kaynak değil, yardımcı kaynaktır."
        },
        {
          baslik: "TMK başlangıç hükümleri (m.2-7)",
          maddeler: [
            "m.2: Herkes haklarını kullanırken ve borçlarını yerine getirirken <b>dürüstlük kuralına</b> uymak zorunda; hakkın açıkça kötüye kullanılmasını hukuk düzeni korumaz.",
            "m.3: Kanunun iyiniyete sonuç bağladığı hâllerde asıl olan <b>iyiniyetin varlığıdır</b> (karine).",
            "m.4: Takdir yetkisi tanınan hâllerde hâkim <b>hukuka ve hakkaniyete</b> göre karar verir.",
            "m.6: Kanunda aksi yoksa taraflar iddialarını <b>ispatla yükümlüdür</b>; m.7: resmî sicil ve senetler aksi ispatlanıncaya kadar doğru kabul edilir."
          ],
          ref: "TMK m.2-7",
          tuzak: "Durumun gereklerine göre beklenen özeni göstermeyen kimse iyiniyet iddiasında bulunamaz (TMK m.3, ikinci cümle)."
        },
        {
          baslik: "Kişilik ve hak ehliyeti",
          maddeler: [
            "Her insanın <b>hak ehliyeti</b> vardır; bütün insanlar hak ve borçlara ehil olmada eşittir.",
            "Kişilik <b>tam ve sağ doğmak</b> koşuluyla <b>ana rahmine düştüğü andan</b> başlar, <b>ölümle</b> sona erer.",
            "Ölümü kesin olmayan kişiler için <b>gaiplik</b>: ölüm tehlikesinde kaybolmadan itibaren <b>1 yıl</b>, uzun süre haber alınamamada son haberden <b>5 yıl</b>.",
            "Ölüm karinesi: cesedi bulunamasa da ölümü kesin gösteren durumlarda ölüm gerçekleşmiş sayılır."
          ],
          ref: "TMK m.8, m.28, m.31-32",
          tuzak: "Cenin sağ doğmak şartıyla hak ehliyetine sahiptir; ölü doğarsa hiç kazanılmamış sayılır."
        },
        {
          baslik: "Fiil ehliyeti ve erginlik",
          maddeler: [
            "Fiil ehliyeti için: <b>ayırt etme gücü</b> + <b>ergin olma</b> + <b>kısıtlı olmama</b>.",
            "Erginlik <b>18 yaşın</b> doldurulmasıyla başlar; <b>evlenme</b> kişiyi ergin kılar.",
            "<b>15 yaşını</b> doldurmuş küçük, kendi isteği ve velisinin rızasıyla <b>mahkeme kararıyla</b> ergin kılınabilir.",
            "Ayırt etme gücü olmayanın işlemleri, kanun istisnaları dışında hukuki sonuç doğurmaz."
          ],
          ref: "TMK m.9-15",
          tuzak: "Ayırt etme gücü olan küçük/kısıtlı, karşılıksız kazanma ve kişiye sıkı bağlı hakları kullanmada yasal temsilcinin rızasına muhtaç değildir (TMK m.16)."
        },
        {
          baslik: "Kişiliğin korunması, ad ve yerleşim yeri",
          maddeler: [
            "Kimse hak ve fiil ehliyetinden, özgürlüğünden <b>kısmen de olsa vazgeçemez</b> (m.23).",
            "Kişilik hakkına hukuka aykırı saldırıda: saldırı tehlikesinin önlenmesi, durdurulması, hukuka aykırılığın <b>tespiti</b> davaları (m.24-25).",
            "Adı çekişmeli olan veya adı izinsiz kullanılan kişi <b>adın korunması</b> davası açabilir (m.26).",
            "Yerleşim yeri: <b>sürekli kalma niyetiyle</b> oturulan yer; aynı anda birden çok yerleşim yeri olamaz (m.19)."
          ],
          ref: "TMK m.19, m.23-26",
          tuzak: "Başkasına ait ad, marka başvurusunda SMK m.6/6 nispi ret nedenidir."
        },
        {
          baslik: "Tüzel kişiler",
          maddeler: [
            "Tüzel kişiler: <b>kişi toplulukları</b> (dernek, şirket) ve <b>mal toplulukları</b> (vakıf).",
            "Tüzel kişiler cins, yaş, hısımlık gibi insana özgü nitelikler dışında tüm haklara ehildir.",
            "Fiil ehliyeti kanuna ve kuruluş belgesine göre gerekli <b>organlara</b> sahip olmakla kazanılır; organlar iradeyi açıklar.",
            "Dernek en az <b>7</b> gerçek veya tüzel kişiyle kurulur."
          ],
          ref: "TMK m.47-50, m.56",
          tuzak: "Sınai mülkiyet hakkı tüzel kişi adına da tescil edilebilir; tüzel kişi yetkili organlarınca temsil edilir (SMK m.160/2)."
        },
        {
          baslik: "TBK — Vekâlet sözleşmesi",
          maddeler: [
            "Vekil, vekâlet verenin bir işini görmeyi veya işlemini yapmayı üstlenir.",
            "Sözleşmede kararlaştırılmışsa veya <b>teamül</b> varsa vekil <b>ücrete</b> hak kazanır.",
            "Vekil işi kural olarak <b>bizzat</b> yapar; <b>özen ve sadakat</b> borcu; talimatlara uyar; <b>hesap verme</b> borcu.",
            "Dava açma, sulh, hakeme başvurma, kambiyo taahhüdü, bağışlama, kefalet, taşınmaz devri gibi işler <b>özel yetki</b> gerektirir."
          ],
          ref: "TBK m.502-514",
          tuzak: "Genel vekâlet dava açma/sulh/feragat gibi işleri kapsamaz; özel yetki gerekir."
        },
        {
          baslik: "TBK — Vekâletin sona ermesi",
          maddeler: [
            "Taraflar vekâleti <b>her zaman</b> azil veya istifa ile sona erdirebilir.",
            "<b>Uygun olmayan zamanda</b> sona erdiren taraf, diğerinin zararını gidermekle yükümlüdür.",
            "Aksi kararlaştırılmadıkça vekilin veya vekâlet verenin <b>ölümü, ehliyetini kaybetmesi veya iflası</b> vekâleti sona erdirir.",
            "Sona ermeyi öğrenmeden önce vekilin yaptığı işlemler vekâlet vereni bağlar."
          ],
          ref: "TBK m.512-514",
          tuzak: "Azil/istifa hakkından önceden feragat edilemez; sadece zamansız sona erdirme tazminat doğurur."
        },
        {
          baslik: "TBK — Haksız fiil ve zamanaşımı",
          maddeler: [
            "Kusurlu ve hukuka aykırı fiille başkasına zarar veren zararı gidermekle yükümlüdür (TBK m.49).",
            "Tazminat istemi: zararı ve tazminat yükümlüsünü öğrenmeden itibaren <b>2 yıl</b>, her hâlde fiilden itibaren <b>10 yıl</b>.",
            "Genel zamanaşımı <b>10 yıl</b>; kira, faiz, vekâletten doğan alacaklar gibi bazı alacaklarda <b>5 yıl</b>.",
            "SMK m.157 sınai mülkiyet taleplerinde bu TBK hükümlerine yollama yapar."
          ],
          ref: "TBK m.49, m.72, m.146-147",
          tuzak: "Vekâlet sözleşmesinden doğan alacaklar 5 yıllık zamanaşımına tabidir (TBK m.147)."
        },
        {
          baslik: "TTK — Ticaret unvanı",
          maddeler: [
            "Her tacir bir ticaret unvanı seçmek ve kullanmak zorundadır; işletmenin açıldığı günden itibaren <b>15 gün</b> içinde ticaret siciline tescil ve ilan ettirir.",
            "Gerçek kişi tacirin unvanı: <b>ad ve soyadından</b> oluşur (ad kısaltılabilir, soyadı kısaltılamaz).",
            "Anonim ve limited şirket unvanında <b>işletme konusu</b> ve <b>şirket türü</b> yer alır.",
            "Unvan gerçeğe uygun olmalı, yanıltıcı olmamalı; <b>işletmeden ayrı olarak devredilemez</b>."
          ],
          ref: "TTK m.39 vd.",
          tuzak: "Ticaret unvanı işletmeden bağımsız devredilemez; sınai mülkiyet hakları ise işletmeden bağımsız devredilebilir (SMK m.148/2)."
        },
        {
          baslik: "Ticaret unvanı – marka ilişkisi",
          maddeler: [
            "Başkasının <b>ticaret unvanını</b> içeren marka başvurusu, hak sahibinin itirazı üzerine reddedilir (SMK m.6/6).",
            "Tescilli markanın <b>ticaret unvanı veya işletme adı</b> olarak kullanılması marka sahibince yasaklanabilir (SMK m.7/3-e).",
            "Tescilsiz unvan/işaret için önceden hak elde edilmişse m.6/3 itirazı mümkündür."
          ],
          ref: "SMK m.6/3, m.6/6, m.7/3-e",
          tuzak: "Unvanın ticaret siciline tescili, markaya tecavüzü haklı kılmaz."
        },
        {
          baslik: "TTK — Haksız rekabet",
          maddeler: [
            "Rakipler arasında veya tedarikçilerle müşteriler arasındaki ilişkileri etkileyen <b>aldatıcı</b> veya <b>dürüstlük kuralına aykırı</b> davranış ve uygulamalar.",
            "Örnekler: başkasını kötüleme, yanıltıcı açıklama, <b>karıştırılmaya yol açma</b>, sözleşmeyi ihlale yöneltme, başkasının iş ürününden yetkisiz yararlanma, <b>iş sırlarını</b> ifşa.",
            "Davalar: <b>tespit, men, ref</b>, yanlış beyanların düzeltilmesi, maddi ve manevi tazminat.",
            "Kusur yalnızca <b>tazminat</b> için aranır; tespit, men ve ref için kusur gerekmez."
          ],
          ref: "TTK m.54-56",
          tuzak: "Haksız rekabet hükümleri tescilsiz işaretleri de korur; SMK ile birlikte uygulanabilir."
        },
        {
          baslik: "Haksız rekabet — zamanaşımı ve ceza",
          maddeler: [
            "Hukuk davaları: öğrenmeden itibaren <b>1 yıl</b>, her hâlde doğumundan itibaren <b>3 yıl</b> (ceza zamanaşımı uzunsa o).",
            "Kasten haksız rekabet: <b>2 yıla kadar hapis veya adli para cezası</b>.",
            "Ceza kovuşturması <b>şikâyete bağlıdır</b>.",
            "Davayı zarar gören rakip yanında <b>müşteriler</b>, mesleki/ekonomik birlikler ve tüketici dernekleri de açabilir."
          ],
          ref: "TTK m.56, m.60, m.62-63",
          tuzak: "Haksız rekabette zamanaşımı 1/3 yıl; genel haksız fiilde (TBK m.72) 2/10 yıl."
        }
      ]
    }
  ],

  /* ===================== SÜRELER TABLOSU ===================== */
  sureler: [
    // MARKA
    { konu: "Marka şeklî eksikliklerin giderilmesi", sure: "2 ay", ref: "SMK m.15/1", kitap: "marka" },
    { konu: "Marka rüçhan süresi (Paris/DTÖ ilk başvuru)", sure: "6 ay", ref: "SMK m.12/1", kitap: "marka" },
    { konu: "Marka rüçhan belgesinin sunulması", sure: "Başvurudan itibaren 3 ay", ref: "SMK m.13/1", kitap: "marka" },
    { konu: "Yayıma itiraz (gerekçe + ücret dâhil)", sure: "Bülten yayımından itibaren 2 ay", ref: "SMK m.18", kitap: "marka" },
    { konu: "Kullanım ispatı istenebilmesi için itiraz markasının tescilli olma süresi", sure: "En az 5 yıl (önceki 5 yıllık kullanım)", ref: "SMK m.19/2", kitap: "marka" },
    { konu: "Kurum kararlarına itiraz (marka)", sure: "Bildirimden itibaren 2 ay", ref: "SMK m.20/2", kitap: "marka" },
    { konu: "Marka koruma süresi", sure: "Başvurudan itibaren 10 yıl (10'ar yıl yenilenir)", ref: "SMK m.23/1", kitap: "marka" },
    { konu: "Marka yenileme", sure: "Süre bitiminden önceki 6 ay; sonra 6 ay ek ücretle", ref: "SMK m.23/2", kitap: "marka" },
    { konu: "Kullanma zorunluluğu / iptal", sure: "Tescilden itibaren 5 yıl; 5 yıl kesintisiz ara", ref: "SMK m.9/1", kitap: "marka" },
    { konu: "İptal talebinde dikkate alınmayan kullanım", sure: "Talepten önceki 3 ay", ref: "SMK m.26/4", kitap: "marka" },
    { konu: "İptal talebine marka sahibinin cevabı", sure: "Tebliğden itibaren 1 ay (+1 aya kadar ek süre)", ref: "SMK m.26/7", kitap: "marka" },
    { konu: "Hükümsüzlükte sessiz kalma", sure: "Birbirini izleyen 5 yıl", ref: "SMK m.25/6", kitap: "marka" },
    { konu: "Yenilenmeyen marka için önceki sahibin itiraz koruması", sure: "Sona ermeden itibaren 2 yıl", ref: "SMK m.6/8", kitap: "marka" },
    // COĞRAFİ İŞARET
    { konu: "GÜA için geleneksel kullanım", sure: "En az 30 yıl", ref: "SMK m.34/3", kitap: "ci" },
    { konu: "Ret kararına başvuru sahibinin itirazı", sure: "Bildirimden itibaren 2 ay", ref: "SMK m.40/1", kitap: "ci" },
    { konu: "Coğrafi işaret/GÜA yayımına itiraz", sure: "Yayımdan itibaren 3 ay", ref: "SMK m.40/2", kitap: "ci" },
    { konu: "Tescil ücretinin ödenmesi", sure: "Bildirimden itibaren 2 ay", ref: "SMK m.41/1", kitap: "ci" },
    // TASARIM
    { konu: "Tasarım hoşgörü (yenilik dokunulmazlık) süresi", sure: "Başvuru/rüçhandan önceki 12 ay", ref: "SMK m.57/2", kitap: "tasarim" },
    { konu: "Tasarım rüçhan süresi (ve sergi rüçhanı)", sure: "6 ay", ref: "SMK m.62/1, 62/5", kitap: "tasarim" },
    { konu: "Yayımın ertelenmesi", sure: "Başvuru/rüçhandan itibaren 30 ay", ref: "SMK m.66/1", kitap: "tasarim" },
    { konu: "Kurum kararına itiraz (tasarım)", sure: "Bildirimden itibaren 2 ay", ref: "SMK m.67/1", kitap: "tasarim" },
    { konu: "Tescile üçüncü kişi itirazı", sure: "Tescilin yayımından itibaren 3 ay", ref: "SMK m.67/2", kitap: "tasarim" },
    { konu: "Tescilli tasarım koruma süresi", sure: "5 yıl; 5'er yıl yenilemeyle toplam 25 yıl", ref: "SMK m.69/1", kitap: "tasarim" },
    { konu: "Tescilsiz tasarım koruma süresi", sure: "İlk kamuya sunumdan itibaren 3 yıl", ref: "SMK m.69/2", kitap: "tasarim" },
    { konu: "Tasarım yenileme", sure: "Bitişten önceki 6 ay; sonra 6 ay ek ücretle", ref: "SMK m.69/4", kitap: "tasarim" },
    { konu: "Tasarım gaspı davası", sure: "Yayım/kamuya sunumdan itibaren 3 yıl (kötüniyette süre yok)", ref: "SMK m.71/3", kitap: "tasarim" },
    { konu: "Tasarım hükümsüzlük davası", sure: "Koruma süresince + sona ermeden itibaren 5 yıl", ref: "SMK m.78/3", kitap: "tasarim" },
    // PATENT / FM
    { konu: "Patent/FM hoşgörü süresi", sure: "Başvuru/rüçhandan önceki 12 ay", ref: "SMK m.84/1", kitap: "patent" },
    { konu: "Patent/FM rüçhan süresi (ve sergi rüçhanı)", sure: "12 ay", ref: "SMK m.93/1, 93/6", kitap: "patent" },
    { konu: "Patent rüçhan talebi / belgeler", sure: "Başvurudan itibaren 2 ay / 3 ay", ref: "SMK m.94/1", kitap: "patent" },
    { konu: "Eksiklikler ve Türkçe çeviri (bildirimsiz)", sure: "Başvurudan itibaren 2 ay", ref: "SMK m.95/2, 143/2", kitap: "patent" },
    { konu: "Patent araştırma talebi", sure: "Başvurudan itibaren 12 ay (Cumhurbaşkanı yarıya indirebilir)", ref: "SMK m.96/1, 96/4", kitap: "patent" },
    { konu: "Başvurunun yayımı", sure: "Başvuru/rüçhandan itibaren 18 ay", ref: "SMK m.97/1", kitap: "patent" },
    { konu: "İnceleme talebi", sure: "Araştırma raporu bildiriminden itibaren 3 ay", ref: "SMK m.98/1", kitap: "patent" },
    { konu: "İnceleme bildirimlerine cevap / bildirim sayısı", sure: "3 ay / en fazla 3 bildirim", ref: "SMK m.98/3-4", kitap: "patent" },
    { konu: "Patente üçüncü kişi itirazı", sure: "Verilme kararının yayımından itibaren 6 ay", ref: "SMK m.99/1", kitap: "patent" },
    { konu: "İtiraza patent sahibinin cevabı", sure: "Bildirimden itibaren 3 ay", ref: "SMK m.99/4", kitap: "patent" },
    { konu: "Kurum kararlarına itiraz (patent/FM)", sure: "Bildirimden itibaren 2 ay", ref: "SMK m.100", kitap: "patent" },
    { konu: "Patent / faydalı model koruma süresi", sure: "20 yıl / 10 yıl (uzatılamaz)", ref: "SMK m.101/1", kitap: "patent" },
    { konu: "Yıllık ücretin başlaması / ek ücretle ödeme", sure: "2. yılın sonu / vadeden itibaren 6 ay", ref: "SMK m.101/2-3", kitap: "patent" },
    { konu: "Telafi ücreti ile yeniden geçerlilik", sure: "Sona erme bildiriminden itibaren 2 ay", ref: "SMK m.101/4", kitap: "patent" },
    { konu: "İşlemlerin devamı", sure: "Bildirimden itibaren 2 ay", ref: "SMK m.107/1", kitap: "patent" },
    { konu: "Hakların yeniden tesisi", sure: "Engelin kalkmasından 2 ay, en geç süre bitiminden 1 yıl", ref: "SMK m.107/2", kitap: "patent" },
    { konu: "Patent gaspı davası", sure: "Verilme yayımından itibaren 2 yıl (kötüniyette koruma süresi sonuna kadar)", ref: "SMK m.111/3", kitap: "patent" },
    { konu: "İşverenin bildirimi düzeltme talebi", sure: "Bildirimden itibaren 2 ay", ref: "SMK m.114/4", kitap: "patent" },
    { konu: "İşverenin hizmet buluşuna hak talebi", sure: "Bildirimden itibaren 4 ay", ref: "SMK m.115/1", kitap: "patent" },
    { konu: "Hakkaniyete aykırılık itirazı", sure: "İş sözleşmesinin bitiminden itibaren en geç 6 ay", ref: "SMK m.117/3", kitap: "patent" },
    { konu: "Kullanmama nedeniyle zorunlu lisans", sure: "Verilme yayımından 3 yıl / başvurudan 4 yıl (geç olan); 3 yıldan fazla ara", ref: "SMK m.130/2", kitap: "patent" },
    { konu: "Patent / FM hükümsüzlük davası", sure: "Koruma süresince + sona ermeden itibaren 5 yıl", ref: "SMK m.138/5, 144/3", kitap: "patent" },
    { konu: "FM araştırma talebi", sure: "Şeklî uygunluk bildiriminden itibaren 2 ay", ref: "SMK m.143/5", kitap: "patent" },
    { konu: "FM araştırma raporuna itiraz / 3. kişi görüşü", sure: "Rapor yayımından itibaren 3 ay", ref: "SMK m.143/8", kitap: "patent" },
    { konu: "FM → patent dönüştürme talebi", sure: "Araştırma raporu bildirimini izleyen 3 ay sonuna kadar", ref: "SMK m.104/2", kitap: "patent" },
    // ORTAK
    { konu: "Genel işlem süresi (belirtilmemişse)", sure: "Bildirimden itibaren 2 ay", ref: "SMK m.146", kitap: "ortak" },
    { konu: "Paydaşların önalım hakkı", sure: "Bildirimden 3 ay, her hâlde satıştan 2 yıl", ref: "SMK m.148/3", kitap: "ortak" },
    { konu: "Tecavüz olmadığının tespiti — hak sahibinin cevabı", sure: "Tebliğden itibaren 1 ay", ref: "SMK m.154/1", kitap: "ortak" },
    { konu: "İnhisari olmayan lisans alanın dava açabilmesi", sure: "Bildirimden itibaren 3 ay beklenir", ref: "SMK m.158/2", kitap: "ortak" },
    { konu: "Elektronik tebligatın yapılmış sayılması", sure: "En geç posta kutusuna konmayı izleyen 10. gün", ref: "SMK m.160/6", kitap: "ortak" },
    { konu: "Eksik ücretin tamamlanması", sure: "Bildirimden itibaren 1 ay", ref: "SMK m.161/3", kitap: "ortak" },
    { konu: "Zamanaşımı", sure: "TBK hükümleri (haksız fiilde 2 yıl / 10 yıl)", ref: "SMK m.157; TBK m.72", kitap: "ortak" },
  ],

  /* ===================== SAYILARLA SMK ===================== */
  sayilar: [
    "6769 sayılı SMK: kabul <b>22.12.2016</b>, Resmî Gazete <b>10.01.2017</b> (sayı 29944); <b>5 kitap</b>: Marka, Coğrafi İşaret & GÜA, Tasarım, Patent & FM, Ortak Hükümler.",
    "SMK ile <b>551, 554, 555, 556</b> (ve 566) sayılı KHK'ler yürürlükten kalktı (m.191/3).",
    "Koruma süreleri: marka <b>10 yıl</b> (sınırsız yenileme), tasarım <b>5+5…=25 yıl</b>, tescilsiz tasarım <b>3 yıl</b>, patent <b>20 yıl</b>, faydalı model <b>10 yıl</b>.",
    "Rüçhan: marka ve tasarım <b>6 ay</b>; patent ve faydalı model <b>12 ay</b>; rüçhan belgesi hepsinde başvurudan itibaren <b>3 ay</b>.",
    "Hoşgörü süresi: tasarım, patent ve faydalı modelde <b>12 ay</b>; markada yoktur.",
    "Yayıma/tescile itiraz: marka <b>2 ay</b>, coğrafi işaret <b>3 ay</b>, tasarım <b>3 ay</b> (tescil sonrası), patent <b>6 ay</b> (verilme sonrası); faydalı modelde yok.",
    "Kurum kararlarına itiraz: tüm türlerde bildirimden itibaren <b>2 ay</b>; genel süre de <b>2 ay</b> (m.146).",
    "Kullanmama: markada iptal için <b>5 yıl</b>; patentte zorunlu lisans için <b>3 yıl/4 yıl</b>.",
    "Marka cezaları: <b>1-3 yıl</b> + <b>20.000 gün</b>; işaret kaldırma <b>1-3 yıl</b> + <b>5.000 gün</b>; yetkisiz tasarruf <b>2-4 yıl</b> + <b>5.000 gün</b>.",
    "Patent yayımı <b>18 ay</b>; araştırma talebi <b>12 ay</b>; inceleme talebi <b>3 ay</b>; en fazla <b>3</b> inceleme bildirimi.",
    "Tasarım yayım ertelemesi <b>30 ay</b>; GÜA için en az <b>30 yıl</b> geleneksel kullanım.",
    "Çalışan buluşu: işveren hak talebi <b>4 ay</b>; kamu çalışanına gelirin en az <b>1/3</b>'ü (kurum kendisi kullanırsa bir defalık bedel net ücretin <b>10 katını</b> aşamaz); üniversitede buluşu yapana en az <b>1/3</b>, öğretim elemanı tasarımında en az <b>1/2</b>.",
    "Hükümsüzlük davası: tasarım, patent ve FM'de koruma süresi + <b>5 yıl</b>; markada <b>5 yıl</b> sessiz kalma.",
    "Gasp: tasarımda <b>3 yıl</b>, patentte <b>2 yıl</b>; ikisinde de kötüniyette süre sınırı uygulanmaz.",
    "Tebligat: e-tebligat en geç <b>10. gün</b>, Bülten ile ilanen tebligat <b>7 gün</b> sonra yapılmış sayılır."
  ]
};
