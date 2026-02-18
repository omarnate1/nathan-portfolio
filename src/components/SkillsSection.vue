<script setup>
import { skills } from '../data/skills'
import { useTheme } from '../composables/useTheme'

const { isDark } = useTheme()

const categories = [
  { name: 'Frontend', color: 'bg-blue-500' },
  { name: 'Mobile', color: 'bg-purple-500' },
  { name: 'AI', color: 'bg-pink-500' },
  { name: 'Tools', color: 'bg-orange-500' },
  { name: 'CMS', color: 'bg-green-500' },
]

const getCategoryColor = (category) => {
  const cat = categories.find(c => c.name.toLowerCase() === category)
  return cat ? cat.color : 'bg-gray-500'
}
</script>

<template>
  <section id="skills" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-5xl font-bold mb-4">
          <span class="text-neon-green">Skills</span> & Technologies
        </h2>
        <p class="text-lg max-w-2xl mx-auto" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
          A collection of technologies I've been working with
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="group"
        >
          <div
            :class="[
              'p-4 lg:p-6 rounded-xl transition-all duration-300 cursor-pointer',
              'hover:-translate-y-2 hover:shadow-xl',
              isDark 
                ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700' 
                : 'bg-white hover:bg-white shadow-md border border-gray-100'
            ]"
          >
            <div class="text-3xl lg:text-4xl mb-3">{{ skill.icon }}</div>
            
            <h3 class="font-semibold text-lg mb-2" :class="isDark ? 'text-white' : 'text-gray-900'">
              {{ skill.name }}
            </h3>
            
            <div class="flex items-center gap-2">
              <span 
                class="text-xs px-2 py-1 rounded-full text-white"
                :class="getCategoryColor(skill.category)"
              >
                {{ skill.category }}
              </span>
            </div>
            
            <p class="text-sm mt-2" :class="isDark ? 'text-gray-500' : 'text-gray-400'">
              {{ skill.startYear }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
