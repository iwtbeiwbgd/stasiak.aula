const nomeCompleto = "Bruno Gomes Damasio";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 17;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade atual é "  + idade + " e sou nascido no ano " + anoNascimento );

anoAtual = anoAtual + 1;
idade = idade +1;

console.log (`oi eu sou ${nomeCompleto} meu ano de nascimento é ${anoNascimento} e estamos no ano ${anoAtual} e minha idade é ${idade}`);

const listaDeViagens = new Array(
'Japão', 
'Londres',
'paris',
'Inglaterra',
) ;

console.log(listaDeViagens) ;

console.log(listaDeViagens[4]);
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(3,1);

const idadeComprador = 24;
if (idadeComprador<18){
console.log("Infelizmente você é menor de idade e não pode comprar a passagem")
}
if (idadeComprador>=19){
  console.log("Párabens,você é apto à viajar,para onde deseja ir?")
}