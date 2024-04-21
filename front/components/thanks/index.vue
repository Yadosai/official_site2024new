<template>
    <h1>協賛ページコンポーネント</h1>
    <sponsorItem sponsorUrl="https://www.seirock-ya.jp/" :sponsorLogoUrl="SeirokuyaImg" :sponsorDescript="SeirokuyaText"  />
</template>
  
<script>
import sponsorItem from '~/components/thanks/sponsorItem'
import Seirokuya from '~/assets/img/sponsor/seirokuya.png'


export default {
    components: { sponsorItem },
    data() {
        return {
            SeirokuyaImg: Seirokuya,
            SeirokuyaText: "我々は清六家。\n日本一のラーメン屋..."
        };
    }
}
</script>
  
<style scoped>

</style>
  