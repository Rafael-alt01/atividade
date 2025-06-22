let premios = {
    div: document.getElementById('resultadoEscolha')
}

function Escolhafeita(){

    let plano = document.getElementById('escolha').value

    premios.div.innerHTML = '';

    if(plano){
        premios.div.innerHTML = `Você escolheu: ${plano}`;
    } else {
        premios.div.innerHTML = `Por favor, selecione um plano`
    }
}