<template>
  <div class="main">
    <wrapperUserOptions></wrapperUserOptions>
    <div class="wrapper-content">
      <items></items>
      <div class="alert alert-danger" v-if="arrApi">
        <strong>{{arrApi}}</strong>
      </div>
      <div class="side col-12 col-md-4">
        <categories></categories>
        <button class="change-view" @click="changeView()">Change view</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import wrapperUserOptions from "../entertainment/userOptions/wrapper";
import items from "../entertainment/items";
import categories from "../entertainment/categories";

export default {
  name: "main",
  components: {
    wrapperUserOptions,
    items,
    categories
  },
  computed: {
    ...mapState({
      arrApi: state => state.entertainment.arrApi
    })
  },
  created() {
    this.$store.dispatch("entertainment/GET_ITEMS");
  },
  methods: {
    changeView() {
      // Change the view from list to grid
      this.$store.commit("entertainment/setIslistView");
    }
  }
};
</script>

<style scoped lang="scss">
.main {
  margin-top: 100px;
  .wrapper-content {
    display: flex;
    justify-content: space-between;
    .side {
      margin-right: 50px;
    }
  }
  .change-view {
    cursor: pointer;
    position: relative;
    z-index: 3;
    background: transparent;
    color: #1172c4;
    font-size: 14px;
    border-color: #1172c4;
    border-style: solid;
    border-width: 2px;
    border-radius: 5px;
    padding: 10px 40px;
    text-transform: uppercase;
    transition: all 0.2s linear;
    outline: 0;
    &:hover {
      color: white;
      background: #1172c4;
      border-color: white;
      transition: all 0.2s linear;
    }
  }
  .alert.alert-danger {
    display: flex;
    margin: auto;
    width: 45%;
    strong {
      margin: auto;
    }
  }
}
@media screen and (max-width: 768px) {
  .wrapper-content {
    flex-direction: column-reverse;
  }

  .main .wrapper-content .side {
    margin-right: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
  }
}
</style>
