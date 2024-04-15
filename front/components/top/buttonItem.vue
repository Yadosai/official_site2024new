<template>
    <div class="topPageButtonitemContainer">
        <div class="buttonBackground" :style="buttonBackgroundStyle"></div>
        <nuxt-link :to="navigateTo">
            <div class="textContainer" :style="textContainerStyle">
                <p class="buttonText" :style="textStyle">
                    <span>{{ textHighlightedFirst }}</span>
                    {{ textMiddlePart }}
                    <span>{{ textHighlightedLast }}</span>
                </p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
  props: {
    textHighlightedFirst: String,
    textMiddlePart: String,
    textHighlightedLast: String,
    colorType: {
      type: String,
      default: 'black',
      validator: function (value) {
        return ['black', 'white'].includes(value);
      }
    },
    position: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'right'].includes(value);
      }
    },
    navigateTo: {
      type: String,
      required: true
    }
  },


  computed: {
    buttonBackgroundStyle() {
      return this.position === 'right' ? { right: '0px', bottom: '0px' } : { left: '10px', bottom: '0px' };
    },
    textContainerStyle() {
      const backgroundColor = this.colorType === 'black' ? 'black' : 'white';
      const borderColor = this.colorType === 'black' ? 'white' : 'black';
      return {
        'background-color': backgroundColor,
        'border-color': borderColor,
        'right': this.position === 'right' ? '10px' : '',
        'left': this.position === 'left' ? '0px' : ''
      };
    },
    textStyle() {
      return {
        color: this.colorType === 'black' ? 'white' : 'black',
      };
    }
  }
}
</script>

<style>

.topPageButtonitemContainer {
    display: flex;
    width: 340px;
    height: 150px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    position: relative;
}

.buttonBackground {
    width: 140px;
    height: 140px;
    position: absolute;
    background: #D00000;
}

.textContainer {
    display: flex;
    width: 140px;
    height: 140px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 1px solid;
}

.buttonText {
    align-self: stretch;
    font-family: "Train One";
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
}

.buttonText span {
    color: #D00000;
    text-align: center;
    font-family: "Train One";
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

/* 950px以上のデバイスに対するスタイル */
@media (min-width: 950px) {
  .topPageButtonitemContainer {
      width: 700px;
      height: 260px;
  }

  .buttonBackground {
      width: 250px;
      height: 250px;
  }

  .textContainer {
      width: 250px;
      height: 250px;
  }

  .buttonText {
      font-size: 36px;
  }

  .buttonText span {
      font-size: 96px;
  }
}

</style>
