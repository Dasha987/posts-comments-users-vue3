<template>
  <div class="element">
    <div>
      <div>Email: {{ comment.email }}</div>
      <div>Комментарий: {{ comment.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object
    }
  }
}
</script>
