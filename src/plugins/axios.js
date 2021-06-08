export default function ({ $axios }) {
  $axios.onRequest((config) => {
    $axios.setToken('1', 'Bearer')
  })
}
