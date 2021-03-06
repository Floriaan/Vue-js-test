<template>
  <div id="app">
    <div class="main-wrapper">
      <MessagePopup />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MessagePopup from "@/components/MessagePopup";
export default {
  name: "App",
  components: {
    MessagePopup,
  },
};
</script>