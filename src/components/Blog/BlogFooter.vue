<template>
  <transition appear name="v--mask">
    <footer v-once class="blog__footer">
      <a class="signature" href="javascript:;" target="_blank">
        <!-- <img src="../assets/vue-snip.svg"/> -->
        © 2017 — {{ now }} ★ smiledpeace
      </a>
    </footer>
  </transition>
</template>

<script>
export default {
  name: 'blog-footer',
  setup () {
    const now = new Date().getFullYear()
    return {
      now
    }
  }
}
</script>
