<template>
    <div class="otherItem">
        <div class="otherHeader">
            <p :style="{ fontSize: itemFontSize }">{{ itemTitle }}</p>
        </div>
        <div class="otherContent">
            <ul>
                <li v-for="(content, index) in itemContents" :key="index" v-html="renderContent(content)" class="contentText"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemTitle: String,
        itemFontSize: {
            type: String,
            default: '20px'
        },
        itemContents: {
            type: Array,
            default: () => []
        },
    },
    methods: {
        renderContent(content) {
            if (this.isLink(content)) {
                return `<a href="${content.href}" target="_blank">${content.text}</a>`;
            } else {
                return `<span class="linkText">${content.text}</span>`;
            }
        },
        isLink(content) {
            return content && typeof content === 'object' && content.href;
        }
    }
}
</script>

<style lang="scss">
.otherItem {
    display: flex;
    width: 340px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    border: 1px solid;
    border-color: $primary-color;
    background: $quaternary-color;
}

.otherHeader {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 8px 8px 0px 0px;
    background: $primary-color;
    margin-top: -1px;
}

.otherHeader p {
    color: $secondary-color;
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    text-align: center;
    margin: 0;
}

.otherContent {
    display: flex;
    padding: 5px 25px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    align-self: stretch;
}

.otherContent ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 5px;
    display: flex;
    flex-direction: column;
}

.otherContent li {
    width: 100%;
}

.contentText span {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-size: 14px;
}

.contentText a {
    color: $tertiary-color;
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    cursor: pointer;
    color: inherit;
    text-decoration: none; 
    font-size: 14px;
}
</style>