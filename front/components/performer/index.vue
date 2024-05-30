<template>
  <div id="performerEyeCatch">
    <p>出演団体一覧</p>
  </div>

  <div class="perfoermerListContainer">
    <item performerName="筑波大学アイドル研究会Bombs!" performerNameFontsize="20"
      :kikakuList="[{ name: 'やどかりダンス (6月1日 13:15~)', url: '/kikaku#5' }]"
      :mogitenList="[{ name: '模擬店ID3', url: '/mogiten#3' }]" instaID="@bombs_tkb"
      instaIDUrl="http://instagram.com/bombs_tkb" twitterID="@bombs_tkb" twitterIDUrl="http://twitter.com/bombs_tkb" />
    <item performerName="筑波大学ダブルダッチサークル purplume" performerNameFontsize="20"
      :kikakuList="[{ name: 'やどかりダンス (6月1日 13:40~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@purplume.dd" instaIDUrl="http://instagram.com/purplume.dd" twitterID="@purplume_"
      twitterIDUrl="http://twitter.com/purplume_" />
    <item performerName="ひらがなつくば" performerNameFontsize="20"
      :kikakuList="[{ name: 'やどかりダンス (6月1日 14:05~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@hiraganatsukuba" instaIDUrl="http://instagram.com/hiraganatsukuba" twitterID="@hiraganatsukuku"
      twitterIDUrl="http://twitter.com/hiraganatsukuku" />
    <item performerName="斬桐舞" performerNameFontsize="20"
      :kikakuList="[{ name: 'やどかりダンス(6月1日 14:30~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@kirikirimaaai" instaIDUrl="http://instagram.com/kirikirimaaai" twitterID="@kiri_kiri_mai"
      twitterIDUrl="http://twitter.com/kiri_kiri_mai" />
    <item performerName="筑波大学Kpopコピーダンスサークル コグマ" performerNameFontsize="20"
      :kikakuList="[{ name: 'やどかりダンス(6月1日 14:55~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@koguma_guma_" instaIDUrl="http://instagram.com/koguma_guma_" twitterID="@kogumaguma_kpop"
      twitterIDUrl="http://twitter.com/kogumaguma_kpop" />
    <item performerName="Realjam" performerNameFontsize="20"
      :kikakuList="[{ name: 'やどかりダンス(6月1日 15:20~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@realjam.tkb" instaIDUrl="http://instagram.com/realjam.tkb" twitterID="@DANCE_REALJAM"
      twitterIDUrl="http://twitter.com/DANCE_REALJAM" />
    <item performerName="アカペラサークルDoo-Wop" performerNameFontsize="20"
      :kikakuList="[{ name: 'ミニステージ(6月1日 12:00~)他', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@doowopshinkan2024" instaIDUrl="http://instagram.com/doowopshinkan2024" twitterID="@DooWop_tsukuba"
      twitterIDUrl="http://twitter.com/DooWop_tsukuba" />
    <item performerName="弾き語りサークルアンプラグト" performerNameFontsize="20"
      :kikakuList="[{ name: 'ミニステージ(6月1日 13:30~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@tkb_unplugged" instaIDUrl="http://instagram.com/tkb_unplugged" twitterID="@tkb_unplugged"
      twitterIDUrl="http://twitter.com/tkb_unplugged" />
    <item performerName="現代視覚文化研究会" performerNameFontsize="20"
      :kikakuList="[{ name: 'ミニステージ(5月31日 18:40~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@" instaIDUrl="http://instagram.com/" twitterID="@tsukuba_gsk"
      twitterIDUrl="http://twitter.com/tsukuba_gsk" />
    <item performerName="フォルクローレ愛好会" performerNameFontsize="20"
      :kikakuList="[{ name: 'ミニステージ(6月1日 14:15~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@folklore_tkb" instaIDUrl="http://instagram.com/folklore_tkb" twitterID="@Folklore_tkb"
      twitterIDUrl="http://twitter.com/Folklore_tkb" />
    <item performerName="つくばフォーク村" performerNameFontsize="20"
      :kikakuList="[{ name: 'ミニステージ(6月1日 12:40~)他', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@tsukuba_fv" instaIDUrl="http://instagram.com/tsukuba_fv" twitterID="@tsukuba_fv"
      twitterIDUrl="http://twitter.com/tsukuba_fv" />
    <item performerName="津軽三味線倶楽部無絃塾" performerNameFontsize="20"
      :kikakuList="[{ name: 'ミニステージ(5月31日 18:00~)他', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@tsukuba_mugenjiku" instaIDUrl="http://instagram.com/tsukuba_mugenjiku" twitterID="@tsukuba_mugen"
      twitterIDUrl="http://twitter.com/tsukuba_mugen" />
    <item performerName="ヒーローアクション同好会" performerNameFontsize="20"
      :kikakuList="[{ name: 'ミニステージ(6月1日 15:00~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@" instaIDUrl="http://instagram.com/" twitterID="@Action_298"
      twitterIDUrl="http://twitter.com/Action_298" />
    <item performerName="サイリウムダンスサークルThe Empire of TSUKUBA" performerNameFontsize="20"
      :kikakuList="[{ name: 'ミニステージ(5月31日 19:20~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@" instaIDUrl="http://instagram.com/" twitterID="@Empire_2018_11"
      twitterIDUrl="http://twitter.com/Empire_2018_11" />
    <item performerName="軽音楽協会E.L.L." performerNameFontsize="20"
      :kikakuList="[{ name: '野外ライブ(5月31日 16:30~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@ell_tsukuba" instaIDUrl="http://instagram.com/ell_tsukuba" twitterID="@ell_tkbuniv2"
      twitterIDUrl="http://twitter.com/ell_tkbuniv2" />
    <item performerName="筑波音楽協会" performerNameFontsize="20"
      :kikakuList="[{ name: '野外ライブ(5月31日 16:30~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@chilion_tkb" instaIDUrl="http://instagram.com/chilion_tkb" twitterID="@chikuon_tkb"
      twitterIDUrl="http://twitter.com/chikuon_tkb" />
    <item performerName="TOJO K-ON" performerNameFontsize="20"
      :kikakuList="[{ name: '野外ライブ(5月31日 16:30~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@tojok_on" instaIDUrl="http://instagram.com/tojok_on" twitterID="@tojikon"
      twitterIDUrl="http://twitter.com/tojikon" />
    <item performerName="バンドストッククラブPBCM" performerNameFontsize="20"
      :kikakuList="[{ name: '野外ライブ(5月31日 16:30~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@pbcmpbcmpbcm" instaIDUrl="http://instagram.com/pbcmpbcmpbcm" twitterID="@pbcm_tkbuniv"
      twitterIDUrl="http://twitter.com/pbcm_tkbuniv" />
    <item performerName="筑波大学ジャズ楽団 Neopolice bigband" performerNameFontsize="20"
      :kikakuList="[{ name: '火文字前パフォ(5月31日 20:00~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@neopolisbigband" instaIDUrl="http://instagram.com/neopolisbigband" twitterID="@NeopolisBIGBAND"
      twitterIDUrl="http://twitter.com/NeopolisBIGBAND" />
    <item performerName="ファイヤートーチトワリング団体 Fire Workers" performerNameFontsize="20"
      :kikakuList="[{ name: '火文字前パフォ(5月31日 20:40~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@" instaIDUrl="http://instagram.com/" twitterID="@" twitterIDUrl="http://twitter.com/" />
    <item performerName="筑波大学ときめき太鼓塾" performerNameFontsize="20"
      :kikakuList="[{ name: '本祭OP(6月1日 11:22~)他', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@tokimeki_taikojyuku" instaIDUrl="http://instagram.com/tokimeki_taikojyuku" twitterID="@taikojyuku_tsu"
      twitterIDUrl="http://twitter.com/taikojyuku_tsu" />
    <item performerName="応援部WINS" performerNameFontsize="20"
      :kikakuList="[{ name: '本祭OP(6月1日 11:37~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@wins.tsukuba" instaIDUrl="http://instagram.com/wins.tsukuba" twitterID="@wins_tsukuba"
      twitterIDUrl="http://twitter.com/wins_tsukuba" />
    <item performerName="筑波大学花火研究会" performerNameFontsize="20"
      :kikakuList="[{ name: '花火(6月1日 20:50~)', url: 'https://yadokarisai.com/kikaku' }]" :mogitenList="[]"
      instaID="@tsukuba.hanabi" instaIDUrl="http://instagram.com/tsukuba.hanabi" twitterID="@HanabiTsukuba"
      twitterIDUrl="http://twitter.com/HanabiTsukuba" />
  </div>
</template>

<script>
import item from '~/components/performer/item'

export default {
  components: { item },
}
</script>

<style scoped>
#performerEyeCatch {
  background: #CBCBCB;
  display: flex;
  padding: 25px;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  align-self: stretch;
}

#performerEyeCatch p {
  color: #000;
  font-family: "Kaisei HarunoUmi";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px;
}

.perfoermerListContainer {
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
  #performerEyeCatch p {
    font-size: 40px;
  }

}
</style>