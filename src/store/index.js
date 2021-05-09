export const state = () => ({
  token: '12300000000000003'
});

export const mutations = {
};

export const actions = {
  async nuxtServerInit({dispatch}){
    await dispatch('navbar/head/fetch');
    await dispatch('user/createUUID');
  }
};

export const getters = {
};

