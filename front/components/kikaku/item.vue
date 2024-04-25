<template>
    <section>
        <div class="titleContainer">
            <p class="title">{{ title }}</p>
        </div>

        <div class="content">
            <img :src="imgUrl" class="projectImg" :class="{ 'isActive': isActive, 'isInactive': !isActive }">
            <div class="kikakuDesc">
                <p class="group">{{ holder }}</p>
                <div class="placeDateContainer">
                    <a href="" class="place">
                        <img src="~\assets\img\kikaku\place.png">
                        <p class="placeS">{{ place }}</p>
                    </a>
                    <a href="" class="date">
                        <img src="~\assets\img\kikaku\calender.png">
                        <p class="dateS">{{ date }}</p>
                    </a>
                </div>
                <p class="description" :class="{ 'isActive': isActive, 'isInactive': !isActive }" >{{ description }}</p>
            </div>
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

<script setup lang="ts">
import { ref } from 'vue';
defineProps({
    title: String,
    holder: String,
    description: String,
    imgUrl: String,
    place: String,
    placeUrl: String,
    date: String,
    dateUrl: String,
})


const isActive = ref(false);

const toggleDetail = () => {
 isActive.value = !isActive.value;
};

</script>

<style scoped>
section {
    display: flex;
    width: 365px;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 0px -61px;
    flex-wrap: wrap;
    border-radius: 8px;
    background: #FFF;    
    position: relative;
}

.titleContainer {
    display: flex;
    width: 350px;
    height: 60px;
    padding-left: 15px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px 8px 0px 0px;
    background: #D00000;
}

.title {
    width: 251px;
    flex-shrink: 0;
    color: #FFF;
    font-family: "Kaisei HarunoUmi";
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.content {
    display: flex;
    width: 350px;
    padding: 15px;
    /* background: #FFF; */
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
}

.projectImg.isActive {
    margin: 0 auto;
    width: 336.772px;
    height: 190px;
    flex-shrink: 0;
    border-radius: 8px;
}


.kikakuDesc {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

.group {
    margin: 0;
    width: 146.707px;
    color: #000;
    text-align: center;
    font-family: "Kaisei HarunoUmi";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
    color: #000;
    display: flex;
    padding-right: 44.898px;
    align-items: flex-start;
    align-self: stretch;
    cursor: pointer;
}

.placeS{
    margin: 0;
    color: #000;
font-family: "Kaisei HarunoUmi";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.date {
    margin: 0;
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    align-self: stretch;
    cursor: pointer;
}

.dateS{
    margin: auto 0 0 0;
    color: #000;
font-family: "Kaisei HarunoUmi";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.description.isActive {
    width: 332.186px;
    color: #000;
    font-family: "Kaisei HarunoUmi";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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

.openBtn.isInactive{
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

.closeBtn.isInactive{
    display: none;
}

.textOpen {
    margin: 0;
    width: 30px;
    height: 18px;
    color: #D00000;
    text-align: center;
    font-family: "Kaisei HarunoUmi";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.textClose {
    margin: 0;
    width: 45px;
    height: 18px;
    color: #D00000;
    text-align: center;
    font-family: "Kaisei HarunoUmi";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.openBtn img {
    margin: auto 0;
    width: 20px;
    height: 18px;
    fill: #D00000;
}

.closeBtn img {
    margin: auto 0;
    width: 20px;
    height: 18px;
    fill: #D00000;
}
</style>