<template>
  <div>
    <cover-main>
      <form class="cover">
        <span>Тема</span>
        <input class="title" type="text" />
        <span>Содержание</span>
        <textarea class="body" type="text" />
        <div class="btn_group">
          <div class="add_img">
            <span>Прикрепить изображение</span>
            <input type="file" />
          </div>
          <div class="btn_submit">
            <input type="submit" />
          </div>
        </div>
      </form>
    </cover-main>
  </div>
</template>

<script>
import CoverMain from "@/components/CoverMain.vue";
export default {
  name: "AddNews",
  components: {
    CoverMain,
  },
};
</script>

<style scoped>
.cover {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.cover span {
  color: #ffffff;
  margin-top: 10px;
}
.title {
  width: 100%;
  padding: 0 10px;
  outline: none;
}
.body {
  width: 100%;
  padding: 10px;
  height: 200px;
  outline: none;
}
.btn_group {
  display: flex;
  align-items: flex-end;
}
.add_img {
  display: flex;
  flex-direction: column;
}
.btn_submit {
  margin-left: auto;
}
</style>
