<template>
  <div @click.stop class="wrapper">
      <nav-button class="btn_nav_left">
          <router-link to="/">Главная</router-link>
      </nav-button>
      <nav-button class="btn_nav_left">
          <router-link to="/AddNews">Добавить новостть</router-link>
      </nav-button>
      <nav-button class="btn_nav_left">
          <router-link to="/Registration">Регистрация</router-link>
      </nav-button>
      <nav-button class="btn_nav_left">
          <router-link to="/About">О нас</router-link>
      </nav-button>
  </div>
</template>

<script>
import NavButton from "./NavButton.vue";
export default {
  name: "NavLeft",
  components: {
    NavButton,
  },
};
</script>

<style  scoped>
.wrapper {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: rgba(25, 30, 55, 0.9);;
    background-image: none;
}
.btn_nav_left {
    width: 90%;
    margin: 5px auto;
}

</style>
