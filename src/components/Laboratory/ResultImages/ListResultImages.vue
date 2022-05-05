<template>
  <div class="container__result__images">
    <ItemResultImage v-for="(i, index) in 4"
    :i="i"
    :index="index"
    />
  </div>
</template>

<script>
import ItemResultImage from "./ItemResultImage";
export default {
  name: 'list-result-images',
  components: {ItemResultImage},
  data() {
    return {

    }
  },
  methods: {
    toActive(photoResult) {
      this.$emit('toActive', photoResult)
    }
  }
}
</script>

<style>
.container__result__images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
