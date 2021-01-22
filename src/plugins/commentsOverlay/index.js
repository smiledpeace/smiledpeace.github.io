import { createApp, h, reactive } from 'vue'
import { uuid } from '@/js/helpers'
import bus from '@/js/bus'
import CommentsRootContainer from '@components/CommentsRootContainer/CommentsRootContainer.vue'
const defaultOptions = {
  commenterSelector () {
    return {
      id: null,
      fullName: 'Anonymous',
      initials: '--',
      email: null
    }
  }
}

export default {
  install: (app, opts) => {
    const state = reactive({
      targets: {}
    })
    const options = { ...defaultOptions, ...opts }

    const root = createApp({
      name: 'CommentsRoot',
      setup () {
        return {
          ...state
        }
      },
      // 在根实例上注册Vue事件处理程序
      render: () => h(CommentsRootContainer, {
        onCreate: created => state.targets[created.targetId].comments.push(created),
        onEdit: editted => {
          const comments = state.targets[editted.targetId].comments
          comments.splice(comments.indexOf(editted), 1, editted)
        },
        onRemove: (removed) => {
          console.log(removed)

          const comments = state.targets[removed.targetId].comments
          console.log(comments.indexOf(removed))

          comments.splice(comments.indexOf(removed), 1)
        }
      })
    })
    // render dom
    root.mount(document.body.appendChild(document.createElement('div')))
    // 全局注册实例
    app.directive('comments-enabled', {
      mounted (el, binding) {
        state.targets[binding.value] = {
          id: binding.value,
          comments: [],
          getRect: () => el.getBoundingClientRect()
        }

        el.addEventListener('click', (evt) => {
          bus.$emit(`commentTargetClicked__${binding.value}`, {
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
