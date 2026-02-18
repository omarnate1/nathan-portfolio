<script setup>
import { useExperience } from '../composables/useExperience'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  startYear: {
    type: Number,
    required: true
  },
  startMonth: {
    type: Number,
    required: true
  }
})

const { displayText } = useExperience(props.startYear, props.startMonth)
</script>

<template>
  <div class="my-4">
    <h2 class="text-2xl font-bold">
      {{ name }}
      <p class="text-base font-normal">{{ displayText }}</p>
    </h2>
  </div>
</template>
