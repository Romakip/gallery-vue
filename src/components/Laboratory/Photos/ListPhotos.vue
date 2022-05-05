<template>
<div>
  <ItemPhoto class="added__image"
    v-for="(photo, index) of uploadedPhotos"
    :photo="photo"
    :index="index"
    @to-active="toActive"
  />
</div>
</template>

<script>
import ItemPhoto from "./ItemPhoto";
export default {
  name: 'list-photos',
  components: {ItemPhoto},
  props: ['uploadedPhotos'],
  methods: {
    toActive(id) {
      this.$emit('to-active', id)
    }
  },
  mounted() {
    console.log("this.uploadedPhotos : " + this.uploadedPhotos)
  }
}
</script>

<style>
.added__image {
  width: 172px;
  height: 234px;
  border: 2px solid #000000;
  border-radius: 20px 0;
  box-shadow: 0 0 3px 3px black;
  cursor: pointer;
  position: relative;
}
</style>
