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
                                                value: '    Span Charm [Ver 0.1.0-190531]'
                                            }
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    Text Component: '
                                            },
                                            { // text
                                                type: 'text',
                                                value: 'TEXT'
                                            },
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    Link Component: '
                                            },
                                            { // link
                                                type: 'link',
                                                value: 'LINK'
                                            },
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    Button Component: '
                                            },
                                            { // button
                                                type: 'button',
                                                value: 'BUTTON'
                                            },
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    Progress Component: '
                                            },
                                            { // progress
                                                type: 'progress',
                                                now: 33,
                                                max: 100,
                                                width: 100
                                            },
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    Rate Component: '
                                            },
                                            { // rate
                                                type: 'rate',
                                                now: 3,
                                                max: 5
                                            },
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    Checkbox Component: '
                                            },
                                            { // check
                                                type: 'check',
                                                text: 'SelectA',
                                                value: false
                                            },
                                            { // check
                                                type: 'check',
                                                text: 'SelectB',
                                                value: true
                                            },
                                            { // check
                                                type: 'check',
                                                text: 'SelectC',
                                                value: false
                                            },
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    Radio Component: '
                                            },
                                            { // radio
                                                type: 'radio',
                                                index: 0,
                                                text: ['SelectA', 'SelectB', 'SelectC']
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