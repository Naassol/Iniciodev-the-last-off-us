//Passo 1 modo de buscar o elemento no html dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2 pegar o click do usuário no botao
        botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => {

        //Passo 3 desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //Passo 4 marcar o botão clicado estivesse selecionado
        botao.classList.add('selecionado');

        //Passo 5esconder imagem ativa de fundo anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //Passo 6 fazer aparecer a imagem de fundo correspondente ao botao clicado           
        imagens[indice].classList.add('ativa');
        
    })
});


