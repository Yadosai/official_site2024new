<template>
    <div class="performer">
        <div class="performerHeader">
            <p class="performerName" :style="{ fontSize: performerNameFontsize + 'px' }">
                {{ performerName }}
            </p>
        </div>
        <div class="contents">
            <div class="contentName">
                <div v-for="(kikaku, index) in kikakuList" :key="'kikaku-' + index">
                    <p class="kikakuName" v-if="kikaku.url">
                        <NuxtLink :to="kikaku.url">
                            {{ kikaku.name }}
                        </NuxtLink>
                    </p>
                </div>
                <div v-for="(mogiten, index) in mogitenList" :key="'mogiten-' + index">
                    <p class="mogitenName" v-if="mogiten.url">
                        <NuxtLink :to="mogiten.url">
                            {{ mogiten.name }}
                        </NuxtLink>
                    </p>
                </div>
            </div>
            <div class="SNS">
                <p class="SNSName" v-if="instaIDUrl">
                    <a :href="instaIDUrl" @click="redirectToTrl(instaIDUrl)" target="_blank">
                        <img src="~/assets/img/base/Instagram.png" class="icon">
                        <p class="SNSID">{{ instaID }}</p>
                    </a>
                </p>
                <p class="SNSName" v-if="twitterIDUrl">
                    <a :href="twitterIDUrl" @click="redirectToTrl(twitterIDUrl)" target="_blank">
                        <img src="~/assets/img/base/twitter.png" class="icon">
                        <p class="SNSID">{{ twitterID }}</p>
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        performerName: String,
        performerNameFontsize: Number,
        kikakuList: {
            type: Array,
            default: () => []
        },
        mogitenList: {
            type: Array,
            default: () => []
        },
        instaID: String,
        instaIDUrl: String,
        twitterID: String,
        twitterIDUrl: String
    },
    methods: {
    }
};
</script>

<style scoped lang="scss">
a {
    color: inherit;
    text-decoration: none;
    display: flex;
    gap: 5px;
    align-items: center;
}

p {
    margin: 0;
}

.performer {
    display: flex;
    width: 342px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    border: 1px solid $primary-color;
    background: $quaternary-color;
}

.performerHeader {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 8px 8px 0px 0px;
    background: $primary-color;
}

.performerName {
    color: $secondary-color;
    text-align: center;
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    white-space: pre-line;
}

.contents {
    display: flex;
    padding: 15px 25px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
}

.contentName {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.kikakuName,
.mogitenName {
    width: 264px;
    height: 27px;
    font-size: 15px;
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
}

.SNS {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    align-items: flex-start;
}

.SNSName {
    display: flex;
    align-items: flex-start;
    gap: 5px;
    align-self: stretch;
}

.SNSID {
    text-align: center;
    font-size: 15px;
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
}

.icon {
    width: 30px;
    height: 30px;
}
</style>