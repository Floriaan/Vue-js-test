<template>
  <div class="login">
    <div class="logo">
      <div class="logo__infos">
        <div class="logo__info" v-for="(info, index) in infos1" :key="index">
          <div class="logo__info-line"></div>
          <div class="logo__info-text">{{ info }}</div>
        </div>
      </div>
      <div class="logo__logo-wrapper">
        <div class="logo__logo-image">
          <img src="../assets/icons/logo.svg" alt="" />
        </div>
        <div class="logo__logo-text">Company System</div>
      </div>
      <div class="logo__infos logo__infos--bottom">
        <div class="logo__info" v-for="(info, index) in infos2" :key="index">
          <div class="logo__info-text">{{ info }}</div>
          <div class="logo__info-line"></div>
        </div>
      </div>
    </div>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="login()">
        <div class="form__logo">
          Company Logo
        </div>
        <div class="form__title form__title--main">
          Sign in to The One System.
        </div>
        <div class="form__title form__title--second">
          Enter your details below
        </div>

        <div class="form__input-wrapper form__input-wrapper--first">
          <label for="" class="form__label">e-Mail or Username</label>
          <input
            type="text"
            placeholder="Enter your email or username"
            class="form__input"
            v-model="username"
          />
        </div>
        <div class="form__input-wrapper">
          <label for="" class="form__label">Password</label>
          <input
            type="password"
            autocomplete="false"
            placeholder="Enter password"
            class="form__input"
            v-model="password"
          />
        </div>

        <div class="form__actions">
          <div class="form__remember">
            <div class="form__checkbox-wrapper">
              <input
                type="checkbox"
                class="form__checkbox"
                name=""
                id="checkbox"
              />
              <label
                for="checkbox"
                class="form__label form__label--checkbox"
              ></label>
            </div>
            <span>Remember me</span>
          </div>
          <span>Forgot password?</span>
        </div>

        <button type="submit" class="form__submit">Sign In</button>
      </form>
    </div>
    <Loading v-if="loginLoading" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "@/components/Loading";
export default {
  name: "Login",

  components: {
    Loading,
  },

  data() {
    return {
      infos1: ["Fast", "Flexible", "Easy"],
      infos2: ["support@company.ch", "+41 79 500 00 00", "www.company.ch"],
      username: null,
      password: null,
    };
  },

  computed: {
    ...mapGetters(["loggedin", "loginLoading"]),
  },

  methods: {
    async login() {
      const username = this.username;
      const password = this.password;

      if (username && password) {
        await this.$store.dispatch("login", {
          username,
          password,
        });

        if (this.loggedin) {
          this.$router.push({ name: "Contact" });
        }
      } else {
        this.$store.commit("setPopup", {
          message: "Please fill all the inputs!",
          error: true,
          display: true,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_mixins";

.login {
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-areas: "logo form";
  color: white;
  position: relative;

  .logo {
    grid-area: logo;
    background: var(--bg-1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &__logo-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__logo-image {
      margin-bottom: 20px;
      width: 190px;

      img {
        width: 100%;
      }
    }

    &__logo-text {
      font-size: 36px;
      font-family: var(--r-medium);
    }

    &__infos {
      position: absolute;
      left: 0;
      top: 80px;

      &--bottom {
        left: initial;
        top: initial;
        right: 0;
        bottom: 5%;

        @include media(1280px) {
          bottom: 0;
        }

        .logo__info {
          justify-content: flex-end;
          &-line {
            margin-right: 0px;
            margin-left: 5px;
          }
        }
      }
    }

    &__info {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      &-line {
        width: 100px;
        height: 1px;
        background: white;
        margin-right: 5px;
      }
    }
  }

  .form-wrapper {
    grid-area: form;
    display: flex;
    align-items: center;
  }

  .form {
    margin-left: 200px;
    width: 60%;
    color: var(--text-1);

    &__logo {
      font-size: var(--large);
      background: var(--bg-1);
      display: inline-block;
      padding: 7px 5px;
      border-radius: 8px;
      color: white;
    }

    &__title {
      &--main {
        font-size: var(--large);
        margin: 30px 0 15px 0;
      }

      &--second {
        margin-bottom: 50px;
      }
    }

    &__input-wrapper {
      margin-bottom: 10px;

      &--first {
        margin-bottom: 30px;
      }
    }

    &__label {
      display: block;
      padding-left: 5px;

      &--checkbox {
        width: 100%;
        height: 100%;
        position: absolute;
        padding: 0;
        z-index: 2;
        cursor: pointer;

        &::after,
        &::before {
          content: "";
          display: block;
          position: absolute;
          height: 100%;
          width: 100%;
          border: 2px solid var(--text-2);
        }
      }
    }

    &__input {
      border: none;
      border-bottom: 2px solid var(--text-2);
      width: 100%;
      padding: 10px 5px;
      color: var(--text-2);
    }

    &__actions {
      font-size: var(--small);
      color: var(--text-2);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 5px;
    }

    &__remember {
      display: flex;
      align-items: center;
    }

    &__checkbox-wrapper {
      width: 18px;
      height: 18px;
      position: relative;
      margin: 0 5px;
    }

    &__checkbox {
      display: none;
    }

    &__checkbox:checked ~ .form__label::before {
      background-color: var(--bg-1);
    }

    &__checkbox:checked ~ .form__label::after {
      background: url("../assets/icons/tick.svg") no-repeat;
      background-size: contain;
      background-position: center;
    }

    &__checkbox:checked ~ .form__label::before,
    &__checkbox:checked ~ .form__label::after {
      border-color: var(--bg-1);
    }

    &__submit {
      width: 260px;
      height: 50px;
      display: block;
      margin: 20px auto;
      font-size: var(--large);
      background: var(--bg-1);
      color: white;
      border: none;
      box-shadow: 0px 3px 3px #006fff7a;
    }
  }
}
</style>
