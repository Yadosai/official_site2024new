<template>
    <!-- <h1>フッター</h1> -->
    <!-- <div id="footer" :class="{topPageFooter: route.path == '/top'}"> -->
    <div :id="$route.path === '/top' ? 'darkFooter' : 'footer'">
        <ul class="footerSNSContainer">
            <li class="snsItem">
                <a href="https://www.instagram.com/yadokari_shinkan2024/" target="_blank" class="snsLink">
                    <img src="~/assets/img/base/Instagram.png">
                    <p>yadokari_shinkan2024</p>
                </a>
            </li>
            <li class="snsItem">
                <a href="https://twitter.com/yadokari_sai" target="_blank" class="snsLink">
                    <img src="~/assets/img/base/twitter.png">
                    <p>@yadokari_sai</p>
                </a>
            </li>
            <li class="snsItem">
                <a href="mailto:yadosai.tkb@gmail.com" class="snsLink">
                    <img src="~/assets/img/base/mail.png">
                    <p>yadosai.tkb@gmail.com</p>
                </a>
            </li>
        </ul>
        <p class="footerText">©第50回宿舎祭実行委員会<br>当サイトでは、アクセスログの収集・解析にGoogle
            アナリティクスを使用しております。GoogleアナリティクスではCookieを使用し、個人を特定する情報を含まずにログを収集しております。また、収集されるログはGoogleのプライバシーポリシーに基づいて管理されます。
        </p>
    </div>
</template>

<script setup>
const route = useRoute();



</script>

<style lang="scss">
#footer {
    background-color: $secondary-color;
    margin: 0;
    padding: 25px;
}

.footerSNSContainer {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    align-self: stretch;
    flex-wrap: wrap;
    width: 100%;
}

.snsItem {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.snsItem .snsLink img {
    width: 50px;
    height: 50px;
    margin: 0 auto;
}

.snsItem .snsLink {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    width: 120px;
    height: 100px;
    cursor: pointer;
    text-decoration: none;
}

.snsItem .snsLink p {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    color: $tertiary-color;
    text-align: center;
    overflow-wrap: break-word;
    font-size: 10px;
}

.footerText {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    align-self: stretch;
    color: $tertiary-color;
    text-align: center;
    font-size: 10px;
    margin: 0;
}

#darkFooter {
    background-color: $tertiary-color;
    margin: 0;
    padding: 25px;
}

#darkFooter .footerSNSContainer .snsItem .snsLink p  {
    color: $secondary-color;
}

#darkFooter .footerSNSContainer .snsItem .snsLink img  {
    filter: invert(88%) sepia(61%) saturate(0%) hue-rotate(229deg) brightness(107%) contrast(101%);
}

#darkFooter .footerText  {
    color: $secondary-color;
}

</style>