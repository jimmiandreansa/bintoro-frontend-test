<template>
  <footer class="bg-gray-900 text-white py-10 container">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <img src="https://bintoroarchitect.co.id/wp-content/uploads/2023/01/Artboard-3-copy.png" alt="Bintoro Architect" class="mb-4 h-12">
        <p>Bintoro Architect merupakan perusahaan perencanaan jasa desain rumah yang memiliki tenaga ahli arsitek terbaik dibidangnya. Kami percaya bahwa setiap kualitas terbaik didukung oleh tenaga kerja terbaik. Sampaikan ide terbaik Anda kepada para arsitek kami.</p>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-4">Informasi</h2>
        <ul>
          <li><a href="#" class="hover:underline">Bio</a></li>
          <li><a href="#" class="hover:underline">FAQs</a></li>
          <li><a href="#" class="hover:underline">Blog</a></li>
          <li><a href="#" class="hover:underline">Testimoni</a></li>
          <li><a href="#" class="hover:underline">Tentang Kami</a></li>
          <li><a href="#" class="hover:underline">Kontak Kami</a></li>
          <li><a href="#" class="hover:underline">Tim Kami</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-4">Recent Post</h2>
        <ul>
          <li class="mb-4">
            <a href="#" class="hover:underline flex">
              <img src="https://bintoroarchitect.co.id/wp-content/uploads/2024/04/Cover-Desain-Rumah-2-Lantai-Sederhana-dan-Biaya.webp" alt="Post 1" class="w-16 h-16 object-cover mr-4">
              <div>
                <p>Inspirasi Desain Rumah 2 Lantai Sederhana...</p>
                <p class="text-gray-400 text-sm">02 Apr / 0 Comments</p>
              </div>
            </a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline flex">
              <img src="https://bintoroarchitect.co.id/wp-content/uploads/2024/03/Cover-Model-Plafon-Ruang-Tamu-Terbaru.webp" alt="Post 2" class="w-16 h-16 object-cover mr-4">
              <div>
                <p>Rekomendasi Model Plafon Ruang Tamu Terbaru...</p>
                <p class="text-gray-400 text-sm">26 Mar / 0 Comments</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline flex">
              <img src="https://bintoroarchitect.co.id/wp-content/uploads/2024/03/Cover-Klasik-Mediterania-Rumah-Mewah-1-Lantai.webp" alt="Post 3" class="w-16 h-16 object-cover mr-4">
              <div>
                <p>10 Inspirasi Klasik Mediterania Rumah Mewah...</p>
                <p class="text-gray-400 text-sm">22 Mar / 0 Comments</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-4">Contact Us</h2>
        <address>
          Grha Bintoro Corp<br>
          Casamora Square, Jalan Sirsak Kav AA1 - AA6<br>
          Ciganjur, Jagakarsa, Jakarta Selatan
        </address>
        <button class="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Whatsapp</button>
      </div>
    </div>
  </footer>
  <div class="bg-primary text-center py-4">
    <p>&copy; 2024 Bintorocorp. All Rights Reserved</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  background-color: #212121;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
address {
  white-space: pre-line;
}
</style>
