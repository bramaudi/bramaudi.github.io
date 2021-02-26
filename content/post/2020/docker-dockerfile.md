---
title: "Docker: Dockerfile"
date: 2020-05-06T08:56:16+07:00
summary: "Mempelajari tentang cara membuat docker images / pengaturan Dockerfile."
author: "bramaudi"
tags: [server]
---

## Apa itu Dockerfile?

Ini adalah sebuah file biasa dengan nama **Dockerfile** yang gunanya adalah sebagai identitikasi / resep untuk image registry nantinya, kita bisa menggunakan file ini untuk membuat sebuah image docker.

## Meracik Dockerfile

Untuk membuat image maka kita harus mempelajari beberapa perintah dasar berikut secara berurutan.

### FROM

Mengambil images yang sudah ada pada registry (DockerHub), contoh;

``` Dockerfile
FROM golang:1.11.4
# atau bisa juga misal
FROM node:latest
```

Proses ini akan berjalan otomatis, apabila image yang dimaksud di local kita tidak ditemukan maka secara otomatis akan menarik dan mengambilnya dari docker registry dalam kasus ini adalah docker hub, jadi kita ga perlu khawatir.

### COPY

Menyalin file source kedalam images yang akan dibuild nantinya, contoh;

``` Dockerfile
COPY main.go /app/main.go
```

Parameter pertama yaitu `main.go` adalah lokasi source saat ini / lokal file dan parameter kedua yaitu `/app/main.go` adalah lokasi internal didalam images nantinya.

### RUN

Menjalankan perintah saat build berlangsung, misal saya akan membuild aplikasi nodejs dan ingin menginstall dependensi yang diperlukan melalui npm;

``` Dockerfile
RUN npm install
```

Untuk kasus seperti diatas kita perlu meng-copy terlebih dahulu `package.json` kedalam container sebelum melakukan **RUN** ini.

### CMD

CMD = Command = Perintah, gunanya untuk memberi tau bagaimana cara untuk menjalankan aplikasi kita nantinya.

``` Dockerfile
# go run /app/main.go
CMD ["go", "run", "/app/main.go"]
```

Isi perintah harus dijadikan array.

Nah tunggu... sepertinya **RUN** dan **CMD** sama-sama digunakan untuk menjalankan perintah lalu bagaimana? sebenarnya kedua hal ini tidak sama, memang terdapat persamaan namun perbedaan antara keduanya adalah jika RUN hanya dilakukan untuk keperluan build images dan CMD hanyalah command yang akan digunakan untuk menjalankan images, jadi kita bisa memanggil RUN beberapa kali namun tidak untuk CMD.

Perintah CMD ini digunakan saat image sudah menjadi container, seperti pada bagian **COMMAND** pada daftar container yang berjalan berikut;

``` bash
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
d38f3e88d7bd        mariadb:latest      "docker-entrypoint.s…"   53 minutes ago      Up 53 minutes       0.0.0.0:8083->3306/tcp   pdd-db
```

## Memulai Build Images

Format:
```
docker build --tag <nama-tag>:<versi> <folder>
```

Misal saya ingin build image dengan nama / tag **my-app** dengan versi **1.0** yang terletak didalam folder saat ini, maka perintahnya adalah sebagai berikut:
```
docker build --tag my-app:1.0 .
```
