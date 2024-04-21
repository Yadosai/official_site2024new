<template>
    <div class="sponsor">
        <a :href="sponsorUrl" target="_blank" class="no-underline">
            <center>
                <div class="sponsor-logo-container">
                    <img :src=sponsorLogoUrl :alt="'sponsor Logo'" class="sponsor-logo"/>
                </div>
            </center>
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
    height: 160px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,1);
}

.sponsor-logo-container {
    width: 101px;
    height: 70px;
    display: flex;
    align-items: center;
}

.sponsor-logo {
    max-height: 100%;
    object-fit: contain; /* アスペクト比を保ちながら最大限に表示 */
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
    color: black;
}
</style>