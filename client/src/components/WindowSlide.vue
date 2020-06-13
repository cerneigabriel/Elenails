<template>
  <v-responsive height="100vh" class="WindowSlide" :class="`bg__${bgColor}`">
    <div class="WindowSlide__slide_button">
      <button type="button" @click="$vuetify.goTo(target, options)">
        <img
          class="WindowSlide__slide_button__icon"
          :src="`/images/icons/window_sliders/slide_${direction}_${theme}.svg`"
          alt="icon"
        />
      </button>
    </div>
    <div class="WindowSlide__content">
      <slot></slot>
    </div>
  </v-responsive>
</template>

<script>
export default {
  name: "WindowSlide",
  props: {
    theme: {
      type: String,
      default: "dark"
    },
    direction: {
      type: String,
      default: "down"
    },
    nextSlide: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: "white"
    },
    bgImg: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selector: this.nextSlide,
      duration: 1000,
      offset: 0,
      easing: "easeOutCubic"
    };
  },
  computed: {
    target() {
      return this.selector;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../variables";

.WindowSlide {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  &__content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__slide_button {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__icon {
      width: 25px;
    }
  }
}
</style>
