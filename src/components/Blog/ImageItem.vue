<template>
  <figure class="image__wrapper">
      <image-spinner class="image__spinner" ></image-spinner>

    <img
      class="image__item"
      :data-url="source"
      alt="random image"
    />
  </figure>
</template>

<script>
import ImageSpinner from '../common/ImageSpinner.vue'
export default {
  name: 'ImageItem',
  props: {
    source: {
      type: String,
      required: true
    }
  },
  components: {
    ImageSpinner
  }
}
</script>

<style lang="less" scoped>
    .image {
        &__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            &.loaded {
                .image {
                    &__item {
                    visibility: visible;
                    opacity: 1;
                    border: 0;
                    }

                    &__spinner {
                        display: none;
                        width: 100%;
                    }
                }
            }
        }

        &__item {
            width: 100%;
            border-radius: 4px;
            transition: all 0.4s ease-in-out;
            opacity: 0;
            visibility: hidden;
        }
    }
</style>
