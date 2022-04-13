/**
 * Aplica a cor #BECCC3 no background do body da página
 */
function background(){
    document.body.style.backgroundColor = '#BECCC3';

    /**
     * Tarefa/Issue  1
     *
     * Desenvolva uma função capaz de trocar a cor do fundo da página, ou seja,
     * alterar o background do body para a cor #BECCC3.
     */

}

/**
 * Recupera os valores dos campos de texto cujo o id='fname' e id='lname'
 * e apresente o nome e o sobrenome de uma pessoa (separado por um espaço)
 * na div id='result'
 */
function show(){


    var nome = document.getElementById("nomeid");
    
    if (nome.value != "") {
    alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    



     /**
      * Issue  2
      *
      * Recupera os valores dos campos de texto cujo o id='fname' e id='lname' e apresente o nome
      * e o sobrenome de uma pessoa (separado por um espaço) na div id='result'
      */
}

/**
 * Filtra o array de objetos (data) de acordo com os caracteres
 * digitados no campo de texto id='name'
 */
function search(){
 /*var data = [{name: "Rodrigo" , categoria:"nome"}, {name: "Ricardo" , categoria:"nome"}, {name: "Fabio" , categoria:"nome"}, {name: "Alex" , categoria:"nome"}, {name: "Sílvia" , categoria:"nome"}];*/

 function autoComplete(cidade) {

    const data =  [{name: "Rodrigo" , categoria:"nome"}, {name: "Ricardo" , categoria:"nome"}, {name: "Fabio" , categoria:"nome"}, {name: "Alex" , categoria:"nome"}, {name: "Sílvia" , categoria:"nome"}];
            return destino.filter((valor) => {
                    const valorMinusculo = valor.toLowerCase()
                    const cidadeMinusculo = cidade.toLowerCase()
    
                    return valorMinusculo.includes(nomeMinusculo)
              })
       }
      const campo = document.querySelector('.campo')
      const sugestoes = document.querySelector('.sugestoes')
    
      campo.addEventListener('input', ({ target }) => {
          const dadosDoCampo = target.value
          if(data.length) {
             const autoCompleteValores = autoComplete(data)
             sugestoes.innerHTML = `
                ${autoCompleteValores.map((value) => {
                    return (
                       `<li>${value}</li>`
                            )
                 }).join('')}
               `
           }
    })
  
   
    /**
     * Issue 3
     *
     * Utilizando o array (data) de objetos JSON acima, desenvolva um código que permita com que os
     * usuários procurem pelo nome de pessoas. Assim, quando o usuário digitar a letra 'r' no campo
     * de texto (id='name'), todas as pessoas que iniciarem com essa letra devem ser apresentados.
     * Consequentemente, quando for digitado 'ro' o sistema deve filtrar e apresentar na div com o
     * id='search' as pessoas cujo o nome inicia com 'ro'.
     *
     * Segue algumas funções que podem auxiliar na resolução da questão:
     *      substr - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
     *      length - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
     *      toUpperCase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
     *
     * Além disso, a função removeAllChildren abaixo também pode ser útil para o desenvolvimento da solução
     */

}
/*
/**
 * Remove todos os filhos de um nó
 *
 * @param {*} node Um objeto HTML Node
 
    function removeAllChildren(node){
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
*/
