<template>
  <part-sidebar>
    <form class="form_reg">
      <form-input
            custom_title="Ваш email"
            custom_placeholder="email"
            custom_type="email"            
            :modelValue="$store.state.users.user_input.mail"
            @update:modelValue="(mail) => this.$store.commit('user_input_mail', mail)"/>
        <form-input
            custom_title="Пароль"
            custom_placeholder="Пароль"
            custom_type="password"            
            :modelValue="$store.state.users.user_input.pass"
            @update:modelValue="(pass) => this.$store.commit('user_input_pass', pass)"/>
        <div class = "btn_group">
          <form-submit
            custom_value = "Войти"/>      
          <span class="reg" @click="$router.push('/Registration')">регистрация</span>
        </div>      
    </form>
  </part-sidebar>  
  <part-sidebar>
    <span>Хочу сделать что-то вроде музыкального портала города на котором
      публиковались бы новости музыкальной сферы и афиши событий.</span>
  </part-sidebar>
</template>

<script>

export default {
  name: "SidebarLeft",  
};
</script>

<style scoped>
span {
  color: #ffffff;
}
.reg {
  color: #ffffff;
  cursor: pointer;
  margin-left: auto;
}
.form_reg {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  text-align: start;
}
.btn_group {
  width: 100%;
  display: flex;
  margin-top: 10px;
}
</style>
