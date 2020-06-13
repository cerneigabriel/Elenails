<template>
  <div class="Search" v-bind:class="{ 'Search--hide': !search.show }">
    <div class="Search__container">
      <input
        type="text"
        class="Search__input"
        v-model="search.input"
        placeholder="Search..."
      />

      <button
        type="button"
        class="Search__button"
        @click="search.show = !search.show"
      >
        <v-icon>{{ search.icon }}</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { mdiMagnify } from "@mdi/js";

export default {
  name: "Search",
  data() {
    return {
      search: {
        show: false,
        icon: mdiMagnify,
        input: ""
      }
    };
  },
  watch: {
    "search.show": function() {
      this.search.input = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.Search {
  $search_class: &;

  width: 15rem;
  display: flex;
  justify-content: flex-end;

  &__container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    width: 15rem;
    transition: width 0.5s ease-out;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      min-width: 57px;
      width: 100%;
      height: 57px;
      border-radius: 50px;
      background-color: #ffffff;
      box-shadow: 0 3px 40px rgba(0, 0, 0, 0.16);
      z-index: -1;
    }
  }

  &__input {
    width: 100%;
    display: block;
    transition: display 0.6s ease-out;
  }

  &__button {
  }

  &--hide {
    #{$search_class}__container {
      width: 57px;
    }

    #{$search_class}__input {
      display: none;
    }
  }
}
</style>
