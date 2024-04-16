<template>
    <div id="pageContainer">
        <top />
    </div>
</template>
  
<script>
import top from '~/components/top/index.vue'

export default {
    components: { top },
    layout: "default",
}
</script>
  
<style lang="scss">

#pageContainer {
    background-color: $tertiary-color;
}

</style>
  