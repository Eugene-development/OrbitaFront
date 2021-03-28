<template>
  <!-- More menu -->
  <!--
    'More' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 -translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 -translate-y-1"
  -->
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-class="opacity-0 translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-1"
  >

  <div v-if="visibleInformation" class="md:block inset-x-0 transform shadow-lg absolute z-40">
    <div class="absolute inset-0 flex">
      <div class="bg-white w-1/2"></div>
      <div class="bg-gray-50 w-1/2"></div>
    </div>
    <div  class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 ">
      <nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
        <div class="">
          <h3 class="text-base font-medium tracking-wide text-gray-400 uppercase">
            Клиентам
          </h3>
          <ul class="mt-5 space-y-6">
            <li class="flow-root">
              <NuxtLink
                @click.native="close_visible"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                to="/information/client/certificates">
                <!-- Heroicon name: information-circle -->
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-4">Сертификация</span>
              </NuxtLink>
            </li>

            <li class="flow-root">
              <NuxtLink
                @click.native="close_visible"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                to="/information/client/delivery">
                <!-- Heroicon name: office-building -->
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-4">Доставка</span>
              </NuxtLink>
            </li>

            <li class="flow-root">
              <NuxtLink
                @click.native="close_visible"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                to="/information/client/payment">
                <!-- Heroicon name: newspaper -->
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-4">Оплата</span>
              </NuxtLink>
            </li>

            <li class="flow-root">
              <NuxtLink
                @click.native="close_visible"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                to="/information/client/testimonials">
                <!-- Heroicon name: briefcase -->
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-4">Отзывы</span>
              </NuxtLink>
            </li>

          </ul>
        </div>
        <div>
          <h3 class="text-base font-medium tracking-wide text-gray-400 uppercase">
            Партнёрам
          </h3>
          <ul class="mt-5 space-y-6">
            <li class="flow-root">
              <NuxtLink
                @click.native="close_visible"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                to="/information/partner/yurlica">
                <!-- Heroicon name: user-group -->
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-4">Юридические лица</span>
              </NuxtLink>
            </li>

            <li class="flow-root">
              <NuxtLink
                @click.native="close_visible"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                to="/information/partner/brigades">
                <!-- Heroicon name: globe-alt -->
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-4">Строительные бригады</span>
              </NuxtLink>
            </li>

            <li class="flow-root">
              <NuxtLink
                @click.native="close_visible"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                to="/information/partner/ip">
                <!-- Heroicon name: bookmark-alt -->
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-4">Розничные продавцы</span>
              </NuxtLink>
            </li>

            <li class="flow-root">
              <NuxtLink
                @click.native="close_visible"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                to="/information/partner/fizlica">
                <!-- Heroicon name: desktop-computer -->
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-4">Физ. лица</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <div v-if="true" class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
        <div>
          <h3 class="text-sm font-medium tracking-wide text-gray-400 uppercase">
            Реклама
          </h3>
          <ul class="mt-6 space-y-6">
            <li class="flow-root">
              <a class="-m-3 p-3 flex rounded-lg hover:bg-gray-100" href="#">
                <div class="hidden sm:block flex-shrink-0">
                  <img alt=""
                       class="w-32 h-20 object-cover rounded-md"
                       src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80">
                </div>
                <div class="w-0 flex-1 sm:ml-8">
                  <h4 class="text-base font-medium text-gray-900 truncate">
                    ООО "СтройРемонтНН"
                  </h4>
                  <p class="mt-1 text-sm text-gray-400">
                    Быстрый и качественный ремонт помещений в Нижнем Новгороде и Дзержинске.
                  </p>
                </div>
              </a>
            </li>
            <li class="flow-root">
              <a class="-m-3 p-3 flex rounded-lg hover:bg-gray-100" href="#">
                <div class="hidden sm:block flex-shrink-0">
                  <img alt=""
                       class="w-32 h-20 object-cover rounded-md"
                       src="https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80">
                </div>
                <div class="w-0 flex-1 sm:ml-8">
                  <h4 class="text-base font-medium text-gray-900 truncate">
                    ИП Кудрявцев Ю.А.
                  </h4>
                  <p class="mt-1 text-sm text-gray-400">
                    Строительство каркасных бань и гаражей. Выезд на консультатцию бесплатно в удобное время.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="mt-6 text-sm font-medium">
          <a class="text-red-800 hover:text-red-600" href="#"> Посмотреть всех <span
            aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </div>
  </div>
  </transition>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      visibleInformation: 'navbar/visible/visibleInformation',
    }),
  },
  methods: {
    ...mapActions({
      'close_visible': 'navbar/visible/close_visible'
    })
  },


}
</script>

<style scoped>

</style>
