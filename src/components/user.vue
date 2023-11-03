<template>
  <div class="element user">
    <div>
      <div class="element-name user">Имя пользователя:</div>
      {{ user.name }}
    </div>
    <button class="btn btnDefault" @click="viewUserPosts(user.id)">
      Просмотреть посты пользователя
    </button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props: {
    user: {
      type: Object
    }
  },
  setup() {
    const store = useStore()
    return {
      viewUserPosts: id => {
        store.dispatch('setUserPosts', id)
        store.commit('setActiveBlock', 1)
      }
    }
  }
}
</script>
