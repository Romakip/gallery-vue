<template>
  <div class="wrapper__added__styles">
    <div class="page__added__styles">
      <ItemFilter
      v-for="(filter, index) in uploadedStyles"
      :filter="filter"
      @active-filter="activeFilter"
      :index="index"/>
    </div>
  </div>
</template>

<script>
import ItemFilter from "./ItemFilter";
export default {
  name: 'list-filters',
  components: {ItemFilter},
  props: ['uploadedStyles'],
  methods: {
    activeFilter(id) {
      this.$emit('active-filter', id)
    }
  }
}
</script>

<style>
.page__added__styles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
