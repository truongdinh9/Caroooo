function restart(){for (let x=0;x<n;x++){for (let y=0;y<m;y++){document.getElementById('cell-' + x + '-' + y).innerHTML = ""; a[x+4][y+4]=true} } }
let a = [];
let n = parseInt(prompt("Nhập n"));
let m = parseInt(prompt('Nhập m'));
for (let i = 0; i < n + 8; i++) {
    a[i] = [];
    for (let j = 0; j < m + 8; j++) {a[i][j] = true}
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        ooo.innerHTML += '<div id="cell-' + i + '-' + j + '" onclick="play(' + i + ',' + j + ')"  style="position: absolute; border: solid 1px;width: 30px; height: 30px;left:' + 30 * (i+1) + 'px; top: ' + 30 * (j+1) + 'px "> </div>';
    }}
let click = 0;
function play(x, y) {
    if (a[x + 4][y + 4] === true) {
        if (click === 0) {document.getElementById('cell-' + x + '-' + y).innerHTML = '<span style="color:red">X</span>'
            a[x + 4][y + 4] = "X";
            click = 1;
            if (checkwin("X")) {alert("Người đánh X win")}
        } else {
            document.getElementById('cell-' + x + '-' + y).innerHTML = '<span style="color:Blue; top: 5px">O</span>'
            a[x + 4][y + 4] = "O"
            click = 0
            if (checkwin("O")) {alert("Người đánh O win")}
        }
    } else {alert("error")}
}
let b=[]
function checkwin(oo) {for (let i = 4; i < n + 4; i++) {
        for (let j = 4; j < m + 4; j++) {
            b = [true, true, true, true]
            for (let k = 0; k < 5; k++) {if (a[i + k][j] !== oo) {b[0] = false;break;}}
            for (let k = 0; k < 5; k++) {if (a[i][j + k] !== oo) {b[1] = false;break;}}
            for (let k = 0; k < 5; k++) {if (a[i + k][j + k] !== oo) {b[2] = false;break;}}
            for (let k = 0; k < 5; k++) {if (a[i + k][j - k] !== oo) {b[3] = false;break;}}
            if (b[0] || b[1] || b[2] || b[3]){return true}
        }}return false}