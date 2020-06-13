<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <div class="ImageBox" :class="`${hover ? 'ImageBox--hover' : ''}`">
        <v-img
          class="ImageBox__image"
          :src="image"
          :alt="title"
          aspect-ratio="1"
        ></v-img>
        <div class="ImageBox__content">
          <button type="button" class="ImageBox__button" @click="showLightbox()"  >
            <img :src="'/images/icons/mignify_icon.png'" alt="" />
          </button>
        </div>
      </div>
    </v-hover>
    <!-- <div v-if="light_box_show" class="ImageBox__light_box">
      <img :src="image" alt="" />
    </div> -->
    <lightbox
      id="mylightbox"
      ref="lightbox"
      :images="images"
      :directory="image_details.dir"
      :timeoutDuration="5000"
    ></lightbox>
  </div>
</template>

<script>
export default {
  name: "ImageBox",
  props: {
    image: {
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
    }
  },
  data() {
    return {
      hover: false,
      light_box_show: true,
      image_details: {
        dir: this.image.split("/").reverse().splice(1).reverse().join("/") + "/",
        name: this.image.split("/").splice(1).reverse()[0],
        alt: this.title
      },
      images: [
        {
          dir: this.image.split("/").reverse().splice(1).reverse().join("/") + "/",
          name: this.image.split("/").splice(1).reverse()[0],
          alt: this.title
        }
      ]
    };
  },
  methods: {
    showLightbox: function() {
      this.$refs.lightbox.show(this.image_details.name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../variables";

.ImageBox {
  $ImageBox: &;

  position: relative;
  box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  font-size: 1rem;

  &__button {
    width: 16%
  }

  &__image {
    clip-path: circle();
  }

  &__icon {
    width: 20px;
    height: 20px;
  }

  &__light_box {
    // position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 5;

    img {
      width: 100%;
      max-height: 100%;
    }
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(255, 255, 255, 0.5);
    border: 0.063rem solid rgba(0, 0, 0, 0.1);
    clip-path: circle();
    opacity: 0;
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    transform: scale(1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--hover {
    #{$ImageBox}__content {
      opacity: 1;
      transform: scale(1.09);
    }
  }
}
</style>
