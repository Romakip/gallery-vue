<template>
  <div @click="active = true, activeFilter(filter.id), $emit('active-filter', filter.id)">
    <img
       :key="filter.big_image"
       :class="['added__style', 'style_number_' + index, {'active-filter' : gradient}]"
       :src="filter.big_image"/>
  </div>
</template>

<script>
export default {
  name: 'item-filter',
  props: {
    filter: {
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
    activeFilter(id) {
      this.$store.commit('filter', id)
      console.log('active Filter = ' + this.$store.state.activeFilter)
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
.added__style {
  width: 172px;
  height: 234px;
  border: 2px solid #000000;
  border-radius: 20px 0;
  box-shadow: 0 0 3px 3px gray;
  cursor: pointer;
}
.active-filter {
  border: 5px solid blue;
}
.style_number_0 {
  margin: 60px 0 0 22px;
}
.style_number_1 {
  margin: 26px 0 0 10px;
}
.style_number_2 {
  margin: 40px 0 0 22px;
}
.style_number_3 {
  margin: 0 0 0 10px;
}
</style>
