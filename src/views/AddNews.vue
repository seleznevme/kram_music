<template>
  <div>
    <cover-main>
      <form>
          <span>Тема</span>
          <input type="text">
          <span>Содержание</span>
          <input type="text">
      </form>
    </cover-main>
  </div>
</template>

<script>
import CoverMain from '@/components/CoverMain.vue'
export default {
  name: "AddNews",
  components: {
  CoverMain,
  },
};
</script>

<style scoped>

</style>
