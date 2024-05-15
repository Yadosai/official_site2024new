<template>
    <div class="QAEyeCatch">
        <p>Q＆A</p>
        <div class="QAabout">
            <p>よくある質問にお答えします</p><p>ここに載っていなくてわからないことがある場合は</p><p>各SNSのDMまでご連絡ください</p>
        </div>
    </div>
    <div class="QAcontainer">
        <item question="開催日はいつですか？" answer="今年度は5月31日が前夜祭で6月1日が本祭になっております" />
        <item question="パンフレットはありますか？" answer="当日案内所で配布しております。また、コチラからDLも可能です" />
        <item question="落とし物の問い合わせはどこにすればよいですか" answer="祭りの間は案内所で保管しておりますのでお越しください。祭りの落とし物に気づいた際にはyadokari.otoshimono50@gmail.comまでご連絡ください。" />
    </div>
</template>
  
<script>
import item from '~/components/QA/item'

export default {
    components: { item },
}
</script>
  
<style lang="scss">
.QAEyeCatch {
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    background-color: $quaternary-color;
}
.QAEyeCatch p {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 20px;
}
.QAabout {
    background-color: $primary-color;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    padding: 5px;
    text-align: center;
}
.QAabout p {

    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
}
.QAcontainer {
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 25px;
    align-self: stretch;
    flex-wrap: wrap;
    background-color: $secondary-color;
}
@media (min-width: 950px) {
    .QAEyeCatch p {
        font-size: 40px;
    }
    .QAabout p {
        font-size: 20px;
    }
}
</style>
  