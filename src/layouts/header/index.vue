<template>
  <div>
    <div class="bg-gray-900 ">
      <div class="py-4 px-4 sm:py-6 sm:px-6 lg:px-8 lg:flex justify-between flex items-center ">
        <div class="max-w-xs my-4 hidden lg:block">
          <NuxtLink to="/">
            <span class="sr-only">База стройматериалов Орбита-Строй</span>
            <img alt="logo" class="h-32" src="https://орбита-строй.рф/storage/img/logo.png">
          </NuxtLink>

<!--          <span-->
<!--            class="mt-2 w-full inline-flex items-center justify-center py-0.5 rounded text-xs font-medium bg-red-900 text-blueGray-50">-->

<!--            <svg class="mr-1.5 h-2 w-2 text-blueGray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />-->
<!--            </svg>-->
<!--          <a class="text-blueGray-50"-->
<!--             href="https://vk.com/orbita_stroy">-->
<!--            vk.com/orbita_stroy-->
<!--          </a>-->
<!--            </span>-->

        </div>
        <div class="max-w-5xl mr-8 justify-items-center object-center items-center  ">
          <p class="font-extrasolar text-red-800  md:text-6xl sm:text-5xl border-b-1 flex">
            <svg class="mt-2 mr-2 w-12 h-12 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"></path>
            </svg>
            <strong>8 (920) 055-55-61</strong>
          </p>
          <p class="mt-5 pt-2 text-xl md:text-center text-gray-100 animate-pulse ">При заказе через сайт для вас скидка 5%</p>
        </div>

        <div class="max-w-xs object-right justify-end">

          <NuxtLink
            @click.native="cart()"
            to="/shop/cart">
          <div>
            <svg class="w-24 h-24 text-red-800 text-right " fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"></path>
            </svg>
            <!-- This example requires Tailwind CSS v2.0+ -->
            <span class="w-full inline-flex items-center justify-center p-1 rounded text-xs font-medium bg-red-800 text-gray-50">
                          Корзина

              <svg class="mx-2 animate-ping mr-1.5 h-2 w-2 text-blueGray-50" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3"/>
              </svg>
              {{lengthCart}}
            </span>
          </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="relative bg-gray-900 border-t-2 border-gray-800 h-20">
      <div class="relative z-10 shadow">
        <div
          class="mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div class="-mr-2 -my-2 md:hidden">
            <button
              @click="change_visibleMobileMenu"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:text-gray-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-800"
              type="button">
              <span class="sr-only">Открыть меню</span>
              <!-- Heroicon name: menu -->
              <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
            </button>
          </div>
          <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <nav class="ml-3 flex space-x-10">
              <NuxtLink
                class="text-base px-1 font-medium rounded-md text-gray-100 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                to="/"
                @click.native="close_visible"
              >
                Главная
              </NuxtLink>

              <div class="relative">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-100" -->
                <button
                  class="group px-1 rounded-md text-gray-100 inline-flex items-center text-base font-medium hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                  type="button"
                  @click="change_visibleCatalog">
                  <span>Каталог</span>
                  <!--
                    Heroicon name: chevron-down

                    Item active: "text-gray-600", Item inactive: "text-gray-100"
                  -->
                  <svg aria-hidden="true" class="ml-2 h-5 w-5 text-gray-100 group-hover:text-gray-100"
                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          fill-rule="evenodd"/>
                  </svg>
                </button>
              </div>
              <NuxtLink
                class="text-base px-1 font-medium rounded-md text-gray-100 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                to="/actions"
                @click.native="close_visible"
              >
                Акции
              </NuxtLink>
<!--              <NuxtLink-->
<!--                class="text-base px-1 font-medium rounded-md text-gray-100 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"-->
<!--                to="/blog"-->
<!--                @click.native="close_visible"-->
<!--              >-->
<!--                Блог-->
<!--              </NuxtLink>-->
              <NuxtLink
                class="text-base px-1 font-medium rounded-md text-gray-100 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                to="/about"
                @click.native="close_visible"
              >
                Компания
              </NuxtLink>
              <div class="relative">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-100" -->
                <button
                  class="group px-1 rounded-md text-gray-100 inline-flex items-center text-base font-medium hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                  type="button"
                  @click="change_visibleInformation">
                  <span>Информация</span>
                  <!--
                    Heroicon name: chevron-down

                    Item active: "text-gray-600", Item inactive: "text-gray-100"
                  -->
                  <svg aria-hidden="true" class="ml-2 h-5 w-5 text-gray-100 group-hover:text-gray-100"
                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          fill-rule="evenodd"/>
                  </svg>
                </button>
              </div>
              <NuxtLink
                class="text-base px-1 font-medium rounded-md text-gray-100 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                to="/contact"
                @click.native="close_visible"
              >
                Контакты
              </NuxtLink>
              <a
                class="text-base px-1 font-medium rounded-md text-gray-100 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
                href="https://vk.com/orbita_stroy"
                target="_blank">
                Наш VK
              </a>
            </nav>


<!--            <div class="flex items-center md:ml-12">-->
<!--              <a class="text-base font-medium text-gray-100 hover:text-gray-100"-->
<!--                 href="http://localhost:3700">-->
<!--                Вход-->
<!--              </a>-->
<!--              <a-->
<!--                class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-900 hover:bg-red-700"-->
<!--                href="http://localhost:3700/admin/registration">-->
<!--                Регистрация-->
<!--              </a>-->
<!--            </div>-->
<!--            TODO Вернуть регистрацию-->
          </div>
        </div>
      </div>

      <Catalog/>
      <Information/>
      <MobileMenu/>

    </div>

    <!--    <div v-if="$nuxt.$route.name !== 'index' " class="p-10 mx-auto sm:px-6 lg:px-8 "-->
    <!--         style="background-image: url(https://xn&#45;&#45;&#45;&#45;7sbc2ahzelejid.xn&#45;&#45;p1ai/storage/img/banner/header.jpg)">-->
<!--    <div v-show="$nuxt.$route.name !== 'index'"-->
<!--         class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-blueGray-300 to-gray-50 shadow-lg mb-4">-->
<!--      <div class="flex flex-col text-center w-full">-->
<!--        <h1 class=" text-5xl font-medium title-font text-gray-900">{{ $nuxt.$route.name }}</h1>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import Catalog from './catalog'
import Information from './information'
import MobileMenu from './mobileMenu'
import { mapActions , mapGetters} from "vuex";

export default {
  components: {
    Catalog,
    Information,
    MobileMenu
  },

  computed: {
    ...mapGetters({
      lengthCart: 'catalog/cart/lengthCart',
    }),
  },

  methods: {
    ...mapActions({
      'cart': 'catalog/cart/getCart',
      'change_visibleCatalog': 'navbar/visible/change_visibleCatalog',
      'change_visibleInformation': 'navbar/visible/change_visibleInformation',
      'change_visibleMobileMenu': 'navbar/visible/change_visibleMobileMenu',
      'close_visible': 'navbar/visible/close_visible',
      // 'getTotalSum': 'catalog/cart/getTotalSum'
      // 'getLengthCart': 'catalog/cart/getLengthCart',
      // 'setCurrentQuantityCart': 'catalog/cart/setCurrentQuantityCart',

    })
  },


  // mounted() {
  //   this.getLengthCart();
  // },

}
</script>
