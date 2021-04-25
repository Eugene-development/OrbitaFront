<template>
  <div class="bg-gray-50">
    <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-blueGray-300 to-gray-50 shadow-lg mb-4">
      <div class="flex flex-col text-center w-full">
        <h1 class=" text-5xl font-medium title-font text-gray-900">Корзина</h1>
      </div>
    </div>


    <!-- This example requires Tailwind CSS v2.0+ -->
    <div v-if="cartList.length > 0" class="m-8 flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                  №
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                  Наименование
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                  Количество
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                  Цена
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                  Итого
                </th>
                <th class="relative px-6 py-3" scope="col">
                  <span class="sr-only">Удалить</span>
                </th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, idx) of cartList" :key="item.id">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ idx + 1 }}
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <!--                    <div class="flex-shrink-0 h-10 w-10">-->
                    <!--                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">-->
                    <!--                    </div>-->
                    <div class="">
                      <div class="text-sm font-medium text-gray-900">
                        {{ item.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        <!--                        jane.cooper@example.com-->
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">

                  <div>
                    <div class="mt-1">
                      <input
                        :title="`${item.id}`"
                        :value="`${item.quantity}`"
                        class="shadow-sm focus:ring-red-800 focus:border-red-800 block w-full sm:text-sm border-gray-300 rounded-md"
                        name="count"
                        placeholder="Введите количество"
                        type="text"
                        @input="setCurrentQuantityCart">
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ item.price }} руб/{{ item.unit }}
                </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ (item.price * item.quantity).toFixed(2) }} руб.
                </td>


                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    type="button"
                    @click.prevent.once="deleteProductFromCart (item.id)">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="m-8">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="rounded-md bg-blue-50 p-4">
        <div class="flex ">
          <div class="flex-shrink-0">
            <!-- Heroicon name: solid/information-circle -->
            <svg aria-hidden="true" class="h-5 w-5 text-blue-400" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    fill-rule="evenodd"/>
            </svg>
          </div>
          <div class="ml-3 flex-1 md:flex md:justify-between">
            <p class="text-sm  text-blue-700">
              Корзина пуста
            </p>
            <!--            <p class="mt-3 text-sm md:mt-0 md:ml-6">-->
            <!--              <a href="#" class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">Назад <span aria-hidden="true">&rarr;</span></a>-->
            <!--            </p>-->
          </div>
        </div>
      </div>
    </div>

    <div class="m-8 text-right">
      <span v-if="totalSum > 0" class="inline-flex  px-3.5 py-0.5 rounded-md text-xl font-medium bg-green-100 text-green-800">
       ИТОГО (с учётом скидки 5%): {{ totalSum }} руб.
<!--        TODO по дефолту ноль стоит в корзине-->
      </span>
      <span v-else class="inline-flex  px-3.5 py-0.5 rounded-md text-xl font-medium bg-green-100 text-green-800">
       ИТОГО: 0 руб.
      </span>

    </div>
    <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
    <div class="m-8 space-y-6">

      <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Дополнительная информация</h3>
            <p class="mt-1 text-sm text-gray-500">
              Наш менеджер свяжется с вами после получения формы.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 ">
                  <label class="block text-sm font-medium text-gray-700" for="first_name">Ваше имя</label>
                  <input
                    :class="{'bg-red-100': alertDanger.name}"
                    :placeholder="[placeholder.name]"
                    :value="ruleForm.name"
                    @input="updateRuleFormName"
                    id="first_name"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-red-800 focus:border-red-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" name="first_name"
                    type="text">
                </div>

                <div class="col-span-6">
                  <label class="block text-sm font-medium text-gray-700" for="phone">Телефон</label>
                  <input
                    :class="{'bg-red-100': alertDanger.phone}"
                    :placeholder="[placeholder.phone]"
                    :value="ruleForm.phone"
                    @input="updateRuleFormPhone"
                    id="phone"
                    autocomplete="phone"
                    class="mt-1 focus:ring-red-800 focus:border-red-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    name="phone"
                    type="text">
                </div>

<!--                <div class="col-span-6">-->
<!--                  <label class="block text-sm font-medium text-gray-700" for="email">Почта (необязательно)</label>-->
<!--                  <input-->
<!--                    :value="ruleForm.email"-->
<!--                    @input="updateRuleFormEmail"-->
<!--                    id="email"-->
<!--                    autocomplete="email"-->
<!--                    class="mt-1 focus:ring-red-800 focus:border-red-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"-->
<!--                    name="email"-->
<!--                    type="email">-->
<!--                </div>-->

                <div class="col-span-6">
                  <label class="block text-sm font-medium text-gray-700" for="street_address">Адрес доставки</label>
                  <input
                    :class="{'bg-red-100': alertDanger.address}"
                    :placeholder="[placeholder.address]"
                    :value="ruleForm.address"
                    @input="updateRuleFormAddress"
                    id="street_address"
                    autocomplete="street-address"
                    class="mt-1 focus:ring-red-800 focus:border-red-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    name="street_address"
                    type="text">
                </div>

                <div class="col-span-6">
                  <label class="block text-sm font-medium text-gray-700" for="comments">Комментарий</label>
                  <input
                    :class="{'bg-red-100': alertDanger.comments}"
                    :placeholder="[placeholder.comments]"
                    :value="ruleForm.comments"
                    @input="updateRuleFormComments"
                    id="comments"
                    autocomplete="street-address"
                    class="mt-1 focus:ring-red-800 focus:border-red-800 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    name="comments"
                    type="text">
                </div>

              </div>
          </div>
        </div>
      </div>

      <!--      <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">-->
      <!--        <div class="md:grid md:grid-cols-3 md:gap-6">-->
      <!--          <div class="md:col-span-1">-->
      <!--            <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>-->
      <!--            <p class="mt-1 text-sm text-gray-500">-->
      <!--              Decide which communications you'd like to receive and how.-->
      <!--            </p>-->
      <!--          </div>-->
      <!--          <div class="mt-5 md:mt-0 md:col-span-2">-->
      <!--            <form class="space-y-6" action="#" method="POST">-->
      <!--              <fieldset>-->
      <!--                <legend class="text-base font-medium text-gray-900">By Email</legend>-->
      <!--                <div class="mt-4 space-y-4">-->
      <!--                  <div class="flex items-start">-->
      <!--                    <div class="h-5 flex items-center">-->
      <!--                      <input id="comments" name="comments" type="checkbox" class="focus:ring-red-800 h-4 w-4 text-indigo-600 border-gray-300 rounded">-->
      <!--                    </div>-->
      <!--                    <div class="ml-3 text-sm">-->
      <!--                      <label for="comments" class="font-medium text-gray-700">Comments</label>-->
      <!--                      <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>-->
      <!--                    </div>-->
      <!--                  </div>-->
      <!--                  <div class="flex items-start">-->
      <!--                    <div class="flex items-center h-5">-->
      <!--                      <input id="candidates" name="candidates" type="checkbox" class="focus:ring-red-800 h-4 w-4 text-indigo-600 border-gray-300 rounded">-->
      <!--                    </div>-->
      <!--                    <div class="ml-3 text-sm">-->
      <!--                      <label for="candidates" class="font-medium text-gray-700">Candidates</label>-->
      <!--                      <p class="text-gray-500">Get notified when a candidate applies for a job.</p>-->
      <!--                    </div>-->
      <!--                  </div>-->
      <!--                  <div class="flex items-start">-->
      <!--                    <div class="flex items-center h-5">-->
      <!--                      <input id="offers" name="offers" type="checkbox" class="focus:ring-red-800 h-4 w-4 text-indigo-600 border-gray-300 rounded">-->
      <!--                    </div>-->
      <!--                    <div class="ml-3 text-sm">-->
      <!--                      <label for="offers" class="font-medium text-gray-700">Offers</label>-->
      <!--                      <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>-->
      <!--                    </div>-->
      <!--                  </div>-->
      <!--                </div>-->
      <!--              </fieldset>-->
      <!--              <fieldset>-->
      <!--                <div>-->
      <!--                  <legend class="text-base font-medium text-gray-900">Push Notifications</legend>-->
      <!--                  <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>-->
      <!--                </div>-->
      <!--                <div class="mt-4 space-y-4">-->
      <!--                  <div class="flex items-center">-->
      <!--                    <input id="push_everything" name="push_notifications" type="radio" class="focus:ring-red-800 h-4 w-4 text-indigo-600 border-gray-300">-->
      <!--                    <label for="push_everything" class="ml-3 block text-sm font-medium text-gray-700">-->
      <!--                      Everything-->
      <!--                    </label>-->
      <!--                  </div>-->
      <!--                  <div class="flex items-center">-->
      <!--                    <input id="push_email" name="push_notifications" type="radio" class="focus:ring-red-800 h-4 w-4 text-indigo-600 border-gray-300">-->
      <!--                    <label for="push_email" class="ml-3 block text-sm font-medium text-gray-700">-->
      <!--                      Same as email-->
      <!--                    </label>-->
      <!--                  </div>-->
      <!--                  <div class="flex items-center">-->
      <!--                    <input id="push_nothing" name="push_notifications" type="radio" class="focus:ring-red-800 h-4 w-4 text-indigo-600 border-gray-300">-->
      <!--                    <label for="push_nothing" class="ml-3 block text-sm font-medium text-gray-700">-->
      <!--                      No push notifications-->
      <!--                    </label>-->
      <!--                  </div>-->
      <!--                </div>-->
      <!--              </fieldset>-->
      <!--            </form>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <div class="flex justify-end">
        <button v-if="visibleSendOrder"
          @click="sendOrder"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
                type="submit">
          Отправить менеджеру
        </button>
        <button v-if="!visibleSendOrder"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
                type="button">
          Ожидайте подтверждения менеджера
        </button>

      </div>
    </div>


  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  methods: {
    ...mapActions({
      'setCurrentQuantityCart': 'catalog/cart/setCurrentQuantityCart',
      'deleteProductFromCart': 'catalog/cart/deleteProductFromCart',
      'sendOrder': 'catalog/cart/sendOrder',
      'updateRuleFormName': 'catalog/cart/updateRuleFormName',
      'updateRuleFormPhone': 'catalog/cart/updateRuleFormPhone',
      'updateRuleFormEmail': 'catalog/cart/updateRuleFormEmail',
      'updateRuleFormAddress': 'catalog/cart/updateRuleFormAddress',
      'updateRuleFormComments': 'catalog/cart/updateRuleFormComments',
    })
  },
  computed: {
    ...mapGetters({
      ruleForm: 'catalog/cart/ruleForm',
      alertDanger: 'catalog/cart/alertDanger',
      placeholder: 'catalog/cart/placeholder',
      cartList: 'catalog/cart/cart',
      totalSum: 'catalog/cart/totalSum',
      visibleSendOrder: 'catalog/cart/visibleSendOrder'
    }),
  },
}
</script>
