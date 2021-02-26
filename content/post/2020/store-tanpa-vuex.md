---
title: "Vue: Store Tanpa Vuex"
date: 2020-05-20T17:01:29+07:00
summary: "State management Vue tanpa menggunakan Vuex"
author: "bramaudi"
tags: [javascript, vue]
---

"Store" ini biasanya digunakan sebagai tempat penyimpanan state yang bisa diakses secara global, dan untuk Vue sendiri sudah memiliki **Vuex** sebagai state management resminya. Nah apakah bisa jika membuat tanpa *Vuex*? Jawaban: Ya, bisa banget namun kekuarangannya cuma tidak bisa kita debug melalui **Vue devtools**.

Kita bisa membuat sebuah plain javascript menjadi reaktif menggunakan `observable` API dari Vue itu sendiri, fitur ini tersedia di Vue 2.6.

Pertama buatlah sebuah file javascript sebagai store, misal:

``` js
// store.js
import Vue from 'vue'

export const store = Vue.observable({
  count: 0
})
```

atau jika ingin lebih mirip seperti Vuex bisa menggunakan pola `mutations` seperti ini;

``` js
// store.js
import Vue from 'vue'

export const store = Vue.observable({
  count: 0
})

export const mutations = {
  setCount(count) {
    store.count = count
  }
}
```

Untuk menggunakannya pada component vue gunakan `computed` untuk memasukannya kedalam instance vue kita:

``` html
<template>
  <div>
    <div>Count: {{ count }}</div>
    <button @click="setCount(count + 1)">+1</button>
    <button @click="setCount(count - 1)">-1</button>
  </div>
</template>
```

---

``` js
import { store, mutations } from './store'

export default {
  computed: {
    count: () => store.count
  },
  methods: {
    setCount: mutations.setCount
  }
}
```

Sumber / refrensi: <a href="https://vuedose.tips/tips/creating-a-store-without-vuex-in-vue-js-2-6/" target="_blank">https://vuedose.tips/tips/creating-a-store-without-vuex-in-vue-js-2-6/</a>