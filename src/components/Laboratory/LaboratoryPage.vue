<template>
  <div class="laboratory">
    <div class="title__page">Лаборатория</div>
    <div class="row-forms">
      <div class="block-form">
        <div class="title-form">Фото</div>
        <FormUploadImages/>
      </div>
      <div class="block-form">
        <div class="title-form">Стили</div>
        <FormUploadStyles/>
      </div>
      <div class="wrapper-style" @click="stylize">
        <div class="logo-style"></div>
        <div class="line-logo-style"></div>
      </div>
      <div class="block-form">
        <div class="title-form ready__images">Готовые картинки</div>
        <FormReadyImages :nowStylize="nowStylize" :readyImage="readyImage"/>
      </div>
    </div>
    <router-link to="/collection" class="route-link">Коллекция</router-link>
  </div>
</template>

<script>
import FormUploadImages from "./FormUploadImages"
import FormUploadStyles from "./FormUploadStyles"
import FormReadyImages from "./FormReadyImages"
export default {
  name: 'laboratory-page',
  components: {
    FormUploadImages,
    FormUploadStyles,
    FormReadyImages
  },
  data() {
    return {
      bindImage: {
        photo_id: 90,
        filter_id: 91,
      },
      readyImage: null,
      nowStylize: false
    }
  },
  methods: {
    stylize() {
      this.nowStylize = true
      if (this.styleReady) {
      let readyImageId = null
      console.log('active Photo = ' + this.$store.state.activePhoto, 'active Filter = ' + this.$store.state.activeFilter)

          this.axios
            .post(this.$config.VUE_APP_HOST, {bind_images: {photo_id: this.$store.state.activePhoto, filter_id: this.$store.state.activeFilter}}
            ).then(response => (
            readyImageId = response.data.id
          ))
            .catch(e => {
              console.log(e)
            })
          console.log('readyImageId = ' + readyImageId)

        let countCycle = 0
        let cycleGetResult = setInterval(function() {
          countCycle++
          this.getResult(readyImageId)
          if ((this.readyImage && this.readyImage.big_image) || countCycle === 100) {
            console.log('stop requests')
            this.nowStylize = false
            clearInterval(cycleGetResult)
          }
        }.bind(this), 5000)
      }
    },
    getResult(readyImageId) {
      console.log('method getResult!')
        this.axios
          // .get(this.host + readyImageId, {})
          .get(this.$config.VUE_APP_HOST + readyImageId, {})
          .then(response => (
            this.readyImage = response.data
          ))
          .catch(e => {
            console.log(e)
          })
        console.log('this.readyImage')
        if (this.readyImage && this.readyImage.big_image) this.nowStylize = false
        setTimeout(function() {console.log(this.readyImage)}.bind(this), 5000)
      }
  },
  mounted() {
    console.log(this.$config.VUE_APP_HOST)
  },
  computed: {
    styleReady() {
      return (this.$store.state.activeFilter && this.$store.state.activePhoto)
    },
    getApiUrl() {
      return this.$config.VUE_APP_HOST
    }
  }
}
</script>

<style>
  .title-form {
    margin-bottom: 15px;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.7);
    width: 400px;
    margin-left: 59px;
    text-align: center;
  }
  .row-forms {
    margin: 170px 0 0 50px;
    display: flex;
    flex-direction: row;
  }
  .ready__images {
    margin-left: 349px;
  }
  .image-add {
    width: 172px;
    height: 55px;
    background: #19B24D;
    box-shadow: inset 0px 0px 15px 15px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: 1px solid #000000;
    font-size: 30px;
  }
  .logo-style {
    background: url("../../assets/Stylize.png") no-repeat;
    min-width: 230px;
    height: 80px;
    top: 50%;
    left: 55%;
    position: absolute;
    cursor: pointer;
    transition: 1.5s;
  }
  .line-logo-style {
    display: block;
    content: '';
    width: 230px;
    height: 5px;
    background: black;
    position: absolute;
    z-index: 3;
    top: 550px;
    left: 1050px;
    transition: 2s;
    transform: rotateZ(-8deg);
    opacity: 0;
  }
  .logo-style:hover + .line-logo-style {
    opacity: 1;
    top: 500px;
  }
  .btn_pre_add {
    background: url("../../assets/image10.png") no-repeat;
    position: absolute;
    z-index: 3;
    width: 83px;
    height: 51px;
    cursor: pointer;
    transition: 0.1s;
  }
  .btn_after_add {
    background: url("../../assets/image9.png") no-repeat;
    position: absolute;
    width: 83px;
    height: 51px;
    z-index: 3;
    cursor: pointer;
    transition: 0.1s;
  }
  .btn_pre_add:hover, .btn_after_add:hover {
    box-shadow: 0 0 3px 3px;
  }
  .nothing {
    margin: 250px 0;
    color: white;
    background: black;
    font-weight: bold;
    font-size: 25px;
  }
</style>
