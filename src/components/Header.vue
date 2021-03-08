<template>
  <div class="header">
    <div class="header__search">
      <div class="header__magnifier"></div>
      <input
        type="text"
        placeholder="Searching..."
        class="header__input"
        @input="$store.commit('setSearchKeywords', $event.target.value)"
      />
    </div>
    <div class="header__logo-wrapper">
      <div class="header__logo">Company Logo</div>
    </div>
    <button
      type="button"
      class="header__button header__button--logout"
      @click="logout()"
    >
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: "Header",

  methods: {
    logout() {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      this.$router.push({
        name: "Login",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  grid-area: header;
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.6);

  &:before {
    position: absolute;
    content: "";
    display: block;
    height: 100%;
    background: #fff;
    left: -10px;
    width: 20px;
  }

  &__logo-wrapper {
    width: 232px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: var(--bg-6);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__logo {
    color: #fff;
    font-size: var(--large);
  }

  &__search {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 10px;
  }

  &__input {
    border: none;
    color: var(--text-3);
    font-size: var(--small);
    height: 100%;
    width: 320px;
  }

  &__magnifier {
    width: 32px;
    height: 32px;
    background: url("../assets/icons/magnifier.svg");
    background-size: 170%;
    background-position: center;
  }

  &__button {
    margin: 0 20px 0 auto;
    border: none;
    color: #fff;

    &--logout {
      background: var(--bg-7);
      padding: 8px 12px;
    }
  }
}
</style>
