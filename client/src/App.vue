<template>
  <v-app>
    <Navbar position="absolute" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "fonts";
@import "variables";

* {
  margin: 0;
  padding: 0;
  max-width: 100%;
  outline: none;
}

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2d2d2d;
  font-size: 16px;
  line-height: 1.5;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.height-100 {
  height: 100%;
}

.paddingY-0 {
  padding-top: 0;
  padding-bottom: 0;
}

@media (min-width: 1904px) {
  .container {
    max-width: 1600px !important;
  }
}
</style>
