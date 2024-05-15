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
        <item title="ゆかたコンテスト" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="6月1日：18:45～20:30" description="やどかり祭を最高に盛り上げるメイン企画。各チームが個性的なパフォーマンスで観客の皆さんを魅了し優勝を目指します。ゆかたを着た出演者を中心としたチーム一丸となってのパフォーマンスは必見です。" />
        <item title="火文字前パフォ・火文字" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="5月31日：14:00～15:00" description="委員による幻想的な火文字。例年漢字一文字に火を灯しますが、今年は何になるのでしょうか。そしてその直前に行われる筑波大学の団体によるパフォーマンスも見逃せません。" />
        <item title="野外ライブ" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="5月31日：16:30～21:00" description="筑波大学のバンドサークルから出演者を集めて、ライブパフォーマンスを行ってもらう前夜祭の激アツ企画です。皆様が楽しめること間違いなしです。ぜひご来場ください。" />
        <item title="御輿" :imgUrl="src1" holder="一年生向け企画" place="メインストリート" date="6月1日：16:50～18:45" description="祭といえば、やっぱり御輿。御輿が会場のメインストリートを縦断する迫力満点の練り歩きと趣向を凝らしたパフォーマンスは必見です。" />
        <item title="やどかりダンス" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="6月1日：13:30～16:00" description="筑波大学のダンス系サークルや部活がパフォーマンスをする企画です。それぞれの団体が独自のパフォーマンスを通じて表現し、団体それぞれに違った色をみることができます。ぜひ会場まで足を運んでみてください。" />
        <item title="ミニステ・ストパフォ" :imgUrl="src1" holder="一年生向け企画" place="平砂宿舎4・6号棟間,平砂共用前交差点" date="5月31日：18:00～21:00,6月1日：12:00～16:10" description="筑波大学の団体がミニステージ上やストリート上で演奏・パフォーマンスをする企画です。お気軽にお立ち寄りください。（ストリートパフォーマンスは本祭のみ）" />
        <item title="やどカラ" :imgUrl="src1" holder="一年生向け企画" place="メインストリート" date="6月1日：16:10～16:40" description="やどカラは5年ぶりの復活！参加者が歌を歌ってその出来を競う企画です。御輿の前にやどカラを見て気持ちを盛り上げましょう。" />
        <item title="縁日" :imgUrl="src1" holder="一年生向け企画" place="メインステージ横" date="5月31日：17:00～20:40,6月1日：11:10～15:45" description="縁日は巨大だるま落としや、射的などで遊べる企画です。お祭りらしいエリアになっているのでぜひ楽しんでいってください。" />
        <item title="本祭OP" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="6月1日：12:25～" description="本祭オープニングでは筑波大学のサークルがやどかり祭本祭のの開幕を盛り上げてくれます。みんなで祭の開幕をむかえましょう。" />
        <item title="50th" :imgUrl="src1" holder="一年生向け企画" place="メインステージ" date="6月1日：16:40～16:50" description="今年は宿舎祭50周年を記念して「神成ダービー」を行います。委員によるパフォ－マンスをどうぞご覧ください！" />
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
                    { id: 1, stageId: 1, kikakuName: '野外ライブ', kikakuStart: '16:30', kikakuEnd: '21:00' },
                    { id: 2, stageId: 2, kikakuName: '縁日', kikakuStart: '17:00', kikakuEnd: '20:40' },
                    { id: 3, stageId: 3, kikakuName: 'ミニステージ', kikakuStart: '18:00', kikakuEnd: '21:00' }
                ],
                honsai: [
                    { id: 4, stageId: 1, kikakuName: '本祭OP', kikakuStart: '12:25', kikakuEnd: '13:30' },
                    { id: 5, stageId: 1, kikakuName: 'やどかりダンス', kikakuStart: '13:30', kikakuEnd: '16:10' },
                    { id: 6, stageId: 1, kikakuName: '50th', kikakuStart: '16:40', kikakuEnd: '16:50' },
                    { id: 7, stageId: 1, kikakuName: 'ゆかコン', kikakuStart: '18:45', kikakuEnd: '20:30' },
                    { id: 8, stageId: 1, kikakuName: '表彰式', kikakuStart: '20:30', kikakuEnd: '21:00' },
                    { id: 2, stageId: 2, kikakuName: '縁日', kikakuStart: '11:10', kikakuEnd: '16:10' },
                    { id: 9, stageId: 5, kikakuName: 'ときめき太鼓塾', kikakuStart: '15:45', kikakuEnd: '16:10' },
                    { id: 10, stageId: 5, kikakuName: 'やどカラ', kikakuStart: '16:10', kikakuEnd: '16:40' },
                    { id: 11, stageId: 5, kikakuName: '神輿', kikakuStart: '16:50', kikakuEnd: '18:45' },
                    { id: 12, stageId: 3, kikakuName: 'ミニステ', kikakuStart: '12:00', kikakuEnd: '16:10' },
                    { id: 13, stageId: 6, kikakuName: 'ストパフォ', kikakuStart: '12:00', kikakuEnd: '16:10' },
                    { id: 14, stageId: 4, kikakuName: '火文字', kikakuStart: '21:10', kikakuEnd: '21:30' },
                    { id: 11, stageId: 4, kikakuName: '神輿(展示)', kikakuStart: '9:30', kikakuEnd: '16:10' }
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
                    { id: 5, name: 'メインストリート' },
                    { id: 6, name: '平砂共用等前交差点' },
                ]
            },
            selectedFestival: 'zenyasai',
            festivalData: {
                zenyasai: { timeTableStart: '16', timeTableEnd: '21' },
                honsai: { timeTableStart: '9', timeTableEnd: '21' }
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