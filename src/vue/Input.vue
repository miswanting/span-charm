<template lang="pug">
    div(class="input")
        span >
        span(class="input-value" contenteditable="true" @keydown.enter.prevent="submit" @input="change")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  //   props: ["value"],
  data() {
    return {
      cmd: ""
    };
  },
  methods: {
    change: function(e: any) {
      console.log(e.target.innerText);
      this.cmd = e.target.innerText;
    },
    submit: function(e: any) {
      console.log(e.target.innerText);
      this.$emit("input", e.target.innerText);
      e.target.innerText = "";
    }
  }
});
</script>