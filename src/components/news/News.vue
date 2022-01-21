<template>
  <div>
    <a href="#" class="news">
      <div class="news_img">
        <img src="../news/img/news/news1.jpg" />
      </div>
      <div class="news_text">
        <strong
          >SCORPIONS выпускают девятнадцатый альбом. «Я постоянно слышу, что рок
          мертв. Но...</strong
        >
      </div>
    </a>
    <a href="#" class="news">
      <div class="news_img">
        <img src="../news/img/news/news2.jpg" />
      </div>
      <div class="news_text">
        <strong>Новая модная метал-группа с женским вокалом (кстати...</strong>
      </div>
    </a>
    <a href="" class="news">
      <div class="news_img">
        <img src="../news/img/news/news3.jpg" />
      </div>
      <div class="news_text">
        <strong
          >Музыкальные итоги 2021 года: новогоднее видеоинтервью с Яном
          Женчаком</strong
        >
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "KmNews",
};
</script>

<style scoped>
.news {
  max-height: 130px;
  background-color: #ffffff;
  margin: 10px;
  display: flex;
  background: rgba(25, 30, 55, 0.8);
}
.news_img {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 30%;
  margin: 0 10px;
}
.news_img img {
  height: 80%;
  max-width: 100%;
}
.news strong {
  display: block;
  color: #ffffff;
  margin: 0 10px;
}
.news_text {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
