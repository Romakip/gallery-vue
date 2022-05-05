<template>
  <form class="upload-styles block-images">
    <div class="active__buttons">
      <div class="btn_pre_add style__btn_last" @click="lastPageFilters"></div>
      <button @click="addStyle" class="btn image-add">Добавить</button>
      <div class="btn_after_add style__btn-next" @click="nextPageFilters"></div>
    </div>
    <input type="file" ref="style" @change="handleStyleUpload" accept="image/jpeg, image/jpg" id="upload-styles" hidden/>
    <ListFilters
      v-if="uploadedStyles"
      @active-filter="toActiveFilter"
      :uploadedStyles="uploadedStyles"/>
    <Loader
      v-else-if="loading"
    />
    <div class="nothing" v-else>Стили закончились. Добавьте новые!</div>

  </form>
</template>

<script>
import ListFilters from "./Filters/ListFilters"
import Loader from '@/components/Loader'
export default {
  name: 'form-upload-styles',
  components: {ListFilters, Loader},
  props: ['selectFilter'],
  data() {
    return {
      style: '',
      styles: [],
      uploadedStyles: [],
      offset: 0,
      activeFilter: null,
      loading: true
    }
  },
  methods: {
    addStyle() {
      this.$refs.style.click()
    },
    handleStyleUpload() {
      this.style = this.$refs.style.files[0]
      console.log('this.style' + this.style)
      let formData = new FormData()
      formData.append('type', 'filter')
      formData.append('big_image', this.style)
      this.axios
        // .post(this.host, formData,{
        .post(this.$config.VUE_APP_HOST, formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => (this.getUploadedStyles()))
        .catch(e => {
          console.log(e)
        })
      console.log('this.style : ' + this.style)
    },
    getUploadedStyles() {
      this.axios
        // .get(this.host + '?type=filter&limit=4&offset=' + this.offset, {})
        .get(this.$config.VUE_APP_HOST + '?type=filter&limit=4&offset=' + this.offset, {})
        .then(response => (
          this.uploadedStyles = response.data.results.length ? response.data.results : null
        ))
        .catch(e => {
          console.log(e)
        })
      this.loading = false
      console.log('this.uploadedStyles')
      console.log(this.uploadedStyles)
    },
    lastPageFilters() {
      this.offset -= 4
      if (this.offset < 0) this.offset = 0
      this.getUploadedStyles()
    },
    nextPageFilters() {
      this.offset += 4
      let oldUploadStyles = this.uploadedStyles
      this.getUploadedStyles()
      if (!this.uploadedStyles) this.offset -= 4
    },
    toActiveFilter(id) {
      this.activeFilter = id
      console.log('active filter = ' + this.activeFilter)
    }
  },
  mounted() {
    this.getUploadedStyles()
  }
}
</script>

<style scoped>
  .image-add {
    position: absolute;
    bottom: -70px;
    left: 690px;
  }
  .style__btn_last {
    left: 578px;
    bottom: -70px;
  }
  .style__btn-next {
    left: 890px;
    bottom: -70px;
  }
</style>
