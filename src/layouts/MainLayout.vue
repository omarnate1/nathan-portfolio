<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <div class="bg-black flex justify-center items-center flex-col text-white mb-0 min-h-screen">
    <SiteHeader />
    <main class="w-full">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
