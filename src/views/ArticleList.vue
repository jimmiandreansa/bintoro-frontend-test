<template>
  <section
    class="relative w-full h-screen bg-cover bg-center"
    :style="`background-image: url(${backgroundImage})`"
  >
    <div class="absolute inset-0 bg-black opacity-60"></div>

    <div
      class="relative z-10 flex flex-col items-center h-full text-center text-white"
    >
      <div class="flex items-center justify-between container mt-4">
        <div>
          <img
            src="https://bintoroarchitect.co.id/wp-content/uploads/2021/11/Architect-Putih-scaled.webp"
            alt="Logo"
            class="h-12"
          />
        </div>
        <div
          class="text-white uppercase cursor-pointer flex items-center gap-6"
        >
          <a href="/" class="">Beranda</a>
          <a href="/">Tentang Kami +</a>
          <a href="/">Layanan +</a>
          <a href="/">Portfolio +</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
          <button
            class="ml-10 w-8 h-8 rounded-full border-2 border-dotted border-primary text-primary cursor-pointer"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <h1 class="text-5xl font-semibold absolute left-48 top-1/2">
        News & Articles
      </h1>
      <nav class="mt-4 text-lg absolute right-52 top-1/2">
        <a href="/" class="text-gray-300 hover:text-white">Home</a> -
        <a href="/blog" class="text-orange-500 hover:text-orange-600">Blog</a>
      </nav>
    </div>
  </section>

  <section class="container flex">
    <div class="">
      <div class="w-full flex flex-col gap-12">
        <div v-for="article in articles" :key="article.id"  class="shadow-lg">
          <img
            src="https://bintoroarchitect.co.id/wp-content/uploads/2024/04/Cover-Desain-Rumah-2-Lantai-Sederhana-dan-Biaya-720x400.webp"
            alt="gambar"
          />
          <div class="p-8">
            <router-link
              :to="{ name: 'ArticleDetail', params: { id: article.id } }"
            >
              <h2 class="font-bold text-2xl mb-4">
                {{ article.title }}
              </h2>
            </router-link>
            <div class="flex gap-4 mb-4">
              <p>April 2, 2024</p>
              <p class="font-light">Web Admin</p>
              <p class="font-light">0 Comments</p>
            </div>
            <p>
              {{ article.content.substring(0, 100) }}..
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-96">INi sbelahnya</div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const articles = store.state.articles;
    const loadMoreTrigger = ref(null);

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          store.dispatch("loadMoreArticles");
        }
      });
      observer.observe(loadMoreTrigger.value);
    });

    return { articles, loadMoreTrigger };
  },
  data() {
    return {
      backgroundImage:
        "https://bintoroarchitect.co.id/wp-content/uploads/2021/11/bintoroarchitect-Tips-and-Tricks.webp",
    };
  },
};
</script>

<style>
</style>
