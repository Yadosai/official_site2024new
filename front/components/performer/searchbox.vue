<template>
    <div class="searchbox">
        <h1>出演団体検索</h1>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    
        <form method="get" action="#" class="search_container">
            <input class="placeholder" type="text" size="25" placeholder="団体名を入力してください">
            <!-- <input class="icon" type="image" src="~/assets/img/performer/loupe.png"> -->
            <input class="icon" :src="imageSrc" type="image">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageSrc: require('~/assets/img/performer/loupe.png')
        };
    }
}
</script>

<style scoped lang="scss">
.searchbox {
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
    background-color: $quaternary-color;
}

h1 {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: normal;
    font-size: 24px;
    color: $tertiary-color;
}

.search_container {
    display: flex;
    width: 320px;
    height: 40px;
    padding: 10px;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    border: 1px solid #000;
    background-color: $secondary-color;
}

.placeholder {
    color: $tertiary-color;
    font-family: map-get($font-styles, family);
    font-size: 14px;
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
}

.icon {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 17px;
    bottom: 4.931px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
}


//ここからは https://cotodama.co/search-box/ を参考にしたときのコピペ
.search_container input[type="text"]{
    border: none;
    height: 2.0em;
}

.search_container input[type="text"]:focus {
    outline: 0;
}

.search_container input[type="submit"]{
    cursor: pointer;
    font-family: FontAwesome;
    font-size: 1.3em;
    border: none;
    background: none;
    color: $tertiary-color;
    position: absolute;
    width: 2.5em;
    height: 2.5em;
    right: 0;
    top: -10px;
    outline : none;
}
  
</style>