<script setup>
defineProps({
  invert: {
    type: Boolean,
    default: false
  }
})

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/omarnate1', icon: '/icon-github.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nathaniel-orobor-b3620a278/', icon: '/icon-linkedin.svg' },
  { name: 'Frontend Mentor', url: 'https://www.frontendmentor.io/profile/omarnate1', icon: '/icon-frontend-mentor.svg' },
  { name: 'Twitter', url: 'https://twitter.com/boss_nathan', icon: '/icon-twitter.svg' },
]
</script>

<template>
  <nav class="flex justify-center gap-8">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      class="overflow-hidden transition-transform duration-300 hover:scale-150"
    >
      <img
        :src="link.icon"
        :alt="`icon-${link.name.toLowerCase().replace(' ', '-')}`"
        :class="['object-cover w-full', invert ? 'filter invert' : 'filter invert']"
      />
    </a>
  </nav>
</template>
