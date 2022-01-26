<template>
  <span>{{custom_title}}</span>
  <textarea style="height: {{custom_height}};" :placeholder="custom_placeholder" />
</template>

<script>
export default {
    name: 'form-textarea',
    props: {
      custom_title: {
      type: String,
      default: 'Название поля',      
      },
      custom_placeholder: {
      type: String,
      default: 'Описание',      
      },
      custom_height: {
      type: String,
      default: 'auto',      
      },
    }
}
</script>

<style scoped>
span {
  color: #ffffff;
  margin-top: 5px;
}
textarea {
  width: 100%;
  padding: 0 10px;
  margin-bottom: 15px;
  outline: none;  
}
</style>