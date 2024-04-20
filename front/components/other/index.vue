<template>
    <div id="otherEyeCatch">
        <p>その他</p>
    </div>
    <div id="otherContainer">
        <item itemTitle="クラウドファンディング" :item-contents="[
            { text: '期間　(6月1日 12:00~)', href: '' },
            { text: '概要　やどかり祭開催の為の寄付です', href: '' },
            { text: 'クラウドファンディングのURL:www.hogehoge.com', href: 'https://google.com' }
        ]" item-font-size="18px" />
        <item itemTitle="つくばinfo" :item-contents="[
            { text: 'サービス開始　2024年4月', href: '' },
            { text: '概要　地域密着型に徹することでお店とヒト古いタイプの新しいSNSサービスです。', href: '' },
            { text: 'つくばinfoのURL:www.hogehoge.com', href: 'https://google.com' }
        ]" item-font-size="18px" />
    </div>
</template>

<script>
import item from '~/components/other/item'

export default {
    components: { item },
}
</script>

<style scoped>
#otherEyeCatch {
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
    background: #CBCBCB;
}

#otherEyeCatch p {
    color: #000;
    font-family: "Kaisei HarunoUmi";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

#otherContainer {
    display: flex;
    padding: 25px;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 25px;
    align-self: stretch;
    flex-wrap: wrap;
    background: #FFF;
}

@media (min-width: 950px) {
    #otherEyeCatch p {
        font-size: 40px;
    }
}
</style>