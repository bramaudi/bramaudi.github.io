---
title: "Matematika Dalam Dunia Programming, Gak Penting?"
date: 2020-07-23T10:15:42+07:00
tags: ['coding','algoritma']
author: bramaudi
summary: "Membahas seberapa penting kah matematika di dalam dunia pemrogramman."
---

Dari dulu topik tentang "Yang penting logikanya" ini sering saya jumpai.

Saya pribadi sih tidak terlalu mengerti sama "joke" yang satu ini, karena disamping saya yang juga gak terlalu suka dan paham soal matematika dari dulu jadinya gak lucu² amat ngena-nya.

![Meme Matematika Gak Penting](/assets/images/meme-matematika-gak-penting.jpg "Sumber: *gatau, nemu di fb")

But wait, matematika yang dulu tak pernah ku anggap ternyata berguna juga, mungkin kita mudah membenci hal yang kita tidak kuasai / ketahui.

Nah.. mulai dari sini "joke" ini terasa agak lucu di otak saya wkwkwk 🤣

Awal ceritanya sih saya iseng coba mempraktek-kan soal yang ada di meme diatas, intinya sih hasil akhir / output yang diharapkan harus jadi seperti ini:

``` bash
1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ...
```

Kata **Fizz** berada disetiap kelipatan **3**, **Buzz** dengan kelipatan **5** dan **FizzBuzz** dengan kelipatan **15**.

Nah awalnya saya yang coding dengan basis hanya berbekal logika saja jadinya yang kepikiran adalah coding seperti berikut, *_ilustrasi saya pake Javascript karena mudah untuk dipraketk-kan dirumah._

``` js
// Deklarasi variable yang dibutuhkan
var isFizz = [],
    isBuzz = [],
    isFizzBuzz = [],
    output = []

var limit = 100

// Menyiapkan acuan posisi
for (var i = 1; i <= limit; i++) {
  isFizz.push(3 * i)
  
  isBuzz.push(5 * i)
  
  isFizzBuzz.push(15 * i)
}

// Iterasi dan replace angkanya
for (var i = 0; i < limit; i++) {
  output[i] = i +1
  if (isFizzBuzz.indexOf(output[i]) != '-1') {
    output[i] = 'FizzBuzz'
  }
  else if (isBuzz.indexOf(output[i]) != '-1') {
    output[i] = 'Buzz'
  }
  else if (isFizz.indexOf(output[i]) != '-1') {
    output[i] = 'Fizz'
  }
}

console.log(output)
```

Dan hasilnya? Oh tentu saja output yang dihasilkan sesuai dengan yang diharapkan.

Logikanya sederhana, saya hanya perlu mencari (acuan posisi) angka mana saja yang akan diganti dengan kata yang diinginkan kemudian disimpan kedalam bentuk array, misalnya saja untuk kata **Fizz** maka;

``` js
isFizz = [3, 6, 9, 12, 15, ...]
```

Kemudian tahap terakhir adalah mencocokan, apabila *index* saat iterasi cocok / berada dalam daftar array `isFizz` maka ganti nilai-nya dengan *Fizz*.

Namun untungnya ada teman se-frekuensi yang bisa diajak sharing ide, beliau ini kepikiran hal berbeda yakni dengan sedikit sentuhan matematis untuk mencari acuan nilai yang akan diubah, dengan sangat cerdas-nya beliau menggunakan perhitungan pembagian 😮, yah betul, ternyata tinggal dibagikan saja saja angka index-nya dengan angka kelipatan (`index` / `kelipatan`).

Jadinya untuk setiap nilai yang cocok / termasuk kedalam kelipatan adalah yang hasil-nya jika di bagikan menjadi nilai yang bulat (bukan angka pecahan), jika saya sesuaikan dengan sistem yang baru ini maka secara keseluruhan coding kurang lebih akan menjadi seperti ini;

``` js
// Fungsi "isInt" u/ cek apakah angka bulat / pecahan
var isInt = function (n) { return n % 1 === 0 }

var output = []

for (var i = 1; i <= 100; i++) {
  if (isInt(i / 15)) {
    output.push('FizzBuzz')
  }
  else if (isInt(i / 5)) {
    output.push('Buzz')
  }
  else if (isInt(i / 3)) {
    output.push('Fizz')
  }
  else {
    output.push(i)
  }
}

console.log(output)
```

Hmmm, apakah ini sudah terlihat lebih simple? memang lebih membingungkan tapi secara kesuluruhan malah akan keliatan keren 👍 hehe.

Tapi secara kebetulan saya juga gak sengaja menemukan peritungan yang lebih simple, dengan menggunakan modulus! Jika angka index di modulus-kan dengan angka kelipatan maka akan menjadi **0** jika cocok.

Dan hasilnya **wow**, coding pertama diatas yang tadinya terlihat pedih dimata kini bisa menjadi agak lebih manusiawi seperti ini;

``` js
var output = []

for (var i = 1; i <= 100; i++) {
  if (i % 15 == 0) output.push('FizzBuzz')
  else if (i % 5 == 0) output.push('Buzz')
  else if (i % 3 == 0) output.push('Fizz')
  else output.push(i)
}

console.log(output)
```

Nah semenjak kejadian inilah saya menjadi agak tertarik dengan matematika, kalo disini bisa juga dibilang *kesemsem* dalam istilah javanese. Jadi pesan moral yang didapat dari artikel ini apa? _useless_? **No**.

Jadi gini, sama seperti yang saya bilang sebelumnya,

> Kita membenci hal yang tidak kita ketahui secara berlebihan dan mencintai hal yang kita ketahui secara berlebihan.
> — <cite>Brama Udi</cite>