<template>
  <div id="app">
    <Loader v-if="loading" class="loading"/>
    <div v-else>
      <div class="logo"></div>
      <div class="title__page"></div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import ListPhotos from "./components/Laboratory/Photos/ListPhotos"
import ItemPhoto from "./components/Laboratory/Photos/ItemPhoto"
export default {
  name: 'App',
  data() {
    return {
      loading: true
    }
  },
  components: {
    Loader, ListPhotos, ItemPhoto
  },
  methods: {
    test() {
      console.log('test in App.vue')
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
    console.log("active photo = " + this.$store.state.activePhoto, 'active filter = ' + this.$store.state.activeFilter)

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100&family=Homenaje&family=M+PLUS+Rounded+1c:wght@300&family=PT+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');
  body {
    background: rgba(213, 189, 65, 0.69);
    position: absolute;;
    left: 0;
    right: 0;

    /*font-family: 'Barlow', sans-serif;*/
    /*font-family: 'Homenaje', sans-serif;*/
    font-family: 'M PLUS Rounded 1c', sans-serif;
    /*font-family: 'PT Sans', sans-serif;*/
  }
  .logo {
    position: absolute;
    z-index: 2;
    left: 50px;
    top: 20px;
    background: url("assets/Artmix.png") no-repeat;
    width: 150px;
    height: 150px;
  }
  .title-page {
    text-align: center;
    margin: 40px 0 0 0;
  }
  .loading {
    margin: 0 auto;
    position: absolute;
    top: 400px;
    left: 50%;
  }
  .route-link {
    text-decoration: none;
    color: black;
    position: absolute;
    top: 50px;
    right: 50px;
    font-weight: 400;
    font-family: 'Neucha', cursive;
    opacity: 0.7;
    font-size: 24px;
  }
  .route-link:hover {
    border-bottom: 2px solid black;
    opacity: 0.7;
  }
  .block-form {
    text-align: center;
  }
  .block-images {
    width: 400px;
    height: 600px;
    background: #FFFFFF;
    border: 2px solid black;
    border-radius: 3px;
    margin-left: 60px;
  }
  .btn {
    cursor: pointer;
    transition: 0.5s;
  }
  .btn:hover {
    background: greenyellow;
    box-shadow: 2px 3px 5px black;
  }
  .title__page {
    position: absolute;
    top: 53px;
    left: 250px;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0.7;
  }
</style>
