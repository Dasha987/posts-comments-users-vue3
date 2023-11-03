<template>
  <div>
    <div v-if="nameUser" class="navbar-content">
      <div class="btn btnDefault" @click="resetSortUser">&times;</div>
      <div class="element-name">{{ nameUser }}</div>
    </div>
    <postsList v-if="isLoading" />
    <spinner v-else />
    <div v-if="!nameUser" v-myIntersection="loadMorePosts"></div>
  </div>
</template>

<script>
import { computed } from 'vue'
import postsList from '@/components/postsList.vue'
import spinner from '@/components/UI/spinner.vue'
import { useStore } from 'vuex'
export default {
  components: {
    postsList,
    spinner
  },
  setup() {
    const store = useStore()
    return {
      isLoading: computed(() => {
        return store.state.isLoading
      }),
      nameUser: computed(() => {
        return store.state.nameUser
      }),
      resetSortUser: () => store.dispatch('setData'),
      loadMorePosts: () => store.dispatch('loadMoreData')
    }
  }
}
</script>
