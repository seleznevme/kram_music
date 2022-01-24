<template>
  <div>
    <cover-main>
      <form class="form_registration">
        <div class="reg_part_left">
          <span>Логин</span>
          <input type="login" placeholder="Имя на сайте" />
          <span>Пароль</span>
          <input type="password" placeholder="Пароль" />
          <span>Повторите пароль</span>
          <input type="password" placeholder="Еще раз" />
          <input class="btn_submit" type="submit" value="регистрация" />
        </div>
        <div class="reg_part_right">
          <span>Имя</span>
          <input type="name" placeholder="Ваше имя" />
          <span>mail</span>
          <input type="mail" placeholder="Ваш e-mail" />
          <span>О себе</span>
          <textarea placeholder="необязательно.."></textarea>          
        </div>        
      </form>
    </cover-main>
  </div>
</template>

<script>
import CoverMain from "@/components/CoverMain.vue";
export default {
  name: "Registration",
  components: {
    CoverMain,
  },
};
</script>

<style scoped>
span {
  color: #ffffff;
}
.form_registration {
  display: flex;
  width: 80%;
  max-width: 500px;
}
.form_registration * {
  padding: 0 10px;
  outline: none;
}
.reg_part_left {
  display: flex;
  flex-direction: column;
}
.reg_part_right {
  display: flex;
  flex-direction: column;
  margin-left: auto;
}
.btn_submit {
  max-width: 130px;
  margin-top: 20px;
}
</style>
