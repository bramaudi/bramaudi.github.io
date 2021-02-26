---
title: "React: Render Ulang / Remount Component"
date: 2020-05-04T06:36:56+07:00
summary: "Mempelajari bagaimana memaksa React untuk me-render ulang (remount) sebuah komponen tertentu."
author: "bramaudi"
tags: [javascript, react]
---

Saya menemukan kasus unik disaat saya mencoba menggunakan **React** sebagai framework front-end untuk projek yang sedang saya garap, kronologi nya adalah ketika saya ingin memuat dan menampilkan sebuah angka pada komponen yang mana angka tersebut termuat secara asinkron (*lazy load*).

Dan yang terjadi adalah `null` / angka tidak muncul karena komponen ter-render lebih dahulu dari pada request data, jadi untuk memecahkan masalah tersebut saya harus merender ulang komponen tersebut setelah data baru berhasil didapatkan, disini jawabannya adalah dengan menggunakan props `key`, tinggal kita ubah saja props / atribut `key` itu dengan nilai yang berbeda maka secara otomatis **React** akan me-render ulang komponen yang dimaksud.

Contoh semisal;
``` jsx
// state
const [count, setCount] = useState(0)
const [init, setInit] = useState(false)

// request
fetch('api-url')
  .then((res) => {
    setCount(res.count)
    setInit(true)
  })

// render
<SomeComponent key={init} count={count} />
```

## Penjelasan

1. Dari kode diatas saya memiliki state **count** dengan inisialisasi nilai `0` dan **init** dengan inisialisasi nilai `false`.
2. Saat pertama kali halaman dibuka, komponen sudah langsung ter-render / tampil menggunakan data dari inisialisasi state tadi sampai request selesai.
3. Apabila request sudah selesai tuntas dan data juga sudah berhasil didapatkan maka kita ubah state count menjadi "data" dari hasil request (`res`) dengan fungsi `setCount()` dan ubah juga nilai state **init** menjadi kebalikannya dengan fungsi `setInit()` untuk me-render ulang komponen.

Seperti itulah cara remount komponen di React dan masalah saya pun **Solved**. Ini kasus pribadi yang unik, disebabkan banyak faktor sehingga muncul problema seperti ini, saya juga mencari solusi lain untuk sebisa mungkin agar nilai muncul tanpa melakukan remount seperti ini.