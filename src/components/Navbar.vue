<template>
  <nav class="bg-primary text-white flex justify-between items-center container h-10">
    <div class="flex items-center">
      <i class="fa-solid fa-phone-volume mr-2"></i>
      <span class="arimo text-black text-sm font-semibold">+62-822-1000-9900</span>
    </div>
    <div class="flex space-x-4">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-weixin"></i>
      <i class="fab fa-youtube"></i>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default {
  name: "Navbar",
  setup() {
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    return { isMenuOpen, toggleMenu };
  },
};
</script>

<style scoped>
/* Tambahkan gaya tambahan di sini jika diperlukan */
</style>
