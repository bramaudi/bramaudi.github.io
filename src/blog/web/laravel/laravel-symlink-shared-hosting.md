---
title: Cara Symlink pada Shared Hosting
date: 2021-12-04 02:42:24
toc: true
category: web
tags: [laravel]
---
Hari ini saya mencoba deploy project Laravel ke sebuah shared hosting dengan fitur yang terbatas, apalagi tidak tersedia nya akses SSH yang mana sangat penting untuk aplikasi seperti Laravel.

Beruntung kita masih bisa memakai sebuah trik untuk menjalankan perintah **symlink** dengan memanfaatkan fitur **Cron Jobs** di shared hosting, dalam kasus saya adalah CPanel, karena tidak pernah pakai Cron Jobs ini saya jadi baru tau 😂.

Langkah selanjutnya Anda tinggal membuat sebuah jadwal apa saja dengan waktu yang paling singkat, pilih saja **per-1 menit** lalu masukkan perintah terminal misalnya saja saya akan menghubungkan `storage/app/public` ke `public/storage`.

Maka ketik perintah seperti berikut:

```bash
ln -s /home/<username>/<laravel>/storage/app/public /home/<username>/<public>/storage
```

Ganti `<username>` dengan nama pengguna hosting yang biasa digunakan untuk login, ganti `<laravel>` dengan nama folder yang menyimpan berkas pribadi laravel, dan ganti `<public>` dengan nama folder utama hosting, biasanya bernama `public_html`, `www`, atau `htdocs`.