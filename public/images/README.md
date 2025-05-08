# Resim Dosyaları

Bu klasör, web sitesinde kullanılacak resim dosyalarını içerir. Aşağıdaki adımları takip ederek resimleri yükleyebilirsiniz:

1. Resim dosyalarınızı bu klasöre (`public/images/`) yükleyin.
2. Resim dosyalarının isimlerinde Türkçe karakter ve boşluk kullanmaktan kaçının.
3. Tercihen dosya isimleri için küçük harfler ve tire (-) kullanın. Örneğin: `su-makinesi-1.jpg`

## Önerilen Resim Boyutları

- Slider/Hero görselleri: 1920x1080px
- Ürün görselleri: 800x600px
- Önizleme/küçük resimler: 400x300px
- Logo: 200x200px

## Desteklenen Formatlar

JPG, PNG, WebP, SVG formatları desteklenmektedir. Performans için WebP formatı tercih edilebilir.

---

Resimlerinizi bu klasöre yükledikten sonra, sitede aşağıdaki şekilde kullanabilirsiniz:

```jsx
<img src="/images/resim-adi.jpg" alt="Resim açıklaması" />
```

veya CSS içinde:

```css
background-image: url('/images/resim-adi.jpg');
``` 