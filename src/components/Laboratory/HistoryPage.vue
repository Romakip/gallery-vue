<template>
  <div class="container__history" v-if="!loading">
    <div class="title__page">История</div>
    <router-link to="/" class="route-link link-laboratory">Лаборатория</router-link>
    <router-link to="/collection" class="route-link link-collection">Коллекция</router-link>
    <img src="../../assets/flower.png" alt="" class="apple__flower">
    <img src="../../assets/picture__flower.png" alt="" class="picture__flower">
<!--    <img src="../../assets/tree.png" alt="" class="tree">-->
    <div class="wrapper__frame">
      <div class="frame">
        <div class="old__photo">
          <img :src="oldImage.big_image" alt="">
        </div>
      </div>
      <img src="../../assets/arrow-dark.png" alt="" class="arrow__black between-photo-filter">
      <div class="frame">
        <div class="filter">
          <img :src="filterImage.big_image" alt="">
        </div>
      </div>
      <img src="../../assets/arrow-res.png" alt="" class="arrow__black between-filter-result">
      <div class="frame">
        <div class="result__photo">
          <img :src="resultImage.big_image" alt="">
        </div>
      </div>
    </div>
    <img src="../../assets/apple.png" alt="" class="apple__draw">
    </div>
  <Loader v-else class="loading"/>
</template>

<script>
import Loader from '@/components/Loader'
export default {
  name: 'history',
  props: ['id'],
  components: {Loader},
  data() {
    return {
      oldImage: {},
      filterImage: {},
      resultImage: {},
      loading: true
    }
  },
  methods: {
    getParentImage() {
      if (this.resultImage) {
        this.axios
          // .get(this.host + this.resultImage.parent_photo, {})
          .get(this.$config.VUE_APP_HOST + this.resultImage.parent_photo, {})
          .then(response => (
            this.oldImage = response.data
          ))
          .catch(e => {
            console.log(e)
          })
      }
    },
    getFilter() {
      if (this.resultImage) {
        this.axios
          // .get(this.host + this.resultImage.parent_filter, {})
          .get(this.$config.VUE_APP_HOST + this.resultImage.parent_filter, {})
          .then(response => (
            this.filterImage = response.data
          ))
          .catch(e => {
            console.log(e)
          })
      }
      console.log('this.filterImage')
      console.log(this.filterImage)
    },
    getResultImage(id) {
      this.axios
        // .get(this.host + id, {})
        .get(this.$config.VUE_APP_HOST + id, {})
        .then(response => (
          this.resultImage = response.data
        ))
        .catch(e => {
          console.log(e)
        })
      console.log('this.resultImage')
      console.log(this.resultImage)
    }
  },
  mounted() {
    console.log('this.router.params.id = ' + this.$route.params.id)
    this.getResultImage(this.$route.params.id)
    setTimeout(this.getFilter, 3000)
    setTimeout(this.getParentImage, 3000)
    setTimeout(() => (this.loading = false), 3000)

  },

}
</script>

<style>
.container__history {
}
.wrapper__frame {
  background: url("../../assets/tree.png") repeat-x;
  display: flex;
  flex-direction: row;
}

  .frame {
    background: wheat;
    width: 172px;
    height: 234px;
    border: 2px solid #000000;
    border-radius: 20px 0;
    box-shadow: 0 0 3px 3px black;
    margin: 300px auto;
    cursor: pointer;
    position: relative;
  }

  .frame img {
    width: 172px;
    height: 234px;
    border-radius: 20px 0;
  }
  .arrow__black {
    position: absolute;
    width: 250px;
  }
  .between-filter-result {
    top: 47%;
    left: 59%;
    transform: rotateZ(-180deg);
  }
  .between-photo-filter {
    top: 47%;
    left: 26%;
    transform: rotateZ(-180deg);
  }
  .apple__draw {
    position: absolute;
    bottom: -100px;
    right: 0;
  }
  .apple__flower {
    position: absolute;
    top: -30px;
    right: 450px;
  }
  .picture__flower {
    position: absolute;
    bottom: -30px;
    max-width: 350px;
    left: 350px;
  }
  .link-laboratory {
    right: 170px;
  }

</style>
