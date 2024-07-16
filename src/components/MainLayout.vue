<template>
  <div width="100%">
    <Navbar />
    <main>
      <router-view></router-view>
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
</style>
