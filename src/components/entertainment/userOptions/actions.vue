<template>
  <div class="actions co-md-4">
    <button type="button" class="btn btn-secondary sort col-6" @click="sort()">Sort</button>
    <button type="button" class="btn btn-success col-6" @click="getApi()">Refresh</button>
  </div>
</template>

<script>
export default {
  name: "actions",

  methods: {
    sort() {
      this.$store.commit("entertainment/setIsSortedDesc");
    },
    getApi() {
      this.$store.commit("entertainment/setItems", []);
      this.$store.dispatch("entertainment/GET_ITEMS");
    }
  }
};
</script>
<style scoped lang="scss">
.actions {
  display: flex;
  align-items: baseline;
  flex: 1;
  justify-content: space-between;
  .sort {
    margin-left: 7px;
  }
}
</style>
