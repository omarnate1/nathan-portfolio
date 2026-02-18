<script setup>
import { useScrollHeader } from '../composables/useScrollHeader'
import { useTheme } from '../composables/useTheme'
import SocialLinks from './SocialLinks.vue'
import ThemeToggle from './ThemeToggle.vue'
import MobileMenu from './MobileMenu.vue'

const { isScrolled } = useScrollHeader()
const { isDark } = useTheme()

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <header
    id="header"
    :class="[
      'w-full pb-4 lg:pb-6 sticky top-0 z-50 transition-all duration-300',
      isScrolled 
        ? (isDark ? 'bg-dark-bg/95 backdrop-blur-sm shadow-lg' : 'bg-light-bg/95 backdrop-blur-sm shadow-md')
        : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <div class="font-extrabold text-2xl lg:text-3xl">
          <a href="#home"><span class="text-neon-green">nathan</span>-orobor</a>
        </div>

        <nav class="hidden lg:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="hover:text-neon-green transition-colors duration-200 text-sm font-medium"
          >
            {{ item.name }}
          </a>
        </nav>

        <div class="flex items-center gap-4">
          <ThemeToggle />
          <SocialLinks class="hidden lg:flex" />
          <MobileMenu class="lg:hidden" />
        </div>
      </div>
    </div>
  </header>
</template>
