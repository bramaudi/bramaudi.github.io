---
title: "Fungsi Double Tap atau Click"
date: 2020-05-28T12:23:09+07:00
summary: "Membuat fungsi untuk mensimulasikan ketukan ganda dengan menggunakan timeout."
author: "bramaudi"
tags: [javascript]
---

Secara native didalam JavaScript sudah ada API untuk melakukan sebuah event double click ini namun sepertinya tidak cocok bila digunakan untuk pengguna ponsel layar sentuh karena double click ini sepertinya khusus untuk mouse click saja, yah seperti namanya hanya "click" bukan "tap".

Namun kita bisa mensimulasi-kan untuk membuat event double click kita sendiri yang tentunya mendukung kedua perangkat tersebut yakni desktop dan ponsel dengan memanfaatkan timeout (`setTimeout`).

### Show me the code

``` javascript
let clickTimer = null

const doubleTap = () => {
  if (clickTimer == null) {
    clickTimer = setTimeout(() => {
      clickTimer = null
      console.log('single click')
    }, 300)
  } else {
    clearTimeout(clickTimer)
    clickTimer = null
    console.log('double click')
  }
}
```

Cara kerjanya ialah variabel `clickTimer` akan menampung fungsi timeout, nilai awalnya adalah kosong / `null` dan setelah itu kita cek didalam fungsi `doubleTap` yang nantinya akan digunakan pada element menggunakan event `onclick`, logika nya adalah jika variabel `clickTimer` ini kosong maka berikan fungsi timeout jika sebaliknya maka kita hapus timeout nya (`clearTimeout`) untuk mereset hitungan.

### Penggunaan

``` html
<button onclick="doubleTap()">Click here</button>
```

Coba klik pada element `button` tersebut maka akan muncul hasilnya di console log, interval / tenggang waktu dari fungsi diatas untuk bisa dianggap sebagai double click adalah *300* milidetik, untuk standar dari interval tidak bisa saya tetapkan namun sejauh ini saya sudah nyaman dengan jarak tersebut.

## TL;DR

**Fungsi**: Buat timeout 300 milidetik

**Mekanisme**: Jika dalam kurun waktu 300 milidetik tersebut sang event di panggil / ke-*trigger* lagi maka ini dianggap double click.