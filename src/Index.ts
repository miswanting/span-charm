import Vue from "vue";
import WindowComponent from "./components/Window.vue";
let v = new Vue({
    el: "#app",
    template: `
    <div>
        <window-component :data=$data />
    </div>
    `,
    data: function () {
        return {
            mode: "single",
            child: []
        }
    },
    components: {
        WindowComponent
    }
});
function addPage() {

}
function addLine() {

}
function addComponent() {

}