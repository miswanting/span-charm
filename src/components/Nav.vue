<template lang="pug">
    nav(class='nav')
        //- span(class='menu') ≡
        span(class='menu') ≡
        title-component(v-if='mode==="single"')
        tag-component(v-else)
        span(class='min') ●
        span(class='max') ●
        span(class='close') ●
</template>

<script lang="ts">
import Vue from "vue";
import TitleComponent from "./Title.vue";
import TagComponent from "./Tag.vue";

export default Vue.extend({
  props: ["mode"],
  components: {
    TitleComponent,
    TagComponent
  }
});
</script>