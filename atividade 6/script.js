const nome = "Lais Karina"
var vezes = 0 // fora da função, para manter o valor entre os cliques

function nomeSobrenome (){
    alert(nome)
}
function contar () {
    vezes = vezes + 1;
    alert ("O botão foi clicado " + vezes + " vezes");
}

function mudartexto (){
    var x = document.getElementById ("idparagrafo");
    x.innerHTML = "O botão foi clicado " + nome; 
}


// Variáveis nomes (const, var e let)

// evitar uso do var --> existe mas n use > melhor const ou let.
// const --> é uma variável, mas n é possível mudar é uma variável constante
// let --> é uma variável variável (mudável, manipulável, varia)
// function chama/declara uma função
// react frame work