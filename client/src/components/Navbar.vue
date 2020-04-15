<template>
  <div class="Navbar">
    <Logo />
    <ul class="Navbar__menu">
      <li class="Navbar__menu__item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="Navbar__menu__item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="Navbar__menu__item">
        <router-link to="/gallery">Gallery</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "Navbar",
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
.Navbar {
  max-width: 100%;
  padding: 35px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__menu {
    list-style: none;
    display: flex;
    align-items: center;

    &__item {
      padding: 10px 37px;

      a {
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
        color: #2d2d2d;
        position: relative;

        &.router-link-exact-active:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          width: 57px;
          height: 57px;
          border-radius: 50px;
          background-color: #ffffff;
          box-shadow: 0 3px 40px rgba(0, 0, 0, 0.16);
          z-index: -1;
          transform: translateX(-35%);
        }
      }
    }
  }
}

.Navbar a {
}
</style>
