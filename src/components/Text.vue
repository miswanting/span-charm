<template lang="pug">
    span(class='text') {{data.value}}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["data"]
});
</script>