const prompt = require('prompt-sync')();
var cor = prompt("Escolha uma cor (Verde, Amarelo ou Vermelho): ")
if(cor ==  'Verde'){
    console.log("Siga");
}
else if(cor ==  'Amarelo'){
    console.log("Atenção");
}
else if(cor ==  'Vermelho'){
    console.log("Pare");
}
else{
    console.log("Cor inválida")
}