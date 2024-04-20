<template>
    <div id="mogitenEyeCatch">
        <p>模擬店情報</p>
    </div>
    <div id="mogitenMapContainer">
        <img src="~/assets/img/mogiten/map.png">
    </div>
    <div id="mogitenItemContainer">
        <item class="test" mogitenName="『poppin' popcorn』" mogitenFontSize="24px" organizationName="看護学類1年"
            mogitenIntroduction="キラキラ看護1年生で色んな味のポップコーン売ります！看護の知り合いできること間違いなし！ぜひ来てね" mogitenId="1"
            holdingTime_1="3月31日:14:00~15:00" holdingTime_2="6月1日:14:00~15:00" />
        <item class="test" mogitenName="『poppin' popcorn』" mogitenFontSize="24px" organizationName="看護学類1年"
            mogitenIntroduction="キラキラ看護1年生で色んな味のポップコーン売ります！看護の知り合いできること間違いなし！ぜひ来てね" mogitenId="1"
            holdingTime_1="3月31日:14:00~15:00" holdingTime_2="6月1日:14:00~15:00" />
        <item class="test" mogitenName="『poppin' popcorn』" mogitenFontSize="24px" organizationName="看護学類1年"
            mogitenIntroduction="キラキラ看護1年生で色んな味のポップコーン売ります！看護の知り合いできること間違いなし！ぜひ来てね" mogitenId="1"
            holdingTime_1="3月31日:14:00~15:00" holdingTime_2="6月1日:14:00~15:00" />
        <item class="test" mogitenName="『poppin' popcorn』" mogitenFontSize="24px" organizationName="看護学類1年"
            mogitenIntroduction="キラキラ看護1年生で色んな味のポップコーン売ります！看護の知り合いできること間違いなし！ぜひ来てね" mogitenId="1"
            holdingTime_1="3月31日:14:00~15:00" holdingTime_2="6月1日:14:00~15:00" />
        <item class="test" mogitenName="『poppin' popcorn』" mogitenFontSize="24px" organizationName="看護学類1年"
            mogitenIntroduction="キラキラ看護1年生で色んな味のポップコーン売ります！看護の知り合いできること間違いなし！ぜひ来てね" mogitenId="1"
            holdingTime_1="3月31日:14:00~15:00" holdingTime_2="6月1日:14:00~15:00" />
        <item class="test" mogitenName="『poppin' popcorn』" mogitenFontSize="24px" organizationName="看護学類1年"
            mogitenIntroduction="キラキラ看護1年生で色んな味のポップコーン売ります！看護の知り合いできること間違いなし！ぜひ来てね" mogitenId="1"
            holdingTime_1="3月31日:14:00~15:00" holdingTime_2="6月1日:14:00~15:00" />
        <item class="test" mogitenName="『poppin' popcorn』" mogitenFontSize="24px" organizationName="看護学類1年"
            mogitenIntroduction="キラキラ看護1年生で色んな味のポップコーン売ります！看護の知り合いできること間違いなし！ぜひ来てね" mogitenId="1"
            holdingTime_1="3月31日:14:00~15:00" holdingTime_2="6月1日:14:00~15:00" />
    </div>

</template>

<script>
import item from '~/components/mogiten/item'

export default {
    components: { item },
}
</script>

<style lang="scss" scoped>
#mogitenEyeCatch {
    background: $quaternary-color;
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
}

#mogitenEyeCatch p {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-size: 24px;
    margin: 0;
}

#mogitenMapContainer {
    display: flex;
    padding: 25px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
}

#mogitenMapContainer img {
    width: 70%;
    height: auto;
    margin: 0 auto;
}

#mogitenItemContainer {
    background: $quaternary-color;
    display: flex;
    padding: 25px;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 25px;
    align-self: stretch;
    flex-wrap: wrap;
}

@media (min-width: 950px) {
    #mogitenEyeCatch p {
        font-size: 40px;
    }

    #mogitenMapContainer img {
        width: 650px;
        height: auto;
    }
}
</style>