<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="head_wrapper">
            <div class="logo_man_head">
              <img src="../header/img/logo_man.gif" />
            </div>
            <div class="site_name">
              <a href="#">kram-music</a>
              <span>музыкальный портал Краматорска</span>
            </div>
            <div class="logo_notes_head">
              <img src="../header/img/logo_notes.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "KmHeader",
};
</script>

<style scoped>
.head_wrapper {
  display: flex;
  align-items: center;
  box-shadow: 0 0 12px 1px rgb(0 0 0 / 30%);
  margin: 10px auto;
  height: 150px;
  border-radius: 15px;
  background-image: linear-gradient(135deg, #ffae27 0%, #c7200f 100%);
}
.site_name {
  height: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
}
.site_name a {
  font-size: 10vh;
  line-height: 100%;
  color: #000000;
  white-space: nowrap;
}
.site_name span {
  line-height: 100%;
}
.logo_man_head {
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-left: 15px;
}
.logo_man_head img {
  height: 90%;
}
.logo_notes_head {
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-left: 30px;
}
.logo_notes_head img {
  height: 90%;
}
</style>
