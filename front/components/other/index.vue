<template>
    <!-- <h1>その他コンポーネント</h1> -->
    <!-- <item itemName="クラウドファンディング" /> -->
    <item
    itemTitle="クラウドファンディング"
    :item-contents="[
      { text: '期間　(6月1日 12:00~)', href: '' },
      { text: '概要　やどかり祭開催の為の寄付です', href: '' },
      { text: 'クラウドファンディングのURL:www.hogehoge.com', href: 'https://google.com' }
    ]"
    item-font-size="18px"
  />
</template>
  
<script>
import item from '~/components/other/item'

export default {
    components: { item },
}
</script>
  
<style scoped>

</style>
  