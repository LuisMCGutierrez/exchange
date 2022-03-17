<template>
  <div>
    <dot-loader
      :loading="isLoading"
      :color="'#7ED321'"
      :size="100"
    ></dot-loader>
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable'
import api from '@/api'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: { PxAssetsTable },
  data() {
    return {
      assets: [],
      isLoading: false,
    }
  },
  created() {
    this.isLoading = true
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  },
}
</script>

<style></style>
