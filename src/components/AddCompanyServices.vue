<template>
  <div class="services services--add">
    <div class="service service--add" @click="showAddModal = true">
      Add Service Type <span class="service__sign">+</span>
    </div>

    <div class="service" v-for="(service, index) in services" :key="index">
      {{ service }}
    </div>

    <div class="modal" v-if="showAddModal" @click.self="showAddModal = false">
      <form class="modal__container" @submit.prevent="addService()">
        <div class="modal__label">Service Type</div>
        <input type="text" class="modal__input" v-model="serviceType" />
        <div class="modal__buttons">
          <button
            type="submit"
            class="modal__button modal__button--submit"
            @click="addService()"
          >
            Add
          </button>
          <button
            type="button"
            class="modal__button modal__button--cancel"
            @click="showAddModal = false"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCompanyServices",
  data() {
    return {
      serviceType: "",
      services: [],
      showAddModal: false,
    };
  },

  methods: {
    addService() {
      if (this.serviceType) {
        this.services.push(this.serviceType);
        this.showAddModal = false;
        this.serviceType = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.service {
  &__sign {
    margin-left: 5px;
    font-size: var(--large);
  }
}

.modal {
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #fff, $alpha: 0.85);

  &__container {
    margin: 200px auto;
    width: 30%;
    background: #fff;
    padding: 20px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  &__label {
    color: var(--text-3);
    margin-bottom: 10px;
  }

  &__input {
    border: none;
    background: var(--text-3);
    height: 35px;
    color: white;
    width: 100%;
  }

  &__buttons {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }

  &__button {
    border: none;
    border-radius: 20px;
    padding: 5px 20px;
    color: white;

    &--submit {
      background: var(--bg-1);
      margin-right: 10px;
    }

    &--cancel {
      background: var(--text-3);
    }
  }
}
</style>
