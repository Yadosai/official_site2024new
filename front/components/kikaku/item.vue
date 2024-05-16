<template>
    <section :id="`${kikakuID}`">
        <div class="titleContainer">
            <p class="title">{{ title }}</p>
        </div>

        <div class="content">
            <img :src=imgUrl class="projectImg"
                :class="{ 'isActive': isActive, 'isInactive': !isActive }">
            <div class="kikakuDesc">
                <p class="group">{{ holder }}</p>
                <div class="placeDateContainer">
                    <a href="kikaku#map" class="place">
                        <img src="~\assets\img\kikaku\place.png">
                        <div class="dateContainer">
                            <p v-for="(place, index) in places" :key="index" class="placeS">{{ place }}</p>
                        </div>
                    </a>
                    <a href="kikaku#timeTable" class="date">
                        <img src="~assets/img/mogiten/calendar.png">
                        <div class="dateContainer">
                            <p v-for="(date, index) in dates" :key="index" class="dateS">{{ date }}</p>
                        </div>
                    </a>
                </div>
                <!-- <p class="description" :class="{ 'isActive': isActive, 'isInactive': !isActive }" >{{ description }}</p> -->
            </div>
            <transition name="fade">
                <p class="description" :class="{ 'description isActive': isActive, 'isInactive': !isActive }">{{
            description }}</p>
            </transition>
        </div>

        <div class="openBtn" :class="{ 'isActive': !isActive, 'isInactive': isActive }" @click="toggleDetail">
            <p class="textOpen">詳細</p>
            <img src="~\assets\img\kikaku\Polygon 2.png">
        </div>

        <div class="closeBtn" :class="{ 'isActive': isActive, 'isInactive': !isActive }" @click="toggleDetail">
            <p class="textClose">閉じる</p>
            <img src="~\assets\img\kikaku\Polygon 2.png">
        </div>
    </section>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
    props: {
        kikakuID: Number,
        title: String,
        holder: String,
        description: String,
        imgUrl: String,
        places: Array,
        placeUrl: String,
        dates: Array,
        dateUrl: String
    },
    setup(props) {
        const isActive = ref(false);

        const checkHash = () => {
            const hash = window.location.hash.substring(1); // #を取り除く
            console.log(hash);
            console.log(`kikaku${props.kikakuID}`);
            if (hash === `${props.kikakuID}`) {
                isActive.value = true;
            } else {
                isActive.value = false;
            }
        };

        onMounted(() => {
            checkHash();
            window.addEventListener('hashchange', checkHash);
        });

        watch(
            () => props.kikakuID,
            () => {
                checkHash();
            }
        );

        const toggleDetail = () => {
            isActive.value = !isActive.value;
        };

        return {
            isActive,
            toggleDetail
        };
    }
};
</script>

<style scoped lang="scss">
section {
    display: flex;
    width: 365px;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 0px -61px;
    flex-wrap: wrap;
    border-radius: 8px;
    background: $secondary-color;
    position: relative;
    scroll-margin-top: 70px;
}

.titleContainer {
    display: flex;
    width: 350px;
    height: 60px;
    padding-left: 15px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px 8px 0px 0px;
    background: $primary-color;
}

.title {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    flex-shrink: 0;
    color: $secondary-color;
    font-size: 20px;
}

.content {
    display: flex;
    width: 350px;
    padding: 15px;
    align-items: flex-start;
    align-content: flex-start;
    gap: 10px;
    flex-shrink: 0;
    flex-wrap: wrap;
}

.projectImg.isInactive {
    object-fit: cover;
    width: 150px;
    height: 150px;
    flex-shrink: 0;
    border-radius: 8px;
    transition: width 0.3s ease-out, height 0.3s ease-out;
    object-fit: cover;
}

.projectImg.isActive {
    margin: 0;
    left: 0px;
    width: 350px;
    height: 190px;
    flex-shrink: 0;
    border-radius: 8px;
    transition: width 0.3s ease-out, height 0.3s ease-out;
    object-fit: cover;
}


.kikakuDesc {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 190px;
}

.group {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    margin: 0;
    width: 146.707px;
    color: $tertiary-color;
    font-size: 20px;
}

.placeDateContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
}

.place {
    margin: 0;
    text-decoration: none;
    color: $tertiary-color;
    display: flex;
    align-items: flex-start;
    align-self: stretch;
    cursor: pointer;
    width: 100%;
}

.place img {
    width: 23px;
    height: 23px;
}

.placeS {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    margin: 0;
    color: $tertiary-color;
    font-size: 14px;
}

.date {
    margin: 0;
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    align-self: stretch;
    cursor: pointer;
    flex-direction: row;
}

.date img {
    width: 23px;
    height: 23px;
}

.dateContainer {
    display: flex;
    flex-flow: column;
}

.dateS {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    margin: auto 0 0 0;
    color: $tertiary-color;
    font-size: 14px;
}

.description.isActive {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    width: 100%;
    color: $tertiary-color;
    font-size: 20px;
    transition: opacity 0.5s;
}

.description.isInactive {
    display: none;
}

.openBtn.isActive {
    display: flex;
    align-items: flex-start;
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
}

.openBtn.isInactive {
    display: none;
}

.closeBtn.isActive {
    display: flex;
    align-items: flex-start;
    position: absolute;
    right: 15px;
    bottom: 17px;
    cursor: pointer;
}

.closeBtn.isInactive {
    display: none;
}

.textOpen {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    margin: 0;
    width: 30px;
    height: 18px;
    color: $primary-color;
    text-align: center;
    font-size: 14px;
}

.textClose {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    margin: 0;
    width: 45px;
    height: 18px;
    color: $primary-color;
    text-align: center;
    font-size: 14px;
}

.openBtn img {
    margin: auto 0;
    width: 20px;
    height: 18px;
    fill: $primary-color;
}

.closeBtn img {
    margin: auto 0;
    width: 20px;
    height: 18px;
    fill: $primary-color;
}
</style>