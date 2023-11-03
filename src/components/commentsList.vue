<template>
  <div class="title">Комментарии:</div>
  <comment
    v-for="(comment, index) in comments"
    :key="index"
    :comment="comment"
  />
  <formAddComment :postId="postId" />
</template>

<script>
import comment from '@/components/comment.vue'
import formAddComment from '@/components/UI/formAdd.vue'
export default {
  components: {
    comment,
    formAddComment
  },
  props: {
    comments: {
      type: Array
    },
    postId: {
      type: Number
    }
  }
}
</script>
