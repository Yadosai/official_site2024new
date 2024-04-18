<template>
    <h1>協賛ページコンポーネント</h1>
    <sponsorItem sponsorUrl="" sponsorLogoUrl="~@/assets/img/sponsor/seirokuya.png" :sponsorDescript="sponsorDescript"  />
</template>
  
<script>
import sponsorItem from '~/components/thanks/sponsorItem'


export default {
    components: { sponsorItem },
    data() {
        return {
            sponsorDescript: "我々は清六家。\n日本一のラーメン屋..."
        };
    }
}
</script>
  
<style scoped>

</style>
  