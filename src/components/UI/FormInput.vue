<template>
  <span>{{custom_title}}</span>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="custom_type" :placeholder="custom_placeholder" />
</template>

<script>
export default {
    name: 'form-input',
    props: {
      modelValue: {
      type: String,     
      },
      custom_title: {
      type: String,
      default: 'Название поля',      
      },
      custom_placeholder: {
      type: String,
      default: 'Подсказка',      
      },
      custom_type: {
      type: String,
      default: 'Подсказка',      
      }
    },
    method: {
      
    }
}
</script>

<style scoped>
span {
  color: #ffffff;
  margin-top: 5px;
}
input {
  width: 100%;
  padding: 0 10px;
  margin-bottom: 5px;
}
</style>