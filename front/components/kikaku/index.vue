<template>
    <h1>企画コンポーネント</h1>
    <item />
    <timeTable_1 />
    <timeTable_2 />
</template>
  
<script>
import item from '~/components/kikaku/item'
import timeTable_1 from '~/components/kikaku/timetable_1'
import timeTable_2 from '~/components/kikaku/timetable_2'

export default {
    components: { item,timeTable_1,timeTable_2 },
}
</script>
  
<style scoped>

</style>
  