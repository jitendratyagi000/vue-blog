<template>
    <div id="single-post" class="container">
        <h1>{{post.title}}</h1>
        <article>{{post.content}}</article>
        <hr/>
        <p>Author: <strong>{{post.author}}</strong></p>
        <p>Categories:</p>
        <ul>
            <li v-for="category in post.categories">{{category}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            post: {}
        }
    },
    created() {
        this.$http.get(`https://vue-blog-3c422.firebaseio.com/posts/${this.id}.json`).then((data) => {
            return data.json();
        }).then((data) => {
            this.post = data;
        })
    }
}
</script>

