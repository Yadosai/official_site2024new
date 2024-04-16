<template>
  <div class="updateInfoItem">
    <!-- propsでリンク先が指定されていれば、nuxt-linkで囲む -->
    <nuxt-link v-if="navigateTo" :to="navigateTo">
      <div class="updateTextContainer">
        <p class="updateDate">{{ updateDate }}</p>
        <p class="updateText">{{ contentText }}</p>
      </div>
    </nuxt-link>
    <!-- リンク先が指定されていない場合は、nuxt-linkを使わずに表示する -->
    <div v-else class="updateTextContainer">
      <p class="updateDate">{{ updateDate }}</p>
      <p class="updateText">{{ contentText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navigateTo: {
      type: String,
      default: ''
    },
    updateDate: {
      type: String,
      required: true
    },
    contentText: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss">
.updateInfoItem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.updateInfoItem {
  width: 100%;
  height: auto;
}

.updateDate {
  font-family: map-get($font-styles, family);
  font-style: map-get($font-styles, style);
  font-weight: map-get($font-styles, weight);
  line-height: map-get($font-styles, line-height);
  color: $secondary-color;
  font-size: 10px;
  margin: 0px;
}

.updateText {
  font-family: map-get($font-styles, family);
  font-style: map-get($font-styles, style);
  font-weight: map-get($font-styles, weight);
  line-height: map-get($font-styles, line-height);
  color: $secondary-color;
  font-size: 14px;
  margin: 0px;
}

@media (min-width: 950px) {

  .updateDate {
    font-size: 20px;
  }

  .updateText {
    font-size: 24px;
  }
}
</style>
