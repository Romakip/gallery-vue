<template>
  <div class="collection" :class="[collectionImages.length ? 'collection_background' : null]">
    <div class="title__page">Коллекция</div>
    <router-link to="/" class="route-link">Лаборатория</router-link>
    <div class="wrapper__result__images">
<!--      <div class="arrow__back arrow" v-if="collectionImages.length">-->
<!--        <img src="../../assets/arrow-back.png" alt="">-->
<!--      </div>-->
      <ListCollection
        :collectionImages="collectionImages"
        v-if="collectionImages.length"
      />
      <div v-else>
        <img class="edinorog" src="../../assets/edinorog.png" alt="">
        <div class="nothing__collection">Стилизованных картинок пока нет(: Создать их можно в Лаборатории!</div>
      </div>
<!--      <div class="arrow__next arrow" v-if="collectionImages.length">-->
<!--        <img src="../../assets/arrow-next.png" alt="">-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import ListCollection from "./ListCollection";
  export default {
    name: 'collection-page',
    components: {ListCollection},
    data() {
      return {
        collectionImages: []
      }
    },
    methods: {
      getImages() {
        this.axios
          // .get(this.$config.VUE_APP_HOST + '?type=result', {})
          .get(this.$config.VUE_APP_HOST + '?type=result', {})
          .then(response => (
            this.collectionImages = response.data.results.length ? response.data.results : null
          ))
          .catch(e => {
            console.log(e)
          })
        console.log(this.collectionImages)
      },
      toActive(img) {
        img.active = true
        console.log('img.active', img.active)
        console.log('this.collectionImages')
        console.log(this.collectionImages)
      }
    },
    mounted() {
      console.log('this.titlePage : ' + this.titlePage)
      this.titlePage = 'Коллекция'
      this.getImages()
    }

  }
</script>

<style scope>
.image__frame {
  border: 1px solid black;
}
.collection {
  width: 1800px;
  height: 800px;
}
.collection_background {
  background: url('../../assets/crov-black2.png');
}
.result__images__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 70px 50px;
}

.image__frame {
  width: 172px;
  height: 234px;
  border: 3px solid #000000;
  box-shadow: -7px -5px 5px rgba(0, 0, 0, 0.45);
  border-radius: 20px 0;
  margin-left: 206px;
  margin-top: 40px;
  background: white;
  position: relative;
}
.result__image {
  cursor: pointer;
  width: 172px;
  height: 234px;
  border-radius: 20px 0;
}
.result__image:hover {
  box-shadow: -7px 0 15px rgba(0, 0, 0, 0.45);
}
.arrow {
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 400px;
}
.arrow__back {
  left: 30px;

}
.arrow__next {
  right: 40px;
}
.nothing__collection {
  font-size: 25px;
  width: 500px;
  background: orange;
  opacity: 0.7;
  position: absolute;
  top: 550px;
  left: 600px;
  box-shadow: -3px -3px 5px orange;
  border-radius: 0 10px 10px 10px;
  padding: 30px;
}
.edinorog {
  max-width: 500px;
  height: 400px;
  margin: 150px 0 0 670px;
}
</style>
