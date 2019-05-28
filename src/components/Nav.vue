<template lang="pug">
    nav
        span(class='menu') ≡
        span(class='title active') EraTerminal
            span(class='close') ●
        span(class='title') EraTerminal
            span(class='close') ●
        span(class='title') EraTerminal
            span(class='close') ●
        span(class='title') EraTerminal
            span(class='close') ●
        span(class='title') EraTerminal
            span(class='close') ●
        span(class='title') EraTerminal
            span(class='close') ●
        span(class='min') ●
        span(class='max') ●
        span(class='close') ●
</template>

<script lang="ts">
import Vue from "vue";

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
  }
});
</script>