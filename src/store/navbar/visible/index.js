export const state = () => ({
  visibleCatalog: false,
  visibleInformation: false,
  visibleMobileMenu: false,
});

export const actions = {

  change_visibleCatalog({ commit, state }) {
    const visibleCatalog = !state.visibleCatalog;
    const visibleInformation = false;
    commit('VISIBLE_CATALOG', visibleCatalog);
    commit('VISIBLE_INFORMATION', visibleInformation);
  },

  change_visibleInformation({ commit, state }) {
    const visibleInformation = !state.visibleInformation;
    const visibleCatalog = false;
    commit('VISIBLE_INFORMATION', visibleInformation);
    commit('VISIBLE_CATALOG', visibleCatalog);
  },

  change_visibleMobileMenu({ commit, state }) {
    const visibleMobileMenu = !state.visibleMobileMenu;
    commit('VISIBLE_MOBILE_MENU', visibleMobileMenu);
  },

  close_visible({ commit }) {
    const visibleCatalog = false;
    const visibleInformation = false;
    commit('VISIBLE_CATALOG', visibleCatalog);
    commit('VISIBLE_INFORMATION', visibleInformation);
  },
};

export const mutations = {
  VISIBLE_CATALOG: (state, visibleCatalog) => state.visibleCatalog = visibleCatalog,
  VISIBLE_INFORMATION: (state, visibleInformation) => state.visibleInformation = visibleInformation,
  VISIBLE_MOBILE_MENU: (state, visibleMobileMenu) => state.visibleMobileMenu = visibleMobileMenu,
};

export const getters = {
  visibleCatalog: state => state.visibleCatalog,
  visibleInformation: state => state.visibleInformation,
  visibleMobileMenu: state => state.visibleMobileMenu,
};
