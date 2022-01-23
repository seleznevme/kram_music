<template>
   <div class="nav_button">
       <slot></slot>
   </div>
</template>

<script>
export default {
  name: "NavButton",
};
</script>

<style >
.nav_button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff8100;
  border-radius: 10px;
  padding: 10px;
  height: 35px;
}
</style>
