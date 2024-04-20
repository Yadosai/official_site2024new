<template>
    <h1>企画コンポーネント</h1>
    <item class="test" mogitenName="『poppin' popcorn』" mogitenFontSize="24px" organizationName="看護学類1年" mogitenIntroduction="キラキラ看護1年生で色んな味のポップコーン売ります！看護の知り合いできること間違いなし！ぜひ来てね" mogitenId="1" holdingTime_1="3月31日:14:00~15:00" holdingTime_2="6月1日:14:00~15:00" />
</template>
  
<script>
import item from '~/components/mogiten/item'

export default {
    components: { item },
}
</script>
  
<style lang="scss" >

.test {
    margin-left: 50px;
}

</style>
  