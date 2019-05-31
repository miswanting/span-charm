<template lang="pug">
    span(class='radio')
        span(class='item' :class="{active: i.i==$data.now}"  v-for="i in render()" :key="i" @click="click") {{i}}
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
      console.log(this.data);
      console.log(this.$props);
      let itemList = [];
      for (let i = 0; i < this.$props.initData.text.length; i++) {
        let item = this.data.text[i];
        itemList.push(item);
      }
      return itemList;
    },
    click: function(e) {
      console.log(e.target.innerText);
    }
  }
});
</script>