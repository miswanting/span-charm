<template lang="pug">
    span(class='menu' v-on:click='click') ≡
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["name", "initialEnthusiasm"],
  data() {
    return {
      
    };
  },
  methods: {
    click: function() {
      console.log("123");
    }
  },
  computed: {
    exclamationMarks(): string {
      return Array(this.enthusiasm + 1).join("!");
    }
  }
});
</script>