import { createStore } from "vuex";

// Fungsi untuk menyimpan artikel ke localStorage
function saveArticlesToLocalStorage(articles) {
  localStorage.setItem("articles", JSON.stringify(articles));
}

// Fungsi untuk memuat artikel dari localStorage
function loadArticlesFromLocalStorage() {
  const articles = localStorage.getItem("articles");
  return articles ? JSON.parse(articles) : [];
}

export default createStore({
  state: {
    articles: loadArticlesFromLocalStorage(),
  },
  mutations: {
    ADD_ARTICLE(state, article) {
      state.articles.push({ ...article, id: state.articles.length + 1 });
      saveArticlesToLocalStorage(state.articles);
    },
    LOAD_MORE_ARTICLES(state, articles) {
      state.articles.push(...articles);
      saveArticlesToLocalStorage(state.articles);
    },
  },
  actions: {
    addArticle({ commit }, article) {
      commit("ADD_ARTICLE", article);
    },
    loadMoreArticles({ commit }) {
      // Mock data untuk load more
      const moreArticles = [
        {
          id: 2,
          title: "Second Article",
          content: "This is the content of the second article.",
        },
        // Tambahkan artikel contoh lainnya jika diperlukan
      ];
      commit("LOAD_MORE_ARTICLES", moreArticles);
    },
  },
});
