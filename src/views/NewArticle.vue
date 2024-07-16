<template>
  <section class="container mx-auto my-12 px-4 lg:px-8">
    <h1 class="text-3xl font-bold mb-6">Buat Artikel Baru</h1>
    <form @submit.prevent="submitArticle">
      <div class="mb-4">
        <label for="title" class="form-label block text-lg font-medium mb-2">Judul</label>
        <input
          type="text"
          class="form-control w-full p-2 border border-gray-300 rounded-lg"
          id="title"
          v-model="title"
          required
        >
      </div>
      <div class="mb-4">
        <label for="content" class="form-label block text-lg font-medium mb-2">Konten</label>
        <textarea
          class="form-control w-full p-2 border border-gray-300 rounded-lg"
          id="content"
          rows="6"
          v-model="content"
          required
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="image" class="form-label block text-lg font-medium mb-2">URL Gambar</label>
        <input
          type="text"
          class="form-control w-full p-2 border border-gray-300 rounded-lg"
          id="image"
          v-model="image"
          required
        >
      </div>
      <button type="submit" class="btn btn-primary px-4 py-2 bg-blue-600 text-white rounded-lg">Submit</button>
    </form>
  </section>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  setup() {
    const store = useStore();
    const title = ref('');
    const content = ref('');
    const image = ref('');

    const submitArticle = () => {
      const newArticle = {
        id: Date.now(),
        title: title.value,
        content: content.value,
        image: image.value,
        date: new Date().toISOString()
      };
      store.dispatch('addArticle', newArticle);
      title.value = '';
      content.value = '';
      image.value = '';
    };

    return { title, content, image, submitArticle };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
.btn-primary {
  background-color: #1d4ed8;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn-primary:hover {
  background-color: #1e40af;
}
</style>
