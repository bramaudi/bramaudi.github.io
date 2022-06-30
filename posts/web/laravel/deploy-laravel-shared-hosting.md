---
title: Deploy Laravel ke Shared Hosting
date: 2021-12-04 02:40:28
toc: true
category: web
tags: [laravel]
---
Laravel adalah salah satu Framework PHP paling populer, penggunaan Laravel sebagian besar ditangani oleh perintah bash yang Anda jalankan di terminal, itu disebut `artisan`, Anda dapat dengan mudah membuat pengontrol, model basis data, dll.

Tapi bagaimana jika kita ingin men-deploy project semacam ini ke server dengan fitur terbatas seperti CPanel atau Shared Hosting? bisa sih tapi agak ribet, singkatnya kita tinggal pisahkan folder **public** dengan seluruh file project Laravel lalu perbaiki path di codenya, yang utama folder public diperlihatkan ke visitor dan selebihnya berada di suatu tempat yang tidak dapat diakses oleh pengunjung.

```bash
MyApp
├── app
├── bootstrap
├── config
├── database
├── public
├── resources
...
```

## Langkah - langkah

1. Buat folder baru dengan nama apa saja, misalnya kita menggunakan `laravel` lalu pindahkan seluruh file kecuali folder `public` ke folder `laravel` yang baru saja kita buat.

2. Ganti nama nama folder publik Anda agar sesuai dengan nama direktori publik server, kebanyakan bernama `public_html` dan terkadang `htdocs`.

3. Buka file `index.php` di dalam folder publik kemudian perbaiki path dengan mengganti dari `/../` menjadi `/../laravel/`, perhatikan bahwa folder `laravel` adalah folder yang sama dengan yang sudah kita buat sebelumnya di Langkah 1.

Itu saja, sudah selesai. Jangan lupa untuk mengkonfigurasi file `.env`.
