<template>
  <div class="list">
    <div class="list__title">Contact</div>

    <div class="list__list">
      <div class="list__header">
        <div class="list__th list__th--logo"></div>
        <div class="list__th list__th--name">Company Name</div>
        <div class="list__th list__th--city">E-Mail</div>
        <div class="list__th list__th--zip">Web</div>
      </div>
      <div class="list__body">
        <Loading v-if="companiesLoading" />
        <template v-else>
        <div class="list__message" v-if="!filteredCompanies.length">
          No companies found
        </div>
          <CompanyRow
            v-for="(company, index) in filteredCompanies"
            :key="index"
            :company="company"
            @click.native="selectCompany(company)"
            :class="{ 'company--selected': company.id === selectedCompany.id }"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyRow from "@/components/CompanyRow";
import Loading from "@/components/Loading";
import { mapGetters } from "vuex";
export default {
  name: "CompanyList",

  props: {
    toggleCompanyPreview: {
      required: true,
      type: Function,
    },
  },

  components: {
    CompanyRow,
    Loading,
  },

  computed: {
    ...mapGetters([
      "companies",
      "selectedCompany",
      "searchKeywords",
      "companiesLoading",
    ]),

    filteredCompanies() {
      return this.companies.filter((company) => {
        let keywords = this.searchKeywords.toLowerCase().trim();
        let name, email, website;
        name = company.name || "";
        email = company.email || "";
        website = company.website || "";

        if (
          name
            .toLowerCase()
            .trim()
            .includes(keywords) ||
          email
            .toLowerCase()
            .trim()
            .includes(keywords) ||
          website
            .toLowerCase()
            .trim()
            .includes(keywords)
        ) {
          return company;
        }
      });
    },
  },

  methods: {
    selectCompany(company) {
      this.$store.commit("setSelectedCompany", company);
      this.toggleCompanyPreview(true);
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  grid-area: list;
  padding-right: 15px;

  &__title {
    font-size: var(--larger);
    padding-left: 20px;
    margin-bottom: 20px;
  }

  &__list {
    background: white;
    border-radius: 10px;
    height: calc(100% - 36px - 20px);
  }

  &__header {
    border-bottom: 2px solid var(--bg-3);
  }

  &__body {
    position: relative;
    height: calc(100% - 58px);
  }

  &__header,
  /deep/ .company {
    display: flex;
    align-items: center;
  }

  &__th {
    padding: 20px 10px;
  }

  &__th,
  /deep/ .company__td {
    &--logo {
      width: 80px;
    }

    &--name {
      flex: 2;
    }

    &--city {
      flex: 1;
    }

    &--zip {
      flex: 1;
    }

    &--name,
    &--city,
    &--zip {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .company--selected {
    background: var(--highlight-1);
  }

  &__title,
  &__th,
  &__message {
    color: var(--text-3);
  }

  &__message {
    margin-top: 50px;
    text-align: center;
    font-size: var(--large);
  }
}
</style>
