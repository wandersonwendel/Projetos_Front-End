/* 
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

- passo 1 - dar um jeito de pegar o elemento HTML dos botões;
- passo 2 - dar um jeito de identificar o clique do usuario no botão;
- passo 3 - desmarcar o botão selecionado anterior;
- passo 4 - marcar o botão clicado como se estivesse selecionada;
- passo 5 - esconder imagem de fundo anterior;
- passo 6 - fazer aparecer a imagem  de fundo correspondente ao botão clicado;
*/

const botoesCarrossel = document.querySelectorAll('.botao'); /* Construir uma lista com todas as classes "botao" */
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => { /* Percorrer cada elemento daquela lista ..*/
    botao.addEventListener('click', () => { /* e adiciona um evento de clique a eles, executando com os dois parâmetros.
    
    () => { } indica que a expressão à esquerda da seta é o parâmetro da função e a expressão à direita é o corpo da função
    */
        
        desativarBotaoSelecionado(); /* remove a classe "selecionado" do botao*/

        selecionarBotaoCarrossel(botao); /* diciona a classe "selecionado" ao botão que foi clicado. */

        esconderImagemAtiva(); /* emove a classe "ativa" da imagem que estava sendo exibida */

        mostrarImagemDeFundo(indice); /* adiciona a classe "ativa" à imagem que deve ser exibida com base no índice do botão clicado. */
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa'); /* var imagens recebe um indice, para quando houver o clique, esta img que receba a class "ativa", conquequentemente a que irá mostrar a imagem dela de fundo */
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado'); /* Adiciona a classe "selecinado" àquele botão clicado */
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa') /* Busca a imagem com a classe "ativa". Após isso, remove essa classe desta imagem */
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classlist.remove('selecionado'); /* Busca o botão com a classe selecionado. Após isso, remove essa classe deste botão */
}

