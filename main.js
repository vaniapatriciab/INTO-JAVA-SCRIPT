
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementByld("agradecimento"));
    // alert("Obrigado por clicar");
}    
function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/"
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto")
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual sua idade");
console.log(validaIdade(idade));
*/


/*
var d= new Date();
alert(d);
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/



/*
var idade = prompt("Qual sua idade?")
var  idade=18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");    
}


var frutas = [{nome:"MAÇA", Cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var lista = ["MAÇA", "PERA", "LARANHA"];
lista.push("uva");
//lista.pop();

console.log(lista);
console.log(lista.toString());

var nome = "Vânia Patrícia Barbosa";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time"
//alert(nome + " tem " + idade + " anos ");
alert(n1 + n2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));
*/