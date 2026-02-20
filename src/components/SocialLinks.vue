<script setup>
defineProps({
  invert: {
    type: Boolean,
    default: false,
  },
});

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/omarnate1",
    icon: "github",
    bg: "bg-white",
    text: "text-black",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nathaniel-orobor-b3620a278/",
    icon: "linkedin",
    bg: "bg-blue-600",
    text: "text-white",
  },
  {
    name: "Frontend Mentor",
    url: "https://www.frontendmentor.io/profile/omarnate1",
    icon: "frontend-mentor",
    bg: "bg-gray-100",
    text: "text-gray-900",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/boss_nathan",
    icon: "twitter",
    bg: "bg-black",
    text: "text-white",
  },
];
</script>

<template>
  <nav class="flex justify-center gap-4">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      :class="[
        'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110',
        invert
          ? 'bg-gray-800 text-white hover:bg-neon-green hover:text-black'
          : `${link.bg} ${link.text} hover:bg-neon-green hover:text-black`,
      ]"
    >
      <svg
        v-if="link.icon === 'github'"
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      </svg>
      <svg
        v-if="link.icon === 'linkedin'"
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        />
      </svg>
      <svg
        v-if="link.icon === 'twitter'"
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
      <svg
        v-if="link.icon === 'frontend-mentor'"
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.268 16.346l-1.195.698-4.378-7.608-4.378 7.608-1.195-.698 5.573-9.684 5.573 9.684z"
        />
      </svg>
    </a>
  </nav>
</template>
