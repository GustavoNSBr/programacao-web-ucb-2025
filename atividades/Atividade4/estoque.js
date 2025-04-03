const itens = [];

function adicionar(item){

    if(validar_item(item)){
        itens.push(item);
        return true;
    }
    return false;
}

function listar(){
    return itens;
}

module.exports = {
    adicionar,
    listar
}

function validar_item (item){
    let item_valido = true;
    // se o id for NaN, nulo ou igual a 0
    // Nao deve ser cadastrado

    if(isnan(item.id)   ||
        item.id == null ||
        item.id < 0
    ){
        item_valido = false;
    }

    // se o id ja existir, nao deve ser cadastrado
    for (let item_cadastrado in itens){
        if (item_cadastrado.id === item.id){
            item_valido = false;
        }
    }

    if(isnan(item.qtd)   ||
        item.qtd == null ||
        item.qtd < 0
    ){
        item_valido = false;
    }

    if(item.nome.length < 1){
        item_valido = false;
    }
}