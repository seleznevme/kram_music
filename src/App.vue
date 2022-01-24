<template>
  <div class="wrapper" @click="hide_navbar">
    <km-header />
    <nav>
      <nav-top
      @nav_show = 'show_navbar'
      />
    </nav>    
    <nav>
      <nav-left v-if="show_left_navbar"/>
    </nav>
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3">
            <sidebar-left />
          </div>
          <div class="col-6">
            <router-view/>
          </div>
          <div class="col-3">
            <sidebar-right />
          </div>
        </div>
      </div>
    </main>
    <km-footer />
  </div>
</template>

<script>
import KmHeader from "./components/header/Header.vue";
import KmFooter from "./components/footer/Footer.vue";
import SidebarLeft from "./components/sidebars/SidebarLeft.vue";
import SidebarRight from "./components/sidebars/SidebarRight.vue";
import NavTop from "./components/navigation/NavTop.vue";
import NavLeft from "./components/navigation/NavLeft.vue";
export default {
  name: "App",
  components: {
    KmHeader,
    KmFooter,
    SidebarLeft,
    SidebarRight,    
    NavTop,
    NavLeft
  },
  data () {
    return {
      show_left_navbar: false,      
    }    
  },
  methods: {
    show_navbar () {
      this.show_left_navbar = true;       
    },
    hide_navbar () {    
      this.show_left_navbar = false;      
    }
  }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
@font-face {
  font-family: "intro_bold_italic";
  src: url("fonts/Intro_Bold_Italic/intro_bold_italic.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
* {
  font-family: intro_bold_italic;
  color: #000000;
}
input:focus {
  outline: 0;
}
a,
a:active {
  text-decoration: none;
}
.wrapper {
  background-image: url("img/all_background.jpg");
  min-height: 100%;
}
</style>
