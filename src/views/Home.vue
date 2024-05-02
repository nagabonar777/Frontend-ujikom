<template>
  <div class="home-page">

    <div class="flex items-center justify-center">

      <h1
        class="mb-4 text-8xl font-extrabold leading-none tracking-tight text-gray-900 md:text-10xl lg:text-12xl dark:text-white">
        Selamat datangg
      </h1>
    </div>
    <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
      Selamat datang di website Skillset kami yang menarik! Temukan berbagai informasi, panduan, dan sumber daya untuk
      mengembangkan dan meningkatkan keterampilan Anda di sini. Mari jelajahi peluang baru dan kembangkan potensi Anda
      bersama kami. Terima kasih atas kunjungan Anda!
      growth.</p>
    <a href="/menu"
      class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
      LANJUT
      <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </a>

  </div>
  <br>  
  <br>
  <br><br>
  <div class="galeri-home">
    <div class="flex items-center justify-center">
      <h5
        class="mb-4 text-8xl font-extrabold leading-none tracking-tight text-gray-900 md:text-10xl lg:text-12xl dark:text-white">
        Gallery
      </h5>
    </div>
  </div>
 <br>
<!-- Galerry -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
        </div>
    </div>
</div>




</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 100px;
  font-family: Arial, sans-serif;
}
.galeri-page {
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
  font-family: Georgia, Times, 'Times New Roman', serif
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.primary-button {
  background-color: #4CAF50;
}

.primary-button:hover {
  background-color: #45a049;
}

.secondary-button {
  background-color: #008CBA;
}

.secondary-button:hover {
  background-color: #007097;
}
</style>