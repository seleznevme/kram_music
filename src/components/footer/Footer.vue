<template>
  <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="footer_wrapper"></div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: "KmFooter",
};
</script>

<style scoped>
.footer_wrapper {
  box-shadow: 0 0 12px 1px rgb(0 0 0 / 30%);
  height: 150px;
  margin: 10px auto;
  border-radius: 20px;
  background-image: url("img/footer_background.jpg");
}
</style>
