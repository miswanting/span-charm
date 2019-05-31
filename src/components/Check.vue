<template lang="pug">
    span(class='check' :class="{active: $data.value}" @click="click") {{initData.text}}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["initData"],
  data() {
    return {
      data: this.$props.initData
    };
  },
  methods: {
    click: function(e) {
      this.$data.value = !this.$data.value;
      console.log(this.$data.value);
    }
  }
});
</script>