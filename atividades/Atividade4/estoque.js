const itens = [];

function adicionar(item){

    if(validar_item_a_cadastrar(item)){
        itens.push(item);
        return true;
    }
    return false;
}

function listar(){
    return itens;
}

function editar(id, qtd){
    return editar_item(id, qtd);
}

module.exports = {
    adicionar,
    listar,
    editar
}

function is_numerico(n){
    if (isNaN(n) || n == null){
        return false;
    }
    return true;
}

function is_id_cadastrado(id){
    for (let indice in itens){
        let item_cadastrado = itens[indice];
        if (item_cadastrado.id === id){
            item_valido = true;
        }
    }
    return false;
}

function validar_item_a_cadastrar (item){
    let item_valido = true;
    // se o id for NaN, nulo ou igual a 0
    // Nao deve ser cadastrado

    if(is_numerico(item.id) || item.id <= 0){
        item_valido = false;
    }

    // se o id ja existir, nao deve ser cadastrado
    if(is_id_cadastrado(item.id)){
        item_valido = false;
    }


    if(is_numerico(item.qtd) || item.qtd <= 0){
        item_valido = false;
    }

    if(item.nome.length < 1){
        item_valido = false;
    }
}

function editar_item(id, qtd){
    if(!is_numerico || id === 0){
        return false;
    }
    if(!is_id_cadastrado(id)){
        return false;
    }
    if(!is_numerico(qtd) || qtd < 0){
        return false;
    }

    for(let item_cadastrado in itens){
        if(item_cadastrado.id === id){
            item_cadastrado.qtd = qtd;
        }
    }
    return true;
}