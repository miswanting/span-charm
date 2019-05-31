<template lang="pug">
    span(class='button') {{initData.value}}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["initData"]
});
</script>