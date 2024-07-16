import { createApp } from 'vue'

// import "@fontsource/rubik/200.css";
// import "@fontsource/rubik/300.css";
// import "@fontsource/rubik/400.css";
// import "@fontsource/rubik/500.css";
// import "@fontsource/rubik/600.css";
// import "@fontsource/rubik/700.css";
// import "@fontsource-variable/rubik/300.css";
// import "@fontsource-variable/rubik/400.css";
// import "@fontsource-variable/rubik/500.css";
// import "@fontsource-variable/rubik/600.css";
// import "@fontsource-variable/rubik/700.css";
import './main.css'
import App from './App.vue'
import router from "./router";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
