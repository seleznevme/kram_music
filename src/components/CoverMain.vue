<template>
   <a href="#" class="cover">
       <slot></slot>
   </a>
</template>

<script>
export default {
  name: "CoverMain",
};
</script>

<style  scoped>
.cover {  
  background-color: #ffffff;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(25, 30, 55, 0.8);
  padding: 10px;
}
</style>
