<template lang="pug">
    div
        nav-component(:mode='data.mode')
        container-component
        div {{data}}
</template>

<script lang="ts">
import Vue from "vue";
import NavComponent from "./Nav.vue";
import ContainerComponent from "./Container.vue";

export default Vue.extend({
  props: ["data"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {
    NavComponent,
    ContainerComponent
  }
});
</script>