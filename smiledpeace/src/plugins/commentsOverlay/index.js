import { createApp, h } from 'vue'
import { uuid } from '@/js/helpers'

import CommentsRootContainer from '@components/CommentsRootContainer/CommentsRootContainer.vue'
const defaultOptions = {
  commenterSelector () {
    return {
      id: null,
      fullName: 'Anonymous',
      initials: '--',
      email: null
    }
  },
  data: {
    targets: {},
    onCreate (created) {
      this.targets[created.targetId].comments.push(created)
    },
    onEdit (editted) {
      // This is obviously not necessary
      // It's there to illustrate what could be done in the callback of a remote call
      const comments = this.targets[editted.targetId].comments
      comments.splice(comments.indexOf(editted), 1, editted)
    },
    onRemove (removed) {
      console.log(removed)

      const comments = this.targets[removed.targetId].comments
      console.log(comments.indexOf(removed))

      comments.splice(comments.indexOf(removed), 1)
    }
  }
}

export default {
  install: (app, opts) => {
    const options = { ...defaultOptions, ...opts }

    const root = createApp({
      data: function () {
        return {
          targets: options.data.targets
        }
      },
      // 在根实例上注册Vue事件处理程序
      render: () => h(CommentsRootContainer, {
        onCreate: options.data.onCreate,
        onEdit: options.data.onEdit,
        onRemove: options.data.onRemove
      })
    })
    // render dom
    root.mount(document.body.appendChild(document.createElement('div')))
    // 全局注册实例
    app.directive('comments-enabled', {
      mounted (el, binding) {
        root.$set(
          root.targets,
          binding.value,
          {
            id: binding.value,
            comments: [],
            getRect: () => el.getBoundingClientRect()
          }
        )

        el.addEventListener('click', (evt) => {
          root.$emit(`commentTargetClicked__${binding.value}`, {
            id: uuid(),
            commenter: options.commenterSelector(),
            clientX: evt.clientX,
            clientY: evt.clientY
          })
        })
      }
    })
  }
}
