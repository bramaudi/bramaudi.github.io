---
title: "Membuat Media Query Reaktif Dalam Javascript Vue"
date: 2020-08-29T07:49:48+07:00
tags: ['javascript', 'vue']
author: bramaudi
summary: "Belajar cara menerapkan media query yang reaktif pada sisi Javascript di framework Vue"
---

**Media Query** biasanya kita gunakan saat ingin membuat sebuah tampilan desain yang responsif melalui css, ini diperlukan agar bisa mengatur perbedaan tampilan untuk setiap resolusi layar.

Namun kita juga bisa menggunakan media query pada javascript, untuk contoh native nya bisa seperti ini:

``` js
var mq = window.matchMedia('(min-width: 1080px)');

if (mq.matches) {
    // window width >= 1080px
}
```

Nah bagaimana kalau kita ingin menggunakan teknik ini dalam framework Vue? Tentu dengan kode diatas maka kita tidak akan mendapatkan fungsi yang reaktif karena dengan kode seperti itu hanya akan dijalankan saat web pertama kali render saja kemudian setelah kita resize window maka tampilan tidak akan berubah.

Untuk itu kita akan membuat fungsi media query yang benar-benar reaktif didalam Vue JS menggunakan API `onresize` dan juga `window.innerWidth` untuk value dari media query itu sendiri.

Pertama buat inisiasi state dengan `window.innerWidth` tadi sebagai value-nya, seperti ini:

``` js
export default {
  data () {
    return {
      mediaQuery: window.innerWidth
    }
  }
}
```

Kemudian tambahkan sebuah event listener pada `window` untuk event `onresize` pada fungsi lifecycle vue yaitu `created`, ini bermaksud agar kode tersebut agar dijalankan pertama kali sebelum semua component vue termasuk **App.vue**.

``` js
export default {
  data () {
    return {
      mediaQuery: window.innerWidth
    }
  },
  created () {
    window.addEventListener('resize'. () => {
      this.mediaQuery = window.innerWidth
    })
  }
}

```

Oke dengan adanya listener diatas maka state `mediaQuery` kita sudah reaktif, untuk lebih memastikan bisa lihat di Vue Devtools / langsung di hardcore di template nya xixixi.