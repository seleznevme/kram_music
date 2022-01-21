<template>
  <part-sidebar>
    <form>
      <input type="" name="" placeholder="Логин" />
      <input type="password" name="" placeholder="Пароль" />
      <input class="form_submit" type="submit" name="" value="Войти" />
      <a href="#">регистрация</a>
    </form>
  </part-sidebar>
  <part-sidebar>
    <span>Хочу сделать что-то вроде музыкального портала города на котором
      публиковались бы новости музыкальной сферы и афиши событий. Также
      музыканты Краматорска могли бы, к примеру, презентовать свои новые
      треки.</span>
  </part-sidebar>
</template>

<script>
import PartSidebar from './PartSidebar.vue'
export default {
  name: "SidebarLeft",
  components: {
  PartSidebar,
  },
};
</script>

<style scoped>

</style>
