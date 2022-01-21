<template>
  <div>
    <km-post>
      <div class="news_img">
        <img src="../news/img/news/news1.jpg" />
      </div>
      <div class="news_text">
        <strong
          >SCORPIONS выпускают девятнадцатый альбом. «Я постоянно слышу, что рок
          мертв. Но...</strong
        >
      </div>
    </km-post>
    <km-post>
      <div class="news_img">
        <img src="../news/img/news/news2.jpg" />
      </div>
      <div class="news_text">
        <strong>Новая модная метал-группа с женским вокалом (кстати...</strong>
      </div>
    </km-post>
    <km-post>
      <div class="news_img">
        <img src="../news/img/news/news3.jpg" />
      </div>
      <div class="news_text">
        <strong
          >Музыкальные итоги 2021 года: новогоднее видеоинтервью с Яном
          Женчаком</strong
        >
      </div>
    </km-post>
  </div>
</template>

<script>
import KmPost from './Post.vue'
export default {
  name: "KmNews",
  components: {
  KmPost,
  },
};
</script>

<style scoped>

</style>
