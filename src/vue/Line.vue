<template lang="pug">
    div(class='line')
        inline-component(v-for="child in data.child" :key="child.id" :data="child")
</template>

<script lang="ts">
import Vue from "vue";

import InlineComponent from "./Inline.vue";

export default Vue.extend({
  props: ["data"],
  data() {
    return {};
  },
  methods: {},
  components: {
    InlineComponent
  }
});
</script>