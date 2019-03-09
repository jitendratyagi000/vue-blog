<template>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">Vue Blog</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/add-post">Add Post</b-nav-item>
          <b-nav-item to="list-post-title">Posts Title</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>
<script>
export default {
    
}
</script>

