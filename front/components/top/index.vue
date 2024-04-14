<template>
    <h1>トップページコンポーネント</h1>
    <buttonItem />
    <updataInfoItem />
</template>
  
<script>
import buttonItem from '~/components/top/buttonItem'
import updataInfoItem from '~/components/top/updataInfoItem'

export default {
    components: { buttonItem,updataInfoItem },
}
</script>
  
<style scoped>

</style>
  