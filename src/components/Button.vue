<template lang="pug">
    span(class='button') {{data.value}}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["data"]
});
</script>