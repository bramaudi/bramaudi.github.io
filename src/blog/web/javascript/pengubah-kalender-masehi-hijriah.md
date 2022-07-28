---
title: "Pengubah Kalender Masehi Hijriah"
date: 2022-03-08T20:50:38+07:00
tags: [javascript]
---
## Algoritma
Hitungan hijriah dalam pengubah tanggal masehi ke hijriah ini menggunakan API Javascript bawaan (`Intl.DateTimeFormat`) dengan menggunakan metode hitungan `islamic-civil`, referensi: https://stackoverflow.com/a/71004938.

Dan tanggal yang dihasilkan pun sama dengan saat menggunakan script dari [al-habib](https://www.al-habib.info/islamic-calendar/hijricalendartext.htm) dengan penyesuaian `-1` hari.

Untuk formula perhitungan pasaran berasal dari modulo 5 dari (*Julian Day* - 1), berikut cara mendapat julian day:

```bash
(UNIX TIME / 86400000) + 2440587.5 === Julian Day;
```

Dalam kasus ini karena menggunakan Javascript maka `UNIX TIME` kita ubah menjadi `Date.now()`.

Dengan urutan array pasaran sebagai berikut:

```js
["Pon","Wage","Kliwon","Legi","Pahing"]
```