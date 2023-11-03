<template>
  <div class="element-name">Добавить комментарий:</div>
  <form @submit.prevent="onSubmit">
    <div class="form-input">
      <label>E-mail</label>
      <input
        type="email"
        v-model="comment.email"
        placeholder="Введите e-mail"
        required
      />
    </div>
    <div class="form-input">
      <label>Комментарий</label>
      <input
        type="text"
        v-model="comment.body"
        placeholder="Введите комментарий"
        required
      />
    </div>
    <button class="btn btnDefault" type="submit">Сохранить</button>
  </form>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
export default {
  props: {
    postId: {
      type: Number
    }
  },
  setup(props) {
    const store = useStore()
    const comment = reactive({
      postId: props.postId,
      id: store.state.lengthComment,
      email: '',
      body: ''
    })
    const onSubmit = () => {
      store.dispatch('setComments', comment)
      comment.email = ''
      comment.body = ''
    }
    return {
      comment,
      onSubmit
    }
  }
}
</script>
