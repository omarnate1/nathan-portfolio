<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useTheme } from '../composables/useTheme'
import Toast from './Toast.vue'

const { isDark } = useTheme()

defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isLoading = ref(false)
const toast = ref({
  show: false,
  message: '',
  type: 'success'
})

const showToast = (message, type = 'success') => {
  toast.value = { show: true, message, type }
}

const closeToast = () => {
  toast.value.show = false
}

const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    showToast('Please fill in all fields', 'error')
    return
  }

  isLoading.value = true

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
        to_email: 'omarnate10@gmail.com'
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    showToast('Message sent successfully!', 'success')
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => {
      emit('close')
    }, 1500)
  } catch {
    showToast('Failed to send message. Please try again.', 'error')
  } finally {
    isLoading.value = false
  }
}

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          @click="closeModal"
        ></div>

        <Transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-150 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="show"
            :class="[
              'relative w-full max-w-md rounded-2xl shadow-2xl p-6 lg:p-8',
              isDark ? 'bg-gray-800' : 'bg-white'
            ]"
          >
            <button
              @click="closeModal"
              class="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700/50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2
              class="text-2xl lg:text-3xl font-bold mb-6"
              :class="isDark ? 'text-white' : 'text-gray-900'"
            >
              Get In Touch
            </h2>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div>
                <label
                  class="block text-sm font-medium mb-2"
                  :class="isDark ? 'text-gray-300' : 'text-gray-700'"
                >
                  Name
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-neon-green/50',
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  ]"
                  placeholder="Your name"
                  :disabled="isLoading"
                />
              </div>

              <div>
                <label
                  class="block text-sm font-medium mb-2"
                  :class="isDark ? 'text-gray-300' : 'text-gray-700'"
                >
                  Email
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-neon-green/50',
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  ]"
                  placeholder="your.email@example.com"
                  :disabled="isLoading"
                />
              </div>

              <div>
                <label
                  class="block text-sm font-medium mb-2"
                  :class="isDark ? 'text-gray-300' : 'text-gray-700'"
                >
                  Message
                </label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  :class="[
                    'w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-neon-green/50 resize-none',
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  ]"
                  placeholder="Your message..."
                  :disabled="isLoading"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isLoading"
                :class="[
                  'w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2',
                  isLoading
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-neon-green text-black hover:shadow-neon-green hover:scale-[1.02]'
                ]"
              >
                <svg v-if="isLoading" class="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{{ isLoading ? 'Sending...' : 'Send Message' }}</span>
              </button>
            </form>
          </div>
        </Transition>
      </div>
    </Transition>

    <Toast
      :show="toast.show"
      :message="toast.message"
      :type="toast.type"
      @close="closeToast"
    />
  </Teleport>
</template>
