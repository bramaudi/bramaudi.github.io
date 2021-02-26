---
title: "Menghitung Kabisat Tidaknya Sebuah Tahun"
date: 2020-08-09T18:12:25+07:00
tags: ['algoritma', 'javascript']
author: bramaudi
summary: "Belajar menghitung dan membuat algoritma kabisat tidaknya sebuah tahun"
---

Tahun kabisat adalah dimana dalam tahun tersebut terdapat penambahan tanggal sejumlah 1 hari guna menyesuaikan penanggalan dengan tahun astronomi.

Dalam 1 tahun tidaklah terdiri dari 365 hari saja namun lebih tepatnya **365 hari 5 jam 48 menit 45,1814 detik**.

## TL;DR

Tahun kabisat memiliki tanggal 29 februari.

## Algoritma

Nah untuk mengetahui apakah dari suatu tahun itu merupakan tahun kabisat atau tidak terdapat 2 algoritma:

Pertama, menggunakan modulo:

``` bash
if year modulo 4 is 0
then
if year modulo 100 is 0
then
if year modulo 400 is 0
then
is_leap_year
else
not_leap_year
else is_leap_year
else not_leap_year
```

atau kedua menggunakan pembagian:

``` bash
if year is divisible by 400 then is_leap_year
else if year is divisible by 100 then not_leap_year
else if year is divisible by 4 then is_leap_year
else not_leap_year
```

Oke disini saya akan coba implemen kedua algoritma diatas, latihan ini seperti biasa dengan menggunakan bahasa Javascript, pertama saya coba menggunakan cara pembagian:

``` js
function isKabisat(tahun) {
  // fungsi untuk mengetahui tahun bisa dibagi atau tidaknya
  function divisible(n) { return n % 1 === 0 }
  
  if (divisible(tahun / 400)) return 'Kabisat'
  else if (divisible(tahun / 100)) return 'Bukan'
  else if (divisible(tahun / 4)) return 'Kabisat'
  else return 'Bukan'
}
```

Sepertinya terlihat mudah dan jelas, kita juga masih bisa menyederhanakan menggunakan operasional kondisi (ternary) namun efek sampingnya akan membuat coding menjadi agak aneh dan mungkin sulit dibaca.

``` js
function isKabisat(tahun) {
  // ubah nama fungsi agar lebih pendek
  function div(n) { return n % 1 === 0 }
  
  return div(tahun / 400)
    ? 'Kabisat'
    : div(tahun / 100)
      ? 'Bukan'
      : div(tahun / 4)
        ? 'Kabisan'
        : 'Bukan'
}
```

Nah sekarang bagaimana jika kita menggunakan operator modulo?

``` js
function isKabisat(tahun) {
  if (tahun % 4 == 0)
    if (tahun % 100 == 0)
      if (tahun % 400 == 0) return 'Kabisat'
      else return 'Bukan'
    else return 'Kabisat'
  else return 'Bukan'
}
```

Hmm... lumayan, sengaja tidak saya kasih tanda kurung kurawal namun masih bisa dibaca alias readable, namun bagaimana jika saya coba sederhana-kan lagi ya?

``` js
function isKabisat(tahun) {
  return tahun % 4 == 0 || tahun % 100 == 0 && tahun % 400 != 0
    ? 'Kabisat'
    : 'Bukan'
}
```

Nah gitu kan terlihat lebih enak, lebih sederhana namun masih terbaca.

Untuk cara uji coba nya seperti ini:

``` js
console.log(isKabisat(2000)) // Kabisat
console.log(isKabisat(1999)) // Bukan
```

Silahkan berikan komentar nya apabila terdapat sesuatu yang mengganjal terutama pada gaya coding saya wkwk / jika teman-teman berkenan untuk berbagi kode yang lebih sederhana lagi.


Oke sekian saja dan semoga bermanfaat.

Refrensi: [Wikipedia](https://id.wikipedia.org/wiki/Tahun_kabisat)