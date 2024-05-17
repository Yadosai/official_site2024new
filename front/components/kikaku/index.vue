<template>
    <div class="kikakuEyeCatch">
        <p class="kikakuEyeCatchTitle" id="map" >会場地図</p>
        <img src="~/assets/img/kikaku/kikakuMap.png">
        <p class="kikakuEyeCatchTitle" id="timeTable">タイムテーブル</p>
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
        <item kikakuID="1" title="ゆかたコンテスト" imgUrl="/img/kikaku/yukacon.jpg" holder="一年生向け企画" :places="['メインステージ']":dates="['6月1日：18:45～21:00']"
            description="やどかり祭を最高に盛り上げるメイン企画。各チームが個性的なパフォーマンスで観客の皆さんを魅了し優勝を目指します。ゆかたを着た出演者を中心としたチーム一丸となってのパフォーマンスは必見です。" />
        <item kikakuID="2" title="火文字前パフォ・火文字" imgUrl="/img/kikaku/himoji.jpg" holder="全体装飾部局" :places="['平砂宿舎共用等前']" :dates='["5月31日：20:00～20:20","6月1日：20:00～21:20"]'
            description="委員による幻想的な火文字。例年漢字一文字に火を灯しますが、今年は何になるのでしょうか。そしてその直前に行われる筑波大学の団体によるパフォーマンスも見逃せません。" />
        <item kikakuID="3" title="野外ライブ" imgUrl="/img/kikaku/live.jpg" holder="有志・サークル" :places="['メインステージ']" :dates='["5月31日：16:30～20:40"]'
            description="筑波大学のバンドサークルから出演者を集めて、ライブパフォーマンスを行ってもらう前夜祭の激アツ企画です。皆様が楽しめること間違いなしです。ぜひご来場ください。" />
        <item kikakuID="4" title="御輿" imgUrl="/img/kikaku/mikosi.jpg" holder="一年生向け企画" :places="['平砂宿舎共用等前','メインストリート']" :dates='["6月1日：9:30～15:45"]'
            description="祭といえば、やっぱり御輿。御輿が会場のメインストリートを縦断する迫力満点の練り歩きと趣向を凝らしたパフォーマンスは必見です。" />
        <item kikakuID="5" title="やどかりダンス" imgUrl="/img/kikaku/dance.jpg" holder="有志・サークル" :places="['メインステージ']" :dates='["6月1日：13:15～16:10"]'
            description="筑波大学のダンス系サークルや部活がパフォーマンスをする企画です。それぞれの団体が独自のパフォーマンスを通じて表現し、団体それぞれに違った色をみることができます。ぜひ会場まで足を運んでみてください。" />
        <item kikakuID="6" title="ミニステージパフォーマンス" imgUrl="/img/kikaku/stage.jpg" holder="有志・サークル" :places="['平砂宿舎4・6号棟間']" 
            :dates='["5月31日：18:00～19:50","6月1日：12:00～15:30"]'
            description="筑波大学の団体がミニステージで演奏・パフォーマンスをする企画です。お気軽にお立ち寄りください。" />
        <item kikakuID="7" title="ストリートパフォーマンス" imgUrl="/img/kikaku/street.jpg" holder="有志・サークル" :places="['平砂共用等前交差点','メインストリート']" 
            :dates='["6月1日：13:10～15:20"]'
            description="筑波大学の団体がストリート上で演奏・パフォーマンスをする企画です。お気軽にお立ち寄りください。" />
        <item kikakuID="8" title="やどカラ" imgUrl="/img/kikaku/noImg.jpg" holder="一年生向け企画" :places="['メインストリート']" :dates='["6月1日：16:10～16:40"]'
            description="やどカラは5年ぶりの復活！参加者が歌を歌ってその出来を競う企画です。御輿の前にやどカラを見て気持ちを盛り上げましょう。" />
        <item kikakuID="9" title="縁日" imgUrl="/img/kikaku/enniti.jpg" holder="一年生向け企画" :places="['メインステージ横']"  :dates='["5月31日：17:00～20:40","6月1日：11:10～16:45"]'
            description="縁日は巨大だるま落としや、射的などで遊べる企画です。お祭りらしいエリアになっているのでぜひ楽しんでいってください。" />
        <item kikakuID="10" title="本祭OP" imgUrl="/img/kikaku/OP.jpg" holder="一年生向け企画" :places="['メインステージ']"  :dates='["6月1日：11:07～13:30"]'
            description="本祭オープニングでは筑波大学のサークルがやどかり祭本祭のの開幕を盛り上げてくれます。みんなで祭の開幕をむかえましょう。" />
        <item kikakuID="11" title="50周年企画" imgUrl="/img/kikaku/noImg.jpg" holder="一年生向け企画" :places="['メインステージ']"  :dates='["6月1日：16:40～16:50"]'
            description="今年は宿舎祭50周年を記念して「神成ダービー」を行います。委員によるパフォ－マンスをどうぞご覧ください！" />
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
                    { id: 3, stageId: 1, kikakuName: '野外ライブ(脳天唐竹割り)', kikakuStart: '16:30', kikakuEnd: '16:55' },
                    { id: 3, stageId: 1, kikakuName: '野外ライブ(Suica)', kikakuStart: '16:55', kikakuEnd: '17:20' },
                    { id: 3, stageId: 1, kikakuName: '野外ライブ(金欠・エクスペリエンス)', kikakuStart: '17:20', kikakuEnd: '17:45' },
                    { id: 3, stageId: 1, kikakuName: '野外ライブ(Mebuki)', kikakuStart: '17:45', kikakuEnd: '18:10' },
                    { id: 3, stageId: 1, kikakuName: '野外ライブ(Sky Beans.)', kikakuStart: '18:10', kikakuEnd: '18:35' },
                    { id: 3, stageId: 1, kikakuName: '野外ライブ(E(C))', kikakuStart: '18:35', kikakuEnd: '19:00' },
                    { id: 3, stageId: 1, kikakuName: '野外ライブ(36.4)', kikakuStart: '19:00', kikakuEnd: '19:25' },
                    { id: 3, stageId: 1, kikakuName: '野外ライブ(Fille Dog)', kikakuStart: '19:25', kikakuEnd: '19:50' },
                    { id: 3, stageId: 1, kikakuName: '野外ライブ(ペイマニーとん並)', kikakuStart: '19:50', kikakuEnd: '20:15' },
                    { id: 3, stageId: 1, kikakuName: '野外ライブ(異常者の国)', kikakuStart: '20:15', kikakuEnd: '20:40' },
                    { id: 9, stageId: 2, kikakuName: '縁日', kikakuStart: '17:00', kikakuEnd: '20:30' },
                    { id: 6, stageId: 3, kikakuName: 'ミニステージ(津軽三味線倶楽部無絃塾)', kikakuStart: '18:00', kikakuEnd: '18:30' },
                    { id: 6, stageId: 3, kikakuName: 'ミニステージ(現代視覚文化研究会)', kikakuStart: '18:40', kikakuEnd: '19:10' },
                    { id: 6, stageId: 3, kikakuName: 'ミニステージ(サイリウムダンスサークルThe Empire of TSUKUBA)', kikakuStart: '19:20', kikakuEnd: '19:50' },
                    { id: 2, stageId: 4, kikakuName: '火文字前パフォ(Neopolice bigband)', kikakuStart: '20:00', kikakuEnd: '20:20' },
                    { id: 2, stageId: 4, kikakuName: '火文字前パフォ(Fire Workers)', kikakuStart: '20:40', kikakuEnd: '21:00' },
                    { id: 2, stageId: 4, kikakuName: '火文字', kikakuStart: '21:10', kikakuEnd: '21:30' },
                ],
                honsai: [
                    { id: 10, stageId: 1, kikakuName: '本祭OP(津軽三味線倶楽部無絃塾)', kikakuStart: '11:07', kikakuEnd: '11:22' },
                    { id: 10, stageId: 1, kikakuName: '本祭OP(筑波大学ときめき太鼓塾)', kikakuStart: '11:22', kikakuEnd: '11:37' },
                    { id: 10, stageId: 1, kikakuName: '本祭OP(応援部WINS)', kikakuStart: '11:37', kikakuEnd: '12:00' },
                    { id: 5, stageId: 1, kikakuName: 'ダンス(筑波大学アイドル研究会Bombs!)', kikakuStart: '13:15', kikakuEnd: '13:40' },
                    { id: 5, stageId: 1, kikakuName: 'ダンス(筑波大学ダブルダッチサークルpurpleme)', kikakuStart: '13:40', kikakuEnd: '14:05' },
                    { id: 5, stageId: 1, kikakuName: 'ダンス(ひらがなつくば)', kikakuStart: '14:05', kikakuEnd: '14:30' },
                    { id: 5, stageId: 1, kikakuName: 'ダンス(斬桐舞)', kikakuStart: '14:30', kikakuEnd: '14:55' },
                    { id: 5, stageId: 1, kikakuName: 'ダンス(筑波大学Kpopコピーダンスサークルコグマ)', kikakuStart: '14:55', kikakuEnd: '15:20' },
                    { id: 5, stageId: 1, kikakuName: 'ダンス(Realjam)', kikakuStart: '15:20', kikakuEnd: '15:45' },
                    { id: 6, stageId: 3, kikakuName: 'ミニステージ(アカペラサークルDoo-Wop)', kikakuStart: '12:00', kikakuEnd: '12:30' },
                    { id: 6, stageId: 3, kikakuName: 'ミニステージ(つくばフォーク村)', kikakuStart: '12:40', kikakuEnd: '13:15' },
                    { id: 6, stageId: 3, kikakuName: 'ミニステージ(弾き語りサークルアンプラグト)', kikakuStart: '13:30', kikakuEnd: '14:00' },
                    { id: 6, stageId: 3, kikakuName: 'ミニステージ(フォルクローレ愛好会)', kikakuStart: '14:15', kikakuEnd: '14:45' },
                    { id: 6, stageId: 3, kikakuName: 'ミニステージ(ヒーローアクション同好会)', kikakuStart: '15:00', kikakuEnd: '15:30' },
                    { id: 6, stageId: 3, kikakuName: 'ミニステージ(津軽三味線倶楽部無絃塾)', kikakuStart: '15:45', kikakuEnd: '16:30' },
                    { id: 7, stageId: 5, kikakuName: 'ストリートパフォーマンス(アカペラサークルDoo-Wop)', kikakuStart: '13:10', kikakuEnd: '14:10' },
                    { id: 7, stageId: 5, kikakuName: 'ストリートパフォーマンス(津軽三味線倶楽部無絃塾)', kikakuStart: '14:20', kikakuEnd: '15:20' },
                    { id: 4, stageId: 6, kikakuName: '神輿(ときめき太鼓塾)', kikakuStart: '15:45', kikakuEnd: '16:10' },
                    { id: 4, stageId: 6, kikakuName: '御輿(パフォーマンス・練り歩き)', kikakuStart: '16:50', kikakuEnd: '15:45' },
                    { id: 4, stageId: 4, kikakuName: '御輿(展示)', kikakuStart: '9:30', kikakuEnd: '15:45' },
                    { id: 1, stageId: 1, kikakuName: 'ゆかコン', kikakuStart: '18:45', kikakuEnd: '20:15' },
                    { id: 1, stageId: 1, kikakuName: 'ゆかコン(表彰式)', kikakuStart: '20:30', kikakuEnd: '21:00' },
                    { id: 11, stageId: 1, kikakuName: '50周年企画', kikakuStart: '16:40', kikakuEnd: '16:50' },
                    { id: 8, stageId: 6, kikakuName: 'やどカラ', kikakuStart: '16:10', kikakuEnd: '16:40' },
                    { id: 9, stageId: 2, kikakuName: '縁日', kikakuStart: '11:10', kikakuEnd: '20:30' },
                ]
            },
            stageList: {
                zenyasai: [
                    { id: 1, name: 'メインステージ' },
                    { id: 2, name: 'メインステージ横' },
                    { id: 3, name: '平砂宿舎4・6号棟間' },
                    { id: 4, name: '平砂宿舎共用等前' }
                ],
                honsai: [
                    { id: 1, name: 'メインステージ' },
                    { id: 2, name: 'メインステージ横' },
                    { id: 3, name: '平砂宿舎4・6号棟間' },
                    { id: 4, name: '平砂宿舎共用等前' },
                    { id: 5, name: '平砂共用等前交差点' },
                    { id: 6, name: 'メインストリート' },
                ]
            },
            selectedFestival: 'zenyasai',
            festivalData: {
                zenyasai: { timeTableStart: '16', timeTableEnd: '21' },
                honsai: { timeTableStart: '9', timeTableEnd: '21' }
            }
        }
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

#map #timeTable {
    scroll-margin-top: 70px;
}

.kikakuEyeCatchTitle {
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
    .kikakuEyeCatchTitle {
        font-size: 40px;
    }

    .kikakuEyeCatch img {
        width: 650px;
        height: auto;
    }
}
</style>