<template lang="pug">
    text-component(v-if="data.type=='text'" :data="data")
    link-component(v-else-if="data.type=='link'" :data="data")
    button-component(v-else-if="data.type=='button'" :data="data")
</template>

<script lang="ts">
import Vue from "vue";

import TextComponent from "./Text.vue";
import LinkComponent from "./Link.vue";
import ButtonComponent from "./Button.vue";

export default Vue.extend({
  props: ["data"],
  data() {
    return {};
  },
  methods: {},
  components: {
    TextComponent,
    LinkComponent,
    ButtonComponent
  }
});
</script>