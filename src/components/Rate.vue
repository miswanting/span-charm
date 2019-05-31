<template lang="pug">
    span(class="rate")
      span(class="item" :class="{active: i.i<$data.now}" v-for="i in render()" :key="i.i" @click="click") {{i.text}}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["initData"],
  data() {
    return {
      now: this.$props.initData.now,
      max: this.$props.initData.max
    };
  },
  methods: {
    render: function() {
      let itemList = [];
      for (let i = 0; i < this.$props.initData.max; i++) {
        itemList.push({ i: i, text: temp.default[i] });
      }
      return itemList;
    },
    click: function(e) {
      // console.log(e.target.innerText);
      // console.log(this.$props.initData.max);
      for (let i = 0; i < temp.default.length; i++) {
        const item = temp.default[i];
        if (item == e.target.innerText) {
          if (this.$data.now == i + 1) {
            this.$data.now = 0;
          } else {
            this.$data.now = i + 1;
          }
        }
      }
    }
  }
});

let temp = {
  default: "壹贰叁肆伍"
};
</script>