<template>
  <div id="nav" class="z-[99999999]" v-if="$route.meta.role != 'admin'" >
    <Navbar />
  </div>
  <router-view />
   <div id="footer" class="z-[99999999]" v-if="$route.meta.role != 'admin'">
    <Footer></Footer>
  </div>
 
</template>
  

<script>
 import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

    export default {
      components: {
    Footer,
     Navbar,
 }
    }

</script>
<style>
#nav {
  position:sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1px;
}
</style>