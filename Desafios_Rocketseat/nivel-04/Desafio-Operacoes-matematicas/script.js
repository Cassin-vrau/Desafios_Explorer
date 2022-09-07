let option 
let resultado

while(option !== 6){

    option = Number(prompt(`Digite a operação que deseja:
    1- Soma
    2- Subtração 
    3- Divisão
    4- Multiplicação
    5- Resto da divisão
    6- Fechar programa
    `))
    if(option == 6){
        alert("Adeus")
    }else{
        let numberOne = Number(prompt("Digite o primeiro número: "))
        let numberTwo = Number(prompt("Digite o Segundo número número: "))
        let verificacaoParOuImpar
        switch(option){
            case 1:
                resultado = numberOne + numberTwo
                verificacaoParOuImpar = resultado % 2 == 0 ? "Par" : "Impar"
                alert(`${resultado} é ${verificacaoParOuImpar}`)
                break
            case 2:
                resultado = numberOne - numberTwo
                verificacaoParOuImpar = resultado % 2 == 0 ? "Par" : "Impar"
                alert(`${resultado} é ${verificacaoParOuImpar}`)
                break
            case 3:
                resultado = numberOne / numberTwo
                verificacaoParOuImpar = resultado % 2 == 0 ? "Par" : "Impar"
                alert(`${resultado} é ${verificacaoParOuImpar}`)
                break
            case 4:
                resultado = numberOne * numberTwo
                verificacaoParOuImpar = resultado % 2 == 0 ? "Par" : "Impar"
                alert(`${resultado} é ${verificacaoParOuImpar}`)       
                break
            case 5:
                resultado = numberOne % numberTwo
                verificacaoParOuImpar = resultado % 2 == 0 ? "Par" : "Impar"
                alert(`${resultado} é ${verificacaoParOuImpar}`)
               break
            default:
            alert("Número inválido, digite novamente")
            break
        }
    }

}

