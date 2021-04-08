import {forEach} from 'lodash';
import {update} from 'lodash';
import {parseInt} from 'lodash';
import {cloneDeep} from 'lodash';
import {remove} from 'lodash';
import {concat} from 'lodash';


export const state = () => ({
  cart: [],
  pathAWS: '',
  cartProducts: [],
  lengthCart: '',
  totalSum: '',
  productsInCart:[],
  ruleForm: {},
  visibleSendOrder: true,
  apiCart: {
    baseURL: process.env.API_CART
  },
  apiMail: {
    baseURL: process.env.API_MAIL
  },
  pathAWSBucket: {
    path: process.env.IMAGE
  },
});

export const actions = {

  updateRuleFormName ({commit, state}, e) {
    const ruleForm = {
      name: e.target.value,
      phone: state.ruleForm.phone,
      email: state.ruleForm. email,
      address: state.ruleForm.address,
      comments: state.ruleForm.comments
    };
    commit('RULE_FORM', ruleForm)
  },
  updateRuleFormPhone ({commit, state}, e) {
    const ruleForm = {
      name: state.ruleForm.name,
      phone: e.target.value,
      email: state.ruleForm. email,
      address: state.ruleForm.address,
      comments: state.ruleForm.comments
    };
    commit('RULE_FORM', ruleForm)
  },
  updateRuleFormEmail ({commit, state}, e) {
    const ruleForm = {
      name: state.ruleForm.name,
      phone: state.ruleForm.phone,
      email: e.target.value,
      address: state.ruleForm.address,
      comments: state.ruleForm.comments
    };
    commit('RULE_FORM', ruleForm)
  },
  updateRuleFormAddress ({commit, state}, e) {
    const ruleForm = {
      name: state.ruleForm.name,
      phone: state.ruleForm.phone,
      email: state.ruleForm. email,
      address: e.target.value,
      comments: state.ruleForm.comments
    };
    commit('RULE_FORM', ruleForm)
  },
  updateRuleFormComments ({commit, state}, e) {
    const ruleForm = {
      name: state.ruleForm.name,
      phone: state.ruleForm.phone,
      email: state.ruleForm. email,
      address: state.ruleForm.address,
      comments: e.target.value
    };
    commit('RULE_FORM', ruleForm)
  },


  async sendToCart({commit, state}, payload) {

    const itemsCart = await JSON.parse(localStorage.getItem('inCart'));
    const newItemsCart = concat(itemsCart, payload)
    localStorage.setItem('inCart', JSON.stringify(newItemsCart));
    const productsInCart = JSON.parse(localStorage.getItem('inCart'));
    commit('PRODUCTS_IN_CART', productsInCart);

    const lengthCart = state.productsInCart.length - 1;
    commit('LENGTH_CART', lengthCart);

    const payloadCart = {
      product_id: payload,
      sessionUser: localStorage.getItem('data')
    };
    const response = await this.$axios.$post('store-cart', payloadCart, state.apiCart);

  },

  // async getLengthCart({commit, state}){
  // },

  async getCart({commit, state}) {

    const pathAWS = state.pathAWSBucket.path
    commit('PATH_AWS', pathAWS)

    const data = await this.$axios.$get('/get-cart/' + localStorage.getItem('data'), state.apiCart);
    commit('CART', data);

    const cart = cloneDeep(state.cart); //Клонируем объект из стэйта, что бы не было ошибки изменения стэйта вне мутации
    const total = cart.reduce((sum, product) => {
      let total = 0;
      total = product.price
      return sum + total * product.quantity;
    }, 0);
    const totalSum = (total - total * 0.05).toFixed(2);
    commit('TOTAL_SUM', totalSum);

    /**
     * TODO Отправил длину массива корзины, но работает только при отправке в корзину.
     * TODO Нет асинхронности
     */
  },

  // async getTotalSum({commit, state}){
  //
  //   const cart = cloneDeep(state.cart); //Клонируем объект из стэйта, что бы не было ошибки изменения стэйта вне мутации
  //   const totalSum = cart.reduce((sum, product) => {
  //     let total = 0;
  //     total = product.price
  //     return sum + total * product.quantity;
  //   }, 0);
  //   commit('TOTAL_SUM', totalSum);
  // },

  async setCurrentQuantityCart({commit, state}, e) {

    const cart = cloneDeep(state.cart); //Клонируем объект из стэйта, что бы не было ошибки изменения стэйта вне мутации

    const data = await forEach(cart, function (value) {
      const param1 = value.id; //id товара из стэйта
      const param2 = parseInt(e.target.title); //Преобразовал строку в число (id товара из цикла через инпут)

      if (param1 === param2) {
        update(value, 'quantity', function (n) {
          return e.target.value;
        });
      } //Если условие в цикле верно, то обновляем масссив по ключу на возвращаемое значение колбэка
    });
    commit('CART', data);

    const total = cart.reduce((sum, product) => {
      let total = 0;
      total = product.price
      return sum + total * product.quantity;
    }, 0);
    const totalSum = (total - total * 0.05).toFixed(2);
    commit('TOTAL_SUM', totalSum);
  },

  async deleteProductFromCart({commit, state}, id) {
    const cart = cloneDeep(state.cart); //Клонируем объект из стэйта, что бы не было ошибки изменения стэйта вне мутации

    await remove(cart, item => item.id === id); // Удаляем элемент массива если совпадает условие сопадения id цикла и payload id
    commit('CART', cart);

    const response = await this.$axios.$delete('delete-cart-one/' + id + '/' + localStorage.getItem('data'), state.apiCart);
    console.log(response);

    const total = cart.reduce((sum, product) => {
      let total = 0;
      total = product.price
      return sum + total * product.quantity;
    }, 0);
    const totalSum = (total - total * 0.05).toFixed(2);
    commit('TOTAL_SUM', totalSum); //TODO избыточность в трёх местах код
  },

  async sendOrder({ state, commit }){
    const visibleSendOrder = false;
    commit('VISIBLE_SEND_ORDER', visibleSendOrder);

    const data = {
      products: state.cart,
      totalSum: state.totalSum,
      information: state.ruleForm
    }
   await this.$axios.$post('/sendOrder', data, state.apiMail);
  }
};

export const mutations = {
  RULE_FORM: (state, ruleForm) => state.ruleForm = ruleForm,
  PATH_AWS: (state, pathAWS) => state.pathAWS = pathAWS,
  CART: (state, data) => state.cart = data,
  LENGTH_CART: (state, lengthCart) => state.lengthCart = lengthCart,
  TOTAL_SUM: (state, totalSum) => state.totalSum = totalSum,
  PRODUCTS_IN_CART: (state, productsInCart) => state.productsInCart = productsInCart,
  VISIBLE_SEND_ORDER: (state, visibleSendOrder) => state.visibleSendOrder = visibleSendOrder,
};

export const getters = {
  ruleForm: state => state.ruleForm,
  pathAWS: state => state.pathAWS,
  cart: state => state.cart,
  lengthCart: state => state.lengthCart,
  totalSum: state => state.totalSum,
  productsInCart: state => state.productsInCart,
  visibleSendOrder: state => state.visibleSendOrder,
};
