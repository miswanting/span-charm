<template lang="pug">
    span(class='link') {{data.value}}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["data"]
});
</script>