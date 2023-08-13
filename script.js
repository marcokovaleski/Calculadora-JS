function inser(num) {
    var n1 = document.getElementById("operacaoAtua").innerHTML
    document.getElementById("operacaoAtua").innerHTML = n1 + num

}

function limpaAll() {
    document.getElementById("operacaoAtua").innerHTML = ""

}

function back() {
    var dig = document.getElementById("operacaoAtua").innerHTML
    document.getElementById("operacaoAtua").innerHTML = dig.substring(0, dig.length - 1)

}

function calc() {
    var dig = document.getElementById("operacaoAtua").innerHTML
    document.getElementById("operacaoAtua").innerHTML = eval(dig)

}