<template>
  <div class="ready-images block-images">
    <div class="container__ready__images">

      <div v-if="nowStylize">Идет стилизация...</div>

      <div class="frame__ready__image" v-else-if="readyImage">
        <img
          :src="readyImage.big_image"
          alt=""
          class="ready__image" />
      </div>

        <div v-else v-for="i in 6" class="container__questions">
          <img
            src="../../assets/question.png"
            alt=""
            class="question__image"
            :class="['number_question__' + i]"
          >
        </div>


    </div>
    <div class="active__buttons">
      <button class="image-download btn"
      :disabled="!readyImage"
      @click="downloadImage">Скачать</button>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import ListResultImages from "./ResultImages/ListResultImages"
import ItemResultImage from "./ResultImages/ItemResultImage";
  export default {
    name: 'form-ready-images',
    props: ['readyImage', 'nowStylize'],
    components: {Loader, ListResultImages, ItemResultImage},
    data() {
      return {
        loading: true,
        resultImages: []
      }
    },
    methods: {
      toActive(photoResult) {
        photoResult.active = true
        this.resultImages.forEach(function(element) {
          if(element.active) element.active = false
        })
      },
      downloadImage() {
        var link = document.createElement('a');
        link.href = this.readyImage.big_image;
        link.download = 'Download.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    mounted() {
      this.loading = false
    },
    computed: {
      differentReadyImage() {
        if (this.readyImage) {
          this.resultImages[this.resultImages.length] = this.readyImage
        }
      }
    }
  }
</script>

<style scoped>
  .ready__image {
    margin-top: 150px;
    width: 172px;
    height: 234px;
    border-radius: 20px 0px;
    border: 1px solid black;
  }
  .ready-images {
    margin-left: 350px;
  }
  .container__frame {
    position: relative;
  }
  .container__questions {
    position: relative;
  }
  .question__image {
    position: absolute;
    top: 0;
    left: 0;
  }
  .image-download {
    cursor: auto;
    background: #B2192C;
    width: 404px;
    height: 54px;
    border: none;
    box-shadow: inset 0px 0px 15px 15px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    position: absolute;
    bottom: -70px;
    left: 1325px;
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 400;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  .image-download:not([disabled]):hover {
    cursor: pointer;
    background: black;
    box-shadow: 0 0 5px 5px red;
  }
  .loading__for__ready {
    margin-top: 200px;
  }
  .number_question__1 {
    left: 10px;
    transform: rotateZ(-10deg);
  }
  .number_question__2 {
    left: 135px;
    /*transform: rotateZ(10deg);*/
  }
  .number_question__3 {
    left: 260px;
    transform: rotateZ(10deg);
  }
  .number_question__4 {
    top: 200px;
    left: 200px;
    transform: rotateZ(10deg);
  }
  .number_question__5 {
    top: 200px;
    left: 50px;
    transform: rotateZ(-10deg);
  }
  .number_question__6 {
    top: 390px;
    left: 130px;
    /*transform: rotateZ(10deg);*/
  }
</style>
