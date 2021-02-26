---
title: "PHP: Glob"
date: 2020-05-04T03:36:48+07:00
summary: "Implementasi sederhana dari glob untuk menampilkan daftar filesystem pada suatu direktori + latihan membuat webshare sederhana dengan PHP."
author: "bramaudi"
tags: [php]
---

## Apa itu glob?

**Glob** digunakan untuk dirlisting / menampilkan isi konten suatu direktori. Contoh sederhana adalah ketika saya ingin membuat file sharing menggunakan web (webshare), saya cukup menggunakan fungsi `glob` ini dan server bawaan php.

Syntax:
```php
glob ( string $pattern [, int $flags = 0 ] ) : array
```

Misalkan disini saya mempunyai sebuah folder bernama `Brem` dan berisi beberapa file berikut;

``` bash
├── archive.zip
├── cat.jpg
├── doc-2.txt
├── doc.txt
├── flying-bird.gif
└── images.jpg
```

Untuk lebih mudah dalam memahami yuk langsung simak contoh - contoh yang telah saya buat berikut;

## Contoh

#### #1 Menampilkan Semuanya

Kode:

``` php
print_r(glob('*.*'));
```

Hasil:

``` bash
Array
(
    [0] => archive.zip
    [1] => cat.jpg
    [2] => doc-2.txt
    [3] => doc.txt
    [4] => flying-bird.gif
    [5] => images.jpg
)
```

#### #2 Menampilkan Semuanya dengan Prefix Path

Kode:

``` php
print_r(glob('./*'));
```

Hasil:

``` bash
Array
(
    [0] => ./archive.zip
    [1] => ./cat.jpg
    [2] => ./doc-2.txt
    [3] => ./doc.txt
    [4] => ./flying-bird.gif
    [5] => ./images.jpg
)
```

#### #3 Menampilkan Format Tertentu

Kode:

``` php
print_r(glob('*.txt'));
```

Hasil:

``` bash
Array
(
    [0] => doc-2.txt
    [1] => doc.txt
)
```

#### #4 Menampilkan Beberapa Format Sekaligus

Untuk beberapa kasus kita pasti akan membutuhkan parameter kedua dari fungsi glob, misalnya saja untuk kasus seperti menampilkan beberapa format ini kita perlu menggunakan `GLOB_BRACE`.

Kode:

``` php
print_r(glob('*.{jpg,gif}', GLOB_BRACE));
```

Hasil:

``` bash
Array
(
    [0] => cat.jpg
    [1] => images.jpg
    [2] => flying-bird.gif
)
```

---

### Latihan Membuat Webshare Sederhana

Pertama saya membuat file `index.php` didalam folder yang ingin saya share yang berisi script berikut;

``` php
<?php

$files = glob('./*');

foreach ($files as $file) {
  echo '<li><a href="'.$file.'">'.$file.'</a></li>';
}
```

setelah itu saya tinggal membuat koneksi web server bawaan php, dengan langkah - langkah sebagai berikut;

1. Buka `terminal`
2. Ketik perinah `php -S <host>:<port>`
3. Sambungkan ke local network tersebut melalui browser dan saya sudah siap berbagi file.

Untuk contoh penggunaan perintah php server secara nyata adalah seperti berikut;

``` bash
php -S localhost:8080 # hasil url 127.0.0.1:8080
php -S 0:8080 # hasil url 0.0.0.0:8080
php -S 0:8080 -t public/ # hasil url 0.0.0.0:8080 - folder public/ sebagai tujuan
```

Ok, semoga bermanfaat.