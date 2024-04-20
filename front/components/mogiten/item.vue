<template>
    <div class="mogitenItem">
        <div class="mogitenItemHeader">
            <p class="organization">{{ organizationName }}</p>
            <p class="title" :style="{ fontSize: mogitenFontSize }">{{ mogitenName }}</p>
        </div>
        <div class="ItemContent">
            <div class="DetailContainer">
                <div class="location">
                    <a :href="'#mapContainer'" class="locationLink">
                        <img src="~/assets/img/mogiten/calendar.png">
                        <p>{{ mogitenId }}</p>
                    </a>
                </div>
                <div class="schedule">
                    <img src="~/assets/img/mogiten/map.png">
                    <div class="dates">
                        <p>{{ holdingTime_1 }}</p>
                        <p>{{ holdingTime_2 }}</p>
                    </div>
                </div>
            </div>
            <p class="Introduction">{{ mogitenIntroduction }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mogitenName: String,
        mogitenFontSize: {
            type: String,
            default: '24px'
        },
        organizationName: String,
        mogitenIntroduction: String,
        mogitenId: String,
        holdingTime_1: String,
        holdingTime_2: String,
    }
}
</script>

<style lang="scss">
.mogitenItem {
    display: flex;
    position: relative;
    width: 355px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 8px;
    border: 1px solid;
    border-color: $primary-color;
    background: $secondary-color;
}

.mogitenItemHeader {
    display: flex;
    width: 335px;
    height: 60px;
    padding: 0px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    left: -10px;
    top: 10px;
    border-radius: 8px;
    background: $primary-color;
}

.mogitenItemHeader .organization {
    color: $secondary-color;
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-size: 14px;
    margin: 0;
}

.mogitenItemHeader .title {
    color: $secondary-color;
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-size: 24px;
    margin: 0;
}

.mogitenItem .ItemContent {
    display: flex;
    padding: 85px 15px 15px 15px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
}

.mogitenItem .ItemContent .DetailContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 10px;
}

.mogitenItem .ItemContent .DetailContainer .location {
    display: flex;
    align-items: flex-start;
    align-self: stretch;
}

.mogitenItem .ItemContent .DetailContainer .location a {
    color: inherit;
    text-decoration: none;
    display: flex;
}

.mogitenItem .ItemContent .DetailContainer .location .locationLink img {
    width: 25px;
    height: 25px;
}

.mogitenItem .ItemContent .DetailContainer .location .locationLink p {
    margin: 0;
    margin-left: 10px;
}

.mogitenItem .ItemContent .DetailContainer .schedule {
    display: flex;
    align-items: flex-start;
}

.mogitenItem .ItemContent .DetailContainer .schedule img {
    width: 25px;
    height: 25px;
}

.mogitenItem .ItemContent .DetailContainer .schedule .dates {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    margin-left: 10px;
}

.mogitenItem .ItemContent .DetailContainer .schedule .dates p {
    margin: 0;
}

.mogitenItem .ItemContent .Introduction {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    margin: 0;
    width: 325px;
    font-size: 14px;
}
</style>