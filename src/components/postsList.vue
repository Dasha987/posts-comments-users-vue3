<template>
  <post v-for="(post, index) in posts" :key="index" :post="post" />
</template>

<script>
import post from '@/components/post.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    post
  },
  setup() {
    const store = useStore()
    return {
      posts: computed(() => {
        return store.state.data
      })
    }
  }
}
</script>
