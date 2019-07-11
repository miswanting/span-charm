<template lang="pug">
    span(class='radio')
        span(class='item' :class="{active: i==data.index}"  v-for="(text,i) in data.text" :key="i" @click="click") {{text}}
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
    render: function() {
      let itemList = [];
      for (let i = 0; i < this.$props.initData.text.length; i++) {
        let item = this.data.text[i];
        // itemList.push(item);
      }
      return itemList;
    },
    click: function(e: any) {
      for (let i = 0; i < this.$props.initData.text.length; i++) {
        const item = this.$props.initData.text[i];
        if (item == e.target.innerText) {
          this.data.index = i;
          break;
        }
      }
      console.log(this.data.index);
    }
  }
});
</script>