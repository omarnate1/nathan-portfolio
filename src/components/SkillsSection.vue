<script setup>
import { skills } from '../data/skills'
import SkillItem from './SkillItem.vue'
</script>

<template>
  <section
    class="text-center w-full text-2xl relative font-bold overflow-hidden"
  >
    <div class="my-4">
      <SkillItem
        v-for="skill in skills"
        :key="skill.name"
        :name="skill.name"
        :start-year="skill.startYear"
        :start-month="skill.startMonth"
      />
    </div>
    <img
      src="/pattern-rings.svg"
      alt=""
      class="absolute left-60 lg:left-10 top-60 h-30 z-10 object-cover"
    />
  </section>
</template>
