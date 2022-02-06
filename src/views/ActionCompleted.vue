<template>
  <cover-main>
    <div class="cover_post">
      <div class="post_title">
        <span>{{mesage}}</span>
      </div>      
      <div class="btn_group">
        <post-button v-if="btn_main"
        button_name = "Главная"
        @click="$router.push('/')" />          
        <post-button v-if="btn_add"
        button_name = "Добавить новый"
        @click="$router.push('/AddPost')"/>
        <post-button v-if="btn_rewiew"
        button_name = "Просмотр"
        @click="$router.push('/PostPage/' + id_post_rewiew)"/>
      </div>
    </div>
    
  </cover-main>
</template>

<script>
export default {
    name: 'ActionCompleted',
    props: {
      mesage: {
        type: String,     
        default: 'Сообщение не задано'
      },
      id_post_rewiew: {
        type: String,
        default: ''
      },
      btn_main: {
        type: Boolean,
        default: false
      },
      btn_rewiew: {
        type: Boolean,
        default: false
      },
      btn_add: {
        type: Boolean,
        default: false
      }
    }
};
</script>

<style scoped>

.cover_post {
  width: 100%;
}
span {
  color: #ffffff;
}
.post_title {
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px; 
  
}
.btn_group {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  width: 100%;
}
</style>