import {forEach} from 'lodash';
import {update} from 'lodash';
import {parseInt} from 'lodash';
import {cloneDeep} from 'lodash';
import {remove} from 'lodash';
import {concat} from 'lodash';


export const state = () => ({
  ruleForm: {},
  alertDanger: {},
  placeholder: {},

  cart: [],
  pathAWS: '',
  cartProducts: [],
  lengthCart: '',
  totalSum: '',
  productsInCart:[],
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
    commit('PRODUCTS_IN_CART', productsInCart); //А нужна эта строка?

    const lengthCart = state.productsInCart.length - 1;
    commit('LENGTH_CART', lengthCart);

    const visibleSendOrder = true;
    commit('VISIBLE_SEND_ORDER', visibleSendOrder);

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

    //Клонируем объект из стэйта, что бы не было ошибки изменения стэйта вне мутации
    const cart = cloneDeep(state.cart);

    // Удаляем элемент массива если совпадает условие сопадения id цикла и payload id
    await remove(cart, item => item.id === id);
    commit('CART', cart);

    const response = await this.$axios.$delete('delete-cart-one/' + id + '/' + localStorage.getItem('data'), state.apiCart);
    // console.log(response);





    //Получаем колво элементов в корзине после удаления однного элемента
    commit('LENGTH_CART', cart.length); //TODO получить не из бд, а по колву элементов в LS

    const total = cart.reduce((sum, product) => {
      let total = 0;
      total = product.price
      return sum + total * product.quantity;
    }, 0);
    const totalSum = (total - total * 0.05).toFixed(2);
    commit('TOTAL_SUM', totalSum); //TODO избыточность в трёх местах код
  },

  async sendOrder({ state, commit }){


    if (!state.ruleForm.name) {
      const alertDanger = {
        name: true,
        phone: state.alertDanger.phone,
        address: state.alertDanger.address,
        comments: state.alertDanger.comments,
      };
      commit('ALERT_DANGER', alertDanger)
    }
    if (!state.ruleForm.phone) {
      const alertDanger = {
        name: state.alertDanger.name,
        phone: true,
        address: state.alertDanger.address,
        comments: state.alertDanger.comments,
      };
      commit('ALERT_DANGER', alertDanger)
    }
    if (!state.ruleForm.address) {
      const alertDanger = {
        name: state.alertDanger.name,
        phone: state.alertDanger.phone,
        address: true,
        comments: state.alertDanger.comments,
      };
      commit('ALERT_DANGER', alertDanger)
    }
    if (!state.ruleForm.comments) {
      const alertDanger = {
        name: state.alertDanger.name,
        phone: state.alertDanger.phone,
        address: state.alertDanger.address,
        comments: true,
      };
      commit('ALERT_DANGER', alertDanger)
    }
    // Валидация полей формы placeholder
    const placeholder = {
      name: 'Введите имя',
      phone: 'Введите телефон',
      address: 'Введите адрес доставки',
      comments: 'Введите комментарий'
    };
    commit('PLACEHOLDER', placeholder)


    // console.log(state.ruleForm.name);
    // console.log(state.ruleForm.phone);
    // console.log(state.ruleForm.address);
    // console.log(state.ruleForm.comments);



    if (state.ruleForm.name && state.ruleForm.phone && state.ruleForm.address && state.ruleForm.comments) {
      const visibleSendOrder = false;
      commit('VISIBLE_SEND_ORDER', visibleSendOrder);

      const data = {
        products: state.cart,
        totalSum: state.totalSum,
        information: state.ruleForm
      }

      await this.$axios.$post('/sendOrder', data, state.apiMail);


      //Удаляем все значения из бд по значению 'data' при отправке заказа на почту
      const response = await this.$axios.$delete('delete-cart-all/' + localStorage.getItem('data'), state.apiCart);

      //Удаляем все значения inCart из localStorage
      await localStorage.removeItem('inCart');


      //Обнуляем количество элементов корзины
      commit('LENGTH_CART', '');
      //Удаляем список товаров из представления корзины
      commit('CART', []);
      //Обнуляем общую сумму корзины
      commit('TOTAL_SUM', '');



    }

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
  ALERT_DANGER: (state, alertDanger) => state.alertDanger = alertDanger,
  PLACEHOLDER: (state, placeholder) => state.placeholder = placeholder
};

export const getters = {
  ruleForm: state => state.ruleForm,
  pathAWS: state => state.pathAWS,
  cart: state => state.cart,
  lengthCart: state => state.lengthCart,
  totalSum: state => state.totalSum,
  productsInCart: state => state.productsInCart,
  visibleSendOrder: state => state.visibleSendOrder,
  alertDanger: state => state.alertDanger,
  placeholder: state => state.placeholder
};
