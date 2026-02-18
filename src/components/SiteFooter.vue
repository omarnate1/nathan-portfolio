<script setup>
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <footer
    class="mt-10 flex flex-col justify-center items-center bg-gray-900 w-full py-6"
  >
    <SocialLinks :invert="true" />
  </footer>
</template>
