---
title: "Format Codec Audio/Video Untuk Whatsapp"
date: 2022-03-08T17:11:34+07:00
tags: [ffmpeg]
---

Alasan utama mengapa saya bikin post ini karena sering kali saat saya ingin sekedar membuat *Story Whatsapp* biasanya terhalang oleh format yang tidak didukung, yah meskipun formatnya sudah MP4 namun yang saya yakin tentu "codec"-nya tidak didukung oleh Whatsapp, day ruined!

Dulu bahkan saking gregetnya saya sampai install apk video converter untuk kebutuhan *story*, padahal paling sering cuma untuk sekedar share meme. Namun ide cemerlang baru terpikir, dengan menggunakan paket `ffmpeg` bawaan linux.

Ternyata syarat untuk bisa mengirim video ke whatsapp ialah menggunakan codec sebagai berikut:
- Video: **libx264**
- Audio: **AAC**

Untuk perintah `ffmpeg` maka jadinya seperti ini:

```bash
ffmpeg -i original.mp4 -vcodec libx264 -acodec aac whatsapp.mp4
```

Saya coba terapkan juga untuk `SimpleScreenRecorder`[^1] juga berhasil, kini habis rekam tinggal share aja tuh XD


[^1]: SimpleScreenRecorder (SSR) adalah aplikasi untuk merekam layar favorit saya yang hampir ada di semua distro linux, cek [website](https://www.maartenbaert.be/simplescreenrecorder/)-nya.