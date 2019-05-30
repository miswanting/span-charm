<template lang="pug">
    nav(class='nav')
        span(class='menu') ≡
        span(v-if='data==="single"')
        span(v-else)
        span(class='min') ●
        span(class='max') ●
        span(class='close') ●
</template>

<script lang="ts">
import Vue from "vue";

import TitleComponent from "./Title.vue";
import TagComponent from "./Tag.vue";

export default Vue.extend({
  props: ["data"],
  components: {
    TitleComponent,
    TagComponent
  }
});
</script>