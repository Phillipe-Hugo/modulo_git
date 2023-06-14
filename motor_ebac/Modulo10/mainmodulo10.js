$(document).ready(function() {
    $('#idTelefone').mask('(00) 00000-0000', { placeholder: '(21) 98765-1234' });
    $('#idNome').val('', { placeholder: 'Digite o nome completo' });
    $('#idEndCompleto').val('', { placeholder: 'Digite o endereço completo' });
    $('#idCep').mask('00000000', { placeholder: '00000-000' });
    $('#idCpf').mask('00000000000', { placeholder: '000.000.000-00' });
    $('#idEmail').val('', { placeholder: 'exemplo@email.com' });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            enderecoCompleto: {
                required: true,
            },
            nomeCep: {
                required: true,
            },
            cpf: {
                required: true,
            },
        },
        messages: {
            nome: 'Insira seu nome completo',
            email: {
                required: 'Insira seu e-mail',
                email: 'Insira um e-mail válido'
            },
            telefone: 'Insira seu telefone',
            mensagem: 'Insira sua mensagem',
            enderecoCompleto: 'Insira o endereço completo',
            nomeCep: 'Insira o CEP'
        },
        submitHandler: function(form) {
            // Se todos os campos estiverem corretos, exibir o alerta de sucesso
            alert('Formulário enviado com sucesso');
            form.submit(); // Envie o formulário (remova esta linha se não quiser enviar o formulário)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos === 1) {
                alert('Existe 1 campo incorreto.');
            } else {
                alert(`Existem ${camposIncorretos} campos incorretos.`);
            }
        }
    });
});
