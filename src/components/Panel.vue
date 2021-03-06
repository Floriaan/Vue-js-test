<template>
  <div class="panel" :class="{'panel--single': !showCompanyPreview}">
    <CompanyList :toggleCompanyPreview="toggleCompanyPreview"/>
    <CompanyPreview :toggleCompanyPreview="toggleCompanyPreview" v-if="showCompanyPreview"/>
  </div>
</template>

<script>
import CompanyList from "@/components/CompanyList";
import CompanyPreview from "@/components/CompanyPreview";
export default {
  name: "Panel",

  components: {
    CompanyList,
    CompanyPreview,
  },

  data() {
    return {
      showCompanyPreview: true,
    };
  },

  async mounted() {
    await this.$store.dispatch("fetchCompanies");
  },
  methods: {
    toggleCompanyPreview(state) {
      this.showCompanyPreview = state;
    },
  },
};
</script>

<style scoped lang="scss">
.panel {
  grid-area: panel;
  background: var(--bg-3);
  overflow: auto;
  padding: 20px 30px 20px 20px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-areas: "list preview";

  &--single{
    grid-template-columns: 100%;
    grid-template-areas: "list";
    padding: 20px 0 20px 20px;
  }
}
</style>
