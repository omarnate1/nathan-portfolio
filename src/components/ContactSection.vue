<script setup>
import { ref } from "vue";
import { useTheme } from "../composables/useTheme";
import ContactForm from "./ContactForm.vue";

const { isDark } = useTheme();

const showForm = ref(false);

const phone = "+2348101088643";

const openWhatsApp = () => {
  window.open(`https://wa.me/${phone}`, "_blank");
};

const openEmailForm = () => {
  showForm.value = true;
};

const closeEmailForm = () => {
  showForm.value = false;
};

const socials = [
  { name: "GitHub", url: "https://github.com/omarnate1" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nathaniel-orobor-b3620a278/",
  },
  { name: "Twitter", url: "https://twitter.com/boss_nathan" },
];
</script>

<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-5xl font-bold mb-4">
          Get In <span class="text-neon-green">Touch</span>
        </h2>
        <p
          class="text-lg max-w-2xl mx-auto"
          :class="isDark ? 'text-gray-400' : 'text-gray-600'"
        >
          Have a project in mind or want to collaborate? Let's talk!
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div
          class="rounded-2xl p-8 lg:p-12"
          :class="
            isDark
              ? 'bg-gray-800/50 border border-gray-700'
              : 'bg-white shadow-xl'
          "
        >
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3
                class="text-2xl font-bold mb-6"
                :class="isDark ? 'text-white' : 'text-gray-900'"
              >
                Let's talk about everything!
              </h3>
              <p
                class="mb-8"
                :class="isDark ? 'text-gray-400' : 'text-gray-600'"
              >
                Don't like forms? Send me an email. 👋 Or just say hey. I always
                want to hear about new projects and ideas.
              </p>

              <div class="space-y-4">
                <button
                  @click="openEmailForm"
                  class="flex items-center gap-4 w-full hover:bg-gray-700/30 p-2 rounded-lg transition-colors -ml-2"
                >
                  <div
                    class="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-neon-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div class="text-left">
                    <p class="text-sm text-gray-500">Click to send Email</p>
                    <p
                      class="font-medium hover:text-neon-green transition-colors"
                    >
                      omarnate10@gmail.com
                    </p>
                  </div>
                </button>

                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-neon-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Phone</p>
                    <p class="font-medium">+234 8101088643</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-center gap-6">
              <button
                @click="openWhatsApp"
                class="w-full py-4 bg-neon-green text-black font-bold rounded-lg hover:shadow-neon-green transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                  />
                </svg>
                Message on WhatsApp
              </button>

              <div class="flex justify-center gap-4">
                <a
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-neon-green hover:text-black"
                  :class="
                    isDark
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-200 text-gray-700'
                  "
                >
                  <svg
                    v-if="social.name === 'GitHub'"
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
                    v-if="social.name === 'LinkedIn'"
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
                    v-if="social.name === 'Twitter'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactForm :show="showForm" @close="closeEmailForm" />
  </section>
</template>
