<template>
  <div class="main">
    <Header />
    <Panel />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Panel from "@/components/Panel";
export default {
  name: "Main",

  components: {
    Header,
    Panel,
  },
};
</script>

<style scoped lang="scss">
.main {
  grid-area: main;
  display: grid;
  grid-template-rows: 55px calc(100% - 55px);
  grid-template-areas: "header" "panel";
}
</style>
