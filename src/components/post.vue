<template>
  <div class="element">
    <div class="element-content">
      <div class="element-name">{{ post.name }}</div>
      <div class="element-body">{{ post.body }}</div>
      <commentsList :comments="post.comments" :postId="post.id" />
    </div>
  </div>
</template>

<script>
import commentsList from '@/components/commentsList.vue'
export default {
  components: {
    commentsList
  },
  props: {
    post: {
      type: Object
    }
  }
}
</script>
