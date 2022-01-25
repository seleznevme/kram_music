<template>
  <part-sidebar>
    <form>
      <input type="" name="" placeholder="Логин" />
      <input type="password" name="" placeholder="Пароль" />
      <form-submit  value="Войти" />      
      <span class="reg" @click="$router.push('/Registration')">регистрация</span>
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

export default {
  name: "SidebarLeft",  
};
</script>

<style scoped>
.reg {
  color: #ffffff;
  cursor: pointer;
}
</style>
