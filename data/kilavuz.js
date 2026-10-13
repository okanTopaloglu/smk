// Marka İnceleme Kılavuzu — çalışma modülü ve soru bankası
// SMK atıfları data/src/6769-smk.md metniyle karşılaştırılmıştır.
// "Uygulama" olarak belirtilen noktalar Kurum/yargı uygulamasındaki yerleşik yaklaşımlardır; kılavuzdan birebir alıntı değildir.
window.KILAVUZ = {
  giris: [
    "<b>Marka İnceleme Kılavuzu</b>, TÜRKPATENT'in 6769 sayılı SMK kapsamında marka başvurularını incelerken izlediği ilkeleri örneklerle açıklayan idari bir rehberdir. SMK dönemindeki kılavuz 30 Eylül 2019'da yayımlanmış ve mutlak ret nedenlerini (SMK m.5) ele almıştır. 2021'deki güncellemeyle nispi ret nedenlerinin ilki olan <b>karıştırılma ihtimali</b> değerlendirmesine (SMK m.6/1) ilişkin ilkeler de eklenmiştir. 556 sayılı KHK döneminde de mutlak ve nispi ret nedenlerini ele alan kılavuzlar bulunuyordu.",
    "Kılavuz bir kanun ya da yönetmelik değildir; mahkemeleri bağlamaz. Ancak uzmanların ve YİDK'nın (Yeniden İnceleme ve Değerlendirme Kurulu) karar verirken izlediği ölçütleri gösterdiği için vekillik pratiğinin temel başvuru kaynağıdır. Kılavuz, Yargıtay kararlarından ve AB (ATAD/EUIPO) içtihadından yararlanır; bu nedenle ortalama tüketici, genel izlenim, baskın unsur, karşılıklı bağımlılık gibi kavramlar AB uygulamasıyla büyük ölçüde örtüşür.",
    "Sınavda sorular çoğunlukla şu noktalardan gelir: <b>SMK m.5/1 bentlerinin harfleri</b> (özellikle ç, e, g, ğ, h, ı, i bentlerinin hangi konuya ait olduğu), m.5/2'deki kullanım yoluyla ayırt edicilik istisnasının <b>yalnızca (b), (c) ve (d)</b> bentlerine uygulanması, m.5/1-ç ile m.6/1 arasındaki fark (resen inceleme ve 'ayırt edilemeyecek kadar benzer' ölçütü ile itiraz üzerine incelenen 'karıştırılma ihtimali'), m.6 fıkralarının içerikleri ve itiraz süreleri. Bu modüldeki atıflar SMK metninden kontrol edilmiştir."
  ],
  bolumler: [
    {
      id: "genel",
      ad: "Kılavuzun Amacı ve İnceleme Çerçevesi",
      konular: [
        {
          baslik: "Kılavuzun amacı ve hukuki niteliği",
          ref: "SMK m.5, m.6, m.16",
          aciklama: "Kılavuz, Kurumun inceleme uygulamasını <b>öngörülebilir ve tutarlı</b> kılmak için hazırlanmıştır. Başvuru sahipleri ve vekiller, işaretin hangi gerekçeyle reddedilebileceğini önceden değerlendirebilir. Kılavuz bağlayıcı bir düzenleme değildir; her başvuru kendi koşullarında, mal ve hizmet listesiyle birlikte değerlendirilir.",
          kabul: [],
          ret: [],
          ipucu: "'Kılavuz mahkemeyi bağlar' ya da 'kılavuz yönetmelik niteliğindedir' gibi şıklar yanlıştır."
        },
        {
          baslik: "Kılavuzun yapısı: 2019 metni ve 2021 güncellemesi",
          ref: "SMK m.5, m.6/1",
          aciklama: "2019 metni SMK m.5'teki mutlak ret nedenlerini sırayla ele alır ve tek renk, ses, hareket gibi yeni işaret türlerine örnekler verir. 2021 güncellemesi, karıştırılma ihtimali değerlendirmesinin ilkelerini (işaret benzerliği, mal/hizmet benzerliği, baskın unsur, çatı marka gibi konular) ekler. Kılavuzun kötü niyet, tanınmışlık gibi diğer nispi ret nedenlerini aynı ayrıntıda ele alıp almadığı bu modülde doğrulanamamıştır; bu konular SMK metni ve yerleşik uygulama üzerinden anlatılmıştır.",
          kabul: [],
          ret: []
        },
        {
          baslik: "Mutlak ve nispi ret ayrımı",
          ref: "SMK m.5, m.6, m.16/1, m.18",
          aciklama: "Mutlak ret nedenleri kamu yararını korur ve Kurum tarafından <b>resen</b> incelenir (m.16/1). Nispi ret nedenleri ise önceki hak sahiplerinin özel menfaatini korur ve yalnızca <b>itiraz üzerine</b> incelenir (m.6'nın her fıkrasında 'itiraz üzerine' ifadesi geçer). Yayımlanan başvuruya m.5 veya m.6'ya dayanarak yayımdan itibaren <b>iki ay</b> içinde itiraz edilebilir (m.18/1).",
          kabul: [],
          ret: [],
          ipucu: "m.5/1-ç bir mutlak ret nedenidir (resen incelenir), ama içeriği önceki markaya dayanır; m.6/1 ile karıştırmayın."
        },
        {
          baslik: "Üçüncü kişilerin görüşleri",
          ref: "SMK m.17",
          aciklama: "Başvurunun yayımlanmasından sonra <b>herkes</b>, markanın m.5/1'in <b>(ç) bendi hariç</b> diğer bentleri kapsamında tescil edilemeyeceğine ilişkin yazılı ve gerekçeli görüşünü tescile kadar Kuruma sunabilir. Görüş sunan kişi işlemlere taraf olmaz. Kurum görüşü yerinde bulursa başvuruyu kısmen veya tamamen reddeder.",
          kabul: [],
          ret: [],
          ipucu: "Görüş sunmak itiraz değildir: süreye ve ücrete bağlı değildir, ama görüş sunan taraf da olamaz."
        }
      ]
    },
    {
      id: "mutlak",
      ad: "Mutlak Ret Nedenleri (SMK m.5)",
      konular: [
        {
          baslik: "a) Marka olamayacak işaretler ve sicilde gösterilebilirlik",
          ref: "SMK m.4, m.5/1-a",
          aciklama: "SMK m.4'e göre marka her tür işaretten oluşabilir: kişi adları dâhil sözcükler, şekiller, renkler, harfler, sayılar, sesler, malların veya ambalajlarının biçimi. İki şart vardır: işaret malları/hizmetleri <b>ayırt etmeye elverişli</b> olmalı ve korumanın konusu <b>açık ve kesin</b> anlaşılacak şekilde <b>sicilde gösterilebilir</b> olmalıdır. SMK, KHK'daki 'çizimle görüntülenebilme' şartını kaldırmıştır. Ses dosyası, nota veya hareket dosyası gibi temsiller bu nedenle kabul edilebilir.",
          kabul: ["örnek: notayla ya da ses dosyasıyla açıkça gösterilen ses markası", "örnek: uluslararası renk koduyla (ör. Pantone) tanımlanmış tek renk"],
          ret: ["örnek: 'tüm renklerde' ya da 'değişebilen biçimlerde' gibi belirsiz tarifler", "örnek: yalnızca sözle tarif edilen ve nesnel olarak belirlenemeyen bir koku"],
          ipucu: "m.5/1-a, m.4'e yollama yapar. 'Grafik olarak gösterilebilme' şartı SMK'da yoktur."
        },
        {
          baslik: "b) Ayırt edicilikten yoksun işaretler",
          ref: "SMK m.5/1-b",
          aciklama: "İşaretin, ilgili tüketici gözünde malın veya hizmetin <b>ticari kaynağını</b> gösterebilmesi gerekir. Ayırt edicilik, başvurudaki mal/hizmetler ve bu mal/hizmetlerin ortalama tüketicisinin algısı esas alınarak değerlendirilir. Tanımlayıcı olmasa bile tüketicinin marka olarak algılamayacağı basit işaretler (basit geometrik şekiller, yaygın reklam ibareleri, sıradan ambalaj şekilleri) bu bent kapsamında reddedilir.",
          kabul: ["örnek: mal/hizmetle bağlantısı olmayan fantezi kelimeler", "örnek: basit bir kelimenin özgün ve dikkat çekici grafik tasarımla birleşimi"],
          ret: ["örnek: standart yazılmış tek bir nokta, çizgi, daire veya kare", "örnek: kahve için 'AROMA' gibi tüketicinin ticari kaynak olarak algılamayacağı genel ibareler"]
        },
        {
          baslik: "c) Tanımlayıcı işaretler",
          ref: "SMK m.5/1-c",
          aciklama: "Ticaret alanında malların/hizmetlerin <b>cins, çeşit, vasıf, kalite, miktar, amaç, değer, coğrafi kaynak</b>, üretim/sunum zamanı veya diğer özelliklerini belirten işaretleri <b>münhasıran ya da esas unsur olarak</b> içeren işaretler reddedilir. Amaç, bu ifadelerin herkesin kullanımına açık kalmasıdır. Tüketicinin işaretle mal arasında <b>doğrudan ve somut</b> bir bağlantı kurması tanımlayıcılık için yeterlidir; yalnızca ima eden (çağrışımsal) işaretler genellikle tescil edilebilir.",
          kabul: ["örnek: tanımlayıcı unsurun yanında yeterince ayırt edici bir esas unsur bulunan işaret (koruma tanımlayıcı unsuru tekelleştirmez)", "örnek: malı yalnızca dolaylı ima eden, düşünsel bir adım gerektiren ibare"],
          ret: ["örnek: süt ürünleri için 'TAM YAĞLI'", "örnek: kargo hizmetleri için 'HIZLI TESLİMAT'", "örnek: ekmek için '24 SAAT TAZE'"],
          ipucu: "Bentteki anahtar ifade 'münhasıran ya da esas unsur olarak içeren'dir. Ek bir ayırt edici unsur varsa ret çıkmayabilir."
        },
        {
          baslik: "ç) Önceki markayla aynı veya ayırt edilemeyecek kadar benzer işaretler",
          ref: "SMK m.5/1-ç, m.5/3",
          aciklama: "<b>Aynı veya aynı türdeki</b> mal/hizmetler için tescilli ya da daha önce başvurusu yapılmış bir markayla <b>aynı veya ayırt edilemeyecek kadar benzer</b> işaretler resen reddedilir. Kurum bu ölçütü dar yorumlar: işaretler arasındaki farklar ortalama tüketicinin genel izleniminde fark edilmeyecek kadar önemsiz olmalıdır (ör. tek harf eksikliği/değişikliği, aynı okunuş). Uygulamada 'aynı tür' mal ve hizmetler, Sınıflandırma Tebliği'ndeki <b>alt gruplar</b> esas alınarak belirlenir. Önceki marka sahibinin <b>noter onaylı açık muvafakatnamesi</b> sunulursa bu bent gereğince ret yapılamaz (m.5/3).",
          kabul: ["örnek: ortak bir unsuru paylaşan, ama ek unsurlarla genel izlenimde açıkça farklılaşan işaretler (m.5/1-ç'ye takılmaz; varsa m.6/1 itirazıyla incelenir)"],
          ret: ["örnek: önceki marka 'MULTITECH' iken aynı alt gruptaki mallar için 'MULTITEK'", "örnek: yalnızca harf büyüklüğü veya yazı karakteri değiştirilmiş aynı kelime"],
          ipucu: "Muvafakatname yalnızca (ç) bendini aşar ve noter onaylı olmalıdır. m.17'ye göre üçüncü kişi görüşleri (ç) bendine dayanamaz."
        },
        {
          baslik: "d) Ticaret alanında herkesçe kullanılan (jenerik) işaretler",
          ref: "SMK m.5/1-d",
          aciklama: "Ticaret alanında herkes tarafından kullanılan veya belirli bir <b>meslek, sanat veya ticaret grubuna</b> mensup olanları ayırt etmeye yarayan işaret veya adlandırmaları münhasıran ya da esas unsur olarak içeren işaretler reddedilir. (c) bendinden farkı şudur: işaret malın özelliğini tarif etmese bile o sektörde <b>yaygın, ortak kullanıma</b> girmiş durumdadır.",
          kabul: ["örnek: sektörde yaygın bir ibareyle birlikte esas unsur olarak ayırt edici bir kelime içeren işaret"],
          ret: ["örnek: lokanta hizmetleri için 'LOKANTA' veya 'KEBAPÇI'", "örnek: eczacılık hizmetleri için sektörde ortak kullanılan eczane işareti ya da 'ECZANE' ibaresi", "örnek: kuaförlük hizmetleri için 'KUAFÖR'"]
        },
        {
          baslik: "e) Şekil ve diğer özelliklere ilişkin ret nedeni",
          ref: "SMK m.5/1-e, m.5/2",
          aciklama: "Şunları <b>münhasıran</b> içeren işaretler reddedilir: (1) malın <b>doğası gereği</b> ortaya çıkan şekli veya başka özelliği, (2) <b>teknik bir sonucu elde etmek için zorunlu</b> şekil veya özellik, (3) mala <b>asli değerini veren</b> şekil veya özellik. Bu bent, teknik çözümlerin ve estetik değerlerin marka hakkıyla süresiz tekelleştirilmesini önler. SMK, KHK'dan farklı olarak 'şekil' yanında 'başka bir özellik' ifadesini de kullanır.",
          kabul: ["örnek: işlevsel zorunluluk taşımayan, malın olağan şeklinden belirgin biçimde ayrılan özgün bir ambalaj şekli"],
          ret: ["örnek: bir topun küre şekli (doğası gereği)", "örnek: birbirine geçme işlevini sağlayan oyuncak tuğla şekli (teknik sonuç)", "örnek: değeri büyük ölçüde tasarımından gelen bir dekoratif objenin şekli (asli değer)"],
          ipucu: "Çok sık sorulur: m.5/2 yalnızca (b), (c) ve (d) bentlerine istisna getirir. (e) bendi kapsamındaki bir şekil, ne kadar uzun kullanılırsa kullanılsın tescil edilemez."
        },
        {
          baslik: "f) Halkı yanıltacak işaretler",
          ref: "SMK m.5/1-f",
          aciklama: "Mal veya hizmetin <b>niteliği, kalitesi veya coğrafi kaynağı</b> gibi konularda halkı yanıltacak işaretler reddedilir. Uygulamada yanıltıcılık, mal/hizmet listesiyle birlikte değerlendirilir. İşaret, listedeki malların bir kısmında doğru, bir kısmında yanlış bilgi veriyorsa ret yalnızca yanıltıcı olduğu mallarla sınırlı tutulur.",
          kabul: ["örnek: 'İPEK' ibaresinin ipekten yapılmış kumaşlar için kullanılması (yanıltıcı değil, ancak tanımlayıcılık ayrıca değerlendirilir)"],
          ret: ["örnek: sentetik kumaşlar için '%100 PAMUK'", "örnek: Türkiye'de üretilen saatler için yanlış bir İsviçre kaynağı izlenimi veren ibare"]
        },
        {
          baslik: "g) Paris Sözleşmesi m.6ter kapsamındaki işaretler",
          ref: "SMK m.5/1-g",
          aciklama: "Paris Sözleşmesinin 6ter maddesine göre reddedilecek işaretler tescil edilemez. Bu kapsamda <b>birlik üyesi devletlerin armaları, bayrakları ve diğer devlet amblemleri</b>, resmî kontrol ve garanti işaret ve damgaları ile <b>hükümetlerarası uluslararası kuruluşların</b> armaları, bayrakları, kısaltmaları ve adları korunur. Yetkili mercilerin izni varsa ret yapılmaz.",
          kabul: ["örnek: yetkili makamın izin belgesiyle başvurulan işaret"],
          ret: ["örnek: herhangi bir devletin bayrağını veya armasını aynen ya da armacılık bakımından taklit ederek içeren işaret", "örnek: izinsiz biçimde BM veya NATO amblemi içeren işaret"]
        },
        {
          baslik: "ğ) 6ter dışında kalan, kamuyu ilgilendiren ve halka mal olmuş işaretler; izinsiz armalar ve nişanlar",
          ref: "SMK m.5/1-ğ",
          aciklama: "6ter kapsamı dışında kalan, ancak <b>kamuyu ilgilendiren, tarihî ve kültürel değerler bakımından halka mal olmuş</b> işaretler ile yetkili mercilerce tescil izni verilmemiş <b>armaları, nişanları veya adlandırmaları</b> içeren işaretler reddedilir. Uygulamada Atatürk'ün adı ve portresi, kamu kurumlarının adları ve amblemleri, millî ve tarihî semboller bu bent kapsamında değerlendirilir.",
          kabul: ["örnek: ilgili kamu kurumunun izniyle başvurulan, o kuruma ait amblemi içeren işaret"],
          ret: ["örnek: Atatürk portresi içeren ticari marka başvurusu (uygulama)", "örnek: izinsiz biçimde Emniyet veya Türk Silahlı Kuvvetleri amblemini içeren işaret"],
          ipucu: "Bent harfleri sık sorulur: (g) Paris 6ter, (ğ) 6ter dışındaki kamusal ve tarihî işaretler ile armalar."
        },
        {
          baslik: "h) Dinî değerleri veya sembolleri içeren işaretler",
          ref: "SMK m.5/1-h",
          aciklama: "Dinî değerleri veya sembolleri içeren işaretler reddedilir. Uygulamada değerlendirme, işaretin ilgili toplum kesimi tarafından dinî değer olarak algılanıp algılanmadığına ve mal/hizmetle birlikte kullanımının bu değerleri ticarileştirip zedeleyip zedelemeyeceğine göre yapılır.",
          kabul: ["örnek: yalnızca tarihî bir yer adı olarak algılanan ve dinî sembol niteliği taşımayan ibare (somut olaya göre)"],
          ret: ["örnek: kutsal kabul edilen mekânların veya kutsal kitapların resimleri ya da adları", "örnek: dinî sembollerin alkollü içecekler için kullanılması"]
        },
        {
          baslik: "ı) Kamu düzenine veya genel ahlaka aykırı işaretler",
          ref: "SMK m.5/1-ı",
          aciklama: "Kamu düzenine veya genel ahlaka aykırı işaretler tescil edilmez. Değerlendirme Türkiye'deki toplumsal değerlere ve ortalama tüketicinin algısına göre yapılır. Müstehcen veya hakaret içeren ifadeler, suçu, terörü ya da uyuşturucu kullanımını öven ve özendiren işaretler bu kapsamdadır.",
          kabul: [],
          ret: ["örnek: terör örgütü adını veya sembolünü içeren işaret", "örnek: açıkça müstehcen veya küfür içeren ibare"]
        },
        {
          baslik: "i) Tescilli coğrafi işaretten oluşan veya bunu içeren işaretler",
          ref: "SMK m.5/1-i",
          aciklama: "<b>Tescilli</b> bir coğrafi işaretten oluşan ya da tescilli coğrafi işaret içeren işaretler reddedilir. Bu bent, coğrafi işaretin tek bir kişi tarafından marka yoluyla tekelleştirilmesini önler. Tescilsiz yer adları bu bente değil; tanımlayıcılık (c) veya yanıltıcılık (f) bakımından değerlendirilir.",
          kabul: ["örnek: tescilli coğrafi işaretle ilgisi olmayan bir yer adının fantezi niteliğinde kullanılması (diğer bentler saklı)"],
          ret: ["örnek: tescilli bir coğrafi işareti (ör. 'Antep Baklavası') aynen içeren baklava markası"]
        },
        {
          baslik: "m.5/2 — Kullanım yoluyla kazanılmış ayırt edicilik",
          ref: "SMK m.5/2, m.25/4",
          aciklama: "Bir marka <b>başvuru tarihinden önce</b> kullanılmış ve bu kullanım sonucunda <b>başvuruya konu mal veya hizmetler bakımından</b> ayırt edici nitelik kazanmışsa, (b), (c) ve (d) bentlerine göre reddedilemez. İspat başvuru sahibine düşer. Uygulamada kullanımın süresi, yoğunluğu, coğrafi yaygınlığı, pazar payı, reklam harcamaları ve tüketici anketleri gibi delillerle ve ilgili tüketici kesiminin önemli bir kısmının işareti ticari kaynak olarak tanıdığı gösterilmelidir. Tescil sonrası kazanılan ayırt edicilik ise hükümsüzlüğü engeller (m.25/4).",
          kabul: ["örnek: uzun ve yoğun kullanımla tüketicinin tek bir işletmeyle özdeşleştirdiği tanımlayıcı ibare"],
          ret: ["örnek: (e) bendine giren işlevsel bir şekil: kullanım ispatı sonucu değiştirmez", "örnek: kullanımı yalnızca başvuru tarihinden sonraya ait deliller"],
          ipucu: "Zaman noktası: m.5/2'de başvuru tarihinden önce, m.25/4'te hükümsüzlük talebinden önce."
        }
      ]
    },
    {
      id: "isaret",
      ad: "İşaret Türlerine Göre İnceleme Uygulaması",
      konular: [
        {
          baslik: "Tek harf ve tek rakam",
          ref: "SMK m.4, m.5/1-b, m.5/1-c",
          aciklama: "SMK m.4 harfleri ve sayıları açıkça marka olabilecek işaretler arasında sayar; bu nedenle tek harf veya rakam kendiliğinden reddedilmez. Ancak standart karakterle yazılmış tek harf/rakam çoğu mal için ayırt edici bulunmayabilir ve bazı mallar için tanımlayıcı olabilir (ör. beden ölçüsü, model kodu, miktar). Uygulamada özgün grafik tasarımla sunulan harf ve rakamlar daha kolay kabul edilir.",
          kabul: ["örnek: özgün ve dikkat çekici biçimde stilize edilmiş tek harf logosu"],
          ret: ["örnek: giysiler için standart yazılmış 'XL' veya 'S' (beden)", "örnek: vitaminler için 'C' veya 'B12' (içerik)"]
        },
        {
          baslik: "Renk markaları",
          ref: "SMK m.4, m.5/1-a, m.5/1-b, m.5/2",
          aciklama: "Belirli bir şekle bağlı olmayan <b>tek renk</b>, sicilde açık ve kesin gösterilmeli (renk kodu) ve ayırt edici olmalıdır. Tüketiciler renkleri genellikle süsleme olarak algıladığından tek renk çoğu durumda doğası gereği ayırt edici bulunmaz ve kural olarak <b>kullanım yoluyla kazanılmış ayırt edicilik</b> gerekir. Renk kombinasyonlarında renklerin önceden belirlenmiş ve sabit bir düzende gösterilmesi beklenir.",
          kabul: ["örnek: renk koduyla tanımlanmış ve kullanım yoluyla ayırt edicilik kazandığı ispatlanmış tek renk", "örnek: belirli oranları ve düzeni gösterilmiş renk kombinasyonu"],
          ret: ["örnek: 'kırmızı ve sarı, her düzende' gibi belirsiz renk kombinasyonu", "örnek: sektörde işlevsel anlamı olan renk (ör. yangın söndürücüler için kırmızı)"]
        },
        {
          baslik: "Sloganlar",
          ref: "SMK m.5/1-b, m.5/1-c",
          aciklama: "Sloganlar diğer kelime markalarıyla aynı ölçütlere tabidir; slogan için daha katı bir ölçüt uygulanmaz. Ancak tüketici, yalnızca övücü veya bilgilendirici bir reklam mesajı olarak algıladığı ifadeleri ticari kaynak göstergesi saymaz. Kısa, özgün, birden fazla anlama açık ya da düşünsel çaba gerektiren sloganlar kabul edilebilir.",
          kabul: ["örnek: kelime oyunu içeren, alışılmadık ve akılda kalıcı slogan"],
          ret: ["örnek: 'EN İYİ HİZMET, EN UYGUN FİYAT'", "örnek: 'KALİTENİN ADRESİ'"]
        },
        {
          baslik: "Ses ve hareket markaları",
          ref: "SMK m.4, m.5/1-a, m.5/1-b",
          aciklama: "SMK m.4 sesleri açıkça sayar. Ses markası nota veya ses dosyasıyla sicilde açık ve kesin olarak gösterilmelidir. Kılavuzun ses ve hareket markaları için örnekler verdiği bilinmektedir. Ayırt edicilik açısından, malın doğal çıkardığı ses, çok kısa ve basit tonlar veya yaygın melodiler genellikle ayırt edici bulunmaz.",
          kabul: ["örnek: nota ile gösterilmiş, kendine özgü kısa bir melodi (jingle)"],
          ret: ["örnek: içecekler için şişe açılma sesi", "örnek: tek bir 'bip' sesi"]
        },
        {
          baslik: "Üç boyutlu (şekil) markalar",
          ref: "SMK m.4, m.5/1-b, m.5/1-e",
          aciklama: "Malın veya ambalajın şekli iki aşamada incelenir: önce <b>(e) bendi</b> (doğal şekil, teknik sonuç, asli değer), sonra <b>(b) bendi</b> (ayırt edicilik). Tüketiciler malın şeklini genellikle ticari kaynak göstergesi olarak algılamadığından, ayırt edici sayılmak için şeklin sektördeki olağan şekillerden <b>belirgin biçimde ayrılması</b> gerekir. Üzerinde ayırt edici bir kelime veya logo bulunan şekiller bütün olarak kabul edilebilir.",
          kabul: ["örnek: sektör normlarından belirgin şekilde ayrılan özgün şişe tasarımı", "örnek: olağan şekilli ambalaj + üzerinde ayırt edici kelime unsuru"],
          ret: ["örnek: süt için standart karton kutu", "örnek: sabun için sıradan dikdörtgen kalıp"]
        },
        {
          baslik: "Coğrafi yer adları",
          ref: "SMK m.5/1-c, m.5/1-f, m.5/1-i",
          aciklama: "Bilinen bir yer adı, ilgili mallar için coğrafi kaynak belirtiyorsa veya ileride belirtebilecekse <b>tanımlayıcı</b> sayılır (c). Uygulamada yerin ilgili tüketici tarafından bilinip bilinmediği ve mallarla makul bir bağlantı kurulup kurulamayacağı incelenir. Yerle malın bağlantısı açıkça imkânsızsa ad fantezi niteliğindedir. Yanlış kaynak izlenimi yaratılıyorsa (f), ad tescilli coğrafi işaretse (i) bendi devreye girer.",
          kabul: ["örnek: muzlar için 'KUZEY KUTBU' (fantezi kullanım)", "örnek: bilinmeyen küçük bir köy adının ilgisiz mallar için kullanılması"],
          ret: ["örnek: halılar için 'UŞAK' gibi o mal için bilinen bir üretim merkezinin adı", "örnek: tescilli coğrafi işareti içeren işaret (i bendi)"]
        },
        {
          baslik: "Yabancı dildeki tanımlayıcı kelimeler",
          ref: "SMK m.5/1-b, m.5/1-c",
          aciklama: "Uygulamada, Türkiye'deki ilgili tüketicinin <b>anlayabileceği</b> yabancı dillerdeki (özellikle İngilizce) tanımlayıcı veya ayırt edici olmayan kelimeler Türkçe karşılıklarıyla aynı şekilde reddedilir. Ticaret çevrelerinde yaygın kullanılan yabancı terimler için de aynı durum geçerlidir. Az bilinen bir dilde olsa da sektörde yerleşmiş terimler de reddedilebilir.",
          kabul: ["örnek: ilgili tüketicinin anlamını bilmesinin beklenmediği, sektörde de kullanılmayan bir yabancı kelime (somut olaya göre)"],
          ret: ["örnek: balık konserveleri için 'FRESH SARDINES'", "örnek: yazılımlar için 'SMART SOFTWARE'"]
        },
        {
          baslik: "Övücü (laudatory) terimler",
          ref: "SMK m.5/1-b, m.5/1-c",
          aciklama: "'BEST', 'SUPER', 'PREMIUM', 'EXTRA', 'LÜKS', 'KALİTELİ', 'NO:1' gibi yalnızca malın üstünlüğünü öven terimler kalite belirttikleri için tanımlayıcıdır ve ayırt edicilikten yoksundur; tek başlarına reddedilir. Ayırt edici bir esas unsurla birlikte kullanıldıklarında işaret bütün olarak tescil edilebilir, ancak koruma övücü terimi tekelleştirmez.",
          kabul: ["örnek: ayırt edici bir fantezi kelime + 'PREMIUM'"],
          ret: ["örnek: herhangi bir mal için tek başına 'SUPER'", "örnek: 'EXTRA KALİTE'"]
        }
      ]
    },
    {
      id: "benzerlik",
      ad: "Karıştırılma İhtimali ve Benzerlik (SMK m.6/1)",
      konular: [
        {
          baslik: "Karıştırılma ihtimalinin unsurları ve global değerlendirme",
          ref: "SMK m.6/1",
          aciklama: "m.6/1'e göre ret için şu koşullar <b>birlikte</b> aranır: (1) işaretlerin aynılığı veya benzerliği, (2) mal/hizmetlerin aynılığı veya benzerliği, (3) bu nedenle halkın markaları <b>ilişkilendirme ihtimali dâhil</b> karıştırılma ihtimali. Değerlendirme, olayın tüm koşullarını birlikte gözeten <b>global (bütüncül)</b> bir değerlendirmedir. Mal veya işaret benzerliğinden biri hiç yoksa karıştırılma ihtimali de olmaz.",
          kabul: [],
          ret: [],
          ipucu: "İlişkilendirme ihtimali: tüketici ürünleri aynı sanmasa bile, iki markanın aynı veya ekonomik olarak bağlantılı işletmelerden geldiğini düşünebilir."
        },
        {
          baslik: "Görsel, işitsel ve kavramsal benzerlik; genel izlenim",
          ref: "SMK m.6/1",
          aciklama: "İşaretler <b>görsel, işitsel ve kavramsal</b> açıdan karşılaştırılır ve işaretlerin bıraktığı <b>genel izlenim</b> esas alınır. Tüketici markayı ayrıntılarına ayırarak incelemez. Kelimelerin başlangıç kısımları genellikle daha fazla dikkat çeker (Yargıtay içtihadında da vurgulanır), ancak bu kural mutlak değildir. Kavramsal farklılık, belirgin ve hemen anlaşılır bir anlam varsa görsel/işitsel benzerliği dengeleyebilir.",
          kabul: ["örnek: ortak harfleri olsa da okunuşu ve anlamı belirgin biçimde farklı iki kelime"],
          ret: ["örnek: 'STICK' / 'STIX' gibi okunuşu çok yakın ibareler (aynı mallar için)"]
        },
        {
          baslik: "Baskın ve ayırt edici unsur; zayıf (tanımlayıcı) unsurlar",
          ref: "SMK m.6/1",
          aciklama: "Bileşik işaretlerde genel izlenimi belirleyen <b>baskın ve ayırt edici unsur</b> tespit edilir. Mallar için tanımlayıcı veya sektörde yaygın olan <b>zayıf unsurların</b> paylaşılması, kural olarak tek başına karıştırılma ihtimali doğurmaz; karşılaştırma diğer unsurlar üzerinden yapılır. Kelime ve şekil içeren markalarda tüketici markayı adıyla andığından kelime unsuru genellikle daha belirleyicidir (uygulama).",
          kabul: ["örnek: yalnızca tanımlayıcı 'FIT' veya 'BIO' unsurunu paylaşan, diğer unsurları farklı markalar (somut olaya göre)"],
          ret: ["örnek: önceki markanın ayırt edici esas unsurunu aynen alıp yanına tanımlayıcı bir kelime ekleyen başvuru"]
        },
        {
          baslik: "Çatı (şemsiye) markalar ve ikincil unsurlar",
          ref: "SMK m.6/1",
          aciklama: "2021 kılavuzunun çatı markalarla ilgili yaklaşımı şöyle aktarılmaktadır: Bir işaretteki <b>çatı markanın</b> yanında yer alan ikincil kelime unsuru başka bir markada <b>bağımsız ayırt edici unsur</b> olarak bulunuyorsa, benzerlik değerlendirmesi çatı marka arka planda bırakılarak yapılır. Yani tanınmış bir çatı markanın eklenmesi, başkasının markasını içeren alt markayı kurtarmaz.",
          kabul: [],
          ret: ["örnek: önceki marka 'ZEFRO' iken başvuru '[ÇATI MARKA] ZEFRO' (aynı mallar)"]
        },
        {
          baslik: "Ortalama tüketici ve dikkat düzeyi",
          ref: "SMK m.6/1",
          aciklama: "Ölçüt, ilgili mal/hizmetin <b>makul düzeyde bilgili, dikkatli ve özenli ortalama tüketicisidir</b>; uzmanlar değil. Dikkat düzeyi mala göre değişir: günlük tüketim mallarında düşük, pahalı veya nadiren alınan mallarda (otomobil, gayrimenkul) ya da profesyonel kullanıcıya yönelik mallarda yüksektir. Tüketici markaları çoğu zaman yan yana görmez ve <b>belleğindeki kusurlu hatıraya</b> güvenir.",
          kabul: [],
          ret: [],
          ipucu: "Yüksek dikkat düzeyi karıştırılma ihtimalini azaltır, ama tek başına ortadan kaldırmaz."
        },
        {
          baslik: "Mal ve hizmet benzerliği; Sınıflandırma Tebliği ve alt gruplar",
          ref: "SMK m.5/1-ç, m.6/1",
          aciklama: "Mal/hizmet benzerliğinde uygulamada malların <b>niteliği, kullanım amacı ve yöntemi, rakip ya da tamamlayıcı olmaları, dağıtım kanalları, satış yerleri, hedef kitle ve üretici çevreleri</b> dikkate alınır. Nice sınıflarının aynı veya farklı olması tek başına belirleyici değildir. Kurum uygulamasında mal ve hizmetlerin sınıflandırılmasına ilişkin tebliğdeki <b>alt gruplar</b>, özellikle m.5/1-ç'deki 'aynı tür' değerlendirmesinde esas alınır. m.6/1'deki benzerlik değerlendirmesi ise alt gruplarla sınırlı değildir; farklı alt grup veya sınıflardaki mallar da benzer bulunabilir.",
          kabul: ["örnek: aynı sınıfta olsa da amacı, kullanıcısı ve satış kanalı tamamen farklı mallar benzer sayılmayabilir"],
          ret: ["örnek: ayakkabı (25. sınıf) ile ayakkabı satış mağazası hizmetleri (35. sınıf) arasındaki tamamlayıcılık ilişkisi benzerlik gerekçesi olabilir"],
          ipucu: "'Aynı tür' (m.5/1-ç, alt grup) ile 'benzer' (m.6/1, esnek ölçüt) kavramlarını karıştırmayın."
        },
        {
          baslik: "Karşılıklı bağımlılık ilkesi ve önceki markanın ayırt edicilik derecesi",
          ref: "SMK m.6/1",
          aciklama: "Değerlendirmedeki etkenler birbirine bağlıdır: <b>işaretler arasındaki düşük benzerlik, mallar arasındaki yüksek benzerlikle</b> (veya tersi) dengelenebilir. Önceki markanın ayırt edicilik derecesi de önemlidir: doğal olarak güçlü ya da kullanım yoluyla güçlenmiş markalar daha geniş korunur. Zayıf ayırt ediciliğe sahip markalarda küçük farklar bile karıştırılma ihtimalini ortadan kaldırabilir.",
          kabul: [],
          ret: [],
          ipucu: "Soru kökünde 'aynı mallar, orta düzey işaret benzerliği' gibi bir kurgu varsa karşılıklı bağımlılık ilkesini düşünün."
        },
        {
          baslik: "Seri markalar (marka ailesi)",
          ref: "SMK m.6/1",
          aciklama: "Ortak bir ayırt edici unsuru (ön ek/son ek) taşıyan birden fazla marka, tüketicide bir <b>seri</b> algısı yaratabilir. Başvuru bu unsuru aynı yapıda taşıyorsa, tüketici başvuruyu serinin yeni bir üyesi sanabilir ve bu ilişkilendirme ihtimali doğurur. Uygulamada seri argümanına dayanan itiraz sahibinden, serinin yalnızca tescilli değil <b>piyasada fiilen kullanılan</b> yeterli sayıda markadan oluştuğunu göstermesi beklenir.",
          kabul: [],
          ret: ["örnek: piyasada 'MC…' önekli çok sayıda markası kullanılan bir işletme karşısında aynı önek yapısındaki başvuru (somut olaya göre)"]
        }
      ]
    },
    {
      id: "nispi",
      ad: "Diğer Nispi Ret Nedenleri ve İtiraz İncelemesi (SMK m.6/2–9, m.18–20)",
      konular: [
        {
          baslik: "Ticari vekil veya temsilcinin başvurusu",
          ref: "SMK m.6/2",
          aciklama: "Ticari vekil veya temsilcinin, marka sahibinin <b>izni olmaksızın ve haklı bir sebebe dayanmaksızın</b> markanın aynısını veya ayırt edilemeyecek kadar benzerini <b>kendi adına</b> tescil ettirmek için yaptığı başvuru, marka sahibinin itirazı üzerine reddedilir. Distribütörlük, bayilik ve temsilcilik ilişkileri tipik örneklerdir.",
          kabul: [],
          ret: ["örnek: yabancı üreticinin Türkiye distribütörünün, ilişki sürerken üreticinin markasını kendi adına başvurması"]
        },
        {
          baslik: "Tescilsiz marka veya ticarette kullanılan işaret üzerinde önceki hak",
          ref: "SMK m.6/3",
          aciklama: "Başvuru veya rüçhan tarihinden önce <b>tescilsiz bir marka</b> ya da ticaret sırasında kullanılan başka bir işaret için <b>hak elde edilmişse</b>, işaret sahibinin itirazı üzerine başvuru reddedilir. Uygulamada itiraz sahibinin, başvuru tarihinden önce işareti Türkiye'de ticari olarak ve belirli bir yoğunlukta kullandığını delillerle göstermesi beklenir.",
          kabul: [],
          ret: ["örnek: yıllardır tescilsiz olarak kullanılan bir işletme adının başkası tarafından aynı hizmetler için marka olarak başvurulması"]
        },
        {
          baslik: "Tanınmış markalar: Paris 6bis ve Türkiye'de tanınmışlık",
          ref: "SMK m.6/4, m.6/5",
          aciklama: "<b>m.6/4</b>: Paris Sözleşmesi <b>6bis</b> anlamında tanınmış markalarla aynı veya benzer başvurular, <b>aynı veya benzer</b> mal/hizmetler bakımından itiraz üzerine reddedilir; tanınmış markanın Türkiye'de tescilli olması gerekmez. <b>m.6/5</b>: Tescilli veya önceki tarihli başvurusu bulunan markanın Türkiye'de ulaştığı tanınmışlık düzeyi nedeniyle <b>haksız yarar sağlanabileceği, itibarının zarar görebileceği veya ayırt edici karakterinin zedelenebileceği</b> hâllerde, <b>farklı</b> mal/hizmetler için yapılan başvurular da, haklı sebep saklı kalmak üzere reddedilir.",
          kabul: [],
          ret: ["örnek: çok tanınmış bir içecek markasının mobilyalar için başvurulması (m.6/5)"],
          ipucu: "m.6/4 aynı/benzer mallarla sınırlı; m.6/5 farklı malları da kapsar ama önceki markanın tescilli veya önce başvurulmuş olmasını arar."
        },
        {
          baslik: "Kişi ismi, ticaret unvanı, fotoğraf, telif ve diğer fikrî mülkiyet hakları",
          ref: "SMK m.6/6",
          aciklama: "Başvuru <b>başkasına ait</b> kişi ismini, ticaret unvanını, fotoğrafını, telif hakkını veya herhangi bir fikrî mülkiyet hakkını içeriyorsa, hak sahibinin itirazı üzerine reddedilir.",
          kabul: [],
          ret: ["örnek: bir sanatçının izinsiz kullanılan fotoğrafını içeren marka", "örnek: başkasına ait özgün bir çizgi karakteri içeren marka"]
        },
        {
          baslik: "Yenilenmeyen markalar",
          ref: "SMK m.6/7, m.6/8",
          aciklama: "<b>Ortak veya garanti markası</b> yenilenmediği için koruma süresi sona erdikten sonra <b>üç yıl</b> içinde yapılan aynı/benzer başvurular itiraz üzerine reddedilir (m.6/7). <b>Bireysel tescilli marka</b> için bu süre <b>iki yıldır</b> ve ret, markanın bu iki yıllık süre içinde <b>kullanılmış olması</b> şartına bağlıdır (m.6/8).",
          kabul: [],
          ret: [],
          ipucu: "3 yıl: ortak/garanti markası. 2 yıl + kullanım şartı: bireysel marka."
        },
        {
          baslik: "Kötü niyetli başvurular",
          ref: "SMK m.6/9, m.25/6",
          aciklama: "Kötü niyetle yapılan başvurular <b>itiraz üzerine</b> reddedilir; SMK'da kötü niyet nispi ret nedenidir ve Kurum tarafından resen incelenmez. Kanun kötü niyeti tanımlamaz. Uygulamada şu göstergeler değerlendirilir: başvuru sahibinin önceki işareti bildiği veya bilmesi gerektiği, taraflar arasındaki önceki ticari/kişisel ilişki, özgün bir işaretin aynen kopyalanması, başkalarına ait çok sayıda markanın sistematik olarak başvurulması, kullanma niyeti olmadan engelleme veya şantaj amacı. İyi niyet esas olduğundan (TMK m.3) kötü niyeti iddia eden ispat eder.",
          kabul: [],
          ret: ["örnek: yabancı bir firmanın Türkiye'de henüz tescil edilmemiş özgün markasını, firma Türkiye'ye girmeden önce aynen başvuran ve firmaya satmayı teklif eden kişi"],
          ipucu: "Kötü niyetli sonraki tescil, m.25/6'daki beş yıllık sessiz kalma (hak kaybı) korumasından yararlanamaz."
        },
        {
          baslik: "Yayıma itiraz, kullanım ispatı ve karara itiraz",
          ref: "SMK m.18, m.19/2, m.20",
          aciklama: "Yayıma itiraz yayımdan itibaren <b>iki ay</b> içinde yazılı ve gerekçeli olarak yapılır ve ücret aynı süre içinde ödenir (m.18). m.6/1'e dayanan itirazlarda itiraz gerekçesi marka başvuru/rüçhan tarihinde Türkiye'de <b>en az beş yıldır tescilliyse</b>, başvuru sahibi itiraz sahibinden önceki beş yıldaki <b>ciddi kullanımın</b> (veya kullanmamaya ilişkin haklı sebeplerin) ispatını isteyebilir; ispatlanamazsa itiraz reddedilir (m.19/2). Kurum kararlarına bildirimden itibaren <b>iki ay</b> içinde itiraz edilir ve bu süreden sonra yeni gerekçe eklenemez (m.20/2). Bu itirazları Kurul (YİDK) inceler (m.21).",
          kabul: [],
          ret: [],
          ipucu: "Kullanım ispatı talebi yalnızca m.6/1 itirazlarında ve yalnızca başvuru sahibinin talebiyle gündeme gelir."
        }
      ]
    }
  ],
  sorular: [
    {
      id: "KLV-001", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "SMK m.5/2'ye göre kullanım yoluyla kazanılmış ayırt edicilik, m.5/1'in hangi bentlerindeki ret nedenlerini aşmaya imkân verir?",
      options: ["(a), (b) ve (c)", "(b), (c), (d) ve (e)", "(b), (c) ve (d)", "(c), (d) ve (f)", "Yalnızca (b)"],
      answer: 2,
      why: [
        "Yanlış. (a) bendi m.4 anlamında marka olamayacak işaretlere ilişkindir; kullanım bu eksikliği gidermez.",
        "Yanlış. (e) bendi (doğal, teknik veya asli değer veren şekil) kullanım yoluyla aşılamaz.",
        "Doğru. m.5/2 açıkça (b), (c) ve (d) bentlerini sayar.",
        "Yanlış. (f) bendi (yanıltıcılık) m.5/2 kapsamında değildir.",
        "Yanlış. İstisna yalnızca (b) ile sınırlı değildir; (c) ve (d) bentlerini de kapsar."
      ],
      ref: "SMK m.5/2"
    },
    {
      id: "KLV-002", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Paris Sözleşmesinin 6ter maddesine göre reddedilecek işaretler SMK m.5/1'in hangi bendinde düzenlenmiştir?",
      options: ["(g) bendi", "(ğ) bendi", "(h) bendi", "(f) bendi", "(i) bendi"],
      answer: 0,
      why: [
        "Doğru. m.5/1-g, Paris Sözleşmesinin 6ter maddesine göre reddedilecek işaretleri düzenler.",
        "Yanlış. (ğ) bendi 6ter kapsamı dışında kalan, kamuyu ilgilendiren ve halka mal olmuş işaretler ile izinsiz armalara ilişkindir.",
        "Yanlış. (h) bendi dinî değer ve sembolleri içeren işaretlere ilişkindir.",
        "Yanlış. (f) bendi halkı yanıltacak işaretlere ilişkindir.",
        "Yanlış. (i) bendi tescilli coğrafi işaretlere ilişkindir."
      ],
      ref: "SMK m.5/1-g"
    },
    {
      id: "KLV-003", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Birbirine geçerek kenetlenmeyi sağlayan çıkıntılara sahip bir oyuncak yapı tuğlasının şekli için yapılan üç boyutlu marka başvurusunda başvuru sahibi, şeklin 20 yıldır yoğun kullanıldığını ve tüketicilerce tanındığını ispatlıyor. Kurumun yaklaşımı ne olmalıdır?",
      options: [
        "Kullanım ispatlandığı için başvuru m.5/2 gereğince kabul edilir.",
        "Başvuru yalnızca itiraz gelirse reddedilebilir.",
        "Başvuru m.5/1-b gereğince reddedilir, ancak muvafakatname sunulursa kabul edilir.",
        "Şekil ses veya renk içermediğinden m.4 gereğince marka olamaz.",
        "Şekil teknik bir sonucu elde etmek için zorunlu olduğundan m.5/1-e gereğince reddedilir; kazanılmış ayırt edicilik bu bendi aşmaz."
      ],
      answer: 4,
      why: [
        "Yanlış. m.5/2 yalnızca (b), (c) ve (d) bentlerine istisna getirir; (e) bendine uygulanmaz.",
        "Yanlış. Mutlak ret nedenleri Kurum tarafından resen incelenir (m.16/1).",
        "Yanlış. Muvafakatname yalnızca m.5/1-ç'deki reddi aşmaya yarar (m.5/3).",
        "Yanlış. m.4, malların veya ambalajlarının biçimini de marka olabilecek işaretler arasında sayar.",
        "Doğru. Teknik sonuç için zorunlu şekil (e) bendine girer ve kullanım bunu aşmaz."
      ],
      ref: "SMK m.5/1-e, m.5/2"
    },
    {
      id: "KLV-004", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "SMK m.5/1-ç kapsamındaki ret nedeni ile ilgili aşağıdakilerden hangisi doğrudur?",
      options: [
        "Yalnızca önceki marka sahibinin itirazı üzerine incelenir.",
        "Önceki marka sahibinin noter onaylı açık muvafakatini gösteren belge sunulursa bu bent gereğince ret yapılamaz.",
        "Benzer mal ve hizmetler bakımından karıştırılma ihtimali bulunan tüm markaları kapsar.",
        "Üçüncü kişiler bu bende dayanarak m.17 uyarınca görüş sunabilir.",
        "Önceki markanın Türkiye'de tanınmış olmasını şart koşar."
      ],
      answer: 1,
      why: [
        "Yanlış. m.5/1-ç bir mutlak ret nedenidir ve resen incelenir; itiraza bağlı olan m.6/1'dir.",
        "Doğru. m.5/3 bu imkânı açıkça tanır.",
        "Yanlış. (ç) bendi aynı veya aynı türdeki mallarda aynı veya ayırt edilemeyecek kadar benzer işaretlerle sınırlıdır; karıştırılma ihtimali m.6/1'in ölçütüdür.",
        "Yanlış. m.17, (ç) bendini görüş kapsamından açıkça çıkarır.",
        "Yanlış. Bentte tanınmışlık şartı yoktur."
      ],
      ref: "SMK m.5/1-ç, m.5/3, m.17"
    },
    {
      id: "KLV-005", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Dinî değerleri veya sembolleri içeren işaretler SMK m.5/1'in hangi bendine göre reddedilir?",
      options: ["(ğ) bendi", "(ı) bendi", "(g) bendi", "(h) bendi", "(d) bendi"],
      answer: 3,
      why: [
        "Yanlış. (ğ) bendi kamuyu ilgilendiren, tarihî ve kültürel değerler bakımından halka mal olmuş işaretler ile izinsiz armaları düzenler.",
        "Yanlış. (ı) bendi kamu düzenine veya genel ahlaka aykırı işaretleri düzenler.",
        "Yanlış. (g) bendi Paris Sözleşmesi 6ter kapsamındaki işaretleri düzenler.",
        "Doğru. m.5/1-h dinî değerleri veya sembolleri içeren işaretleri düzenler.",
        "Yanlış. (d) bendi ticaret alanında herkesçe kullanılan işaretleri düzenler."
      ],
      ref: "SMK m.5/1-h"
    },
    {
      id: "KLV-006", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "SMK m.4'e göre bir işaretin marka olabilmesi için aranan şartlar aşağıdakilerden hangisinde doğru verilmiştir?",
      options: [
        "Malları/hizmetleri ayırt etmeye elverişli olması ve korumanın konusu açık ve kesin anlaşılacak şekilde sicilde gösterilebilir olması",
        "Çizimle görüntülenebilmesi ve basılabilir olması",
        "Yalnızca kelime veya şekilden oluşması",
        "Türkiye'de başvuru tarihinden önce kullanılmış olması",
        "Türkçe olması ve en az iki harften oluşması"
      ],
      answer: 0,
      why: [
        "Doğru. m.4 bu iki şartı birlikte arar.",
        "Yanlış. Çizimle görüntülenebilme KHK dönemine ait bir şarttı; SMK 'sicilde gösterilebilirlik' ölçütünü getirmiştir.",
        "Yanlış. m.4 renkleri, sesleri, harfleri, sayıları ve malların/ambalajların biçimini de sayar.",
        "Yanlış. Marka koruması tescil yoluyla elde edilir; önceki kullanım tescil şartı değildir.",
        "Yanlış. Böyle bir şart yoktur; m.4 harfleri ve sayıları da sayar."
      ],
      ref: "SMK m.4"
    },
    {
      id: "KLV-007", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Taze meyveler (31. sınıf) için yapılan 'UŞAK' ibareli bir başvuru ile halılar (27. sınıf) için yapılan 'UŞAK' ibareli bir başvuru değerlendirilirken hangi yaklaşım doğrudur?",
      options: [
        "Her iki başvuru da coğrafi yer adı içerdiği için hiçbir koşulda tescil edilemez.",
        "Her iki başvuru da m.5/1-ğ gereğince reddedilir.",
        "Yer adının o mallar için coğrafi kaynak gösterip göstermediği mal bazında incelenir; halılar için bilinen bir üretim merkezi olarak tanımlayıcı sayılması beklenir.",
        "Yer adları yalnızca m.6/3 kapsamında itiraz üzerine incelenir.",
        "Yer adları ayırt edici olduğundan her iki başvuru da kabul edilir."
      ],
      answer: 2,
      why: [
        "Yanlış. Yer adları kendiliğinden reddedilmez; mallarla bağlantısına bakılır.",
        "Yanlış. (ğ) bendi kamusal/tarihî işaretler ve armalarla ilgilidir; coğrafi kaynak belirten ibareler (c) bendinde değerlendirilir.",
        "Doğru. Tanımlayıcılık mal/hizmet bazında değerlendirilir (m.5/1-c, m.16/1).",
        "Yanlış. Coğrafi kaynak belirtme bir mutlak ret nedenidir ve resen incelenir.",
        "Yanlış. Bilinen bir üretim merkezinin adı ilgili mallar için tanımlayıcıdır."
      ],
      ref: "SMK m.5/1-c"
    },
    {
      id: "KLV-008", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Aşağıdakilerden hangisi SMK m.6'da düzenlenen ve itiraz üzerine incelenen bir ret nedeni değildir?",
      options: [
        "Kötü niyetle yapılan başvuru",
        "Ticari vekil veya temsilcinin izinsiz başvurusu",
        "Başkasına ait ticaret unvanını içeren başvuru",
        "Tescilsiz marka üzerinde önceden hak elde edilmiş olması",
        "Kamu düzenine veya genel ahlaka aykırı işaret"
      ],
      answer: 4,
      why: [
        "Yanlış. Kötü niyet m.6/9'da nispi ret nedeni olarak düzenlenmiştir.",
        "Yanlış. m.6/2'de düzenlenmiştir.",
        "Yanlış. m.6/6'da düzenlenmiştir.",
        "Yanlış. m.6/3'te düzenlenmiştir.",
        "Doğru. Kamu düzenine ve genel ahlaka aykırılık m.5/1-ı'da düzenlenen bir mutlak ret nedenidir."
      ],
      ref: "SMK m.5/1-ı, m.6"
    },
    {
      id: "KLV-009", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Karıştırılma ihtimali değerlendirmesindeki 'karşılıklı bağımlılık' ilkesi neyi ifade eder?",
      options: [
        "Önceki marka sahibinin itirazı ile başvuru sahibinin cevabının birlikte değerlendirilmesini",
        "İşaretler arasındaki düşük benzerliğin mallar arasındaki yüksek benzerlikle (veya tersi) dengelenebilmesini",
        "Aynı sınıftaki malların her zaman benzer kabul edilmesini",
        "Mutlak ve nispi ret nedenlerinin birlikte incelenmesi zorunluluğunu",
        "Seri markaların tek bir marka gibi değerlendirilmesini"
      ],
      answer: 1,
      why: [
        "Yanlış. Bu bir usul kuralıdır (m.19/1); karşılıklı bağımlılık ilkesi değildir.",
        "Doğru. Global değerlendirmede etkenler birbirini dengeler.",
        "Yanlış. Sınıf aynılığı veya farklılığı tek başına belirleyici değildir.",
        "Yanlış. İlkenin bu ayrımla ilgisi yoktur.",
        "Yanlış. Seri markalar ayrı bir değerlendirme konusudur."
      ],
      ref: "SMK m.6/1"
    },
    {
      id: "KLV-010", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Yenilenmediği için koruma süresi sona eren bireysel bir markaya dayalı itirazla ilgili hangisi doğrudur?",
      options: [
        "Koruma süresinin sona ermesinden itibaren üç yıl içinde yapılan başvurulara, kullanım şartı aranmaksızın itiraz edilebilir.",
        "Yenilenmeyen markaya dayanılarak hiçbir şekilde itiraz edilemez.",
        "Bir yıl içinde yapılan başvurulara itiraz edilebilir.",
        "Sona ermeden itibaren iki yıl içinde yapılan aynı/benzer başvurular, markanın bu süre içinde kullanılmış olması şartıyla itiraz üzerine reddedilir.",
        "Sona ermeden itibaren beş yıl içinde Kurum resen ret kararı verir."
      ],
      answer: 3,
      why: [
        "Yanlış. Üç yıllık süre ortak ve garanti markalarına ilişkindir (m.6/7) ve orada kullanım şartı yoktur.",
        "Yanlış. m.6/8 bu imkânı tanır.",
        "Yanlış. Süre bir yıl değil iki yıldır.",
        "Doğru. m.6/8 iki yıllık süreyi ve kullanım şartını öngörür.",
        "Yanlış. Bu nispi bir ret nedenidir; resen incelenmez."
      ],
      ref: "SMK m.6/8"
    },
    {
      id: "KLV-011", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Bir yabancı üreticinin Türkiye distribütörü, sözleşme ilişkisi sürerken üreticinin markasını izinsiz olarak kendi adına başvuruyor. Üreticinin dayanabileceği en özel ret nedeni hangisidir?",
      options: ["SMK m.5/1-f", "SMK m.6/7", "SMK m.6/2", "SMK m.5/1-b", "SMK m.6/8"],
      answer: 2,
      why: [
        "Yanlış. Yanıltıcılık, malın niteliği ve kaynağı gibi konulara ilişkin bir mutlak ret nedenidir.",
        "Yanlış. m.6/7 yenilenmeyen ortak ve garanti markalarına ilişkindir.",
        "Doğru. m.6/2 ticari vekil veya temsilcinin izinsiz ve haklı sebebe dayanmayan başvurusunu düzenler.",
        "Yanlış. İşaret ayırt edici olabilir; sorun ayırt edicilik değil, hak sahipliğidir.",
        "Yanlış. m.6/8 yenilenmeyen bireysel markalara ilişkindir."
      ],
      ref: "SMK m.6/2"
    },
    {
      id: "KLV-012", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Paris Sözleşmesi 6bis anlamında tanınmış bir markaya dayanan itiraz (SMK m.6/4) ile Türkiye'de tanınmışlığa dayanan itiraz (SMK m.6/5) karşılaştırıldığında hangisi doğrudur?",
      options: [
        "m.6/4 aynı veya benzer mal/hizmetlerle sınırlıdır; m.6/5 ise farklı mal/hizmetler için yapılan başvuruları da kapsar.",
        "Her ikisi de yalnızca aynı mal/hizmetler için uygulanır.",
        "m.6/4 Kurum tarafından resen uygulanır.",
        "m.6/5 için önceki markanın tescilli olması veya önceki tarihli başvurusunun bulunması aranmaz.",
        "m.6/5'te haklı sebep savunması kabul edilmez."
      ],
      answer: 0,
      why: [
        "Doğru. Bu, iki fıkranın lafzından doğrudan çıkar.",
        "Yanlış. m.6/5 açıkça 'aynı, benzer veya farklı' mal/hizmetlerden söz eder.",
        "Yanlış. m.6/4 de 'itiraz üzerine' uygulanır.",
        "Yanlış. m.6/5, tescil edilmiş veya daha önce başvurusu yapılmış bir markayı arar.",
        "Yanlış. m.6/5'te 'haklı bir sebebe dayanma hâli saklı kalmak kaydıyla' ifadesi yer alır."
      ],
      ref: "SMK m.6/4, m.6/5"
    },
    {
      id: "KLV-013", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Kılavuz ve yerleşik uygulamaya göre 'SUPER' veya 'PREMIUM' gibi övücü terimlerle ilgili hangisi doğrudur?",
      options: [
        "Yabancı dilde olduklarından Türkiye'de her zaman ayırt edici kabul edilirler.",
        "Yalnızca 6ter kapsamında değerlendirilirler.",
        "Kullanım yoluyla ayırt edicilik kazanmaları hukuken mümkün değildir.",
        "Kötü niyet göstergesi sayılırlar.",
        "Tek başlarına kalite belirten, ayırt edicilikten yoksun ibarelerdir; ayırt edici bir esas unsurla birlikte işaret bütün olarak tescil edilebilir."
      ],
      answer: 4,
      why: [
        "Yanlış. Türk tüketicisinin anlayabileceği yaygın yabancı kelimeler Türkçe karşılıkları gibi değerlendirilir.",
        "Yanlış. 6ter, devlet amblemleri ve uluslararası kuruluşların işaretleriyle ilgilidir.",
        "Yanlış. Bu terimler (b) ve (c) bentlerine girer ve m.5/2 bu bentler için kazanılmış ayırt ediciliği kabul eder.",
        "Yanlış. Övücü terim kullanmanın kötü niyetle bir ilgisi yoktur.",
        "Doğru. Kalite belirtme (c) ve ayırt edicilik (b) bakımından tek başına ret; birleşik işarette kabul mümkündür."
      ],
      ref: "SMK m.5/1-b, m.5/1-c"
    },
    {
      id: "KLV-014", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "SMK m.6/1'e dayanan bir itirazda başvuru sahibi, itiraz sahibinden kullanım ispatı isteyebilmek için hangi koşulun varlığına dayanır?",
      options: [
        "İtiraz gerekçesi markanın Türkiye'de en az üç yıldır tescilli olması",
        "İtiraz gerekçesi markanın, itiraza konu başvurunun başvuru veya rüçhan tarihinde Türkiye'de en az beş yıldır tescilli olması",
        "İtiraz sahibinin yabancı uyruklu olması",
        "İtirazın m.6/9'a da dayanması",
        "Kurumun resen kullanım ispatı istemiş olması"
      ],
      answer: 1,
      why: [
        "Yanlış. Kanundaki süre beş yıldır.",
        "Doğru. m.19/2 bu koşulu arar ve kullanım ispatı başvuru sahibinin talebiyle istenir.",
        "Yanlış. Uyrukla ilgili bir koşul yoktur.",
        "Yanlış. Kullanım ispatı m.6/1 itirazlarına özgüdür.",
        "Yanlış. İspat, başvuru sahibinin talebi üzerine istenir; Kurum resen istemez."
      ],
      ref: "SMK m.19/2"
    },
    {
      id: "KLV-015", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Kötü niyetli marka başvurularına ilişkin SMK düzenlemesi hakkında hangisi doğrudur?",
      options: [
        "Kötü niyet m.5'te mutlak ret nedeni olarak düzenlenmiş ve resen incelenir.",
        "Kanun kötü niyeti ayrıntılı biçimde tanımlar.",
        "Kötü niyet iddiası yalnızca hükümsüzlük davasında ileri sürülebilir.",
        "Kötü niyetli başvurular m.6/9 uyarınca itiraz üzerine reddedilir.",
        "Kötü niyetli sonraki tescil, beş yıllık sessiz kalma nedeniyle hükümsüzlükten korunur."
      ],
      answer: 3,
      why: [
        "Yanlış. SMK'da kötü niyet m.6/9'da nispi ret nedenidir.",
        "Yanlış. SMK kötü niyeti tanımlamaz; içerik uygulamayla belirlenir.",
        "Yanlış. Yayıma itiraz aşamasında da ileri sürülebilir (m.18, m.6/9).",
        "Doğru. m.6/9'un lafzı budur.",
        "Yanlış. m.25/6 sessiz kalma kuralını sonraki tescilin kötü niyetli olmaması şartına bağlar."
      ],
      ref: "SMK m.6/9, m.25/6"
    },
    {
      id: "KLV-016", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Karıştırılma ihtimalinin değerlendirilmesinde esas alınan tüketiciyle ilgili hangisi doğrudur?",
      options: [
        "Ölçüt, ilgili mal/hizmetin makul düzeyde bilgili ve dikkatli ortalama tüketicisidir ve dikkat düzeyi mala göre değişir.",
        "Ölçüt her zaman ilgili sektördeki uzmanlardır.",
        "Tüketicinin markaları her zaman yan yana görüp karşılaştırdığı varsayılır.",
        "Dikkat düzeyi tüm mallar için aynı kabul edilir.",
        "Yüksek dikkat düzeyi karıştırılma ihtimalini her durumda ortadan kaldırır."
      ],
      answer: 0,
      why: [
        "Doğru. Bu, yerleşik ölçüttür.",
        "Yanlış. Profesyonel kullanıcıya yönelik mallar dışında ölçüt uzman değil, ortalama tüketicidir.",
        "Yanlış. Tüketici çoğu zaman belleğindeki kusurlu hatıraya güvenir.",
        "Yanlış. Günlük tüketim mallarında dikkat düşük, pahalı mallarda yüksektir.",
        "Yanlış. Yüksek dikkat düzeyi riski azaltır ama kendiliğinden ortadan kaldırmaz."
      ],
      ref: "SMK m.6/1"
    },
    {
      id: "KLV-017", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Yayımlanmış bir marka başvurusuna, başvurunun m.5/1-c kapsamında tanımlayıcı olduğu gerekçesiyle itiraz etmek isteyen kişi için hangisi doğrudur?",
      options: [
        "Mutlak ret nedenlerine yalnızca Kurum dayanabileceği için itiraz edilemez.",
        "İtiraz süresi yayımdan itibaren üç aydır.",
        "İtiraz yayımdan itibaren iki ay içinde yazılı ve gerekçeli olarak yapılır; ücret de bu süre içinde ödenmelidir.",
        "İtiraz yalnızca m.6'ya dayanarak yapılabilir.",
        "İtiraz edebilmek için itiraz sahibinin tescilli bir markası olmalıdır."
      ],
      answer: 2,
      why: [
        "Yanlış. m.18/1, m.5'e dayanan itirazlara açıkça izin verir.",
        "Yanlış. Süre iki aydır.",
        "Doğru. m.18/1 ve m.18/2 bu şartları düzenler.",
        "Yanlış. m.18/1 hem m.5'i hem m.6'yı sayar.",
        "Yanlış. Mutlak ret nedenine dayanan itiraz için tescilli marka sahibi olmak gerekmez."
      ],
      ref: "SMK m.18"
    },
    {
      id: "KLV-018", exam: "marka", topic: "Marka İnceleme Kılavuzu",
      q: "Tescilli bir coğrafi işareti aynen içeren bir marka başvurusu SMK m.5/1'in hangi bendine göre reddedilir?",
      options: ["(c) bendi", "(i) bendi", "(ğ) bendi", "(ç) bendi", "(e) bendi"],
      answer: 1,
      why: [
        "Yanlış. (c) bendi coğrafi kaynak belirten tanımlayıcı ibareleri genel olarak kapsar; tescilli coğrafi işaret için özel bent (i)'dir.",
        "Doğru. m.5/1-i, tescilli coğrafi işaretten oluşan veya tescilli coğrafi işaret içeren işaretleri düzenler.",
        "Yanlış. (ğ) bendi kamusal/tarihî işaretler ve armalarla ilgilidir.",
        "Yanlış. (ç) bendi önceki markalarla aynı veya ayırt edilemeyecek kadar benzer işaretlerle ilgilidir.",
        "Yanlış. (e) bendi şekil ve diğer özelliklerle ilgilidir."
      ],
      ref: "SMK m.5/1-i"
    }
  ]
};
