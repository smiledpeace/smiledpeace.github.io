<template>
  <div>
    <comments-overlay
      v-for="target in targets"
      :target="target"
      :key="target.id"
      @create="onCreate"
      @edit="onEdit"
      @remove="onRemove"
    >
    </comments-overlay>
  </div>

</template>

<script>
import CommentsOverlay from './CommentsOverlay.vue'

export default {
  components: { CommentsOverlay },
  setup (props, { emit }) {
    const onCreate = (params) => {
      emit('create', params)
    }
    const onEdit = (params) => {
      emit('edit', params)
    }
    const onRemove = (params) => {
      emit('remove', params)
    }
    return {
      onCreate,
      onEdit,
      onRemove
    }
  },
  computed: {
    targets () {
      return this.$root.targets
    }
  },
  emits: ['create', 'edit', 'remove']
}
</script>
