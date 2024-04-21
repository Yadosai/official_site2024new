<template>
    <h1>企画コンポーネント</h1>
    <item />
    <div class="test">
        <timeTable :kikaku-data="kikakuData" :stages="stageList" timeTableStart="16" timeTableEnd="22"/>
    </div>
</template>

<script>
import item from '~/components/kikaku/item'
import timeTable from '~/components/kikaku/timetable'

export default {
    components: { item, timeTable },
    data() {
        return {
            kikakuData: [
                { id: 1, stageId: 1, kikakuName: '野外ライブ', kikakuStart: '16:30', kikakuEnd: '20:40' },
                { id: 2, stageId: 2, kikakuName: '縁日', kikakuStart: '17:00', kikakuEnd: '20:30' },
                { id: 3, stageId: 3, kikakuName: 'ミニステージ', kikakuStart: '18:15', kikakuEnd: '20:05' },
                { id: 4, stageId: 4, kikakuName: '火文字', kikakuStart: '21:05', kikakuEnd: '21:30' },
                { id: 5, stageId: 3, kikakuName: '企画E', kikakuStart: '16:30', kikakuEnd: '17:00' },
                { id: 6, stageId: 3, kikakuName: '企画F', kikakuStart: '17:15', kikakuEnd: '18:00' },
                { id: 7, stageId: 4, kikakuName: '企画G', kikakuStart: '16:00', kikakuEnd: '17:00' },
                { id: 8, stageId: 4, kikakuName: '企画H', kikakuStart: '17:30', kikakuEnd: '18:30' }
            ],
            stageList: [
                { id: 1, name: 'メインステージ' },
                { id: 2, name: 'メインステージ横' },
                { id: 3, name: '平砂宿舎4・6棟間' },
                { id: 4, name: '平砂宿舎共用等前' },
                { id: 5, name: 'グロビ横駐車場' },
                { id: 6, name: '平砂共用等前交差点' },
            ]
        };
    }
}
</script>

<style scoped>

.test {
    text-align: center;
    width: 100vw;
    overflow-x: scroll;
}

</style>