<template>
  <div :class="['image_number_' + index]" @click="active = true, activePhoto(photo.id), $emit('to-active', photo.id)">
    <img
      alt=""
      :key="photo.big_image"
      :class="[{active : gradient}]"
      :src="photo.big_image"/>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    },
    index: Number
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    activePhoto(id) {
      this.$store.commit('photo', id)
      console.log('active Photo = ', this.$store.state.activePhoto)
    }
  },
  computed: {
    gradient: function() {
      if (this.active) {
        return true
      }
    }
  }
}

</script>

<style scoped>
.active {
  border: 5px inset indianred;
}
.added__image img {
  border-radius: 20px 0;
  width: 172px;
  height: 234px;
}
.image_number_0 {
  margin: 26px 10px 0 22px;
}
.image_number_1 {
  margin: 60px 0 0 0;
}
.image_number_2 {
  margin: 0 10px 0 22px;
}
.image_number_3 {
  margin: 40px 0 0 0;
}
</style>
