function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    /* ^ o valor do atributo "innerHTML" do elemento obtido é atualizado com a concatenação do valor original com o valor passado como parâmetro "num". Isso significa que o novo valor do elemento é a junção do valor anterior com o novo valor passado como parâmetro. */
}

function clean(){
    document.getElementById('resultado').innerHTML = ''; /* Função para limpar todo o conteúdo de "resultado", quando se aperta no botão C */
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1); 
    /* A propriedade innerHTML é usada para definir o novo conteúdo HTML do elemento.

    A função substring() é usada para retornar uma parte da string, e o primeiro argumento (0) é o índice inicial da parte que queremos obter, enquanto o segundo argumento (resultado.length - 1) é o índice final (exclusivo). */
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){ /* a variável tem algum valor/conteúdo? */
        document.getElementById('resultado').innerHTML = eval(resultado); /* A função "eval()" avalia o conteúdo como uma expressão matemática e, em seguida, atualiza o conteúdo e mostra o resultado do cálculo. */
    }
    else{ /* nenhum valor/vazio? */
        document.getElementById('resultado').innerHTML = "Sem cáculos!"; /* conteúdo atualiza para "Sem cáculos!" */
    }
}