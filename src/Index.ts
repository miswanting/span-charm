import Vue from "vue";
import WindowComponent from "./components/Window.vue";

let v = new Vue({
    el: "#app",
    template: `
    <window-component/>
    `,
    data: { name: "World" },
    components: {
        WindowComponent
    }
});