<template>
  <div class="contact">
    <LeftMenu />
    <Main />
  </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu";
import Main from "@/components/Main";
export default {
  name: "Contact",
  components: {
    LeftMenu,
    Main,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_mixins.scss";
.contact {
  display: grid;
  grid-template-columns: 260px auto;
  grid-template-rows: 100%;
  grid-template-areas: "menu main";

  @include media(1280px) {
    grid-template-columns: 160px auto;
  }
}
</style>
