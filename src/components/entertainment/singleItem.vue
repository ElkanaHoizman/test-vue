<template>
  <div class="single-item">
    <router-link :to="{path: `/`}" class="back">
      <button type="button" class="btn btn-primary">Back</button>
    </router-link>
    <div class="card">
      <div class="card-body">
        <div class="content col-7">
          <div class="card title">{{ getItem.Title }}</div>
          <div class="card">{{formatDate(getItem.Year)}}</div>
        </div>
        <picture v-if="getItem.Poster">
          <img :src="getItem.Poster" @error="imageLoadError" class="img" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import global from "../../mixins/global";

export default {
  name: "single-item",
  mixins: [global],

  computed: {
    ...mapState({
      items: state => state.entertainment.items
    }),
    getItem() {
      const id = this.$route.query.id;
      return this.items.filter(item => item.imdbID == id)[0];
    }
  },
  methods: {
    imageLoadError() {
      event.target.className += " hide";
    }
  }
};
</script>

<style scoped lang="scss">
.single-item {
  margin-top: 150px;
  .back {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
  }

  img.img {
    max-height: 225px;
    object-fit: contain;
    border-radius: 20px;
    &.hide {
      visibility: hidden;
    }
  }
  .card-body {
    display: flex;
    justify-content: space-around;
    .link {
      display: flex;
      justify-content: center;
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
      }
    }
  }
}
</style>
