<template>
  <user v-for="(user, index) in users" :key="index" :user="user" />
</template>

<script>
import user from '@/components/user.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    user
  },
  setup() {
    const store = useStore()
    return {
      users: computed(() => {
        return store.state.users
      })
    }
  }
}
</script>
