<script setup>
const phone = "+2348101088643"; // Replace with your phone number in international format

const openWhatsApp = () => {
  window.open(`https://wa.me/${phone}`, "_blank");
};
</script>

<template>
  <section class="flex flex-col justify-center items-center px-4 py-12">
    <div class="text-center lg:text-left w-full lg:px-14 max-w-2xl">
      <h1 class="text-3xl lg:text-7xl text-center lg:text-left font-bold mb-6">
        Get in Touch
      </h1>
      <p class="my-6 text-center lg:text-left lg:text-2xl">
        Based in Lagos, I'm always open to discussing new projects, creative
        ideas, or opportunities to be part of your vision.
      </p>

      <h3 class="my-4">
        <span class="relative inline-block">
          <span class="relative z-10 font-bold lg:text-3xl">CONTACT ME</span>
          <span
            class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-800 to-lime-300"
          ></span>
        </span>
      </h3>

      <p class="lg:text-xl">
        <span class="font-bold">Email:</span> omarnate10@gmail.com
      </p>
      <p class="lg:text-xl">
        <span class="font-bold">Tel:</span> +234 8101088643, +234 8095793233
      </p>

      <button
        @click="openWhatsApp"
        class="bg-neon-green py-4 px-6 mt-5 rounded-lg transition-shadow duration-300 hover:shadow-neon-green hover:scale-105 font-bold text-black active:shadow-[inset_5px_5px_10px_-3px_rgba(0,0,0,0.7)]"
      >
        WhatsApp Me
      </button>
    </div>
  </section>
</template>
