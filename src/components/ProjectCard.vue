<script setup>
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
  }
})
</script>

<template>
  <div class="rounded-lg overflow-hidden border-b-2 border-gray-700 lg:scale-90">
    <img
      :src="image"
      :alt="name"
      class="object-contain w-[100%] h-[100%] lg:w-full lg:h-[400px] mx-auto"
      loading="lazy"
    />
    <a :href="url" target="_blank">
      <p class="text-base hover:text-lg hover:underline hover:underline-offset-3 hover:decoration-4 hover:decoration-neon-green transition-all mt-3">
        {{ name }}
      </p>
    </a>
  </div>
</template>
