<template>
    <div id="pageContainer">
        <top />
    </div>
</template>
  
<script lang="ts">
import top from '~/components/top/index.vue'

export default {
    components: { top }
}

definePageMeta({ 
    layout: 'default',
 })

</script>
  
<style lang="scss">

#pageContainer {
    background-color: $tertiary-color;
    margin-bottom: -1px; //これがないと白い線がfooterの上に出る。
}

</style>
  