<template>
    <form class="upload-images block-images">
      <div class="active__buttons">
        <div class="btn_pre_add btn__ready-pre" @click="lastPageImages"></div>
        <button @click="addFile" class="image-add btn">Добавить</button>
        <div class="btn_after_add btn__ready-next" @click="nextPageImages"></div>
      </div>
      <input type="file" ref="file" @change="handleFileUpload" accept="image/jpeg, image/jpg" id="upload-files" hidden/>
      <ListPhotos
        class="page__added__images"
        v-if="uploadedPhotos"
        :uploadedPhotos="uploadedPhotos"
        @to-active="toActive"
      />
      <Loader
      v-else-if="loading"
      />
      <div
        class="nothing"
      v-else>Картинки закончились. Добавьте новые!</div>
    </form>
</template>

<script>
  import ListPhotos from "./Photos/ListPhotos"
  import Loader from '@/components/Loader'
  export default {
    components: {ListPhotos, Loader},
    data() {
      return {
        file: '',
        IntermediateFiles: [],
        uploadedPhotos: [],
        countClick: null,
        offset: 0,
        photoActive: null,
        loading: true
      }
    },
    methods: {
      handleFileUpload() {
        this.file = this.$refs.file.files[0]
        let formData = new FormData()
        formData.append('type', 'photo')
        formData.append('big_image', this.file)
        this.axios
          // .post(this.host, formData,{
          .post(this.$config.VUE_APP_HOST, formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => this.getUploadedPhotos())
          .catch(e => {
            console.log(e)
          })
        console.log(this.uploadedPhotos)
      },
      addFile() {
        this.$refs.file.click()
      },
      nextPageImages() {
        this.offset += 4
        this.getUploadedPhotos()
        if (!this.uploadedPhotos) this.offset -= 4
      },
      lastPageImages() {
        this.offset -= 4
        if (this.offset < 0) this.offset = 0
        let lastUploadedPhoto = this.uploadedPhotos
        this.getUploadedPhotos()
      },
      getUploadedPhotos() {
        this.axios
        // .get(this.host + '?type=photo&limit=4&offset=' + this.offset, {})
        .get(this.$config.VUE_APP_HOST + '?type=photo&limit=4&offset=' + this.offset, {})
          .then(response => (
            this.uploadedPhotos = response.data.results.length ? response.data.results : null
          ))
          .catch(e => {
            console.log(e)
          })
        this.loading = false
        console.log(this.uploadedPhotos)
      },
      toActive(id) {
        this.photoActive = id
        console.log('photo active = ' + this.photoActive)
      }
    },
    mounted() {
      // console.log("this.host", this.host)
      console.log("this.host", this.$config.VUE_APP_HOST)
      this.getUploadedPhotos()
    },
    computed: {}
  }
</script>

<style scoped>
  .btn__ready-pre {
    left: 110px;
    bottom: -70px;
  }
  .btn__ready-next {
    left: 425px;
    bottom: -70px;
  }
  .page__added__images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .image-add {
    position: absolute;
    bottom: -70px;
    left: 220px;
  }
</style>
