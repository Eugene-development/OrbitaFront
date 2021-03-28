<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>

import Header from './header'
import Footer from './footer'
import { mapActions, mapGetters } from "vuex";


export default {
  components: {
    Header,
    Footer
  },


  methods: {
    ...mapActions({
      'useLocalStorage': 'user/useLocalStorage',
    })
  },
  mounted() {
    this.useLocalStorage();
  },



}


</script>
