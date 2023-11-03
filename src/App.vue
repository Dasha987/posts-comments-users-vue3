<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <HomePage
          class="noActive"
          :class="{ active: activeBlock == 1 }"
        ></HomePage>
        <UsersPage
          class="noActive"
          :class="{ active: activeBlock == 2 }"
        ></UsersPage>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HomePage from '@/pages/Home.vue'
import UsersPage from '@/pages/Users.vue'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    Header,
    HomePage,
    UsersPage
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      getData()
    })
    const getData = () => {
      store.dispatch('setData')
    }
    return {
      activeBlock: computed(() => {
        return store.state.activeBlock
      })
    }
  }
}
</script>

<style>
.active {
  display: block;
}
</style>
