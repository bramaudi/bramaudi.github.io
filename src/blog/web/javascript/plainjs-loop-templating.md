---
title: Loop Templating Plain Javascript
date: 2022-02-08 17:02:27
tags: [javascript]
---
Melakukan loop data pada template tanpa menggunakan framework perlu sedikit trik karena jika dengan framework tentu sudah ada mekanisme dari tiap framework itu sendiri namun jika murni javascript kita harus membuat mekanisme sendiri.

Berikut ini implementasi yang sering saya gunakan, biasanya kasus penggunaan untuk pembuatan fungsi pencarian pada _Static Site Generator_ karena terlalu overkill jika saya pakai framework.

```js
/**
* Loop Templating
* @param {Array<{ [key: string]: unknown }>} data
*/
function maplist($el, data) {
  const interpolationRegex = /\[([\w]+)\]/g; // usage: [title]
  const num = (item, i) => ({i, n: i+1, ...item})
	
  $el._$ = $el._$ || $el.innerHTML;
  $el.textContent = '';
	
  $el.innerHTML = data.map(num).reduce((rawTemplate, obj) => {
    return rawTemplate += $el._$.replace(
      interpolationRegex,
      (match, group1) => obj[group1.trim()] ?? match
    )
  }, '')
}
```

Lihat pada [gist](https://gist.github.com/bramaudi/3011b94652a014667dbd5be0d36e5f63).

## Contoh Penggunaan

```html
<div id="animelist">
  <div class="user-[i]">[n]. [name]</div>
</div>
```

```js
maplist(document.getElementById('animelist'), [
  { name: 'Attack On Titan' },
  { name: 'Jojo Bizzare Adventure' },
  { name: 'One Piece' },
  { name: 'Naruto' },
])
```

Hasilnya:

```html
<div id="animelist">
  <div class="user-0">1. Attack On Titan</div>
  <div class="user-1">2. Jojo Bizzare Adventure</div>
  <div class="user-2">3. One Piece</div>
  <div class="user-3">4. Naruto</div>
</div>
```

## Penjelasan

Pertama saya mendeklarasi syntax _interpolation_ dengan menggunakan *Regex*:

```js
const interpolationRegex = /\[([\w]+)\]/g; // usage: [title]
```

Ini bisa kita custom jika mau, misalnya saja untuk menghindari benturan dengan template engine dari server, butuh sedikit pengetahuan tentang regex.

Lalu saya juga melakukan mutasi pada array untuk menambahkan informasi index & penomoran yang nantinya bisa kita akses dengan `[i]` untuk index dan `[n]` untuk penomoran:

```js
const num = (item, i) => ({i, n: i+1, ...item})
```

---

Selanjutnya kita bahas fungsi utama tentang manipulasi DOM, pertama saat pertama kali fungsi `maplist` dimuat kita ambil `innerHTML` dari element yang bersangkutan kemudian menyimpannya didalam sebuah property didalam element itu sendiri, dalam kasus ini element adalah `$el` dan nama property-nya adalah `_$` (sebenarnya terserah namun untuk penyingkatan saja)...

```js
$el._$ = $el._$ || $el.innerHTML;
```

...kemudian setelah string template sudah kita simpan langkah selanjutnya adalah membersihkan _children_...

```js
$el.textContent = '';
```

...agar template mentah kita tidak tampil, atau dalam kasus lain kita juga bisa menggantinya dengan template untuk tampilan state kosong seperti "_Daftar masih kosong_" misalnya.

___

Terakhir adalah proses _render_ data dengan mengembalikan nilai `innerHTML` dari element dengan data berupa string yang telah di proses, disini saya mutasi array menggunakan fungsi `map` untuk menerapkan index & penomoran dan fungsi `reduce` untuk akumulasi string hasil pemrosesan data tiap object.

Ok, sebelum itu jika kalian belum tau tentang `reduce`, ini adalah fungsi bawaan yang dimiliki tipe data array yang gunanya untuk akumulasi.

```js
...reduce((rawTemplate, obj) => {
  return rawTemplate += $el._$.replace(
    interpolationRegex,
    (match, group1) => obj[group1.trim()] ?? match
  )
}, '')
```

Nilai awal adalah sebuah string kosong yang kemudian di tiap perulangan kita lakukan _replace_ untuk mengganti syntax _interpolation_ dengan nilai yang sama yang ada di object jika tidak ada maka jangan replace, dalam kode diatas jika kita debug maka variabel `match` akan berisi string "[title]" dan `group1` berisi "title".

Saya juga menggunakan operator `??` (null coalescing) agar object yang memiliki nilai 0 atau string kosong ikut ter-_replace_.