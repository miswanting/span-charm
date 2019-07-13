<template lang="pug">
    div
        nav-component(:data='navData')
        container-component(:data='containerData')
</template>

<script lang="ts">
import Vue from "vue";

import NavComponent from "./Nav.vue";
import ContainerComponent from "./Container.vue";

export default Vue.extend({
  props: ["data"],
  data() {
    return {
      currentProgram: 0,
      programList: []
    };
  },
  methods: {},
  computed: {
    navData: function(): Object {
      let data = {
        currentIndex: 0,
        titles: []
      };
      for (let i = 0; i < this.$props.data.programs.length; i++) {
        const program: any = this.$props.data.programs[i];
        // data.titles.push(program.title);
      }
      return data;
    },
    containerData: function() {
      let data = this.$props.data.programs[this.$data.currentProgram].container;
      return data;
    }
  },
  components: {
    NavComponent,
    ContainerComponent
  }
});
</script>