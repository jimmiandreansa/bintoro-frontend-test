import { createStore } from "vuex";

function saveArticlesToLocalStorage(articles) {
  localStorage.setItem("articles", JSON.stringify(articles));
}

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
      const moreArticles = [
        {
          id: 2,
          title: "Second Article",
          content: "This is the content of the second article.",
        },
      ];
      commit("LOAD_MORE_ARTICLES", moreArticles);
    },
  },
});
