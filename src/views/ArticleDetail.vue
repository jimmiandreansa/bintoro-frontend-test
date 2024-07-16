<template>
  <section class="container mx-auto my-12 px-4 lg:px-8">
    <div class="shadow-lg">
      <img
        src="https://bintoroarchitect.co.id/wp-content/uploads/2024/04/Cover-Desain-Rumah-2-Lantai-Sederhana-dan-Biaya-720x400.webp"
        alt="Gambar Artikel"
        class="w-full h-96 object-cover"
      />
      <div class="p-8">
        <h1 class="font-bold text-3xl mb-4">{{ article.title }}</h1>
        <div class="flex gap-4 mb-4">
          <p>{{ formattedDate }}</p>
          <p class="font-light">Web Admin</p>
          <p class="font-light">0 Komentar</p>
        </div>
        <p>{{ article.content }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const article = computed(() => store.state.articles.find(a => a.id === parseInt(route.params.id)));
    const formattedDate = computed(() => new Date(article.value.date).toLocaleDateString('id-ID'));

    return { article, formattedDate };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
img {
  object-fit: cover;
}
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
