<template>
  <div>
    <div class="cover">
      <form class="form_registration">
        <div class="reg_part_left">
          <form-input
          custom_title = "Логин"
          custom_placeholder = "Имя на сайте"
          custom_type = "login"
          v-model = "user.login"/>
          <form-input
          custom_title = "Пароль"
          custom_placeholder = "Пароль"
          custom_type = "password"
          v-model = "user.pass"/>                 
          <form-input
          custom_title = "Повторите пароль"
          custom_placeholder = "Еще раз"
          custom_type = "password"/>
          <form-gender />        
        </div>
        <div class="reg_part_right">
          <form-input
          custom_title = "Имя"
          custom_placeholder = "Ваш e-mail"
          custom_type = "name"
          v-model = "user.name"/>
          <form-input
          custom_title = "mail"
          custom_placeholder = "Ваше имя"
          custom_type = "mail"
          v-model = "user.mail"/>
          <form-textarea
          custom_title = "О себе"
          custom_placeholder = "необязательно.."
          v-model = "user.about"/>
          <div class="btn_group">
            <form-submit
            custom_value = "Реггистрация"/>
          </div>                        
        </div>        
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data () {
    return {
      user: {
        id: '',
        name: '',
        gender: '',
        mail: '',
        login: '',
        pass: '',
        about:'',
      }
    }
  }
};
</script>

<style scoped>
.cover {  
  background-color: #ffffff;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(25, 30, 55, 0.8);
  padding: 15px;
}
span {
  color: #ffffff;
}
.form_registration {
  display: flex;
  width: 80%;
  max-width: 500px;
}
.form_registration * {  
  outline: none;
}
.reg_part_left {
  display: flex;
  flex-direction: column;
  margin: 0 10px;  
}
.reg_part_right {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin: 0 5px;
}
.btn_group {
  display: flex;
  justify-content: flex-end;
}
</style>
