<template lang="pug">
    div(class="viewport")
        div(class="container")
            page-component(v-for="page in data.pages" :key="page.id" :data="page")
            //- div(class="output")
            //-     line-component(:data='data')
            //-     div
            //-         span Span Charm [版本 0.1.0]
            //-     div
            //-         span(class="text") 测试文字
            //-         span(class="text") 测试文字
            //-         span(class="bar" now=33 max=100 width="100px")
            //-             span(class="barbar")
            //-         span(class="text" now=3 max=5) 测试评分
            //-         span(class="text" now=3 max=5) 测试文字气泡
            //-             div(class="popup")
            //-                 div
            //-                     span 气泡
            //-         span(class="button") 测试按钮气泡
            //-             div(class="popup")
            //-                 div
            //-                     span 气泡
            //-         span(class="link") 测试按钮气泡
            //-             div(class="popup")
            //-                 div
            //-                     span 气泡
            //-     div
            //-         span(class="button") 测试按钮
            //-         span(class="link") 测试链接
            //-         span(class="check") 测试多选
            //-         span(class="radio active") 测试单选1
            //-         span(class="radio") 测试单选2
            //-         span(class="radio") 测试禁用单选3
            input-component(@input="input")
            //- div(class="input")
            //-     span >
            //-     span(class="input-value" contenteditable="true")
</template>

<script lang="ts">
import Vue from "vue";

import PageComponent from "./Page.vue";
import LineComponent from "./Line.vue";
import InputComponent from "./Input.vue";

export default Vue.extend({
  props: ["data"],
  methods: {
    input: function(e: any) {
      console.log("aaa", e);
    }
  },
  components: {
    PageComponent,
    InputComponent,
    LineComponent
  }
});
</script>