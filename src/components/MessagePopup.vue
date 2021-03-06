<template>
  <div
    class="popup"
    :class="[{ 'popup--error': popup.error }, { 'popup--show': popup.display }]"
  >
    <div class="popup__msg">{{ popup.message }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MessagePopup",

  watch: {
    "popup.display"(display) {
      if (display) {
        setTimeout(() => {
          this.$store.commit("setPopup", {
            message: this.popup.message,
            error: this.popup.error,
            display: false,
          });
        }, 2000);
      }
    },
  },

  computed: {
    ...mapGetters(["popup"]),
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  z-index: 3;
  padding: 20px;
  top: 0px;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -100%);
  background: var(--bg-5);
  transition: transform 0.1s ease;
  border-radius: 10px;

  &--error {
    background: var(--bg-4);
  }

  &--show {
    transform: translate(-50%, calc(0% + 30px));
  }
}
</style>
