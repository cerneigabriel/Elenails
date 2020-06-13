<template>
  <div class="Navbar" :style="navbarStyle">
    <Logo />
    <ul class="Navbar__menu">
      <li class="Navbar__menu__item">
        <router-link to="/">
          <span>Home</span>
        </router-link>
      </li>
      <li class="Navbar__menu__item">
        <router-link to="/about">
          <span>About</span>
        </router-link>
      </li>
      <li class="Navbar__menu__item">
        <router-link to="/gallery">
          <span>Gallery</span>
        </router-link>
      </li>
      <li class="Navbar__menu__item">
        <Search />
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "./Logo";
import Search from "./Search";

export default {
  name: "Navbar",
  props: {
    position: {
      type: String,
      default: "static"
    }
  },
  components: {
    Logo,
    Search
  },
  computed: {
    navbarStyle() {
      return {
        position: this.position
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.Navbar {
  max-width: 100%;
  padding: 35px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background: #ffffff;
  right: 0;
  left: 0;
  top: 0;
  z-index: 2;

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

        span {
          z-index: 1;
        }

        &::before {
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
          transition: opacity 0.3s ease-out;
          opacity: 0;
        }

        &.router-link-exact-active::before {
          opacity: 1;
        }
      }
    }
  }
}
</style>
