<template>
    <div class="thanksEyeCatch">
        <p>協賛団体</p>
        <div class="thanksabout">
            <p>やどかり祭は地域のたくさんの企業や団体からの支援金で成り立っております。</p><p>委員一同、毎年のご支援に深く感謝申し上げます。</p><p>この一覧の中には筑波大生が生活の中でも大変お世話になっているところもあります。新入生はぜひ足を運んでみてください。</p>
        </div>
    </div>
    <div class="bigsponsorContainer">
        <sponsorItem sponsorUrl="https://www.seirock-ya.jp/" sponsorLogoUrl="/img/seirokuya.png" :sponsorDescript="SeirokuyaText"/>
        <sponsorItem sponsorUrl="https://gakuen-menkyo.jp/" sponsorLogoUrl="/img/mentoru01.png" :sponsorDescript="GakkuenMenkyoText"/>
        <sponsorItem sponsorUrl="https://mentoru.jp/info/tsukuba.html" sponsorLogoUrl="/img/mentoru02.png" :sponsorDescript="MentoruText"/>
    </div>
    
    <div class="sponsorsContainer">
        <div class="miniCon">
            <span>銀の豚</span>
            <span>つくば青年会議所</span>
            <span>つくば電気空調株式会社</span>
            <span>香陵住販株式会社</span>
            <span>トクハシ（メガネ パリミキ）</span>
            <span>SALON DES CENT</span>
            <span>上総屋不動産筑波大学前支店</span>
            <span>プラス1カフェガーデン</span>
            <span>飯岡医院</span>
            <span>大成不動産株式会社</span>
            <span>有限会社岩崎電機</span>
            <span>どら焼き専門店 志ち乃</span>
            <span>PROGRESS</span>
            <span>ASA学園都市(朝日新聞等販売) </span>
            <span>博多拉麺 一休</span>
            <span>定越食堂</span>
            <span>スタジオソングサイクル</span>
            <span>suplis hair design</span>
            <span>レストラン 夢屋</span>
            <span>平砂理容室</span>
        </div>
        <div class="miniCon">
            <span>株式会社秀和不動産</span>
            <span>ばほばほ</span>
            <span>北方園</span>
            <span>つくばデザイン不動産</span>
            <span>美味コレクション</span>
            <span>勧学院</span>
            <span>南山堂薬局つくば店</span>
            <span>びすとろ椿々 追越店</span>
            <span>naked bar</span>
            <span>セブンイレブンつくば松見公園店</span>
            <span>桜ヶ丘歯科センター</span>
            <span>うなぎ松乃家</span>
            <span>(有)細田金物店</span>
            <span>井上サイクル</span>
            <span>印晶堂</span>
            <span>かつ大</span>
            <span>灯禾軒</span>
            <span>Lagoon</span>
            <span>菱光建設株式会社</span>
            <span>プリムローズ</span>
        </div>
        <div class="miniCon">
            <span>一誠商事</span>
            <span>肉のいなげや</span>
            <span>Layout9</span>
            <span>お酒とごはん わかたろう</span>
            <span>カラオケBanBanつくば学園店</span>
            <span>POTATO'S CAFE craftfries</span>
            <span>クーロンヌ　つくば</span>
            <span>フライングガーデンつくば西平塚店</span>
            <span>(株)アジア住販天久保店</span>
            <span>らーめん逆流</span>
            <span>(株)井上フード（カレー屋＆粉クリ）</span>
            <span>牛角つくばテクノパーク桜店</span>
            <span>桂不動産</span>
            <span>本家かまどや つくば春日店</span>
            <span>あじ彩</span>
            <span>なごみ処きりん</span>
            <span>ファミリーマートつくば葛城店</span>
            <span>ガーリーショット</span>
            <span>カラオケボイス</span>
            <span>Cruise</span>
        </div>
        <div class="miniCon">
            <span>ル・パン グリ・グリ</span>
            <span>おふくろさん弁当</span>
            <span>Cafe4</span>
            <span>MATSUSHIRO BURGER</span>
            <span>お食事処 花むろ</span>
            <span>つけめん・まぜそば　むじゃき</span>
            <span>青山がらり</span>
            <span>有限会社オンザロードつくば</span>
        </div>
    </div>
</template>
  
<script>
import sponsorItem from '~/components/thanks/sponsorItem'


export default {
    components: { sponsorItem },
    data() {
        return {
            SeirokuyaText: "我々は清六家。\n日本一のラーメン屋...",
            GakuenMenkyoText: "",
            MentoruText: "めんとるステーションです。 \n免許取りにきてね。"
        };
    }
}
</script>
  
<style lang="scss">
.thanksEyeCatch {
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    background-color: $quaternary-color;
}
.thanksEyeCatch p {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 40px;
}
.thanksabout {
    background-color: $primary-color;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    padding: 5px;
    text-align: center;
}
.thanksabout p {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
}
.bigsponsorContainer {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
}
.sponsorsContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 10px;
    padding: 50px;
}
.miniCon {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: fit-content;
    width: fit-content;
    align-content: flex-start;
    gap: 5px;
}
.miniCon span {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 14px;
    width: fit-content;
}
</style>
  