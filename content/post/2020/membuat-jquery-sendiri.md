---
title: "Membuat JQuery Sendiri"
date: 2020-04-30T13:20:00+07:00
summary: "Belajar membuat library JQuery versi kamu sendiri dengan menggunakan native javascript API terkini, ternyata se-sederhana ini."
author: "bramaudi"
tags: [javascript]
---

jQuery adalah library javascript yang mungkin sangat populer di era nya, mungkin popularitas nya seperti pengguna css bootstrap, bahkan dulu semasa saya masih belajar javascript ini setiap saya stuck dan mencoba mencari solusi di internet yang ada malah dikasih javascript berupa syntax jQuery, karena saking populernya.

Namun seiring perkembangan API native dari javascript itu sendiri membuat kita tidak harusnya sudah tidak lagi menggunakan jQuery, kenapa? hmm sepertinya agar lebih mudah biarkan kode yang berbicara, jadi topik artikel ini adalah pembahasan tentang bagaimana kita bisa membuat library jQuery milik kita sendiri.

## Selector

Alasan utama saya dulu menggunakan javascript hanya karena suka dengan sistem selektor nya saja, hanya dengan pola `$(query)` saya bisa dengan mudah untuk memanipulasi DOM untuk keperluan user interface.

Namun saat ini sudah ada API javascript native yang fungsinya sama dengan Selector kepunyaan jQuery tadi yaitu `querySelector` dan `querySelectorAll` , dengan ini saya bisa membuat selektor jQuery hanya dengan 1 baris kode seperti ini;

```js
const $ = (query) => document.querySelectorAll(query)
```

dan bekerja dengan baik seperti jQuery.

## Fungsi Tambahan

Lalu bagaimana dengan fungsi² lainnya semisal `hide()`, `addClass()`, `removeClass()` dan seterusnya ... ? Kita bisa mengembangkan 1 baris kode sebelumnya menjadi seperti ini;

```js
const $ = (query) => {
  const el = document.querySelectorAll(query)
  return {
    hide: () => el[0].style.display = 'none',
    addClass: (v) => el[0].classList.add(v),
    removeClass: (v) => el[0].classList.remove(v)
    // Dan seterusnya ...
  }
}
```

Dan untuk penggunaan kode diatas juga sama seperti jQuery, misal;

```js
$('.modal').addClass('active')
```

Untuk fungsi kode diatas kita hanya bisa memanipulasi satu buah DOM saja, jadi misal kita ingin memodifikasi beberapa elemen dengan `class` yang sama maka hanya elemen pertama-lah yang akan berubah, untuk itu kita masih harus mengembangkan lagi ke tahap selanjutnya.

## Ekstensi Dengan Class

Yah, masih kurang pas rasanya saat saya memakai kode diatas, masih sangat sederhana dan kurang memenuhi kebutuhan, mari kita sempurna kan dengan membungkus nya dengan menggunakan javascript `class`, saya mencoba mengembangkan lagi kode sebelumnya agar semirip mungkin dengan jQuery.

Kelemahan / kekurangan kode sebelumnya:

- Hanya mampu memanipulasi satu DOM saja, jadi saya tidak bisa membuat modifikasi properti pada beberapa elemen dengan atribut class yang sama.
- Fungsinya sangat terbatas, saya harus membuat ulang jika ingin menambah fitur karena kita tidak bisa menggunakan fungsi bawaan.
- Karena nilai `return` berupa objek yang berisi fungsi² maka jika kita log di konsol hasilnya akan membludak dan menampilkan seluruh isi fungsi, tidak bisa menampilkan hasil node / elemen hasil query-nya saja seperti jquery.

Nah saya berhasil mengatasi semua masalah diatas dengan membuatnya menjadi class dan memasukkan fitur / fungsi yang kita inginkan dengan tetap bisa menampilkan hasil selektor dan poin lebihnya kita juga bisa melakukan pemanggilan fungsi secara berantai.

Pertama buat class-nya, buat dengan nama bebas untuk contoh disini saya beri nama class `X` agar tidak terlalu panjang;

```js
class X {
  // fungsi konstruktor bawaan
  constructor(q) {
    const el = document.querySelectorAll(q)
    // tambahkan properti untuk setiap node hasil query
    el.forEach((node, key) => this[key] = node)
    // tambahkan properti "length" yang berisi jumlah node yang ditemukan
    this.length = el.length
  }

  // custom function untuk "tambah class"
  addClass(v) {
    for (let i = 0; i < this.length; i++) {
      this[i].classList.add(v)
    }
    return this
  }

  // custom function untuk "manipulasi text konten"
  text(v) {
    let texts = []
    for (let i = 0; i < this.length; i++) {
      v ? this[i].innerText = v : texts.push(this[i].innerText)
    }
    return v ? this : texts
  }
}
```

Lalu gunakan `class` diatas untuk membuat fungsi selektor dengan menggunakan simbol dollar sebagai namanya;

```js
const $ = (q) => new X(q)
```

Oke library kecil kita sudah siap bertugas, untuk contoh saya buat kasus dimana saya punya beberapa elemen `div` dan saya akan merubah semua warna font dari elemen `div` menjadi merah dengan menambahkan class `red` dan mengembalikan nilai dengan text didalamnya (`innerText`) maka kodenya akan terlihat seperti ini;

```js
const ubah = $('div').addClass('red').text()
console.log(ubah)
```

Dari contoh kasus dan kode `class` diatas saya bisa mengubah / mengambil text didalam elemen dengan menggunakan fungsi `text(string)`, nilai `string` adalah opsional dimana jika kosong maka return adalah text konten yang ada saat ini.

Pastikan untuk menambah `return this` pada setiap fungsi yang akan ditambahkan untuk penggunaan fungsi berantai.

Bagaimana? sudah mirip dengan jQuery apa belum, bisa saya katakan ini bukan mirip tapi memang kurang lebih sudah sama. Semoga bermanfaat.
