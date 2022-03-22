<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-lime-500 p-6">
        <router-link :to="{ name: 'home' }">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <px-icon class="mr-2" />
            <span class="font-semibold text-xl tracking-tight"
              >Exchange by LMCG</span
            >
          </div>
        </router-link>

        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-lime-50 hover:text-lime-900 mr-4"
              >{{ l.title }}</router-link
            >
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'

export default {
  name: 'PxHeader',
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  components: { PxIcon },
}
</script>
