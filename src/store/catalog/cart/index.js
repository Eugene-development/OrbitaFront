import {forEach} from 'lodash';
import {find} from 'lodash';
import {findKey} from 'lodash';
import {update} from 'lodash';
import {parseInt} from 'lodash';
import {cloneDeep} from 'lodash';
import {remove} from 'lodash';
import {concat} from 'lodash';
import {some} from 'lodash';


export const state = () => ({
  cart: [],
  pathAWS: '',
  visibleCart: true,
  cartProducts: [],
  lengthCart: '',
  totalSum: '',
  productsInCart:[],


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


  //Возвращает ноль(((
  // getLengthCart({commit, state}){

  // const data = forEach(state.cart, function (value) {
  // });

// console.log(state.cart.length)

  // commit('LENGTH_CART', data.length);
  // },


  async sendToCart({commit, state}, payload) {

    const itemsCart = await JSON.parse(localStorage.getItem('inCart'));
    const newItemsCart = concat(itemsCart, payload)
    localStorage.setItem('inCart', JSON.stringify(newItemsCart));
    const productsInCart = JSON.parse(localStorage.getItem('inCart'));
    commit('PRODUCTS_IN_CART', productsInCart);



    const payloadCart = {
      product_id: payload,
      sessionUser: localStorage.getItem('data')
    };
    const response = await this.$axios.$post('store-cart', payloadCart, state.apiCart);





    const checkInCart = some(c, [252]);
    console.log(checkInCart);

    //Изменить булево значение добавленное ранее на false
    // const visibleCart = false;

  },

  async getCart({commit, state}) {


    const pathAWS = state.pathAWSBucket.path
    commit('PATH_AWS', pathAWS)

    const data = await this.$axios.$get('/get-cart/' + localStorage.getItem('data'), state.apiCart);
    commit('CART', data);

    const lengthCart = data.length
    commit('LENGTH_CART', lengthCart);

    const cart = cloneDeep(state.cart); //Клонируем объект из стэйта, что бы не было ошибки изменения стэйта вне мутации
    const totalSum = cart.reduce((sum, product) => {
      let total = 0;
      total = product.price
      return sum + total * product.quantity;
    }, 0);
    commit('TOTAL_SUM', totalSum);



    /**
     * TODO Отправил длину массива корзины, но работает только при нажатии на корзину.
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

    const totalSum = cart.reduce((sum, product) => {
      let total = 0;
      total = product.price
      return sum + total * product.quantity;
    }, 0);
    commit('TOTAL_SUM', totalSum);
  },

  async deleteProductFromCart({commit, state}, id) {
    // console.log(id);
    // console.log(state.cart);

    const cart = cloneDeep(state.cart); //Клонируем объект из стэйта, что бы не было ошибки изменения стэйта вне мутации


    await remove(cart, item => item.id === id); // Удаляем элемент массива если совпадает условие сопадения id цикла и payload id
    // console.log(cart);
    commit('CART', cart);

    const response = await this.$axios.$delete('delete-cart-one/' + id + '/' + localStorage.getItem('data'), state.apiCart);
    console.log(response);

    const totalSum = cart.reduce((sum, product) => {
      let total = 0;
      total = product.price
      return sum + total * product.quantity;
    }, 0);
    commit('TOTAL_SUM', totalSum); //TODO избыточност в трёх местах код

  },

  async sendOrder({ state }){

   await this.$axios.$post('/sendOrder', state.cart, state.apiMail);

  }
};

export const mutations = {
  PATH_AWS: (state, pathAWS) => state.pathAWS = pathAWS,
  CART: (state, data) => state.cart = data,
  LENGTH_CART: (state, lengthCart) => state.lengthCart = lengthCart,
  TOTAL_SUM: (state, totalSum) => state.totalSum = totalSum,
  PRODUCTS_IN_CART: (state, productsInCart) => state.productsInCart = productsInCart,
};

export const getters = {
  pathAWS: state => state.pathAWS,
  cart: state => state.cart,
  lengthCart: state => state.lengthCart,
  totalSum: state => state.totalSum,
  productsInCart: state => state.productsInCart,
};
