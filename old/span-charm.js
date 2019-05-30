// 监听鼠标/键盘事件
document.body.addEventListener("mousedown", mouse_down)
document.body.addEventListener("mouseup", mouse_up)
document.body.addEventListener("mousemove", mouse_move)
var opt = document.getElementById('output')
var ipt = document.getElementById('input-value')
ipt.addEventListener("keydown", keyboard_down)
ipt.addEventListener("keyup", keyboard_up)

function mouse_down(e) {
    console.log('mouse_down', e.x, e.y, e.button)
    setTimeout(function () {
        ipt.focus();
    }, 0)
}

function mouse_up(e) {
    console.log('mouse_up', e.x, e.y, e.button)
}

function mouse_move(e) {
    console.log('mouse_move', e.x, e.y)
}

function keyboard_down(e) {
    console.log('keyboard_down', e.code, e.keyCode)
    if (e.code == 'Enter' || e.code == 'NumpadEnter') {
        cmd = ipt.innerText.split(' ')
        if (cmd[0] == 'link') {
            var a = document.createElement('a')
            // var linkText = document.createTextNode("my title text");
            opt.appendChild(a)
            a.innerText = cmd[1]
            a.contentEditable = true
        } else if (cmd[0] == 'button') {
            var button = document.createElement('button')
            // var linkText = document.createTextNode("my title text");
            opt.appendChild(button)
            button.innerText = cmd[1]
            button.contentEditable = true
        } else if (cmd[0] == 'help') {
            var button = document.createElement('button')
            // var linkText = document.createTextNode("my title text");
            opt.appendChild(a)
            a.innerText = cmd[1]
        } else {
            opt.innerText += ipt.innerText + '\n'
        }
        // if ipt.innerText.split
        // opt.innerText += ipt.innerText + '\n'
        ipt.innerText = ''
        e.preventDefault()
    }
}

function keyboard_up(e) {
    console.log('keyboard_up', e.code, e.keyCode)
    if (e.code == 'Enter' || e.code == 'NumpadEnter') {}
}