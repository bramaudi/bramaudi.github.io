---
title: "CodeIgniter4: Menambahkan Frontend SPA"
date: 2021-01-13T14:19:41+07:00
summary: "Membuat frontend berupa Single Page Application dalam project CI4"
author: "bramaudi"
tags: [php, javascript]
---

Dalam membuat frontend yang modern dan interaktif tentu kita harus berkerja menggunakan javascript, dengan CI4 kita hanya bisa membuat tampilan yang kurang interaktif karena mengandalkan php yang notabene adalah bahasa server-side, hanya memproses data lalu menampilkan dokumen halaman kepada browser, kita masih perlu menulis beberapa kode javascript untuk membuat interaksi antar muka yang interaktif, semisal popup, sidebar, dll.

Solusi lain adalah dengan membuat project terpisah khusus untuk frontend-nya. Namun jika sobat tidak ingin demikian maka silahkan simak tutorial ini.

## 1. Init NPM

Saya asumsikan sobat telah menginstall nodejs.

``` bash
cd project # folder project CI
npm init -y
```

Kemudian lanjut dengan instalasi bundler, disini saya menggunakan [parcel](https://parceljs.org/) sebagai bundler, kenapa? berikut kelebihannya:

- Cukup cepat
- Zero configuration
- Auto polyfill[^polyfill]


``` bash
npm i -D parcel-bundler
```

Setelah itu baru kita install framework javascript-nya. Sebagai contoh disini saya memilih [preact](https://preactjs.com/) untuk framework-nya.

``` bash
npm i preact preact-router
```

Oh iya, karena nantinya kita perlu menulis menggunakan JSX[^jsx] maka kita juga butuh beberapa dependensi berikut:

``` bash
npm i -D @babel/core @babel/plugin-transform-react-jsx
```

## Membuat Struktur

Oke, mari kita membuat struktur direktori, pertama buat folder khusus yang nantinya akan berisi semua file2 frontend dan folder inilah yang akan menjadi working dir kita nantinya, bisa dengan menggunakan nama apapun, disini misal saya menggunakan nama `client`:

``` bash
mkdir client
touch index.jsx
```

File `index.jsx` adalah endpoint awal untuk frontend kita, isi dengan kode berikut:

``` jsx
// client/index.jsx
import { h, Fragment, render } from 'preact'
import Router from 'preact-router'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  )
}

render(<App />, document.getElementById('app'))
```

Selanjutnya kita akan membuat halaman **Home** dan **About**:

``` bash
mkdir pages
touch pages/home.jsx
touch pages/about.jsx
```

Lalu isi file `home.jsx` dengan kode berikut:

``` jsx
// client/pages/home.jsx
import { h, Fragment } from 'preact'

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to home.jsx</p>
      <a href="/about">Go to About &raquo;</a>
    </>
  )
}

export default Home
```

Sedangkan untuk `about.jsx`:

``` jsx
// client/pages/about.jsx
import { h, Fragment } from 'preact'

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>This is about.jsx page</p>
      <a href="/">&laquo; Back to Home</a>
    </>
  )
}

export default About
```

## 3. Atur Router Codeigniter

Meski bagian SPA sudah selesai namun kita masih perlu mengatur routing pada bagian Codeigniter agar tetap menjalankan satu `views` meski URL apapun itu yang diakses.

Tambahkan kode berikut pada file `app/Config/Routes.php`:

``` php
$routes->get('/(:any)', 'Home::index');
```

Setelah itu kita ubah views `app/Views/welcome_message.php` menjadi seperti ini:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project SPA</title>
</head>
<body>
  <div id="app"></div>
  <script src="<?=site_url()?>/dist/index.js"></script>
</body>
</html>
```

## 4. Penutup

Untuk bisa menerjemahkan JSX dengan benar kita perlu memberi tahu bundler fungsi mana yang digunakan, cara nya buat file `.babelrc` tepat didalam root Codeigniter:

``` json
{
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {"pragma": "h", "pragmaFrag": "Fragment"}
    ]
  ]
}
```

Tambahkan juga folder `.cache` dan `node_modules` kedalam blacklist git agar tidak ikut masuk kedalam repository, dengan menambahkan beberapa baris berikut pada file `.gitignore` dibagian terakhir:

``` bash
node_modules/
.cache
```

Tidak lupa pula kita juga akan menulis perintah untuk pengembangan dan build production, pada `package.json` ubah bagian "scripts" menjadi berikut:

``` bash
"scripts": {
  "dev": "parcel watch client/index.jsx -d public/dist",
  "build": "parcel build client/index.jsx -d public/dist --no-source-maps"
},
```

Selesai, perintah `dev` dan `build` diatas fungsi nya adalah untuk mem-"proses" apa yang ada pada folder `client` dan mengirim hasil olahan ke folder `public/dist`.

Gunakan perintah `npm run dev` untuk membuat **parcel** mengawasi perubahan dan `npm run build` untuk membangun output javascript yang sudah di optimalkan khusus untuk rilis produksi.

Dari sini sisa-nya kita tinggal fokus untuk membuat Endpoint API saja, semoga bermanfaat.


[^polyfill]: Menerjemahkan kode modern yang awalnya tidak didukung agar dapat tetap berjalan pada peramban lama.

[^jsx]: **JSX** adalah kepanjangan dari Javascript XML, kita bisa menulis kode HTML didalam Javascript demi mempermudah penggunaan fungsi DOM.