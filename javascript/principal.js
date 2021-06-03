var botao = document.getElementById('btn')
var foto = document.getElementById('image')
var resultado = document.getElementById('textResult')

foto.style.display = 'none'
resultado.style.display = 'none'

function addComponents(){ //Função para adicionar os Eventos no botão.
    botao.addEventListener('click', verificar)
}

function verificar(){ //Função que vai fazer toda verificação das idades

    let text = document.getElementById('textBox').value
    let sexo = document.getElementsByName('radiosex')
    var idade = calcularIdade(text)
    
    if(text === ''){ // Vai verificar se a caixa de texto está vazia, se estiver ela vai retornar uma alerta!

        alert('Preencha o campo com seu ano de nascimento')
        return;

    }else if(sexo[0].checked){ //Vai verificar se está selecionado o 'radio' masculino.

        foto.style.display = 'block'
        resultado.style.display = 'block'
        resultado.innerHTML = `Detectamos um homem com ${idade} anos`;

        if(idade <= 2){foto.src = './css/images/BebeMenino.jpg'} // Vai verificar se a idade está menor ou igual a 2 anos e aplicar foto de bebe
        if(idade > 2 && idade <= 10){foto.src = './css/images/CriancaMenino.jpg'} // Vai verificar se a idade está maior que 2 anos e abaixo ou igual a 10 anos e aplicar foto de menino
        if(idade > 10 && idade <= 20){foto.src = './css/images/HomemAdolescente.jpg'} // Vai verificar se a idade está maior que 11 anos e abaixo ou igual a 20 anos e aplicar foto de adolescente
        if(idade > 20 && idade <= 55){foto.src = './css/images/HomemAdulto.jpg'} // Vai verificar se a idade está maior que 21 anos e abaixo ou igual a 55 anos e aplicar foto de adulto
        if(idade > 55){foto.src = './css/images/HomemIdoso.jpg'} // Vai verificar se a idade está maior que 56 anos e aplicar foto de idoso

    }else{ // Se não estiver selecionado o 'radio' masculino, vai retornar a outra opção, no caso, feminino (Aqui pode utilizar somente o else pois tem somente 2 opções!)

        resultado.style.display = 'block'
        foto.style.display = 'block'
        resultado.innerHTML = `Detectamos uma mulher com ${idade} anos`;

        if(idade <= 2){foto.src = './css/images/BebeMenina.jpg'} // Vai verificar se a idade está menor ou igual a 2 anos e aplicar foto de bebe
        if(idade > 2 && idade <= 10){foto.src = './css/images/CriancaMenina.jpg'} // Vai verificar se a idade está maior que 2 anos e abaixo ou igual a 10 anos e aplicar foto de menino
        if(idade > 10 && idade <= 20){foto.src = './css/images/MeninaAdolescente.jpg'} // Vai verificar se a idade está maior que 11 anos e abaixo ou igual a 20 anos e aplicar foto de adolescente
        if(idade > 20 && idade <= 55){foto.src = './css/images/MulherAdulta.jpg'} // Vai verificar se a idade está maior que 21 anos e abaixo ou igual a 55 anos e aplicar foto de adulto
        if(idade > 55){foto.src = './css/images/MulherIdosa.png'} // Vai verificar se a idade está maior que 56 anos e aplicar foto de idoso

    }

}

function calcularIdade(numero){ // Função onde vai pegar o ano atual e vai subtrair o ano em que vai ser colocado na caixa de texto.
    var data = new Date()
    var ano = data.getFullYear()
    return ano - numero
}