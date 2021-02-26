---
title: "Minimal Rating Input"
date: 2021-01-28T03:10:57+07:00
summary: "Belajar membuat input di dalam form berupa bintang untuk kebutuhan rating"
author: "bramaudi"
tags: [javascript, css]
---

Baru-baru ini saya mendapat project yang mana membutuhkan fitur rating, beruntung saya menemukan artikel "[Star Rating With Very Little CSS](https://css-tricks.com/star-ratings/)". Sobat bisa membacanya disitu namun untuk contoh dunia nyata adalah alasan saya untuk menulis blog kali ini.

## Dasar Sederhana

Dari yang telah saya ambil dari artikel yang telah saya sebut diatas hanya dengan kode berikut kita sudah bisa menampilkan input rating minimal.

``` html
<div class="input-rating">
  <div class="rating">
    <span>☆</span>
    <span>☆</span>
    <span>☆</span>
    <span>☆</span>
    <span>☆</span>
  </div>
</div>
```

``` css
.input-rating {
  text-align: left;
  display: inline-block;
}
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
}
.rating > span {
  display: inline-block;
  position: relative;
  font-size: x-large;
  width: 1.1em;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
   content: "\2605";
   position: absolute;
   color: orange;
}
```

## Interaksi Javascript

Untuk bisa digunakan dalam kasus nyata tentu kita butuh sebuah fungsi javascript untuk memberikan nyawa agar rating input mampu menampung dan memuat nilai.

Pertama untuk mengirim nilai diperlukan elemen input dengan tipe **hidden** dan penambahan attribute `id` untuk binding ke fungsi javascript nantinya,

{{<highlight html "hl_lines=2-3">}}
<div class="input-rating">
  <div class="rating" id="rating">
    <input type="hidden" name="rating" value="0">
    <span>☆</span>
    <span>☆</span>
    <span>☆</span>
    <span>☆</span>
    <span>☆</span>
  </div>
</div>
{{</highlight>}}

Kedua adalah memberi nilai kepada setiap bintang agar bisa di identifikasi nilai yang dimaksud dengan mengandalkan atribute `data-*` agar lebih mudah,

{{<highlight html "hl_lines=4-8">}}
<div class="input-rating">
  <div class="rating" id="rating">
    <input type="hidden" name="rating" value="0">
    <span data-value="5">☆</span>
    <span data-value="4">☆</span>
    <span data-value="3">☆</span>
    <span data-value="2">☆</span>
    <span data-value="1">☆</span>
  </div>
</div>
{{</highlight>}}

Ketiga kita mulai membuat fungsi javascript-nya agar saat salah satu bintang di klik maka nilai yang dibawa akan disimpan pada elemen ber-tipe **hidden** tadi,

``` js
var rating = document.getElementById('rating');

rating.onclick = function (event) {
  rating.firstElementChild.value = event.target.dataset.value
}
```

_**Catatan**: Properti `dataset` adalah properti bawaan yang menampung nilai dari atribute elemen yang sudah pernah di deklarasi sebelumnya dengan nama prefix `data-`_

## Memuat Data Sebelumnya

Terakhir sebagai penutup adalah membuat presentasi bintang bisa tetap pada nilai yang telah di pilih dari event klik sebelumnya, untuk itu kita perlu menambah selector css, ubah bagian css menjadi seperti berikut,

{{<highlight css>}}
.rating > span:hover:before,
.rating > span:hover ~ span:before,
.rating > span.active:before,
.rating > span.active ~ span:before {
  /* ... */
}
{{</highlight>}}

kemudian tambahkan pula kode berikut pada fungsi javascript,

{{<highlight js "hl_lines=4-7 9-10">}}
var rating = document.getElementById('rating');

rating.onclick = function (event) {
  // Reset semua class chidren
  for (var i = 0; i < rating.children.length; i++) {
    rating.children[i].classList.remove('active')
  }

  // Tambah class "active" untuk bintang terpilih
  event.target.classList.add('active')

  rating.firstElementChild.value = event.target.dataset.value
}
{{</highlight>}}

Oke, dengan begini semuanya sudah siap, dan untuk demo + keseluruhan kode adalah sebagai berikut,

{{<codepen id="wvzVOyR">}}