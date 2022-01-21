<template>
   <div class="part_side">
       <slot></slot>
   </div>
</template>

<script>
export default {
  name: "PartSidebar",
};
</script>

<style>
.part_side {
  text-align: center;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 15px;
  background-image: url("img/part_background.jpg");
  margin: 10px 0;
}
.part_side * {
  width: 95%;
  text-align: center;
  margin: 5px;
  color: #ffffff;
}
.part_side form a {
  color: #ffffff;
}
.form_submit {
  max-width: 70px;
  border-radius: 5px;
  border: none;
  background-color: #ff8100;
}
.form_submit:hover {
  background-color: #ffd400;
}
</style>
