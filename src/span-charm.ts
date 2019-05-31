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
                                                value: '    Span Charm [版本 0.1.0-190531]'
                                            }
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    文字控件：'
                                            },
                                            { // text
                                                type: 'text',
                                                value: '测试文字'
                                            },
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    链接控件：'
                                            },
                                            { // link
                                                type: 'link',
                                                value: '测试链接'
                                            },
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    按钮控件：'
                                            },
                                            { // button
                                                type: 'button',
                                                value: '测试按钮'
                                            },
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    进度控件：'
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
                                                value: '    评分控件：'
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
                                                value: '    多选控件：'
                                            },
                                            { // check
                                                type: 'check',
                                                text: '多选',
                                                value: true
                                            },
                                        ]
                                    },
                                    { // line
                                        type: 'line',
                                        child: [
                                            { // text
                                                type: 'text',
                                                value: '    单选控件：'
                                            },
                                            { // radio
                                                type: 'radio',
                                                index: 0,
                                                text: ['A', 'B', 'C']
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