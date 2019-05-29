<template lang="pug">
    nav
        //- span(class='menu') ≡
        menu-component
        title-component(v-if='mode==="single"')
        tag-component(v-else)
        span(class='min') ●
        span(class='max') ●
        span(class='close') ●
</template>

<script lang="ts">
import Vue from "vue";
import MenuComponent from "./Menu.vue";
import TitleComponent from "./Title.vue";
import TagComponent from "./Tag.vue";

export default Vue.extend({
  props: ["mode"],
  components: {
    MenuComponent,
    TitleComponent,
    TagComponent
  }
});
</script>