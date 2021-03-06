<template>
  <div class="company">
    <div class="company__td company__td--logo">
      <img 
        :src="`http://luzerner.k-medialabs.com/tos_v3/cp_logo.cfm?id=${company.id}`"
        alt=""
        class="company__logo"
      />
    </div>
    <div class="company__td company__td--name">{{ company.name }}</div>
    <div class="company__td company__td--city">{{company.email || "N/A"}}</div>
    <div class="company__td company__td--zip">{{company.website || "N/A"}}</div>
  </div>
</template>

<script>
export default {
  name: "CompanyRow",

  props: {
    company: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.company {
  cursor: pointer;
  &__td {
    padding: 5px 10px;
  }
  &__logo {
    width: 80%;
  }
}
</style>
