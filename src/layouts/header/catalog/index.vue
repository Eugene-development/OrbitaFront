<template>
  <!-- Solutions menu -->
  <!--
    'Solutions' flyout menu, show/hide based on flyout menu state.

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
  <div v-if="visibleCatalog" class=" inset-x-0 transform shadow-lg absolute z-40">
    <div class="bg-gray-200">
      <div
        class="max-w-7xl mx-auto grid gap-y-6 px-2 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-6 lg:px-2 lg:py-12 xl:py-16">
        <div
          v-for="(head, idx) of allHead.head" :key="head.id"
          class="flex flex-col justify-between rounded-lg"
        >
          <div class="flex md:h-full lg:flex-col">
            <div class="flex-shrink-0">
              <span
                class="mr-4 mt-2 inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-900 text-white sm:h-12 sm:w-12">
                <!-- Heroicon name: cursor-click -->
                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
                </svg>
              </span>
            </div>
            <div class=" md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
              <div>
                <p class=" text-xl font-medium text-gray-900">
                  <strong>{{ head.name }}</strong>
                </p>
                <ul class="mt-4">
                  <li v-for="(rubric, idx) of head.rubric" :key="rubric.id" class="mt-3 hover:text-gray-700 ">
                    <NuxtLink active-class="active"
                              :to="'/shop/category/' + rubric.slug"
                              @click.native="close_visible">
                      <div class="flex text-gray-700">
                        <p class="text-sm ml-1 text-gray-500 hover:text-gray-700">{{ rubric.name }}</p>
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
<!--              <NuxtLink-->
<!--                :to="head.slug"-->
<!--                class="mt-2 text-sm font-medium text-indigo-800 lg:mt-4">Подробнее<span aria-hidden="true">&rarr;</span>-->
<!--              </NuxtLink>-->
<!--              TODO Вернуть для целей СЕО-->
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="bg-gray-100">
      <div class="max-w-full mx-auto  space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
        <div class="flow-root">
          <div class="-m-3 p-3 flex items-center rounded-md text-base  font-medium text-gray-900">
            <!-- Heroicon name: phone -->
            <svg class="flex-shrink-0 h-6 w-6 text-red-800" aria-hidden="true" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"/>
            </svg>
            <span class="ml-3"> <b class="text-red-800">8 (920) 055-55-61</b> </span>
          </div>
        </div>
        <div class="flow-root">
          <div class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900">
            <!-- Heroicon name: phone -->
            <svg class="flex-shrink-0 h-6 w-6 text-red-800" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
            </svg>
            <span class="ml-3"> <b class="text-red-800">orbita1407@yandex.ru</b> </span>
          </div>
        </div>
        <div class="flow-root">
          <div class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900">
            <!-- Heroicon name: phone -->
            <svg class="flex-shrink-0 h-6 w-6 text-red-800" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
            </svg>
            <span class="ml-3"> <b class="text-red-800">vk.com/orbita_stroy</b> </span>
          </div>
        </div>

      </div>
    </div>
  </div>
  </transition>


</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  methods: {
    ...mapActions({
      'close_visible': 'navbar/visible/close_visible',
    })
  },

  computed: {
    ...mapGetters({
      visibleCatalog: 'navbar/visible/visibleCatalog',
      allHead: 'navbar/head/allHead',
    }),
  },

}
</script>

<style scoped>

</style>
