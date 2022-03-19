<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

AOS.init({
  duration: 500,
})
</script>

<template>
  <div>
    <web-navigation />
    <router-view />
  </div>
</template>
