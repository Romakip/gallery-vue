<template>
  <div
    class="frame__image"
    :class="'result__frame'"
    @click="$emit('toActive', resultImage)"
  >
    <img :src="readyImage.big_image" alt=""/>
<!--    <img src="../../../assets/question.png" alt="">-->
  </div>
</template>

<script>
export default {
  name: 'item-result-image',
  props: ['readyImage'],
  methods: {
    toActive(resultImage) {
      let test = 'test'
    }
  }
}
</script>

<style scoped>
.frame__image {
  width: 172px;
  height: 234px;
  border: 2px solid #000000;
  border-radius: 20px 0;
  box-shadow: 0 0 3px 3px black;
  cursor: pointer;
  position: relative;
}
.frame__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 172px;
  height: 234px;
  border-radius: 20px 0;
}
.result__frame_0 {
  margin-top: 15px;
  margin-left: 5px;
}
.result__frame_1 {
  margin-top: 65px;
  margin-left: 35px;
}
.result__frame_2 {
  margin-left: 5px;
  margin-top: 0;
}
.result__frame_3 {
  margin-top: 40px;
  margin-left: 35px;
}
</style>
