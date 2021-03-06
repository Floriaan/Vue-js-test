<template>
  <form class="detail" @submit.prevent="addCompany()">
    <button type="button" class="detail__close" @click="toggleCompanyPreview(false)">X</button>
    <div class="detail__logo detail__logo--file">
      <input type="file" class="detail__input detail__input--logo" />
      <div class="detail__upload">Upload company logo</div>
    </div>
    <div class="detail__details-wrapper">
      <div class="detail__name">
        <input
          v-model="name"
          type="text"
          class="detail__input detail__input--name"
          placeholder="Company Name"
        />
      </div>
      <div class="detail__details">
        <div class="detail__row">
          <div class="detail__detail">
            <div class="detail__label">Phone:</div>
            <div class="detail__info">
              <input
                v-model="phone"
                type="text"
                class="detail__input detail__input--info"
              />
            </div>
          </div>
          <div class="detail__detail">
            <div class="detail__label">E-Mail:</div>
            <div class="detail__info">
              <input
                v-model="email"
                type="text"
                class="detail__input detail__input--info"
              />
            </div>
          </div>
          <div class="detail__detail">
            <div class="detail__label">Web:</div>
            <div class="detail__info">
              <input
                v-model="web"
                type="text"
                class="detail__input detail__input--info"
              />
            </div>
          </div>
        </div>
        <div class="detail__row">
          <div class="detail__detail">
            <div class="detail__label detail__label--right">Location:</div>
            <div class="detail__info">
              <input
                v-model="location"
                type="text"
                class="detail__input detail__input--info"
              />
            </div>
          </div>
          <div class="detail__detail">
            <div class="detail__label detail__label--right">Zip Code:</div>
            <div class="detail__info">
              <input
                v-model="zip"
                type="text"
                class="detail__input detail__input--info"
              />
            </div>
          </div>
          <div class="detail__detail">
            <div class="detail__label detail__label--right">City:</div>
            <div class="detail__info">
              <input
                v-model="city"
                type="text"
                class="detail__input detail__input--info"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button type="submit" class="detail__button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "AddCompany",

  data() {
    return {
      name: "",
      phone: "",
      email: "",
      web: "",
      location: "",
      zip: "",
      city: "",
    };
  },

  props: {
    toggleCompanyPreview: {
      required: true,
      type: Function,
    },
  },

  methods: {
    addCompany() {
      const company = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        web: this.web,
        location: this.location,
        zip: this.zip,
        city: this.city,
      };
      if (Object.values(company).some((value) => value)) {
        this.$store.dispatch("addCompany", company);
      } else {
        this.$store.commit("setPopup", {
          message: "Please fill atleast one field",
          error: true,
          display: true,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.detail {
  position: relative;
  &__input {
    background: var(--text-3);
    border: none;
    color: #fff;

    &--name {
      height: 54px;
      width: 340px;
      font-size: var(--larger);
      text-align: center;
      &::placeholder {
        color: #fff;
      }
    }

    &--logo {
      width: 100%;
      height: 100%;
      opacity: 0;
      position: relative;
      z-index: 1;
      cursor: pointer;
    }

    &--info {
      height: 28px;
      font-size: 16px;
      width: 100%;
    }
  }

  &__logo {
    height: 200px;
    &--file {
      position: relative;
      background: var(--text-3);
    }
  }

  &__upload {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    color: white;
  }

  &__button {
    position: absolute;
    bottom: -30px;
    right: 0;
    height: 30px;
    width: 100px;
    background: var(--bg-2);
    color: white;
    border: none;
  }
}
</style>
