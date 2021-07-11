window.alert("Deixe um comentario no final do site ^u^")
function nome() {
    let n = document.getElementById("name")
    n.value = ""
}

function verificar() {
    let dad = document.getElementById("dado")
    dad.value = ""
}
function concluir(){
    let dad = document.getElementById("dado")
    let com = document.getElementById("res")
    let n = document.getElementById("name")
    dad.focus
   
    if(dad.value.length == 0  || dad.value == "Digite seu comentario aqui"){
        alert("[ERRO AO COMENTAR] Digite seu comentario antes de concluir.")
    }else if(n.value.length == 0 || n.value == "Digite seu nome aqui"){
        alert("[ERRO AO COMENTAR] Digite seu nome antes de concluir.")
    }
    else {
        com.innerHTML += (`${n.value} comentou: ${dad.value}`) 
        com.innerHTML += (`</br></br>`)
        dad.value = "Digite seu comentario aqui"
        dad.focus    
    }
}