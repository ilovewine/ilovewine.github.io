<template>
  <vs-row>
    <vs-col w="12">
      <div class="center examplex">
        <vs-navbar
          fixed
          hide-scroll
          square
          text-white
          shadow
          center-collapsed
          class="opaque"
        >
          <vs-navbar-item>
            About
          </vs-navbar-item>
          <vs-navbar-group>
            Contact
          </vs-navbar-group>
        </vs-navbar>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.opaque {
  background-color: opaque($dark);
}
</style>
