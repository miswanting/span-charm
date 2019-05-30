import Vue from "vue";
import WindowComponent from "./components/Window.vue";
import './span-charm.sass'
let v = new Vue({
    el: "#app",
    template: `
    <window-component :data=$data />
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
function newProgram(name: string = 'N/A') {
    let newProgram = {
        type: 'program',
        name: name,
        hash: '',
        title: name,
        nav: {},
        container: {
            pages: []
        }
    }
    v.$data.programs.push(newProgram)
    return newProgram.hash
}
function newPage(programHash: string) {
    let program = getHashProgram(programHash)
}
function newLine(programHash: string) {
    let program = getHashProgram(programHash)
}
function newComponent(programHash: string) {
    let program = getHashProgram(programHash)
}
function getHashProgram(programHash: string) {
    for (let i = 0; i < v.$data.programs.length; i++) {
        const program = v.$data.programs[i];
        if (program.hash == programHash) {
            return program
        }
    }
}
let hash = newProgram('test')
newPage(hash)