<template>
  <div class="wrapper">
    <km-header/>
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3">
            <sidebar-left/>
          </div>
          <div class="col-6">
            <km-news/>
          </div>
          <div class="col-3">
            <sidebar-right/>
          </div>
        </div>
      </div>
    </main>
	<km-footer/>  
  </div>
</template>

<script>
import KmHeader from "./components/header/Header.vue";
import KmFooter from "./components/footer/Footer.vue";
import SidebarLeft from "./components/sidebars/SidebarLeft.vue";
import SidebarRight from "./components/sidebars/SidebarRight.vue";
import KmNews from "./components/news/News.vue";
export default {
  name: "App",
  components: {
  KmHeader,
	KmFooter,
	SidebarLeft,
	SidebarRight,
	KmNews,
  },
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

.part_side form a {
  color: #ffffff;
}
.form_submit {
  max-width: 70px;
  border-radius: 5px;
  border: none;
  background-color: #ff8100;
}
.form_submit:hover {
  background-color: #ffd400;
}
</style>
