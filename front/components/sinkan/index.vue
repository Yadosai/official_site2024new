<template>
    <div id="SinkanEyeCatch">
        <p>新歓情報</p>
        <img src="~/assets/img/sinkan/calendar.png">
    </div>
    <div id="SNSInjection">
        <div class="InjectionItem">
            <p>インスタ注目投稿</p>
            <iframe src="https://www.instagram.com/p/C5ao9lIPW_E/embed" class="InjectionItemFrame" frameborder="0"
                scrolling="no" allowtransparency="true">
            </iframe>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
#SinkanEyeCatch {
    display: flex;
    width: calc(100vw - 50px);
    height: auto;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
}

.InjectionItem p,
#SinkanEyeCatch p {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    color: #000;
    font-size: 20px;
    margin: 0px;
}

#SinkanEyeCatch img {
    width: 70%;
    height: auto;
}

#SNSInjection {
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    gap: 25px;
}

.InjectionItem {
    width: 230px;
    height: auto;
    border-radius: 8px;
    border: 1px solid #000;
    text-align: center;
}

.InjectionItemFrame {
    width: 200px;
    height: 290px;
}

@media (min-width: 950px) {

    .InjectionItem p,
    #SinkanEyeCatch p {
        font-size: 40px;
    }


    .InjectionItem {
        width: 650px;
        height: auto;
    }

    .InjectionItemFrame {
        width: 650px;
        height: 740px;
    }

}
</style>