<template>
  <main class="blog" :class="{ 'blog--reading': this.post }">
    <blog-nav :content="content" :filters="filters" :navs="navs"/>
    <blog-feed :filters="filters"/>
    <blog-post :post="post"/>
    <blog-footer/>
  </main>
</template>

<script>
import BlogNav from './BlogNav'
import BlogFeed from './BlogFeed'
import BlogPost from './BlogPost'
import BlogFooter from './BlogFooter'

export default {
  name: 'blog',
  data () {
    return {
      navs: 0,
      title: '',
      labels: {
        post: '',
        author: ''
      }
    }
  },
  components: {
    BlogNav,
    BlogFeed,
    BlogPost,
    BlogFooter
  }, // BlogFeed, BlogPost, BlogFooter
  resource: 'Blog',
  props: {
    post: String,
    author: String
  },
  mounted () {
    this.$getResource('blog')
  },
  computed: {
    content () {
      return {
        title: this.title,
        labels: this.labels
      }
    },
    filters () {
      const filters = {}

      if (this.post) filters.post = this.post
      if (this.author) filters.author = this.author

      return filters
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name !== from.name) this.navs++
    }
  }
}
</script>
