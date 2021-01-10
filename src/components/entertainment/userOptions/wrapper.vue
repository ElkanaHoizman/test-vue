<template>
  <div class="wrapper col-12 col-md-8">
    <actions></actions>
    <search></search>
  </div>
</template>

<script>
import search from "./search";
import actions from "./actions";
export default {
  name: "wrapper",
  components: {
    search,
    actions
  }
};
</script>

<style scoped>
.wrapper {
  direction: rtl;
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 768px) {
  .wrapper{
    flex-direction: column ;
  }
}
</style>
