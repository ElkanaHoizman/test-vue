<template>
  <div class="items col-12 col-md-8 row" v-if="loaded">
    <div
      class="item"
      v-for="(item, index) in sortedItems()"
      :key="index"
      :class="{'listView col-12':listView ,'grid col-6 col-md-4': !listView}"
    >
      <div class="card">
        <div class="card-body">
          <div class="content" :class="{'col-7':listView ,'col-12': !listView}">
            <div
              class="card title"
              contenteditable="true"
              @input="editItem($event, item)"
            >{{ item.Title }}</div>
            <div class="card">{{formatDate(item.Year)}}</div>
          </div>
          <router-link :to="{path: `/singleItem?id=${item.imdbID}`}" class="col-5 link">
            <picture>
              <img :src="item.Poster" @error="imageLoadError" class="img" />
            </picture>
          </router-link>
        </div>
      </div>
    </div>
    <div class="alert alert-success" v-if="!filteredItems().length">
      <strong>No results found</strong>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import global from "../../mixins/global";
export default {
  name: "items",
  mixins: [global],

  computed: {
    ...mapState({
      loaded: state => state.entertainment.loaded,
      sortedDesc: state => state.entertainment.sortedDesc,
      listView: state => state.entertainment.listView,
    })
  },
  methods: {
    imageLoadError() {
      event.target.className += " hide";
    },

    sortedItems() {
      return this.filteredItems()
        .slice()
        .sort((a, b) => {
          return !this.sortedDesc
            ? a.Title > b.Title
              ? 1
              : -1
            : a.Title > b.Title
            ? -1
            : 1;
        });
    },
    editItem(e, item) {
      if (e.target.innerText != item.Title) {
             this.$store.dispatch("entertainment/EDIT_ITEM" ,item.imdbID);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.items {
  padding: 0;
  margin: auto;
  .item {
    margin-bottom: 25px;
    picture {
      display: flex;
      justify-content: center;
      img.img {
        max-height: 225px;
        object-fit: contain;
        border-radius: 20px;
        &.hide {
          visibility: hidden;
        }
      }
    }
  }
  .grid {
    .card-body {
      min-height: 545px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .content .card {
      align-items: center;
    }
  }
  .listView {
    .card-body {
      display: flex;
      justify-content: space-between;
      .link {
        display: flex;
        justify-content: center;
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .card {
      display: flex;
      align-items: flex-end;
      padding: 25px 15px;
      &.title {
        margin-bottom: 25px;
        text-align: center;
      }
    }
  }
  .alert.alert-success {
    display: flex;
    justify-content: center;
    width: 80%;
    margin: auto;
  }
}
@media screen and (max-width: 768px) {
  .items .item picture img.img {
    max-width: 100px;
  }
}
</style>
