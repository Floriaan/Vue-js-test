<template>
  <div class="detail">
    <button class="detail__close" @click="toggleCompanyPreview(false)">X</button>
    <div class="detail__logo">
      <img v-if="selectedCompany.id"
        :src="`http://luzerner.k-medialabs.com/tos_v3/cp_logo.cfm?id=${selectedCompany.id}`"
        alt=""
      />
    </div>
    <div class="detail__details-wrapper">
      <div class="detail__name">{{ selectedCompany.name || "N/A" }}</div>
      <div class="detail__details">
        <div class="detail__row">
          <div class="detail__detail">
            <div class="detail__label">Phone:</div>
            <div class="detail__info">{{ selectedCompany.phone || "N/A" }}</div>
          </div>
          <div class="detail__detail">
            <div class="detail__label">E-Mail:</div>
            <div class="detail__info">{{ selectedCompany.email || "N/A" }}</div>
          </div>
          <div class="detail__detail">
            <div class="detail__label">Web:</div>
            <div class="detail__info">
              {{ selectedCompany.website || "N/A" }}
            </div>
          </div>
        </div>
        <div class="detail__row">
          <div class="detail__detail">
            <div class="detail__label detail__label--right">Location:</div>
            <div class="detail__info">
              {{ selectedCompany.location || "N/A" }}
            </div>
          </div>
          <div class="detail__detail">
            <div class="detail__label detail__label--right">Zip Code:</div>
            <div class="detail__info">{{ selectedCompany.zip || "N/A" }}</div>
          </div>
          <div class="detail__detail">
            <div class="detail__label detail__label--right">City:</div>
            <div class="detail__info">{{ selectedCompany.city || "N/A" }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CompanyDetails",

  props: {
    toggleCompanyPreview: {
      required: true,
      type: Function,
    },
  },

  computed: {
    ...mapGetters(["selectedCompany"]),
  },
};
</script>

<style scoped lang="scss"></style>
