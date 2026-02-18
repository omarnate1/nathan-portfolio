<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDark } = useTheme()

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section id="home" class="min-h-screen flex items-center py-20">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div 
          :class="[
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <p class="text-neon-green font-medium mb-4">Hello, I'm</p>
          
          <h1 class="text-4xl lg:text-7xl font-bold mb-4 leading-tight">
            <span :class="isDark ? 'text-white' : 'text-gray-900'">Nathan Orobor</span>
          </h1>
          
          <h2 class="text-2xl lg:text-3xl font-semibold mb-6" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            Frontend Developer
            <span class="text-neon-green">&</span>
            AI Enthusiast
          </h2>
          
          <p class="text-lg mb-8 max-w-lg" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            Based in Lagos, I build accessible, user-friendly web applications with modern technologies. 
            Passionate about creating elegant solutions to complex problems.
          </p>
          
          <div class="flex flex-wrap gap-4">
            <a
              href="#projects"
              class="px-6 py-3 bg-neon-green text-black font-semibold rounded-lg hover:shadow-neon-green transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="px-6 py-3 border-2 border-neon-green text-neon-green font-semibold rounded-lg hover:bg-neon-green hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div 
          :class="[
            'relative transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <div class="relative">
            <div class="absolute inset-0 bg-neon-green/20 rounded-2xl blur-3xl"></div>
            <img
              src="/Nath ID (1).png"
              alt="Nathan Orobor"
              class="relative rounded-2xl w-full max-w-md mx-auto object-cover shadow-2xl"
            />
          </div>
          
          <div class="absolute -bottom-6 -left-6 bg-gray-800 dark:bg-gray-800 bg-white shadow-xl rounded-lg p-4">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
              <span class="font-medium">Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
