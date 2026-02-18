<script setup>
import { useTheme } from '../composables/useTheme'

const { isDark } = useTheme()

defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  tech: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div 
    :class="[
      'group relative overflow-hidden rounded-xl transition-all duration-300',
      'hover:-translate-y-2',
      isDark 
        ? 'bg-gray-800/50 border border-gray-700' 
        : 'bg-white shadow-md border border-gray-100'
    ]"
  >
    <div class="relative h-48 lg:h-56 overflow-hidden">
      <div class="absolute inset-0 bg-neon-green/0 group-hover:bg-neon-green/10 transition-colors duration-300 z-10"></div>
      <img
        :src="image"
        :alt="name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    
    <div class="p-4 lg:p-6">
      <h3 
        class="font-bold text-lg lg:text-xl mb-2 group-hover:text-neon-green transition-colors"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        {{ name }}
      </h3>
      
      <div v-if="tech.length" class="flex flex-wrap gap-2 mb-3">
        <span
          v-for="t in tech"
          :key="t"
          class="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300"
        >
          {{ t }}
        </span>
      </div>
      
      <a 
        :href="url" 
        target="_blank"
        class="inline-flex items-center gap-2 text-neon-green font-medium hover:gap-3 transition-all"
      >
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
</template>
