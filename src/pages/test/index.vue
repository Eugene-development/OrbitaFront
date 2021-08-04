<template>
  <div v-if="(true || false) && !true">
    <ol class="test">
      <li>первый</li>
      <li>второй</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style>
ul.test  {
  list-style-type: disc !important;
  list-style-position: inside !important;
}

ol.test  {
  list-style-type: decimal !important;
  list-style-position: inside !important;
}
</style>
