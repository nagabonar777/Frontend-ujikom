<template>
  <nav class="bg-white dark:bg-gray-900 shadow-md sticky z-[99999999] top-0">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center py-4">
        <a href="/" class="flex items-center space-x-2">
          <img src="https://i.pinimg.com/736x/c3/f3/ab/c3f3abf7276a0de7a281468bb220bc5f.jpg" alt="Logo" class="h-8 w-8 rounded-full">
          <span class="text-xl font-bold text-gray-900 dark:text-white">SkillSet</span>
        </a>
        <button @click="toggleMenu" class="block md:hidden focus:outline-none">
          <svg class="h-6 w-6 fill-current text-gray-600 dark:text-gray-300" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M21 12c0 .553-.447 1-1 1H4c-.553 0-1-.447-1-1s.447-1 1-1h16c.553 0 1 .447 1 1zm-7-6c0 .553-.447 1-1 1H4c-.553 0-1-.447-1-1s.447-1 1-1h9c.553 0 1 .447 1 1zm0 12c0 .553-.447 1-1 1H4c-.553 0-1-.447-1-1s.447-1 1-1h9c.553 0 1 .447 1 1z" />
          </svg>
        </button>
        <ul class="hidden md:flex space-x-8 items-center">
          <li><a href="/" class="text-gray-900 dark:text-white hover:text-blue-700">Beranda</a></li>
          <li><a href="/about" class="text-gray-900 dark:text-white hover:text-blue-700">Tentang</a></li>
          <li><a href="/menu" class="text-gray-900 dark:text-white hover:text-blue-700">Kategori</a></li>
          <li><a href="/kontak" class="text-gray-900 dark:text-white hover:text-blue-700">Kontak</a></li>
          <li v-if="isAuthenticated">
            
          </li>
          <li v-if="isAuthenticated">
            <button @click="handleLogout"              
              class="px-4 py-2 text-base font-medium text-white bg-orange-700 hover:bg-indigo-900 focus:outline-none focus:bg-indigo-700 transition-colors duration-300">Logout</button>
          </li>
          <li v-else>
            <button @click="toLogin"
              class="px-4 py-2 text-base font-medium text-white bg-orange-700 hover:bg-indigo-900 focus:outline-none focus:bg-indigo-700 transition-colors duration-300">Login</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['login', 'logout']),
    toggleMenu() {
      const nav = document.getElementById('navbar-default');
      nav.classList.toggle('hidden');
    },
    async handleLogout() {
      await this.logout();
    },
    async handleLogin() {
      await this.login();
    },
    toLogin(){
      window.location.href = '/login';
    }
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
