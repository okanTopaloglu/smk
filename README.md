# Vekillik Sınavı Çalışma Masası

TÜRKPATENT Patent ve Marka Vekilliği Sınavı için statik web uygulaması.

- **Soru çöz**: Marka / Patent / ikisi birden; 5 şıklı sorular, anında doğru-yanlış ve her şık için açıklama.
- **Hap bilgiler**: sınavda kesinlikle bilinmesi gerekenler, süreler tablosu.
- **Marka inceleme kılavuzu**: Kurumun inceleme ilkelerinin özeti.
- **Kanun metni**: 6769 sayılı SMK'nın güncel tam metni (arama, maddeye git, sesli okuma).
- **Tescil sınıfları**: Nice (1–45) ve Lokarno sınıfları.
- Yazı boyutu büyütme/küçültme, açık/koyu tema, Türkçe sesli okuma (tarayıcının konuşma sentezi).

Canlı adres: https://okantopaloglu.github.io/smk/ — tarayıcıdaki "Yükle" düğmesiyle (telefonda "Ana ekrana ekle") uygulama olarak kurulabilir ve internetsiz çalışır.

Yerelde çalıştırmak için `index.html` dosyasını tarayıcıda açmak yeterli.

## Veri

- `data/src/6769-smk.md`: kanun metni, [acik-mevzuat](https://github.com/onurcan-b/acik-mevzuat) aynasından (kaynak: mevzuat.adalet.gov.tr).
- `tools/parse_smk.py` metni `data/kanun.js` dosyasına dönüştürür.
- `data/questions/*.json` soru dosyalarıdır; `tools/build.py` bunları doğrulayıp `data/sorular.js` dosyasında birleştirir.

```
python3 tools/parse_smk.py data/src/6769-smk.md data/kanun.js
python3 tools/build.py
```
