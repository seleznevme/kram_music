<template>
  <div @click.stop class="wrapper">
    <nav-button  class="btn_nav_left" :class="{ btn_active: $route.path == '/' }" @click="$router.push('/')">
      <span>Главная</span>
    </nav-button>
    <nav-button class="btn_nav_left" :class="{ btn_active: $route.path == '/AddNews' }" @click="$router.push('/AddNews')">
        <span>Добавить новостть</span>      
    </nav-button>
    <nav-button class="btn_nav_left" :class="{ btn_active: $route.path == '/Registration' }" @click="$router.push('/Registration')">
      <span>Регистрация</span>
    </nav-button>
    <nav-button class="btn_nav_left" :class="{ btn_active: $route.path == '/About' }" @click="$router.push('/About')">
      <span>О нас</span>
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
  data () {   
      return {
          path1: '/',
          path2: '/AddNews',
          path3: '/Registration',
          path4: '/About',
      }    
  },
  methods: {

  }
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
  background-color: rgba(25, 30, 55, 0.9);
  background-image: none;
}
.btn_nav_left {
  width: 90%;
  margin: 5px auto;
  cursor: pointer;
}
.btn_active {
    background-color: #ffd400;
}
</style>
