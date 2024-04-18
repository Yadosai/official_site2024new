<template>
    <div class="sponsor">
        <a :href="sponsorUrl" target="_blank" class="no-underline">
            <div class="sponsor-logo-container">
                <img :src="sponsorLogoUrl" :alt="'sponsor Logo'" class="sponsor-logo"/>
            </div>
            <div class="sponsor-descript">{{ sponsorDescript }}</div>
        </a>
    </div>
</template>
  
<script>
export default {
    props: {
        sponsorUrl: String,
        sponsorLogoUrl: String,
        sponsorDescript: String
    }
}
</script>
  
<style scoped>
.sponsor {
    height: 160px; /* 高さを160pxに設定 */
    width: 100%; /* 幅を画面幅全体に設定 */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,1); /* 背景色を設定、オプション */
}

.sponsor-logo-container {
    width: 101px; /* コンテナの幅を100%に設定 */
    height: 70px; /* コンテナの高さも親要素に合わせて100%に設定 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.sponsor-logo {
    max-height: 100%; /* ロゴの最大高さをコンテナの高さに合わせる */
    object-fit: contain; /* アスペクト比を保ちながら最大限に表示 */
}

.sponsor-descript {
    text-align: center;
    font-size: 14px;
    width: 100%; /* 名前部分も幅いっぱいに展開 */
    height: auto; /* 高さは自動で */
    white-space: pre-wrap; /* 改行と空白を保持 */
}

.no-underline {
    text-decoration: none; /* リンクの下線を消す */
    color: black; /* リンクの色を黒に設定 */
}
</style>