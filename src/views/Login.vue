<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 text-gray-600">
    <div class="relative mt-8">
      <div class="hidden sm:block h-56 w-56 text-orange-300 absolute  -left-20 -top-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="a" patternUnits="userSpaceOnUse" width="40" height="40"
              patternTransform="scale(0.6) rotate(0)">
              <rect x="0" y="0" width="100%" height="100%" fill="none" />
              <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" stroke-width="1" stroke="none"
                fill="currentColor" />
            </pattern>
          </defs>
          <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)" />
        </svg>
      </div>
      <div class="hidden sm:block h-28 w-28 text-indigo-300 absolute  -right-20 -bottom-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="b" patternUnits="userSpaceOnUse" width="40" height="40"
              patternTransform="scale(0.5) rotate(0)">
              <rect x="0" y="0" width="100%" height="100%" fill="none" />
              <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" stroke-width="1" stroke="none"
                fill="currentColor" />
            </pattern>
          </defs>
          <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)" />
        </svg>
      </div>

      <!-- Login Form -->
      <div class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
        <div class="flex-auto p-6">
          <div class="mb-10 flex items-center justify-center overflow-hidden">
            <span class="text-3xl font-black lowercase tracking-tight opacity-100">LOGIN...</span>
          </div>
          <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">Selamat Datang</h4>
          <p class="mb-6 text-gray-500">Tolong Login untuk mengakses aplikasi ini.</p>

          <form class="mb-4" @submit.prevent="performLogin">
            <div class="mb-4">
              <label for="email" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email
                Anda</label>
              <input type="email"
                class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                id="email" v-model="email" placeholder="Enter your email" autofocus required />
            </div>
            <div class="mb-4">
              <div class="flex justify-between">
                <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  for="password">Password</label>
                <a href="auth-forgot-password-basic.html"
                  class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"><small>Lupa
                    Password?</small></a>
              </div>
              <input type="password" id="password"
                class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                v-model="password" placeholder="············" />
            </div>
            <div class="mb-4">
              <div class="block">
                <input type="checkbox" id="remember-me"
                  class="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow"
                  checked />
                <label class="inline-block" for="remember-me"> Remember Me </label>
              </div>
            </div>
            <div class="mb-4">
              <button
                class="w-full cursor-pointer select-none rounded-md border border-green-900 bg-orange-600 py-2 px-5 text-center align-middle text-sm text-white shadow hover:bg-indigo-900 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-md transition-colors duration-300"
                type="submit">Login</button>
            </div>

          </form>

          <p class="mb-4 text-center">Baru di kcstore? <a href="/register"
              class="cursor-pointer text-orange-900 no-underline hover:text-indigo-900"> Buat Akun </a></p>
        </div>
      </div>
      <!-- /Login Form -->
    </div>
  </div>
   <!-- Role selection -->
   
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters('auth', ['loginError', 'isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['login']),
    async performLogin() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      const success = await this.login(credentials);

      if (success && this.isAuthenticated) {
        // Fetch user role from database or Vuex state
        const userRole = localStorage.getItem('role'); // Assume 'member' for now, replace with actual logic to fetch from database
        // Redirect based on role
        if (userRole === 'admin') {
          this.$router.push('/admin');
        } else if (userRole === 'member') {
          this.$router.push('/');
        } else {
          // Handle other roles or redirect to a default route
          alert('Invalid user role');
        }
      } else {
        alert("Login Failed");
      }
    },
  },
};
</script>

