<template>
  <common-header />
  <div class="page">
    <slot />
  </div>
  <common-footer />
</template>

<script>
import CommonHeader from '~/components/bases/header'
import CommonFooter from '~/components/bases/darkFooter'

export default {
  components: { CommonHeader, CommonFooter },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.page {
  margin-top: 60px;
}
</style>