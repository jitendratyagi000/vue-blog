<template>
  <div id="show-posts" v-themes="'wide'">
    <h1>All Posts Title</h1>
    <input type="text" placeholder="search-posts" v-model="search">
    <div v-for="post in filterdPosts" class="single-post">
        <router-link :to="'/post/' + post.id"><h2 v-random-color>{{post.title | to-upppercase}}</h2></router-link>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixins';
import shortContent from '../mixins/shortContent';

export default {
  data () {
    return {
        posts: [],
        search: ""
    }
  },
  created() {
    this.$http.get('https://vue-blog-3c422.firebaseio.com/posts.json').then(data => {
      return data.json();
    }).then((data) => {
      var postsArray = [];
      for (let key in data) {
        data[key].id = key;
        postsArray.push(data[key]);
      }
      this.posts = postsArray;
    });
  },
  directives: {

  },
  computed: {
    
  },
  filters: {

  },
  mixins: [searchMixin, shortContent]
}
</script>

<style>
#show-posts{
    max-width: 800px;
    margin: 0px auto;
}
.single-post{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
