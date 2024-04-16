<template>
    <div>
      <common-header />
      <slot />
      <common-footer />
    </div>
</template>

<script>
import CommonHeader from '~/components/bases/header'
import CommonFooter from '~/components/bases/footer'

export default {
    components: { CommonHeader,CommonFooter },
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>