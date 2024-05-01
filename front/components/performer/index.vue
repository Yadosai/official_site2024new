<template>
  <div id="performerEyeCatch">
    <p>出演団体一覧</p>
  </div>

  <div class="perfoermerListContainer">
    <item performerName="筑波大学応援部WINS" performerNameFontsize="20" kikakuName="honsaiオープニング (6月1日 12:00~)"
      kikakuNameUrl="http://example.com" mogitenName="模擬店ID:1 (6月1日 12:00~)" mogitenNameUrl="http://example.com"
      instaID="@wins.tsukuba" instaIDUrl="http://instagram.com/wins.tsukuba" twitterID="@wins.tsukuba"
      twitterIDUrl="http://twitter.com/wins_tsukuba" />
    <item performerName="筑波大学応援部WINS" performerNameFontsize="20" kikakuName="honsaiオープニング (6月1日 12:00~)"
      kikakuNameUrl="http://example.com" mogitenName="模擬店ID:1 (6月1日 12:00~)" mogitenNameUrl="http://example.com"
      instaID="@wins.tsukuba" instaIDUrl="http://instagram.com/wins.tsukuba" twitterID="@wins.tsukuba"
      twitterIDUrl="http://twitter.com/wins_tsukuba" />

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