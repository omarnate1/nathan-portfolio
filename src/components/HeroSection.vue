<script setup>
defineProps({
  phone: {
    type: String,
    default: '+2348095793233'
  }
})

const openWhatsApp = (phone) => {
  window.open(`https://wa.me/${phone}`, '_blank')
}
</script>

<template>
  <section class="relative my-8 w-full overflow-hidden">
    <img
      src="/pattern-rings.svg"
      alt=""
      class="absolute right-60 top-4 h-30 z-10 object-cover"
    />
    <img
      src="/pattern-circle.svg"
      alt=""
      class="absolute left-80 top-28 object-cover"
    />
    <img
      src="/Nath ID (1).png"
      alt="Nathan Orobor"
      class="object-cover filter drop-shadow-[0_0_2em_#646cffaa] rounded-xl opacity-75 w-[200px] m-auto relative z-0 lg:hidden"
    />
  </section>
  <section class="flex flex-col justify-center items-center px-4">
    <div class="lg:flex lg:justify-between lg:gap-24">
      <div class="lg:px-14">
        <h1 class="text-3xl lg:text-7xl text-center lg:text-left font-bold">
          Nice to meet you!
          <span class="lg:block">
            I'm
            <span class="relative inline-block">
              <span class="relative z-10">Nathan Orobor.</span>
              <span
                class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-800 to-lime-300"
              ></span>
            </span>
          </span>
        </h1>

        <p class="my-6 text-center lg:text-left lg:text-2xl lg:pt-10">
          Based in Lagos, I'm a front-end developer
          <span class="lg:block">
            passionate about building accessible web apps that users
            love.</span
          >
        </p>
      </div>
      <div>
        <img
          src="/Nath ID (1).png"
          alt="Nathan Orobor"
          class="object-cover filter drop-shadow-[0_0_2em_#646cffaa] rounded-xl opacity-75 w-[400px] m-auto relative z-0 hidden lg:block"
        />
      </div>
    </div>
    <div class="text-center lg:text-left w-full lg:px-14">
      <h3 class="my-4">
        <span class="relative inline-block">
          <span class="relative z-10 font-bold lg:text-3xl">CONTACT ME</span>
          <span
            class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-800 to-lime-300"
          ></span>
        </span>
      </h3>
      <p>
        <span class="font-bold lg:text-xl">Email:</span>
        omarnate10@gmail.com
      </p>
      <p>
        <span class="font-bold lg:text-xl">Tel:</span> +234 8101088643, +234
        8095793233
      </p>
      <button
        @click="openWhatsApp(phone)"
        class="bg-neon-green py-4 px-6 mt-5 rounded-lg transition-shadow duration-300 hover:shadow-neon-green hover:scale-105 font-bold text-black active:shadow-[inset_5px_5px_10px_-3px_rgba(0,0,0,0.7)]"
      >
        whats app Me
      </button>
    </div>
  </section>
</template>
