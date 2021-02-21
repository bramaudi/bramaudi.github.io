---
title: "Membuat Program Pemecah Soal Bahasa Panda UTBK"
date: 2020-07-24T10:31:21Z
tags: ['coding', 'project']
author: bramaudi
summary: "Program untuk memecahkan sebuah soal unik yang ada pada UTBK"
---

Saya mencoba membuat sebuah program yang mampu memudahkan menjawab soal UTBK seperti berikut.<!--more-->

![Soal UTBK](/assets/images/puzzle-soal-utkbk.jpg "Soal dengan pertanyaan yang terkesan seperti ketikan asal²an. 🤔")

Waktu itu saya menemukan sebuah posting di sosmed yang cukup menarik, mengulas tentang soal UTBK diatas, seperti memecahkan puzzle riddle.

Jika dilihat, satu-satunya petunjuk yang ada disini  adalah **K=5**, ini berarti huruf setelahnya adalah sesuai urutan yakni **L=6** dan **M=7** begitu seterusnya.

Ini merupakan sebuah pola acuan (`pattern`) yang jika di urutkan kembali dalam huruf alfabet adalah `ghijklmnopqrstuvwxyzabcdef`, lihat huruf **k** ada pada urutan ke **5**.

Dari soal yang ada kita ambil contoh dari satu katanya yaitu `ygza`, maka:

``` bash
y = 19
g = 1
z = 20
a = 21
```

Diatas masih menggunakan pola acuan **K=5**, nah namun apa jadinya jika kita kembalikan nomor urutnya kepada pola acuan dari alfabet normal seperti **A=1** dan **B=2**, **C=3** dst. Hasilnya:

``` bash
19 = s
1 = a
20 = t
21 = u
```

Angka **19**, **1**, **20**, **21** akan menghasilkan kata "_satu_". Dari sini sudah muncul sebuah kata, jadi sudah bisa terpecahkan untuk yang selanjutnya.

Tapi gak efisien juga kalau kita hitung manual, perhuruf misalnya. Pada waktu itu dipostingan tersebut juga ada seseorang yang memberikan sebuah program script yang bisa menghitung jadi tinggal kita input saja pattern yaitu `ghijklmnopqrstuvwxyzabcdef` juga soal yang telah dienkripsi menjadi seperti ceker ayam 🐥 tadi, maka akan muncul hasilnya.

Namun karena saya kurang puas, kita masih harus mengisi pola acuan secara manual dan tentu harus sedikit menghitung nya kan, untuk itu saya buat yang lebih canggih sedikit yaitu tinggal ketik saja pola nya semisal tadi **K=5** lalu soal nya.

![Tampilan program](/assets/images/simple-encryption.jpg "Saya beri nama: Simple Encryption")

Eh iya itu saya tambahin juga fitur enkripsi yang gunanya untuk sebaliknya, yaitu membuat kalimat biasa menjadi kalimat dengan pola alfabet berdasarkan pola yang ditentukan jadi kalian nanti bisa coba buat soal sendiri atau hanya sekedar iseng bikin kode untuk gebetannya.

Program ini bukan hasil fork / modif dari yang bersangkutan sebelumnya, dan dalam versi saya sudah ada kalkulator penghitungan urutan alfabet berdasarkan input pola yang ditentukan yang dimana fungsi ini bisa saya katakan core-of-the-core dari pada program nya, *_butuh waktu seharian dibikin pusing mikir logika nya_ 😁

Itung² bahan belajar, dan memang sangat menantang jadi bikin semangat juga untuk membuatnya 🤩

Mau coba langsung? kunjungi link berikut:
 [http://simpleencryption.bramaudi.repl.co](http://simpleencryption.bramaudi.repl.co)
 
 Tidak lupa pula untuk kode sumbernya bisa dilihat gratis dibawah;
 
 [https://repl.it/@bramaudi/SimpleEncryption](https://repl.it/@bramaudi/SimpleEncryption)