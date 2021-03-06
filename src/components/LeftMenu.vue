<template>
  <div class="menu">
    <div class="menu__links">
      <router-link
        class="menu__link"
        v-for="(link, index) in links"
        :key="index"
        :class="{ 'menu__link--active': $route.name === link.name }"
        :to="{
          name: link.to,
        }"
      >
        <div class="menu__icon" :class="{ 'menu__icon--empty': !link.icon }">
          <img
            v-if="link.icon"
            :src="`${require(`../assets/icons/${link.icon}`)}`"
            alt=""
          />
        </div>
        <div class="menu__text">
          {{ link.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",

  data() {
    return {
      links: [
        { name: "Menu", to: "Contact", icon: "" },
        { name: "Menu 1", to: "Contact", icon: "" },
        { name: "Menu 2", to: "Contact", icon: "" },
        { name: "Menu 3", to: "Contact", icon: "" },
        { name: "Contact", to: "Contact", icon: "contact_icon.svg" },
        { name: "Menu 4", to: "Contact", icon: "" },
        { name: "Menu 5", to: "Contact", icon: "" },
        { name: "Menu 6", to: "Contact", icon: "" },
        { name: "Menu 7", to: "Contact", icon: "" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.menu {
  grid-area: menu;
  position: relative;

  &__links {
    overflow: auto;
  }

  &__link {
    display: flex;
    padding: 10px 15px;
    align-items: center;
    width: 100%;
    color: var(--text-3);
    border-left: 3px solid transparent;

    &--active {
      border-color: var(--bg-2);
      background: var(--highlight-1);
      color: var(--bg-2);
    }

    &:last-of-type {
      position: absolute;
      bottom: 0px;
    }

    &:hover {
      background: var(--highlight-1);
      color: var(--bg-2);
    }
  }

  &__icon {
    width: 32px;
    height: 32px;
    margin-right: 10px;

    img{
      width: 100%;
    }

    &--empty {
      background: #9299b9;
    }
  }
}
</style>
