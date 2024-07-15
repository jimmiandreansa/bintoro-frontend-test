<template>
  <div class="container">
    <h1>Create New Article</h1>
    <form @submit.prevent="submitArticle">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="title" required>
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea class="form-control" id="content" rows="3" v-model="content" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  setup() {
    const store = useStore();
    const title = ref('');
    const content = ref('');

    const submitArticle = () => {
      store.dispatch('addArticle', { title: title.value, content: content.value });
      title.value = '';
      content.value = '';
    };

    return { title, content, submitArticle };
  },
};
</script>

<style>
/* @import 'bootstrap/dist/css/bootstrap.min.css'; */
</style>
