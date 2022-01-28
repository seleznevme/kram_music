<template>
  <div>
    <cover-main>
      <form @submit.prevent class="form_registration">
        <div class="reg_part_left">
          <form-input
          custom_title = "Логин"
          custom_placeholder = "Имя на сайте"
          custom_type = "login"
          v-model = "login"/>
          <form-input
          custom_title = "Пароль"
          custom_placeholder = "Пароль"
          custom_type = "password"
          v-model = "pass"/>                 
          <form-input
          custom_title = "Повторите пароль"
          custom_placeholder = "Еще раз"
          custom_type = "password"
          v-model = "check_pass"/>
          <form-gender
          v-model = "gender"/>
          <form-select
          v-model = "music_ganre"/>
        </div>
        <div class="reg_part_right">
          <form-input
          custom_title = "Имя"
          custom_placeholder = "Ваше имя"
          custom_type = "name"
          v-model = "name"/>
          <form-input
          custom_title = "mail"
          custom_placeholder = "Ваш e-mail"
          custom_type = "mail"
          v-model = "mail"/>
          <form-textarea
          custom_title = "О себе"
          custom_placeholder = "необязательно.."          
          v-model = "about"
          custom_height = "120px"/>         
          <div class="btn_group">
            <form-submit
            @click="add_user"
            custom_value = "Реггистрация"/>
          </div>                        
        </div>        
      </form>
    </cover-main>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data () {
    return {
      user_list: [],      
      name: '',
      gender: '',
      music_ganre: '',
      mail: '',
      login: '',
      pass: '',
      check_pass: '',
      about:'',
    }
  },
  methods: {
    add_user () {
      const user = {        
        id: Date.now (),
        name: this.name,
        gender: this.gender,
        music_ganre: this.music_ganre,
        mail: this.mail,
        login: this.login,
        pass: this.pass,
        check_pass: this.check_pass,
        about: this.about,
      }
    this.user_list.push (user);
    this.name = '';
    this.gender = '';
    this.music_ganre = '';
    this.mail = '';
    this.login = '';
    this.pass = '',
    this.check_pass = '';
    this.about = '';    
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
