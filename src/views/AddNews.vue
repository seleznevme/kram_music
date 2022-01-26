<template>
  <div>
    <cover-main>
      <form class="cover">
        <form-input
          custom_title = "Тема"
          custom_placeholder = "Тема статьи"
          custom_type = "text"/>        
        <form-textarea
          custom_title = "Содержание"
          custom_placeholder = "Текст статьи"
          custom_height = "200px" />       
        <div class="btn_group">
          <div class="add_img">
            <span>Прикрепить изображение</span>
            <add-file />          
          </div>          
          <div class="btn_submit">
            <form-submit
            custom_value = "Добавить"/>
          </div>
        </div>
      </form>
    </cover-main>
  </div>
</template>

<script>
import AddFile from '../components/UI/AddFile.vue';
export default {
  components: { AddFile },
  name: "AddNews",
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
