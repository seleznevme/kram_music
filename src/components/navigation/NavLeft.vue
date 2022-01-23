<template>
  <div @click.stop class="wrapper">
      <nav-button>
          <span>Предложить новость</span>
      </nav-button>
      <nav-button>
          <span>Предложить новость</span>
      </nav-button>
  </div>
</template>

<script>
import NavButton from "./NavButton.vue";
export default {
  name: "NavLeft",
  components: {
    NavButton,
  },
};
</script>

<style  scoped>
.wrapper {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 200px;
    background-color: rgba(25, 30, 55, 0.9);;
    background-image: none;
}


</style>
