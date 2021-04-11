<template>

  <div class="">

    <div v-for="(rubric, idx) of allRubric" :key="allRubric.id">
      <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-blueGray-300 to-gray-50 shadow-lg mb-4">
        <div class="flex flex-col text-center w-full">
          <h1 class=" text-5xl font-medium title-font text-gray-900">{{ rubric.name }}</h1>
        </div>
      </div>


      <div class="mx-4 flex  ">
        <div class="flex w-1/5 max-w-sm flex-col flex-grow border-r border-gray-200 pt-8 pb-4 overflow-y-auto hidden md:block">
          <div class="mb-6 flex items-center flex-shrink-0 px-4">
            <!--          <svg class="text-gray-500 mr-3 h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"-->
            <!--               xmlns="http://www.w3.org/2000/svg">-->
            <!--            <path-->
            <!--              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"-->
            <!--              stroke-linecap="round" stroke-linejoin="round"-->
            <!--              stroke-width="2"/>-->
            <!--          </svg>-->
            <div class="text-gray-900 text-2xl">
              <strong>{{ rubric.name }}</strong>
            </div>
          </div>

          <hr>
          <div class="mt-5 flex-grow flex flex-col">
            <nav aria-label="Sidebar" class="flex-1 px-2 space-y-1">
              <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->

              <NuxtLink v-for="(category, idx) of rubric.category" :key="category.id"
                        :to="'products/' + category.slug"
                        class="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <!-- Heroicon name: outline/folder -->
<!--                <svg aria-hidden="true" class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"-->
<!--                     fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"-->
<!--                        stroke-linecap="round"-->
<!--                        stroke-linejoin="round"-->
<!--                        stroke-width="2"/>-->
<!--                </svg>-->

                {{ category.name }}

                <span
                  class="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full">
                  {{ category.product_count }}
                </span>
              </NuxtLink>
            </nav>
          </div>
        </div>

        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="relative pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
          <div v-for="(rubric, idx) of allRubric" :key="allRubric.id" class="relative max-w-7xl mx-auto">
            <!--          <div class="text-center">-->
            <!--            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">-->
            <!--              {{ rubric.name }}-->
            <!--            </h2>-->
            <!--            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">-->
            <!--              Наша компания предлагает стройматериалы по самым низким ценам-->
            <!--            </p>-->
            <!--          </div>-->
            <!--          <hr class="mt-8">-->
            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              <div v-for="(category, idx) of rubric.category" :key="category.id"
                   class=" flex flex-col rounded-lg shadow-lg overflow-hidden ">
                <!--            <div class="flex-shrink-0">-->
                <!--              <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=IrF17Golbw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">-->
                <!--            </div>-->
                <div class="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <NuxtLink
                      :to="'products/' + category.slug">
                      <p class="text-xl font-semibold text-gray-900">
                        {{ category.name }}
                      </p>
                      <p v-for="(text, idx) of category.text" :key="text.id"
                         class="mt-3 text-base text-gray-500">
                        {{ text.H2 }}
                      </p>
                      <p class="mt-2 text-base font-medium text-red-800 place-items-end">
                        Подробнее &rarr;
                        <!--                    <NuxtLink-->
                        <!--                      :to="'products/' + category.slug"-->
                        <!--                      @click.native="getProduct ([category.slug, allRubric])"-->
                        <!--                      class="hover:underline"-->
                        <!--                    >-->
                        <!--                      Подробнее &rarr;-->
                        <!--                    </NuxtLink>-->
                      </p>
                    </NuxtLink>
                  </div>
                  <!--              <div class="mt-6 flex items-center">-->
                  <!--                <div class="flex-shrink-0">-->
                  <!--                  <a href="#">-->
                  <!--                    <span class="sr-only">Roel Aufderehar</span>-->
                  <!--                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=IrF17Golbw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
                  <!--                  </a>-->
                  <!--                </div>-->
                  <!--                <div class="ml-3">-->
                  <!--                  <p class="text-sm font-medium text-gray-900">-->
                  <!--                    <a href="#" class="hover:underline">-->
                  <!--                      Roel Aufderehar-->
                  <!--                    </a>-->
                  <!--                  </p>-->
                  <!--                  <div class="flex space-x-1 text-sm text-gray-500">-->
                  <!--                    <time datetime="2020-03-16">-->
                  <!--                      Mar 16, 2020-->
                  <!--                    </time>-->
                  <!--                    <span aria-hidden="true">-->
                  <!--                  &middot;-->
                  <!--                </span>-->
                  <!--                    <span>-->
                  <!--                  6 min read-->
                  <!--                </span>-->
                  <!--                  </div>-->
                  <!--                </div>-->
                  <!--              </div>-->
                </div>
              </div>

            </div>
          </div>
        </div>

        <!--    {{ new Date().toLocaleString()}}-->
      </div>

    </div>
  </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  validate({params}) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({store, params}) {
    await store.dispatch('catalog/category/getRubric', {
      id: params.id
    })
  },


  computed: {
    ...mapGetters({
      allRubric: 'catalog/category/allRubric',
    }),
  },

  data() {
    return {
      title: 'Орбита-строй || Каталог магазина строительных и отделочных материалов',
      description: 'Большой каталог строительных и отделочныстроительныхх материалов компании Орбита-строй - интернет-магазине стройматериалов в Дзержинске',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  },

}
</script>
