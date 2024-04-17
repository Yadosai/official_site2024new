<template>
    <!-- <h1>フッター</h1> -->
    <div id="footer">
        <ul class="footerSNSContainer">
            <li class="snsItem">
                <img src="~/assets/img/base/Instagram.png">
                <p>@yadokari_sai</p>
            </li>
            <li class="snsItem">
                <img src="~/assets/img/base/twitter.png">
                <p>@yadokari_sai</p>
            </li>
            <li class="snsItem">
                <img src="~/assets/img/base/mail.png">
                <p>@yadokari_sai</p>
            </li>
        </ul>
        <p class="footerText">©第50回宿舎祭実行委員会<br>当サイトでは、アクセスログの収集・解析にGoogle
            アナリティクスを使用しております。GoogleアナリティクスではCookieを使用し、個人を特定する情報を含まずにログを収集しております。また、収集されるログはGoogleのプライバシーポリシーに基づいて管理されます。
        </p>
    </div>
</template>

<script>

</script>

<style lang="scss">
#footer {
    width: calc(100vw - 50px);
    background-color: $tertiary-color;
    margin: 0;
    padding: 25px;
}

.footerSNSContainer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
}

.snsItem {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.snsItem img {
    width: 50px;
    height: 50px;
    filter: invert(88%) sepia(61%) saturate(0%) hue-rotate(229deg) brightness(107%) contrast(101%);
}

.snsItem p {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    color: $secondary-color;
    text-align: center;
    font-size: 10px;
}

.footerText {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    align-self: stretch;
    color: $secondary-color;
    text-align: center;
    font-size: 10px;
    margin: 0;
}
</style>