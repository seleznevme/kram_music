<template>
  <div class="gender_wrapper">
    <span>Пол:</span>
    <input type="radio" name="gender"/>
    <span>M</span>
    <input type="radio" name="gender"/>
    <span>Ж</span>
  </div>
</template>

<script>
export default {
  name: "form-gender",
};
</script>

<style scoped>
.gender_wrapper {
  display: flex;
  align-items: center;
}
span {
  color: #ffffff;
  margin-top: 5px;
  margin-left: 5px;
}
input {
  width: 100%;
  height: 70%;
}
</style>