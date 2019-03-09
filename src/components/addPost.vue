<template>
  <div id="add-post">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
        <label>Blog Title</label>
        <input type="text" name="title" v-model.lazy="blog.title" id="title" required>
        <label for="content"></label>
        <textarea name="content" id="content" v-model.lazy="blog.content" cols="30" rows="10"></textarea>
        <div id="checkboxes">
            <label>Sports</label>
            <input type="checkbox" value="sports" v-model="blog.categories">
            <label>Health</label>
            <input type="checkbox" value="health" v-model="blog.categories">
            <label>Fashion</label>
            <input type="checkbox" value="fashion" v-model="blog.categories">
            <label>Politics</label>
            <input type="checkbox" value="politics" v-model="blog.categories">
        </div>
        <label>Author:</label>
        <select v-model="blog.author">
            <option v-for="author in authors">{{author}}</option>
        </select>
        <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
        <h4>Thanks for the adding your Post</h4>
    </div>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{blog.title}}</p>
        <p>Blog Content:</p>
        <p>{{blog.content}}</p>
        <p>Blog Categories:</p>
        <ul>
            <li v-for="category in blog.categories">{{category}}</li>
        </ul>
        <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
        blog: {
            title: "",
            content: "",
            categories: [],
            author: ""
        },
        authors: [
            "Jitendra",
            "Tanush",
            "Radha",
            "Shivam"
        ],
        submitted: false
        
      }
  },
  methods: {
      post: function() {
          this.$http.post('https://vue-blog-3c422.firebaseio.com/posts.json', this.blog).then(data => {
              console.log(data);
              this.submitted = true;
          })
      }
  }
}
</script>

<style>
#add-post *{
    box-sizing: borer-box;
}
#add-post{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input {
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label {
    display: inline-block;
}
</style>