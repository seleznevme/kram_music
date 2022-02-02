<template>
  <div class = "likes_container">
    <post-button class="like"
    button_name = ""
    @click="$store.commit('add_post_like',$route.params.id)">
        <img src="@/components/UI/img/like.png" alt="Понравилось">
    </post-button>    
    <span>{{$store.state.posts.post_list.find((item) => item.id == $route.params.id).like}}</span>
    <post-button class="like"
    button_name = ""
    @click="$store.commit('add_post_dislike',$route.params.id)">
        <img class="img_dislike" src="@/components/UI/img/like.png" alt="Не понравилось">
    </post-button>
    <span>{{$store.state.posts.post_list.find((item) => item.id == $route.params.id).dislike}}</span>
  </div>
</template>

<script>
export default {
    name: 'like-group',
}
</script>

<style scoped>
.likes_container {
    display: flex;
    align-items: center;
}
img {
    height: 100%;
}
span {
    display: block;
    color: #ffffff;
    width: 20px;
    margin: 0 5px;
}
.like {
    margin: 0 10px;}

.img_dislike {
    transform: rotate(180deg);
}
</style>