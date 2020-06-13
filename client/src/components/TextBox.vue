<template>
  <div class="TextBox" :class="`TextBox--${align} TextBox--${color}`">
    <div class="TextBox__content">
      <h4 class="TextBox__subtitle">{{ subtitle }}</h4>
      <h1 class="TextBox__title">{{ title }}</h1>
      <hr class="TextBox__devider" />
      <p class="TextBox__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextBox",
  props: {
    subtitle: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      required: true
    },
    align: {
      type: String,
      default: "left"
    },
    color: {
      type: String,
      default: "light"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../variables";

.TextBox {
  $TextBox: &;

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__subtitle {
    color: $dark;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.8rem;
  }

  &__title {
    color: $dark;
    font-size: 3.425rem;
    font-weight: 800;
  }

  &__description {
    color: $dark_text;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 2.4rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: -25px;
      bottom: -25px;
      border-right: 2px solid $dark;
    }
  }

  &__devider {
    width: 7.25rem;
    border: 2px solid $dark;
    margin-bottom: 20px;
  }

  &--left {
    text-align: left;

    #{$TextBox}__content {
      align-items: flex-start;
    }

    #{$TextBox}__description {
      &::after {
        right: -20px;
      }
    }
  }

  &--center {
    text-align: center;

    #{$TextBox}__content {
      align-items: center;
    }

    #{$TextBox}__description {
      &::after {
        display: none;
      }
    }
  }

  &--right {
    text-align: right;

    #{$TextBox}__content {
      align-items: flex-end;
    }

    #{$TextBox}__description {
      &::after {
        left: -20px;
      }
    }
  }

  &--dark {
    #{$TextBox}__subtitle,
    #{$TextBox}__title {
      color: $white;
    }

    #{$TextBox}__description {
      color: $white_text;

      &::after {
        border-color: $white;
      }
    }

    #{$TextBox}__devider {
      border-color: $white;
    }
  }

  &--light {
    #{$TextBox}__subtitle,
    #{$TextBox}__title {
      color: $dark;
    }

    #{$TextBox}__description {
      color: $dark_text;

      &::after {
        border-color: $dark;
      }
    }

    #{$TextBox}__devider {
      border-color: $dark;
    }
  }
}
</style>
