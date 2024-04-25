<template>
    <div class="wholeKikaku">
    <h1>企画コンポーネント</h1>
    <item title="ゆかこん" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="5月31日：14:00～15:00" description="やどかり祭を最高に盛り上げるメイン企画。各チームが個性的なパフォーマンスで観客の皆さんを魅了し
    優勝を目指します。ゆかたを着た出演者を中心としたチーム一丸となってのパフォーマンスは必見です。" 
    />
    <item title="神輿" :imgUrl="src2" holder="一年生向け企画" place="メインストリート" date="6月1日：14:00～15:00" description="hugahugahogehoge"/>
    <timeTable_1 />
    <timeTable_2 />
</div>
</template>
  
<script>
import item from '~/components/kikaku/item'
import timeTable_1 from '~/components/kikaku/timeTable_1'
import timeTable_2 from '~/components/kikaku/timeTable_2'
import Img1 from '~/assets/img/kikaku/yukakon.png'
import Img2 from '~/assets/img/kikaku/mikoshi.jpg'

export default {
    components: { item,timeTable_1,timeTable_2 },
    kikakuImgData () {
    return {
      src1: Img1,
      src2 :Img2
    }
  }
}
</script>
  
<style scoped>
.wholeKikaku{
    background: #CBCBCB;
    display: flex;
padding: 25px 0px;
justify-content: center;
align-items: flex-start;
align-content: flex-start;
gap: 25px;
align-self: stretch;
flex-wrap: wrap;
}
</style>
  