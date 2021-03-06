<template>
  <div class="preview">
    <button class="preview__button" @click="addNewCompany = !addNewCompany">
      <span v-if="!addNewCompany">Add New Company</span>
      <span v-else>Company Details</span>
    </button>
    <div class="preview__container">
      <AddCompany
        :toggleCompanyPreview="toggleCompanyPreview"
        v-if="addNewCompany"
      />
      <CompanyDetails :toggleCompanyPreview="toggleCompanyPreview" v-else />
      <div style="width: 100%">
        <iframe
          class="preview__map"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <AddCompanyServices v-if="addNewCompany" />
      <CompanyServices v-else />
    </div>
  </div>
</template>

<script>
import CompanyDetails from "@/components/CompanyDetails";
import CompanyServices from "@/components/CompanyServices";
import AddCompany from "@/components/AddCompany.vue";
import AddCompanyServices from "@/components/AddCompanyServices";
export default {
  name: "CompanyPreview",

  data() {
    return {
      addNewCompany: false,
    };
  },

  props: {
    toggleCompanyPreview: {
      required: true,
      type: Function,
    },
  },

  components: {
    CompanyDetails,
    CompanyServices,
    AddCompany,
    AddCompanyServices,
  },
};
</script>

<style scoped lang="scss">
.preview {
  flex: 2;
  padding-left: 15px;

  &__button {
    display: block;
    margin: 35px 20px 40px auto;
    height: 40px;
    width: 210px;
    background: var(--bg-2);
    color: white;
    border: none;
  }

  &__container {
    padding: 30px 10px;
    background: white;
    border-radius: 10px;
  }

  &__map {
    width: 100%;
    height: 250px;
    margin: 40px 0 60px 0;
  }
}

/deep/.detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &__close {
    border: none;
    position: absolute;
    top: -15px;
    right: 0;
    background: none;
    font-size: var(--large);
    color: var(--text-3);
    font-weight: 700;
  }

  &__logo {
    flex: 1;
    margin-right: 30px;
    max-width: 200px;

    img {
      width: 100%;
    }
  }
  &__details-wrapper {
    flex: 2;
  }

  &__name {
    font-size: var(--larger);
    color: var(--text-3);
  }

  &__details {
    display: flex;
    justify-content: space-between;
  }

  &__row {
    min-width: 0;
    flex: 1;

    &:first-of-type {
      margin-right: 20px;
    }
  }

  &__detail {
    display: flex;
    align-items: center;
  }

  &__detail,
  &__name {
    margin-bottom: 20px;
  }

  &__label {
    color: var(--text-3);
    margin-right: 10px;
    width: 40%;

    &--right {
      text-align: right;
      margin-right: 40px;
    }
  }

  &__info {
    color: var(--text-1);
    text-align: left;
    width: 60%;
  }

  &__label,
  &__info,
  &__name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
/deep/.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &--add {
    justify-content: flex-start;
  }

  .service {
    padding: 12px 30px;
    border-radius: 25px;
    background: var(--text-3);
    color: white;
    box-shadow: 2px 3px 6px var(--highlight-2);
    margin: 10px 20px;

    &--add {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      padding: 8px 30px;
    }

    &:first-of-type {
      margin-left: 0;
    }
  }
}
</style>
