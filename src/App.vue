<template>
  <vs-row id="app" align="space-between" direction="column">
    <vs-col w="12">
      <Header class="sticky-top"></Header>
    </vs-col>
    <vs-col w="12" id="main">
      <main>
        <router-view></router-view>
      </main>
    </vs-col>
    <vs-col w="12">
      <Footer></Footer>
    </vs-col>
  </vs-row>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Footer,
    Header
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1 0 auto;
  height: 200vh;
}
</style>
