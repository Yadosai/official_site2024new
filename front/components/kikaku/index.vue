<template>
    <div class="kikakuEyeCatch">
        <p class="kikakuEyeCatchTitle">会場地図</p>
        <img src="~/assets/img/kikaku/kikakuMap.png">
        <p class="kikakuEyeCatchTitle">タイムテーブル</p>
        <div class="switchButtonContainer">
            <div class="switchButton left" :class="{ 'isActive': selectedFestival === 'zenyasai' }"
                @click="selectFestival('zenyasai')">
                <p>前夜祭</p>
                <div class="textContainer" :class="{ 'isActive': selectedFestival === 'zenyasai' }">
                    <p>5月31日</p>
                </div>
            </div>
            <div class="switchButton right" :class="{ 'isActive': selectedFestival === 'honsai' }"
                @click="selectFestival('honsai')">
                <p>本祭</p>
                <div class="textContainer" :class="{ 'isActive': selectedFestival === 'honsai' }">
                    <p>6月1日</p>
                </div>
            </div>
        </div>
    </div>
    <div class="timeTableContainer">
        <timeTable :kikaku-data="kikakuData[selectedFestival]" :stages="stageList[selectedFestival]"
            :timeTableStart="festivalData[selectedFestival].timeTableStart"
            :timeTableEnd="festivalData[selectedFestival].timeTableEnd" />
    </div>

    <div class="titleTextContainer">
        <p>企画一覧</p>
    </div>

    <div class="kikakuItemList">
        <item title="ゆかこん" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="5月31日：14:00～15:00" description="やどかり祭を最高に盛り上げるメイン企画。各チームが個性的なパフォーマンスで観客の皆さんを魅了し
        優勝を目指します。ゆかたを着た出演者を中心としたチーム一丸となってのパフォーマンスは必見です。" />
        <item title="ゆかこん" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="5月31日：14:00～15:00" description="やどかり祭を最高に盛り上げるメイン企画。各チームが個性的なパフォーマンスで観客の皆さんを魅了し
        優勝を目指します。ゆかたを着た出演者を中心としたチーム一丸となってのパフォーマンスは必見です。" />
        <item title="ゆかこん" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="5月31日：14:00～15:00" description="やどかり祭を最高に盛り上げるメイン企画。各チームが個性的なパフォーマンスで観客の皆さんを魅了し
        優勝を目指します。ゆかたを着た出演者を中心としたチーム一丸となってのパフォーマンスは必見です。" />
        <item title="ゆかこん" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="5月31日：14:00～15:00" description="やどかり祭を最高に盛り上げるメイン企画。各チームが個性的なパフォーマンスで観客の皆さんを魅了し
        優勝を目指します。ゆかたを着た出演者を中心としたチーム一丸となってのパフォーマンスは必見です。" />
        <item title="ゆかこん" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="5月31日：14:00～15:00" description="やどかり祭を最高に盛り上げるメイン企画。各チームが個性的なパフォーマンスで観客の皆さんを魅了し
        優勝を目指します。ゆかたを着た出演者を中心としたチーム一丸となってのパフォーマンスは必見です。" />
    </div>

</template>

<script>
import item from '~/components/kikaku/item'
import timeTable from '~/components/kikaku/timetable'
import Img1 from '~/assets/img/kikaku/yukakon.png'
import Img2 from '~/assets/img/kikaku/mikoshi.jpg'

export default {
    components: { item, timeTable },
    data() {
        return {
            kikakuData: {
                zenyasai: [
                    { id: 1, stageId: 1, kikakuName: '野外ライブ', kikakuStart: '16:30', kikakuEnd: '20:40' },
                    { id: 2, stageId: 2, kikakuName: '縁日', kikakuStart: '17:00', kikakuEnd: '20:30' },
                    { id: 3, stageId: 3, kikakuName: 'ミニステージ', kikakuStart: '18:15', kikakuEnd: '20:05' },
                    { id: 4, stageId: 4, kikakuName: '火文字', kikakuStart: '21:05', kikakuEnd: '21:30' },
                    { id: 5, stageId: 3, kikakuName: '企画E', kikakuStart: '16:30', kikakuEnd: '17:00' },
                    { id: 6, stageId: 3, kikakuName: '企画F', kikakuStart: '17:15', kikakuEnd: '18:00' },
                    { id: 7, stageId: 4, kikakuName: '企画G', kikakuStart: '16:00', kikakuEnd: '17:00' },
                    { id: 8, stageId: 4, kikakuName: '企画H', kikakuStart: '17:30', kikakuEnd: '18:30' }
                ],
                honsai: [
                    { id: 1, stageId: 1, kikakuName: '野外ライブ', kikakuStart: '16:30', kikakuEnd: '20:40' },
                    { id: 2, stageId: 2, kikakuName: '縁日', kikakuStart: '17:00', kikakuEnd: '20:30' },
                    { id: 3, stageId: 3, kikakuName: 'ミニステージ', kikakuStart: '18:15', kikakuEnd: '20:05' },
                    { id: 4, stageId: 4, kikakuName: '火文字', kikakuStart: '21:05', kikakuEnd: '21:30' },
                    { id: 5, stageId: 3, kikakuName: '企画E', kikakuStart: '16:30', kikakuEnd: '17:00' },
                    { id: 6, stageId: 3, kikakuName: '企画F', kikakuStart: '17:15', kikakuEnd: '18:00' },
                    { id: 7, stageId: 4, kikakuName: '企画G', kikakuStart: '16:00', kikakuEnd: '17:00' },
                    { id: 8, stageId: 4, kikakuName: '企画H', kikakuStart: '17:30', kikakuEnd: '18:30' }
                ]
            },
            stageList: {
                zenyasai: [
                    { id: 1, name: 'メインステージ' },
                    { id: 2, name: 'メインステージ横' },
                    { id: 3, name: '平砂宿舎4・6棟間' },
                    { id: 4, name: '平砂宿舎共用等前' },
                    // { id: 5, name: 'グロビ横駐車場' },
                    // { id: 6, name: '平砂共用等前交差点' },
                ],
                honsai: [
                    { id: 1, name: 'メインステージ' },
                    { id: 2, name: 'メインステージ横' },
                    { id: 3, name: '平砂宿舎4・6棟間' },
                    { id: 4, name: '平砂宿舎共用等前' },
                    { id: 5, name: 'グロビ横駐車場' },
                    { id: 6, name: '平砂共用等前交差点' },
                ]
            },
            selectedFestival: 'zenyasai',
            festivalData: {
                zenyasai: { timeTableStart: '16', timeTableEnd: '22' },
                honsai: { timeTableStart: '10', timeTableEnd: '18' }
            }
        };
    },
    methods: {
        selectFestival(festival) {
            this.selectedFestival = festival;
        }
    }
}

</script>

<style scoped lang="scss">
.kikakuEyeCatch {
    display: flex;
    padding: 25px 25px 0px 25px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
    background: $secondary-color;
}

.kikakuEyeCatch p {
    color: $tertiary-color;
    font-family: "Kaisei HarunoUmi";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

.kikakuEyeCatch img {
    width: 70%;
    height: auto;

}

.switchButtonContainer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    align-self: stretch;
    background: rgba(255, 255, 255, 0.00);
}

.switchButton {
    display: flex;
    width: 105px;
    height: 48px;
    padding: 0px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    opacity: 0.9;
    color: $secondary-color;
    border: 2px solid $primary-color;
    box-sizing: border-box;
}

.switchButton.left {
    border-radius: 8px 0px 0px 8px;
}

.switchButton.right {
    border-radius: 0px 8px 8px 0px;
}

.switchButton.isActive {
    background: $primary-color;
}

.switchButton p {
    color: $primary-color;
    text-align: center;
    font-family: "Kaisei HarunoUmi";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

.switchButton.isActive p {
    color: $secondary-color;

}

.switchButton .textContainer p {
    color: $primary-color;
    text-align: center;
    font-family: "Kaisei HarunoUmi";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.switchButton.isActive .textContainer p {
    color: $secondary-color;
}

.textContainer {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
}

.timeTableContainer {
    text-align: center;
    overflow-x: scroll;
}

.titleTextContainer {
    background: $quaternary-color;
    display: flex;
    padding-top: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
}

.titleTextContainer p {
    color: $tertiary-color;
    font-family: "Kaisei HarunoUmi";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

.kikakuItemList {
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

@media (min-width: 950px) {
    .kikakuEyeCatchTitle p {
        font-size: 40px;
    }

    .kikakuEyeCatch img {
        width: 650px;
        height: auto;
    }
}
</style>