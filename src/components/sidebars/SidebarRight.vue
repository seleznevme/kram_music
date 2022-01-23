<template>
  <div class="sidebar_right">    
    <part-sidebar>
      <span
        >На мой взгляд очень актуальная тема, т.к. у нас много людей создающих
        свою музыку, при этом инфомация о них в сети очень разрознена, а иногда
        вообще почти не представлена (за исключением пары чатов в telegram и
        страниц в социальных сетях).</span
      >
    </part-sidebar>
  </div>
</template>

<script>
import PartSidebar from './PartSidebar.vue'
export default {
  name: "SidebarRight",
  components: {
  PartSidebar,
  },
};
</script>

<style scoped>
</style>
