<script setup>
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section class="text-center lg:text-center font-bold text-lg">
    <h1 class="mb-7 text-2xl font-extrabold decoration-underline">
      PROJECTS
    </h1>
    <div
      class="flex flex-col justify-center px-4 items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:justify-center lg:items-center lg:content-center lg:mx-auto lg:w-full"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
        :image="project.image"
        :url="project.url"
      />
    </div>
  </section>
</template>
