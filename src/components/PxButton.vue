<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-lime-500 text-lime-700 font-semibold hover:text-white py-2 px-2 border border-lime-500 hover:border-transparent rounded"
  >
    <pulse-loader
      :loading="isLoading"
      :size="8"
      :margin="'10px'"
      :color="'#ffffff'"
    ></pulse-loader>
    <p v-show="!isLoading">
      <slot></slot>
    </p>
  </button>
</template>
<script>
export default {
  name: 'PxButton',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    buttonClick() {
      this.$emit('custom-click')
    },
  },
}
</script>
