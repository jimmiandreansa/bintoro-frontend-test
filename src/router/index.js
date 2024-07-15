import { createRouter, createWebHistory } from "vue-router";
import ArticleList from "../views/ArticleList.vue";
import ArticleDetail from "../views/ArticleDetail.vue";
import NewArticle from "../views/NewArticle.vue";
import MainLayout from "../components/MainLayout.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", name: "ArticleList", component: ArticleList },
      { path: "article/:id", name: "ArticleDetail", component: ArticleDetail },
      { path: "new-article", name: "NewArticle", component: NewArticle },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
