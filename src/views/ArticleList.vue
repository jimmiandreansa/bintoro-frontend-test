<template>
  <div class="container">
    <h1>Blog</h1>
    <div v-for="article in articles" :key="article.id" class="article-preview">
      <router-link :to="{ name: 'ArticleDetail', params: { id: article.id } }">
        <h2>{{ article.title }}</h2>
      </router-link>
      <p>{{ article.content.substring(0, 100) }}...</p>
    </div>
    <div ref="loadMoreTrigger" class="load-more-trigger"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const articles = store.state.articles;
    const loadMoreTrigger = ref(null);

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          store.dispatch('loadMoreArticles');
        }
      });
      observer.observe(loadMoreTrigger.value);
    });

    return { articles, loadMoreTrigger };
  },
};
</script>

<style>
/* @import 'bootstrap/dist/css/bootstrap.min.css'; */
</style>
