<template>
    <div class="sponsor">
        <a :href="sponsorUrl" target="_blank" class="no-underline">
                <div class="sponsor-logo-container">
                    <img :src=sponsorLogoUrl :alt="'sponsor Logo'" class="sponsor-logo"/>
                </div>
            <div class="sponsor-descript">{{ sponsorDescript }}</div>
        </a>
    </div>
</template>
  
<script>
export default {
    props: {
        sponsorUrl: String,
        sponsorLogoUrl: String,
        sponsorDescript: String
    }
}
</script>
  
<style lang="scss">
.sponsor {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
    background-color: $secondary-color;
}


.sponsor-logo {
    height: auto;
    width: 150px;
}

.sponsor-descript {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    text-align: center;
    font-size: 14px;
    width: 100%;
    height: auto;
    white-space: pre-wrap; /* 改行と空白を保持 */
}

.no-underline {
    text-decoration: none;
    color: $tertiary-color;
}
</style>