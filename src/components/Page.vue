<template lang="pug">
    div(class="page")
        line-component(v-for="line in data.lines" :key="line.id" :data="line") 
</template>

<script lang="ts">
import Vue from "vue";

import LineComponent from "./Line.vue";

export default Vue.extend({
  props: ["data"],
  components: {
    LineComponent
  }
});
</script>