<script setup>
import { useMobileMenu } from '../composables/useMobileMenu'

const { isOpen, toggle, close } = useMobileMenu()

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <div class="lg:hidden">
    <button
      @click="toggle"
      class="p-2 focus:outline-none"
      aria-label="Toggle menu"
    >
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute top-full left-0 right-0 bg-gray-900 dark:bg-gray-900 bg-gray-100 shadow-lg py-4 px-4"
      >
        <nav class="flex flex-col gap-4">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="close"
            class="text-lg hover:text-neon-green transition-colors"
          >
            {{ item.name }}
          </a>
        </nav>
      </div>
    </Transition>
  </div>
</template>
