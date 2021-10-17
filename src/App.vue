<template>
  <div id="app" class="p-5">
    <button class="btn">按鈕</button>
    <button class="
      bg-purple-500 text-center text-white rounded px-3 py-1 hover:bg-purple-700">按鈕</button>
    <router-view/>
  </div>
</template>

<style>
/* global css 雖然放在這邊也行，但我習慣放在 main.js，那邊又比這邊更加上層一點 */
@import "./assets/style.css";
</style>
