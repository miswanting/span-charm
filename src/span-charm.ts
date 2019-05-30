import Vue from "vue";
import WindowComponent from "./components/Window.vue";
import './span-charm.sass'
let v = new Vue({
    el: "#app",
    template: `
    <div>
        <window-component :data=$data />
    </div>
    `,
    data: function () {
        return { // system
            type: 'platform',
            systemData: {
                mode: "single",
            },
            programs: [
                { // program
                    type: 'program',
                    name: "erajs",
                    title: "TITLE",
                    nav: {},
                    container: {
                        pages: [
                            { // page
                                type: 'page',
                                lines: [
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: 'test text'
                                            },
                                            { // link
                                                type: 'link',
                                                value: 'test link'
                                            },
                                            { // button
                                                type: 'button',
                                                value: 'test button'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                }
            ],
            lastPage: null,
            lastLine: null,
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