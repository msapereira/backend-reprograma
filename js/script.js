function calcularValorHora(){
    const valor = document.querySelector('#ganho-mes')
    const horas = document.querySelector('#horas-dia')
    const resp = document.querySelector('#resposta')
    const horasMes = horas.value*22
    resp.innerHTML = 'R$'+ (valor.value/horasMes).toFixed(2)
}
