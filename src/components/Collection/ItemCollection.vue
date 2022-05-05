<template>
  <div class="image__frame" @click="toHistoryResultImage(collImage)">
    <img :src=collImage.big_image alt="" class="result__image"/>
  </div>
</template>

<script>
export default {
  name: 'item-collection',
  props: ['collImage'],
  methods: {
    toHistoryResultImage(collImage) {
      console.log('collImage : ' + collImage.id)
      // this.$router.push('history', () => setTimeout(() => loader.hide(), 3 * 1000))
      this.$router.push({name: 'history', params: {id: collImage.id}})
    }
  }
}
</script>

<style>

</style>
