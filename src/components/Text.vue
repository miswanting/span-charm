<template lang="pug">
    span(class='text' v-html="data.value") 
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["initData"],
  data() {
    let data = this.$props.initData;
    data.value = data.value.replace(/\s/g, "&nbsp;");
    return {
      data: data
    };
  }
});
</script>