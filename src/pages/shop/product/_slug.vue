<template>
  <div>
    <div v-for="(item, idx) of product" :key="item.id">


      <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-white to-yellow-50 shadow-lg mb-4">
        <div class="flex flex-col text-center w-full">
          <h1 class=" text-5xl font-medium title-font text-gray-900">{{ item.name }}</h1>
        </div>
      </div>

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">НАИМЕНОВАНИЕ</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{ item.name }}</h1>
              <div class="flex mb-4">
                <button
                  @click="changeVisibleDescription"
                  class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                  :class="{ 'text-indigo-900 border-indigo-900': visibleDescription }"
                >Описание</button>
                <button
                  @click="changeVisiblePayment"
                  class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                  :class="{ 'text-indigo-900 border-indigo-900': visiblePayment }"
                >Оплата</button>
                <button
                  @click="changeVisibleDelivery"
                  class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                  :class="{ 'text-indigo-900 border-indigo-900': visibleDelivery }"
                >Доставка</button>
              </div>


              <p v-show="visibleDescription" class="leading-relaxed mb-4" v-html="item.description"></p>
              <p v-show="visiblePayment" class="leading-relaxed mb-4">
                Предлагаем следующие варианты оплаты: <br>
                - наличными курьеру при получении товара;<br>
                - картой через терминал, либо наличными в нашем офисе;<br>
                - безналичный расчет (через банк для юридических лиц). Мы отправим счёт на оплату с нашими реквизитами на указанный вами электронный адрес. Доставка (самовывоз) товара осуществляется после получения денежных средств на наш расчётный счёт.</p>
              <p v-show="visibleDelivery" class="leading-relaxed mb-4" >Для удобства мы предлагаем доставку товара на адрес объекта.
                <br>Наша компания осуществляет доставку строительных и отделочных материалов как по Дзержинску, так и по Нижнему Новгороду и области. Стоимость доставки по Дзержинску составляет 350 рублей до 1500 кг, в Нижний Новгород от 1200 рублей. Более подробную информацию о стоимости за пределы города вы можете уточнить у менеджеров.</p>


              <NuxtLink v-for="(category, idx) of category" :key="category.id"
                        :to="'/shop/products/' + category.slug">
                <div
                  class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">Категория</span>
                  <span class="ml-auto text-gray-900">
                  {{ category.name }}
                </span>
                </div>
              </NuxtLink>

              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Единица измерения</span>
                <span class="ml-auto text-gray-900">{{ item.unit }}</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Наличие на складе</span>
                <span class="ml-auto text-gray-900">да</span>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-4xl text-gray-900">{{ item.price }} руб/{{ item.unit }}.</span>
                <button
                  v-if="!productsInCart.some(arrVal => item.id === arrVal)"
                  @click.prevent.once="sendToCart (item.id)"
                  class="flex ml-auto text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded"
                  wfd-id="157">В корзину
                </button>
                <button v-else
                        class="flex ml-auto text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded"
                        wfd-id="157">В корзине
                </button>
                <button
                  class="rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-red-900"
                  wfd-id="156">
                  <svg class="w-5 h-5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                       stroke-width="2" viewBox="0 0 24 24">
                    <path
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <img
              v-for="(image, idx) of item.image" :key="image.id"
              alt="ecommerce" class="lg:w-1/2 max-w-xl object-contain object-top rounded"
              :src="`${pathAWS}${image.filename}`">

          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  async asyncData({store, params}) {
    await store.dispatch('catalog/products/getProduct', {
      slug: params.slug,
    })
  },

  methods: {
    ...mapActions({
      'changeVisibleDescription': 'catalog/products/changeVisibleDescription',
      'changeVisiblePayment': 'catalog/products/changeVisiblePayment',
      'changeVisibleDelivery': 'catalog/products/changeVisibleDelivery',
      'sendToCart':'catalog/cart/sendToCart'
    })
  },

  computed: {
    ...mapGetters({
      product: 'catalog/products/product',
      category: 'catalog/products/category',
      pathAWS: 'catalog/products/pathAWS',
      visibleDescription: 'catalog/products/visibleDescription',
      visiblePayment: 'catalog/products/visiblePayment',
      visibleDelivery: 'catalog/products/visibleDelivery',
      productsInCart: 'catalog/cart/productsInCart',
    }),
  },
}
</script>
