<template>
  <div class="bg-gray-50">
    <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-blueGray-300 to-gray-50 shadow-lg mb-4">
      <div class="flex flex-col text-center w-full">
        <h1 class=" text-5xl font-medium title-font text-gray-900">{{ products.name }}</h1>
      </div>
    </div>

    <div class="m-8">
    <!--    <p>{{$route.params.slug}}</p>-->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="(product, idx) of products.product" :key="product.id" class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="flex-1 flex flex-col p-8">
          <img
            v-for="(image, idx) of product.image" :key="image.id"
            class="w-32 h-32 object-contain flex-shrink-0 mx-auto"
            :src="`${pathAWS}${image.filename}`"
            alt="product">
          <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ product.name }}</h3>
          <dl class="mt-1 flex-grow flex flex-col justify-between">
            <dt class="sr-only">Title</dt>
            <hr class="mt-4">
<!--            <dd class="text-gray-500 text-sm">Paradigm Representative</dd>-->
            <dt class="sr-only">Role</dt>
            <dd class="mt-3">
              <span class="px-2 py-1 text-green-800 text-base font-medium bg-green-100 rounded-full">{{ product.price }} р/{{ product.unit}}</span>
            </dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <NuxtLink
                :to="'/shop/product/'+ product.id"
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                <!-- Heroicon name: solid/mail -->
                <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span class="ml-3">
                     Подробнее
                </span>
              </NuxtLink>
            </div>
            <div class="-ml-px w-0 flex-1 flex">
              <button
                @click.prevent.once="sendToCart (product.id)"
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                <!-- Heroicon name: solid/phone -->
                <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span class="ml-3">В корзину</span>
              </button>
<!--              <button-->
<!--                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-50 font-medium border border-transparent rounded-br-lg hover:text-gray-100 bg-red-800">-->
<!--                &lt;!&ndash; Heroicon name: solid/phone &ndash;&gt;-->
<!--                <svg class="w-5 h-5 text-gray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />-->
<!--                </svg>-->
<!--                <span class="ml-3">В корзине</span>-->
<!--              </button>-->
            </div>
          </div>
        </div>
      </li>

    </ul>

  </div>
  </div>

</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {


  async asyncData({store, params}) {
    await store.dispatch('catalog/category/getProducts', {
      slug: params.slug
    })
  },

  methods:{
    ...mapActions({
      'sendToCart':'catalog/cart/sendToCart'
      }
    )
  },

  computed: {
    ...mapGetters({
      products: 'catalog/category/products',
      pathAWS: 'catalog/category/pathAWS',
      // visibleCart: 'catalog/cart/visibleCart',
    }),
  },






  // async asyncData({store, params}, allRubric) {
  //   await store.dispatch('catalog/category/fetch', {
  //     id: 1
  //   });
  //
  //   await store.dispatch('catalog/category/getProduct', {
  //     allRubric: allRubric,
  //     slug: params.slug
  //   })
  // },
  //
  //
  // methods: {
  //   ...mapActions({
  //     'getBread': 'catalog/category/fetch2',
  //   })
  // },
  // mounted() {
  //   this.getBread(1);
  // },







}
</script>



