<template>
    <div class="qacontainer">
        <div class="question">
            <div class="q-mark">
                <div class="circle red"></div>
                <div class="q">Q</div>
            </div>
            <div class="q-text">{{ question }}</div>
        </div>
        <div class="answer">
            <div class="a-mark">
                <div class="circle white"></div>
                <div class="a">A</div>
            </div>
            <div class="a-text">{{ answer }}</div>
        </div>
        <div class="link">
            <a href="pdf/50th pamphlet.pdf">
                <div class="q-link">{{ linkText }}</div>
            </a>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        question: String,
        answer: String,
        linkText: String,
    }
}
</script>
  
<style lang="scss">
.qacontainer {
    margin: 0;
    width: 344px;
    height: 100%;
    background-color: $quaternary-color;
    border-radius: 8px;
    border: $primary-color 1px solid;
    padding: 15px;
}
.question {
    width: 330px;
    display: flex;
    margin-bottom: 10px;
}
.q-link {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    color: $tertiary-color;
    text-decoration: underline;
}
.answer {
    width: 330px;
    display: flex;
}

.link {
    width: 330px;
    display: flex;
    justify-content: center;
}
.q-mark {
    width: 40px;
    height: 43px;
    position: relative;
    z-index: 4 ;
    margin-right: 10px;
}

.a-mark {
    width: 40px;
    height: 43px;
    position: relative;
    z-index: 4 ;
    margin-right: 10px;
}

.q {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    position: absolute;
    top: 0;
    left: 15px;
    font-size: 30px;
    color: $secondary-color;
    text-shadow: -0.5px 0 $primary-color, 0 0.5px $primary-color, 0.5px 0 $primary-color, 0 -0.5px $primary-color;
    z-index: 3;
}

.a {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    position: absolute;
    top: 0;
    left: 15px;
    font-size: 30px;
    color: $primary-color;
    text-shadow: -0.5px 0 $secondary-color, 0 0.5px $secondary-color, 0.5px 0 $secondary-color, 0 -0.5px $secondary-color;
    z-index: 3;

}

.q-text {
    width: 260px;
    height: 100%;
    font-size: 20px;
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
}

.a-text {
    width: 260px;
    height: 100%;
    font-size: 16px;
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
}


.circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: inline-block;
}

.red {
    background-color: $primary-color;
}
.white {
    background-color: $secondary-color;
    border: $primary-color 1px solid;
}
</style>