<template>
  <div class="container">
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const article = computed(() => store.state.articles.find(a => a.id === route.params.id));

    return { article };
  },
};
</script>

<style>
</style>
