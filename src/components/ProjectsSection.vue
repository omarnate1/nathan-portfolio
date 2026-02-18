<script setup>
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'

const projectsWithTech = [
  { ...projects[0], tech: ['Vue', 'Tailwind'] },
  { ...projects[1], tech: ['HTML', 'CSS'] },
  { ...projects[2], tech: ['JavaScript', 'CSS'] },
  { ...projects[3], tech: ['JavaScript', 'HTML'] },
  { ...projects[4], tech: ['HTML', 'CSS'] },
  { ...projects[5], tech: ['React', 'CSS'] },
  { ...projects[6], tech: ['React', 'CSS'] },
  { ...projects[7], tech: ['HTML', 'CSS'] },
]
</script>

<template>
  <section id="projects" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-5xl font-bold mb-4">
          Featured <span class="text-neon-green">Projects</span>
        </h2>
        <p class="text-lg max-w-2xl mx-auto text-gray-400">
          A selection of projects I've worked on
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <ProjectCard
          v-for="project in projectsWithTech"
          :key="project.name"
          :name="project.name"
          :image="project.image"
          :url="project.url"
          :tech="project.tech"
        />
      </div>
    </div>
  </section>
</template>
