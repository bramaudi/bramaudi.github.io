---
title: "PHP: Curl"
date: 2020-05-02T04:55:13+07:00
summary: "PHP: Crawl / Scrapping Web."
author: "bramaudi"
tags: [php]
---

Curl biasanya digunakan untuk mendapatkan konten yang berasal dari suatu alamat, misalnya jika kita meng-`curl` alamat/link suatu website maka hasil dari perintah curl adalah isi konten dari alamat target dengan format html atau format yang telah ditentukan, didalam *Linux* juga terdapat paket bernama `curl` yang bisa digunakan langsung didalam terminal dengan menggunakan perintah `$ sudo apt-get install curl` untuk menginstall-nya, biasanya digunakan untuk melihat "request".

Jika ingin menggunakan curl di PHP maka bisa menggunakan fungsi dibawah ini:

``` php
<?php
function get_curl($url)
{
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}
```

Kode diatas sangatlah dasar yang masih bisa dikembangkan lagi, untuk penggunaan tinggal panggil fungsi dan atur url target curl sebagai parameter-nya, seperti ini:

```php
<?php
echo get_curl('https://insomdev.now.sh');
```
