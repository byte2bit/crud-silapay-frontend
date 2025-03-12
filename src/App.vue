<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <div class="lg:max-w-[980px] flex-col flex justify-center mx-auto">
    <router-view />
  </div>
</template>

<style scoped></style>
