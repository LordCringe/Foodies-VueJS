<template>
  <div id="app">
    <PageLoader />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import Footer from "@/components/Footer.vue";
import PageLoader from "./components/PageLoader.vue";
export default {
  components: {
    Footer,
    PageLoader,
  },
};
</script>

