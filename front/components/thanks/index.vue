<template>
    <h1>協賛ページコンポーネント</h1>
    <sponsorItem sponsorUrl="https://www.seirock-ya.jp/" sponsorLogoUrl="/img/seirokuya.png" :sponsorDescript="SeirokuyaText"/>
</template>
  
<script>
import sponsorItem from '~/components/thanks/sponsorItem'


export default {
    components: { sponsorItem },
    data() {
        return {
            SeirokuyaText: "我々は清六家。\n日本一のラーメン屋..."
        };
    }
}
</script>
  
<style scoped>

</style>
  