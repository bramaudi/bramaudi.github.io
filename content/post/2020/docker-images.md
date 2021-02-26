---
title: "Docker: Images"
date: 2020-05-05T07:57:30+07:00
summary: "Perintah - perintah dasar untuk manajemen images didalam Docker."
author: "bramaudi"
tags: [server]
---

## Apa itu images?

**Images** adalah sebuah paket container siap pakai yang bisa digunakan untuk membuat container untuk bisa menjalankan sebuah aplikasi, jenis nya bisa bermacam-macam seperti images untuk server, database, tools atau bahkan sistem operasi.

### Daftar images

``` bash
docker images
```

### Unduh images

Docker images bisa didapatkan di <a href="//hub.docker.com" target="_blank">DockerHub</a>, cari images yang diinginkan lalu pull menggunakan perintah yang tersedia, misal;

``` bash
docker pull <nama-images>:<versi-tag> # misal node:latest
```

### Menghapus images

``` bash
docker image rm <nama-image>
# atau
docker rmi <nama-image>
```

*Akan terjadi error apabila kita menghapus images yang sedang digunakan oleh sebuah container, maka untuk melanjutkan menghapus images ktia harus menghapus container yang bersangkutan terlebih dahulu.