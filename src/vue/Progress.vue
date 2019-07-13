<template lang="pug">
    span(class="progress" now=33 max=100 width="100px")
        span(class="bar")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["initData"]
});
</script>