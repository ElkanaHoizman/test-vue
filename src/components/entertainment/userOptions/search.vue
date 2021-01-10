<template>
  <div class="wrapper-search col-md-7">
    <button type="button" class="btn btn-info col-4" @click="clearSearch()">Clear</button>

    <div class="form-group has-search col-8 row">
      <input
        type="text"
        class="form-control"
        placeholder="Search ..."
        @input="searchQuery($event)"
        :value="valueQuery"
      />
    </div>
  </div>
</template>
dd
<script>
import { mapState } from "vuex";

export default {
  name: "search",

  computed: {
    ...mapState({
      valueQuery: state => state.entertainment.searchQuery
    })
  },
  methods: {
    searchQuery(event) {
      // Search by words
      this.$store.commit("entertainment/setSearchQuery", event.target.value);
    },
    clearSearch() {
      this.$store.commit("entertainment/setSearchQuery", "");
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper-search {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  .form-group {
    margin-bottom: 1rem;
    direction: ltr;
    padding: 0;
  }
}

@media screen and (max-width: 768px) {
  .wrapper-search.col-md-7 {
    margin-top: 15px;
  }
}
</style>
