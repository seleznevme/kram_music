<template>
  <div>
    <cover-main>
      <div class="news_img">
        <img src="../news/img/news/news1.jpg" />
      </div>
      <div class="news_text">
        <strong
          >SCORPIONS выпускают девятнадцатый альбом. «Я постоянно слышу, что рок
          мертв. Но...</strong
        >
      </div>
    </cover-main>
    <cover-main>
      <div class="news_img">
        <img src="../news/img/news/news2.jpg" />
      </div>
      <div class="news_text">
        <strong>Новая модная метал-группа с женским вокалом (кстати...</strong>
      </div>
    </cover-main>
    <cover-main>
      <div class="news_img">
        <img src="../news/img/news/news3.jpg" />
      </div>
      <div class="news_text">
        <strong
          >Музыкальные итоги 2021 года: новогоднее видеоинтервью с Яном
          Женчаком</strong
        >
      </div>
    </cover-main>
  </div>
</template>

<script>
import CoverMain from '@/components/CoverMain.vue'
export default {
  name: "KmNews",
  components: {
  CoverMain,
  },
};
</script>

<style scoped>
.news_img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  overflow: hidden;
  }
.news_img img { 
  height: auto;
  width: 100%;
  margin: 0 15px;
}
.news_text {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 65%;
  margin-left: auto;  
}
.news_text strong {
  display: block;
  color: #ffffff;
  margin: 0 10px;
}
</style>
