<script setup>
import { useScrollHeader } from '../composables/useScrollHeader'
import SocialLinks from './SocialLinks.vue'
import { RouterLink } from 'vue-router'

const { isScrolled } = useScrollHeader()
</script>

<template>
  <header
    id="header"
    :class="[
      'w-full pb-4 lg:pb-6 sticky top-0 z-50 transition-colors duration-300 lg:flex lg:justify-around lg:items-center',
      isScrolled ? 'bg-scroll-blue' : 'bg-black'
    ]"
  >
    <div class="font-extrabold text-3xl my-4 text-center">
      <router-link to="/"><span>nathan-orobor</span></router-link>
    </div>
    <nav class="flex gap-6 items-center">
      <router-link to="/" class="hover:text-neon-green transition-colors">Home</router-link>
      <router-link to="/projects" class="hover:text-neon-green transition-colors">Projects</router-link>
      <router-link to="/contact" class="hover:text-neon-green transition-colors">Contact</router-link>
    </nav>
    <SocialLinks />
  </header>
</template>
