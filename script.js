function validar_formulario_cadastro() {

    var nome = formulariocadastro.nome.value;
    var cpf = formulariocadastro.cpf.value;
    var rg = formulariocadastro.rg.value;
    var sexo = formulariocadastro.sexo.value;
    var endereco = formulariocadastro.endereco.value;
    var numero = formulariocadastro.numero.value;
    var bairro = formulariocadastro.bairro.value;
    var cidade = formulariocadastro.cidade.value;
    var estado = formulariocadastro.estado.value;
    var cep = formulariocadastro.cep.value;
    var celular = formulariocadastro.celular.value;


    if (nome == "") {
        alert("Este campo é obrigatório");
        formulariocadastro.nome.focus();
        return false;
    }
    if (cpf == "") {
        alert("Este campo é obrigatório");
        formulariocadastro.cpf.focus();
        return false;
    }
    if (rg == "") {
        alert("Este campo é obrigatório");
        formulariocadastro.rg.focus();
        return false;
    }
    if (sexo == "") {
        alert("Este campo é obrigatório");
        formulariocadastro.sexo.focus();
        return false;
    }
    if (endereco == "") {
        alert("Este campo é obrigatório");
        formulariocadastro.endereco.focus();
        return false;
    }
    if (numero == "") {
        alert("Este campo é obrigatório");
        formulariocadastro.numero.focus();
        return false;
    }
    if (bairro == "") {
        alert("Este campo é obrigatório");
        formulariocadastro.bairro.focus();
        return false;
    }
    if (cidade == "") {
        alert("Este campo é obrigatório");
        formulariocadastro.cidade.focus();
        return false;
    }
    if (estado == "") {
        alert("Este campo é obrigatório");
        formulariocadastro.estado.focus();
        return false;
    }
    if (cep == "") {
        alert("Este campo é obrigatório");
        formulariocadastro.cep.focus();
        return false;
    }
    if (celular == "") {
        alert("Este campo é obrigatório");
        formulariocadastro.celular.focus();
        return false;
    }
    else {
        alert("Cadastro preenchido com sucesso!")

    }
    return true;


}