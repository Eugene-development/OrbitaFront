export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    $axios.setToken(process.env.TOKEN, 'Bearer')
  })
}
