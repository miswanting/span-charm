<template lang="pug">
    text-component(v-if="data.type=='text'" :initData="data")
    link-component(v-else-if="data.type=='link'" :initData="data")
    button-component(v-else-if="data.type=='button'" :initData="data")
    progress-component(v-else-if="data.type=='progress'" :initData="data")
    rate-component(v-else-if="data.type=='rate'" :initData="data")
    check-component(v-else-if="data.type=='check'" :initData="data")
    radio-component(v-else-if="data.type=='radio'" :initData="data")
</template>

<script lang="ts">
import Vue from "vue";

import TextComponent from "./Text.vue";
import LinkComponent from "./Link.vue";
import ButtonComponent from "./Button.vue";
import ProgressComponent from "./Progress.vue";
import RateComponent from "./Rate.vue";
import CheckComponent from "./Check.vue";
import RadioComponent from "./Radio.vue";

export default Vue.extend({
  props: ["data"],
  data() {
    return {};
  },
  methods: {},
  components: {
    TextComponent,
    LinkComponent,
    ButtonComponent,
    ProgressComponent,
    RateComponent,
    CheckComponent,
    RadioComponent
  }
});
</script>