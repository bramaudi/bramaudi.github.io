---
title: "Docker: Container"
date: 2020-05-06T08:17:09+07:00
summary: "Cara membuat, menghapus, dan melihat daftar container didalam Docker."
author: "bramaudi"
tags: [server]
---

## Apa itu container?

**Container** adalah sebuah images yang berjalan, jadi saat kita membuat suatu container didalamnya terdapat sebuah images yang dibutuhkan untuk menjalankan suatu aplikasi seperti server, runtime, compiler, atau database dan sebagainya.

### Melihat daftar container

Daftar container yang sedang berjalan:
``` bash
docker container ls --all
# atau singkatnya
docker ps -a
```

Tambahan flag `--all` atau `-a` adalah opsional, gunanya untuk melihat semua container karena secara default perintah hanya akan menampilkan container yang sedang berjalan saja.

### Membuat container

``` bash
docker container create --name <nama-container> <images>
# atau 
docker create --name <nama-container> <images>
```

**Pilihan**:

- --name &lt;`nama-container`> --- Alias / memberi nama.
- -p &lt;`external`>:&lt;`internal`> --- Expose / forward port, misal `8080:27017` maka port `27017` (didalam container) akan diteruskan ke `8080` (komputer kita).

### Menjalankan & menghentikan container

Menjalankan:

``` bash
docker container start <nama-container>
# atau
docker start <nama-container>
```

Menghentikan:

``` bash
docker container stop <nama-container>
# atau
docker stop <nama-container>
```


### Menghapus container

``` bash
docker container rm <nama-container>
# atau
docker rm <nama-container>
```

*Catatan: kita bisa memulai, menghentikan dan menghapus beberapa container sekaligus*

Biasanya container akan error saat dihapus apabila container tersebut masih berjalan jadi kita hanya perlu menghentikannya sebelum menghapus.