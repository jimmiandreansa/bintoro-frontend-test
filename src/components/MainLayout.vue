<template>
  <div>
    <Navbar />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
/* Tambahkan gaya tambahan di sini jika diperlukan */
</style>
