<template lang="pug">
    div
        nav-component
        container-component
</template>

<script lang="ts">
import Vue from "vue";
import NavComponent from "./Nav.vue";
import ContainerComponent from "./Container.vue";

export default Vue.extend({
  props: ["name", "initialEnthusiasm"],
  data() {
    return {
      enthusiasm: this.initialEnthusiasm
    };
  },
  methods: {
    increment() {
      this.enthusiasm++;
    },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm--;
      }
    }
  },
  computed: {
    exclamationMarks(): string {
      return Array(this.enthusiasm + 1).join("!");
    }
  },
  components: {
    NavComponent,
    ContainerComponent
  }
});
</script>