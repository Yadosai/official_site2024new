<template>
    <h1>企画ページのitemです。</h1>
    <div class="timeTableContainer">
        <div class="locations">
            <div class="locationItem" v-for="(stage, index) in stages" :key="index">
                <p>{{ stage.name }}</p>
            </div>
        </div>
        <div class="timeTable_1">
            <div class="sidebar">
                <p v-for="hour in hoursRange" :key="hour">{{ hour }}</p>
                <div class="horizontalLineContainer">
                    <svg v-for="hour in hoursRange" :key="`line-${hour}`" xmlns="http://www.w3.org/2000/svg" width="19"
                        height="2" viewBox="0 0 19 2" fill="none" class="horizontalLine">
                        <path d="M0 1.42847H19" stroke="white" />
                    </svg>
                </div>
            </div>
            <div class="inTimeTable" :style="lineWidthStyle">
                <div class="lineContainer" :style="lineWidthStyle">
                    <div class="line" v-for="n in linesCount" :key="n"></div>
                </div>
            </div>
            <div class="closeSidebar" :style="sidebarCloseStyle">
            </div>
            <div class="timeTableContent">
                <div class="stageItemContainer" v-for="stageId in [1, 2, 3, 4]" :key="stageId">
                    <div v-for="kikaku in filteredKikakuData(stageId)" :key="kikaku.id" class="kikakuItem"
                        :style="getStyle(kikaku.kikakuStart, kikaku.kikakuEnd, timeTableStart)">
                        <a :href="kikaku.id" class="stageKikakuLink">
                            <p class="stageKikakuName">{{ kikaku.kikakuName }}</p>
                            <p class="stageKikakuTime">{{ kikaku.kikakuStart }} - {{ kikaku.kikakuEnd }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        kikakuData: {
            type: Array,
            default: () => []
        },
        stages: {
            type: Array,
            default: () => []
        },
        timeTableStart: {
            type: String,
            required: true
        },
        timeTableEnd: {
            type: String,
            required: true
        }
    },
    methods: {
        filteredKikakuData(stageId) {
            return this.kikakuData.filter(kikaku => kikaku.stageId === stageId);
        },
        getStyle(startTime, endTime, timeTableStart) {
            const startMinutes = this.getMinutesFromTimeString(startTime);
            const endMinutes = this.getMinutesFromTimeString(endTime);
            const baseMinutes = 60 * Number(timeTableStart);
            const top = (startMinutes - baseMinutes) * this.pixelsPerMinute;
            const height = (endMinutes - startMinutes) * this.pixelsPerMinute;

            return {
                top: `${top}px`,
                height: `${height}px`
            };
        },
        getMinutesFromTimeString(timeString) {
            const [hours, minutes] = timeString.split(':').map(Number);
            return hours * 60 + minutes;
        }
    },
    computed: {
        pixelsPerMinute() {
            // 1時間につきどのくらいのピクセルかを定義
            return 2.1;
        },
        linesCount() {
            return (Number(this.timeTableEnd) - Number(this.timeTableStart)) * 6 + 7;
        },
        lineWidthStyle() {
            const baseWidth = 171;
            const spacing = 15;
            const additionalSpacing = 15;
            const width = (baseWidth + spacing) * this.stages.length + additionalSpacing;
            return {
                width: width + 'px' // スタイル文字列に変換
            };
        },
        sidebarCloseStyle() {
            return {
                height: (Number(this.timeTableEnd) - Number(this.timeTableStart) + 1) * 126 + "px"
            }
        },
        hoursRange() {
            const startHour = parseInt(this.timeTableStart.split(':')[0], 10);
            const endHour = parseInt(this.timeTableEnd.split(':')[0], 10);
            return Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i);
        }
    }
}
</script>


<style scoped lang="scss">
.timeTableContainer {
    display: inline-flex;
    padding: 25px;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    flex-shrink: 0;
    background: $secondary-color;
}

.locations {
    display: flex;
    padding: 0px 40px;
    align-items: flex-start;
    gap: 10px;
}

.locationItem {
    display: flex;
    width: 135px;
    height: 40px;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 9px;
    border-radius: 8px;
    background: $primary-color;
}

.locationItem p {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    height: 20px;
    flex-shrink: 0;
    color: $secondary-color;
    text-align: center;
    font-size: 14px;
    margin: 0;
}

.timeTable_1 {
    display: flex;
    align-items: flex-start;
    flex-shrink: 0;
    position: relative;
}

.timeTable_1 .sidebar {
    display: flex;
    padding: 51px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 104px;
    align-self: stretch;
    background: $primary-color;
}

.timeTable_1 .closeSidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: $primary-color;
    width: 3px;
}

.timeTable_1 .sidebar p {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    color: $secondary-color;
    text-align: center;
    font-size: 14px;
    width: 19px;
    height: 22px;
    margin: 0;
}

.horizontalLineContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 124px;
    position: absolute;
    margin-top: 74px;
}

.horizontalLine {
    stroke: $secondary-color;

}

.inTimeTable {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
}

.lineContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
}

.lineContainer .line {
    width: 100%;
    height: 1px;
    background: $primary-color;
}

.timeTableContent {
    display: flex;
    padding-left: 40px;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    top: 1px;
}

.stageItemContainer {
    margin-top: -1px;
    display: flex;
    width: 171px;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
}

.kikakuItem {
    background-color: $secondary-color;
    border-radius: 8px;
    border: 1px solid $primary-color;
    position: absolute;
    width: 161px;
    padding: 0 5px;
}

.stageKikakuLink {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
}

.kikakuItem .stageKikakuLink p {
    margin: 0;
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
}

.stageKikakuName {
    font-size: 20px;
}

.stageKikakuTime {
    font-size: 14px;
}
</style>