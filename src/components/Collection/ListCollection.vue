<template>
  <div class="result__images__container">
    <ItemCollection
      v-for="(collImage, index) in collectionImages"
      :collImage="collImage"
      :index="index"
    />
  </div>
</template>

<script>
import ItemCollection from "./ItemCollection";
export default {
  name: 'list-collection',
  components: {ItemCollection},
  props: ['collectionImages']
}
</script>

<style>

</style>
