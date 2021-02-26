---
title: "Parcel + Tailwind = 😎"
date: 2021-01-14T21:47:31+07:00
summary: "Menambahkan TailwindCSS (v2) pada ParcelJS (v1) bundler."
author: "bramaudi"
tags: [nodejs, javascript, css]
---

[ParcelJS](https://parceljs.org/) adalah bundler yang cukup favorit bagi saya, selain cepat (tidak kalah dengan [esbuild](http://esbuild.github.io/)) juga tidak perlu ribet untuk konfigurasi-nya.

Disini versi Parcel yang saya maksud adalah versi 1, karena saat posting ini ditulis Parcel v2 saya rasa masih kurang stabil dan dokumentasi-nya pun sedang dalam progress pengerjaan.

Jika sobat tidak ingin menghabiskan banyak waktu saya juga telah membuat sebuah repository untuk ini [disini](https://gitlab.com/bramaudi/parcel-tailwind).

## Installasi ParcelJS

Okey mari kita mulai dengan menginstall ParcelJS, kita perlu menginstall modul postcss juga agar Parcel nantinya dapat membaca file Tailwind yang ber-format postcss.

``` bash
# Install parcel beserta module
npm i -D parcel-bundler postcss-modules
```

## Instalasi Tailwind

Tailwind v2 membutuhkan dependensi preprocessor PostCSS v8, dalam dokumentasi dijelaskan bahwa beberapa aplikasi / framework mungkin masih belum mendukung PostCSS v8 dan harus menginstall Tailwind v2 namun dengan versi yang kompatibel dengan PostCSS v7.

Singkat-nya sobat tidak usah bingung karena untuk Parcel bundler kita cukup downgrade dependensi **autoprefixer** saja ke **v9** dan selebih-nya adalah versi terbaru.

``` bash
npm i tailwindcss postcss autoprefixer@^9
```

## Konfigurasi Tailwind & PostCSS

Didalam folder utama projek, kita buat file konfigurasi yang di perlukan Tailwind dengan menggunakan perintah berikut:

``` bash
npx tailwindcss init
```

lalu ubah bagian `purge` agar nanti-nya dapat memangkas class CSS yang tidak diperlukan, ubah menjadi seperti berikut:

``` diff
- purge: [],
+ purge: {
+    enabled: true,
+    content: ['./src/**/*.html']
+  },
```

bagian konten bisa kita sesuaikan format-nya, bebas misal-nya saja *.php*, *.js* atau *.jsx*, *.svelte*, dan lain-lain.

Kemudian selanjutnya adalah membuat file `postcss.config.js`:

``` js
// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
  ]
}
```

**Penting**, kita harus memuat manual file konfigurasi Tailwind (tailwind.config.js) pada konfigurasi postcss secara eksplisit persis seperti pada contoh diatas karena jika hanya..

``` js
require('tailwindcss')
```

..maka akan terjadi error, entah karena apa penyebab-nya masih belum saya ketahui.

## Import Tailwind

Untuk bisa menjalankan tailwind pertama kita perlu impor dulu style yang berisi fondasi, biasanya saya mengimpor pada file entrypoint utama seperti *index.js*, *main.js*, atau *App.js* tergantung nama masing-masing dalam projek sobat.

``` js
import './styles.pcss'
```

Kemudian sesuai dengan dokumentasi kita isi file `styles.pcss` dengan kode berikut:

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind sudah siap digunakan, dan sudah otomatis akan membuang class yang tidak dibutuhkan untuk mendapatkan output css yang ramping.

Untuk contoh lebih lengkap saya bisa sobat lihat repository yang telah saya buat beserta demo-nya:

Repository: [https://gitlab.com/bramaudi/parcel-tailwind](https://gitlab.com/bramaudi/parcel-tailwind)

Demo: [https://bramaudi.gitlab.io/parcel-tailwind/](https://bramaudi.gitlab.io/parcel-tailwind/)