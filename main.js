// Espera até que o documento esteja totalmente carregado
$(document).ready(function () {
    
    // Adiciona um evento de submissão ao formulário com o id "addTaskForm"
    $('#nova-tarefa').submit(function (event) {

        // Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Obtém o valor do campo de entrada com id "taskName"
        var taskName = $('#nome-tarefa').val();

        // Verifica se o valor não é vazio ou apenas espaços em branco
        if (taskName.trim() !== '') {

        // Adiciona um novo elemento <li> à lista com id "taskList"
            $('#lista-tarefas').append('<li>' + taskName + '</li>');

        // Limpa o campo de entrada    
            $('#nome-tarefa').val('');
        }
    });

    // Adiciona um evento de clique aos elementos <li> dentro de #taskList
    $('#lista-tarefas').on('click', 'li', function () {

    // Adiciona ou remove a classe 'completed', que aplica um estilo de linha através do CSS
        $(this).toggleClass('completed');
    });
});