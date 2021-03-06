import Vue from "vue";
import Vuex from "vuex";
import api from "../config/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    popup: {
      message: "",
      error: false,
      display: false,
    },
    loggedin: false,
    companies: [],
    selectedCompany: {},
    searchKeywords: "",
    loginLoading: false,
    companiesLoading: false,
  },

  getters: {
    token: (state) => state.token,
    popup: (state) => state.popup,
    loggedin: (state) => state.loggedin,
    companies: (state) => state.companies,
    selectedCompany: (state) => state.selectedCompany,
    searchKeywords: (state) => state.searchKeywords,
    loginLoading: (state) => state.loginLoading,
    companiesLoading: (state) => state.companiesLoading,
  },

  mutations: {
    setToken: (state, data) => {
      state.token = data;
    },

    setPopup: (state, data) => {
      state.popup = data;
    },

    setLoggedin: (state, data) => {
      state.loggedin = data;
    },

    setCompanies: (state, data) => {
      state.companies = data;
    },

    setSelectedCompany: (state, data) => {
      state.selectedCompany = data;
    },

    setSearchKeywords: (state, data) => {
      state.searchKeywords = data;
    },

    setLoginLoading: (state, data) => {
      state.loginLoading = data;
    },

    setCompaniesLoading: (state, data) => {
      state.companiesLoading = data;
    },
  },

  actions: {
    login: async (context, data) => {
      context.commit("setLoginLoading", true);
      try {
        const response = await api({ requiresAuth: false }).post(
          "/login",
          data
        );
        context.commit("setLoginLoading", false);
        const { token, expires_at, error, message = null } = response.data.meta;
        if (!error) {
          document.cookie = `token=${token}; expires=${new Date(
            expires_at
          ).toUTCString()}`;
          context.commit("setToken", token);
          context.commit("setLoggedin", true);
        } else {
          context.commit("setPopup", {
            message,
            error,
            display: true,
          });
          context.commit("setLoggedin", false);
        }
      } catch (err) {
        console.error(err);
      }
    },

    fetchCompanies: async (context) => {
      context.commit("setCompaniesLoading", true);
      try {
        const response = await api({ requiresAuth: true }).get("/c/companies");
        context.commit("setCompaniesLoading", false);
        const {
          companies,
          meta: { error },
        } = response.data;
        if (!error) {
          context.commit("setCompanies", companies);
          context.commit("setSelectedCompany", companies[0]);
        }
      } catch (err) {
        console.error(err);
      }
    },

    addCompany: async (context, company) => {
      try {
        const response = await api({ requiresAuth: true }).post(
          "/c/companies",
          company
        );
        const {
          meta: { error },
        } = response.data;
        if (!error) {
          context.commit("setPopup", {
            message: "Company Added Successfully",
            error: false,
            display: true,
          });
        } else {
          context.commit("setPopup", {
            message: "Something went wrong",
            error: true,
            display: true,
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
