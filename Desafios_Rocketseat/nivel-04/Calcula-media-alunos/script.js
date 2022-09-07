let Estudantes = [
    {
        nome: "João",
        nota1: 10,
        nota2: 6,
    },
    {
        nome: "Ana",
        nota1: 8,
        nota2: 7,
    },
    {
        nome: "Cláudio",
        nota1: 9,
        nota2: 4,
    },
    {
        nome: "Roberto",
        nota1: 6,
        nota2: 5.5,
    },

]

for(let estudante of Estudantes){
let resultado = CalculaMedia(estudante.nota1, estudante.nota2)
alert(`A media do estudante ${estudante.nome} é de: ${resultado}
    ${resultado > 7 ? `Parabéns, ${estudante.nome}! Você foi aprovado(a) no concurso!`: `Que pena, ${estudante.nome}, não foi desta vez! Tente novamente!`}
`)
}





function CalculaMedia(nota1, nota2){
    return media = (nota1 + nota2) / 2
}