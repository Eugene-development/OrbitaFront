export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    $axios.setToken('DB5', 'Bearer')
  })
}
