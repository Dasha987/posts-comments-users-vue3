<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="navbar-logo">{{ title }}</div>
          <ul class="navbar-list">
            <li
              class="navbar-item"
              v-for="(link, index) in links"
              :key="index"
              @click="handleGoBlock(link.id)"
            >
              <div>{{ link.title }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { app, links } from '@/_config.js'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    return {
      title: app.title,
      links: links,
      handleGoBlock: activeBlock => store.commit('setActiveBlock', activeBlock)
    }
  }
}
</script>
