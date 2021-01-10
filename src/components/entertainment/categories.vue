<template>
  <div class="categories card" v-if="loaded && getCategoriesName().length">
    <div v-for="(item, index) in getCategoriesName()" :key="index" class="type">
      <div>
        <span>({{ totalCategories(item) }})</span>
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import global from "../../mixins/global";

export default {
  name: "categories",
  mixins: [global],
  computed: {
    ...mapState({
      loaded: state => state.entertainment.loaded
    })
  },
  methods: {
    imageLoadError() {
      event.target.className += " hide";
    },
    getCategoriesName() {

      // Existing categories
      const categoriesName = [];

      this.filteredItems().map(value => {
        if (!categoriesName.includes(value.Type)) {
          categoriesName.push(value.Type);
        }
      });
      return categoriesName;
    },
    totalCategories(name) {
      // Total from each category
      const result = this.filteredItems().filter(item => item.Type == name);
      return result.length;
    }
  }
};
</script>

<style scoped>
.categories.card {
  width: 55%;
  margin-bottom: 40px;
  padding: 20px 0;
}
.type {
  text-align: end;
  margin: 0 10px;
}
</style>
