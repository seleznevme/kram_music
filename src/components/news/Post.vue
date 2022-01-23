<template>
   <a href="#" class="news">
       <slot></slot>
   </a>
</template>

<script>
export default {
  name: "KmPost",
};
</script>

<style>
.news {
  max-height: 130px;
  background-color: #ffffff;
  margin: 10px auto;
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
