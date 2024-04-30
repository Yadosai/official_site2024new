<template>
  <searchbox/>
  <div class="performerList">
    <h1>出演団体一覧</h1>
    <item
    performerName="筑波大学応援部WINS"
    performerNameFontsize=20
    kikakuName="本祭オープニング (6月1日 12:00~)"
    kikakuNameUrl="http://example.com"
    mogitenName="模擬店 ID:1 (6月1日 12:00~)"
    mogitenNameUrl="http://example.com"
    instaID="@wins.tsukuba"
    instaIDUrl="http://instagram.com/wins.tsukuba"
    twitterID="@wins.tsukuba"
    twitterIDUrl="http://twitter.com/wins_tsukuba"
    />
    <item
    performerName="筑波大学応援部WINS"
    performerNameFontsize=20
    kikakuName="本祭オープニング (6月1日 12:00~)"
    kikakuNameUrl="http://example.com"
    mogitenName="模擬店 ID:1 (6月1日 12:00~)"
    mogitenNameUrl="http://example.com"
    instaID="@wins.tsukuba"
    instaIDUrl="http://instagram.com/wins.tsukuba"
    twitterID="@wins.tsukuba"
    twitterIDUrl="http://twitter.com/wins_tsukuba"
    />
  </div>
</template>

<script>
import item from '~/components/performer/item'
import searchbox from "~/components/performer/searchbox"

export default {
  components: { item, searchbox },
}
</script>

<style scoped lang="scss">
.performerList {
  display: flex;
  padding: 25px;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  align-self: stretch;
}

h1 {
  color: $tertiary-color;
  font-family: map-get($font-styles, family);
  font-size: 24px;
  font-style: map-get($font-styles, style);
  font-weight: map-get($font-styles, weight);
  line-height: map-get($font-styles, line-height);
}
</style>
