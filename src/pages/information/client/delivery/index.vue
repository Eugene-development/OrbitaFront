<template>
  <!--
    This example requires Tailwind CSS v2.0+

    This example requires some changes to your config:

    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/typography'),
      ]
    }
    ```
  -->
  <div class="py-16 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
      <div class="text-base max-w-prose mx-auto lg:max-w-none">
        <h2 class="text-base text-red-800 font-semibold tracking-wide uppercase">Для клиента</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Доставка</p>
      </div>
      <div class="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <p class="text-lg text-gray-500">
          Для удобства мы предлагаем покупателям купить стройматериалы с доставкой товара на адрес объекта, а также возможность сделать заказ по телефону или любым удобным способом, связавшись с нами.
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div class="relative z-10">
          <div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
            <p>Наша компания осуществляет доставку строительных и отделочных материалов как по Дзержинску, так и по Нижнему Новгороду и области. Стоимость доставки по Дзержинску составляет 450 рублей до 1500 кг, в Нижний Новгород от 1200 рублей. Более подробную информацию о стоимости за пределы города вы можете уточнить у менеджеров.</p>
            <p>Доставка товара осуществляется с понедельника по субботу согласно графику работы магазина. Клиентом предварительно устанавливается дата и временной промежуток, по точному времени прибытия с вами свяжется водитель.</p>
            <p>ВНИМАНИЕ! Разгрузка и подъём строительных материалов оплачивается дополнительно и согласуется с менеджером не менее чем за 3 часа до подачи заявки. Цены за подъём материала указаны в таблице.</p>
            <p>Вы можете получить товар с нашего склада самовывозом.</p>
            <h3>Акция</h3>
            <p>При заказе товара от 15 000 рублей доставка массой до 1500 кг по Дзержинску – БЕСПЛАТНО!</p>
          </div>
        </div>
        <div class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
          <svg class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
          </svg>
          <blockquote class="relative bg-white rounded-lg shadow-lg">
            <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
              <h3>Цены на услуги грузчиков</h3>

              <div class="relative text-lg text-gray-700 font-medium mt-8">

                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="flex flex-col">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Наименование
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Этаж
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Лифт
                            </th>
                          </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Мешки до 30 кг
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Мешки до 30 кг
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Мешки 40-50 кг
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              ГКЛ, ГКВЛ 10 мм (1,2*2,5)
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              ГКЛ, ГКВЛ 12,5 мм (1,2*2,5)
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              ГКЛ 12,5 мм (1,2*3,0)
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              ГВЛВ 10 мм (1,2*2,5)
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              ГВЛВ 12,5 мм (1,2*2,5)
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Элемент пола 20 мм (1,2*0,6)
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Профиль (5 шт)
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Маячки, уголки (10 шт)
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Фанера 1525*1525
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Плита OSB-3 (2,5*1,25*9 мм)
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Рубероид, пергамин
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Утеплитель (упаковка)
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Пенопласт, пенополистирол
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Краска, грунт до 24 кг
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              Сетка кладочная (5 шт)
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              10
                            </td>
                            <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                              25
                            </td>
                          </tr>

                          <!-- More items... -->
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <cite class="relative flex items-center sm:items-start bg-black rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
              <span class="text-indigo-300 font-semibold leading-6 sm:pl-1">
              <p class="text-white font-semibold sm:inline">Минимальная цена работ - 500 рублей / 1 грузчик<br>
               (листовые материалы - 1000 рублей / 2 грузчика)</p>
            </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "index"
}
</script>
