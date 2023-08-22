// formatar valores com no maximmo duas casas decimais e arredondar os centavos
function fomatarValores (value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
return 'R$ ' + value

}

// formatar singulas e plural
function formatarDivisao(value) {
    if (value == 1) return value + ' Pessoa'
    return value + ' Pessoas'
}



//função para criação de inteligencia da calculadora

function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    //console.log({bill,tipPercent,split})
    

    //parte dos calculos matematicos
    
    let valorGorjeta = bill * (tipPercent/100)
    let valorTotalConta = bill + valorGorjeta
    let valorParaCada = valorTotalConta / split
    //console.log({valorParaCada,valorGorjeta,ValorTotalConta})

    //fazendo valores aparecerem na calculadora
    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = fomatarValores(valorGorjeta)
    document.getElementById('totalWithTip').innerHTML = fomatarValores(valorTotalConta)
    document.getElementById('splitValue').innerHTML = formatarDivisao(split)
    document.getElementById('billEach').innerHTML = fomatarValores(valorParaCada)

}