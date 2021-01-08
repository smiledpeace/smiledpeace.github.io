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
import { watch, computed, ref, reactive } from 'vue'
export default {
  name: 'blog',
  components: { BlogNav, BlogFeed, BlogPost, BlogFooter }, // BlogFeed, BlogPost, BlogFooter
  resource: 'Blog',
  props: {
    post: String,
    author: String
  },
  setup (props, context) {
    const navs = ref(0)
    const state = reactive({
      title: '',
      labels: {
        post: '',
        author: ''
      }
    })
    const content = computed(() => {
      return { title: state.title, labels: state.labels }
    })
    const filters = computed(() => {
      const filters = {}

      if (props.post) filters.post = props.post
      if (props.author) filters.author = props.author

      return filters
    })
    watch('$route.name', (to, from) => {
      if (to !== from) navs.value++
    })
    return {
      navs,
      content,
      filters,
      ...state
    }
  }
}
</script>
