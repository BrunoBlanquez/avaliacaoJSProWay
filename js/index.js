const c = console.log.bind(document)
let produtos = []
let carrinho = []
let itemEscolhido = []
let itensCarrinho = []
let itensNaoRepetidos = []
let valorTotal = []

if (localStorage.getItem('Produtos') != null) {
    produtos = JSON.parse(localStorage.getItem('Produtos'))
}

const preencheTabela = () => {
    document.getElementById('divProdutos').classList.toggle('oculto')
    let txt = ''

    let itemSelecionado = []
    let arrayTemp = produtos
    
    for (let i = 0; itemSelecionado.length < 12; i++) {
        let random = Math.floor(Math.random() * (30 - 1) + 1)

        itemSelecionado[i] = arrayTemp[random]

        if(itemSelecionado[i]) {
            txt += `<tr>
            <td>${itemSelecionado[i].descricao}</td>
            <td>${itemSelecionado[i].segmento}</td>
            <td id=${"'" + produtos.indexOf(itemSelecionado[i]) + 'idEstoque' + "'"}>${itemSelecionado[i].estoque}</td>
            <td>${itemSelecionado[i].preco}</td>
            <td><button class="btn btnAdd" onclick="adicionarCarrinho(${"'" + produtos.indexOf(itemSelecionado[i]) + "'"}), montaTabelaCarrinho()">Add</button></td>
            </tr>`
        }
    }
    document.getElementById('tabelaProdutos').innerHTML = txt;
    montaTabelaCarrinho()
  }

const adicionarCarrinho = (id) => {
    itemEscolhido.push(id)
    let estoque = document.getElementById(`${id + 'idEstoque'}`).innerHTML
    let quantidadeEstoque = parseInt(document.getElementById(`${id + 'idEstoque'}`).innerHTML)
    
    if(quantidadeEstoque > 0) {
        let new_produto = produtos[id]
        let item_carrinho_index = itensCarrinho.findIndex((obj => obj.descricao == new_produto.descricao));
        if (item_carrinho_index != -1) {
            itensCarrinho[item_carrinho_index].quantity += 1
        }
        else {
            new_produto.quantity = 1
            itensCarrinho.push(new_produto)
        }

        valorTotal.push(produtos[id].preco)
    }
 
    estoque.innerHTML = estoque - 1
    
    itensNaoRepetidos = [... new Set(itensCarrinho)]
    
    alteraQtdade(id)
}

const alteraQtdade = (id) => {
    let qtdAtualEstoque = document.getElementById( id + 'idEstoque').innerHTML
    if(qtdAtualEstoque > 0) {
        qtdAtualEstoque = document.getElementById( id + 'idEstoque').innerHTML -= 1
    }

}

const montaTabelaCarrinho = () => {
    let qtdProdSelecionados = document.getElementById('prodSelecionadosQtd')
    let valorProdSelecionados = document.getElementById('prodSelecionadosPreco')

    const initialValue = 0;
    const sumWithInitial = valorTotal.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
        );

    qtdProdSelecionados.innerHTML = itensNaoRepetidos.length
    valorProdSelecionados.innerHTML = 'R$ ' + sumWithInitial.toFixed(2)

    let txt = ''
    
    for(let i = 0; i < itensNaoRepetidos.length; i++) {
        txt += `<tr id="${"'" + produtos.indexOf(itensNaoRepetidos[i]) + 'idTrCarrinho' + "'"}">
                    <td>${itensNaoRepetidos[i].descricao}</td>
                    <td>${itensNaoRepetidos[i].segmento}</td>
                    <td><button class="btn btnAdd" id="${produtos.indexOf(itensNaoRepetidos[i]) + 'btnMenos'}" onclick="alteraQtdadeCarrinho(${produtos.indexOf(itensNaoRepetidos[i])}, '-')">-</button><span id=${"'" + produtos.indexOf(itensNaoRepetidos[i]) + 'idCarrinho' + "'"}>${itensNaoRepetidos[i].quantity}</span><button class="btn btnAdd" id="${produtos.indexOf(itensNaoRepetidos[i]) + 'btnMais'}" onclick="alteraQtdadeCarrinho(${produtos.indexOf(itensNaoRepetidos[i])}, '+')">+</button></td>
                    <td>${itensNaoRepetidos[i].preco}</td>
                    <td><button class="btn btnAdd" onclick="removerProduto(${"'" + produtos.indexOf(itensNaoRepetidos[i]) + "'"})">Remover</button></td>
                </tr>`
    }

    document.getElementById('tabelaCarrinho').innerHTML = txt;
}

const mostraPorCategoria = (categoria) => {
    let produtosPorCategoria = []
    let txt = ''
    document.getElementById('divCategorias').classList.toggle('oculto')

    for(let i = 0; i < produtos.length; i++) {
        if(produtos[i].segmento == categoria) {
            produtosPorCategoria.push(produtos[i])
        }
    }

    for (let i = 0; i < produtosPorCategoria.length; i++) {
        txt += `<tr>
        <td>${produtosPorCategoria[i].descricao}</td>
        <td>${produtosPorCategoria[i].segmento}</td>
        <td>${produtosPorCategoria[i].estoque}</td>
        <td>${produtosPorCategoria[i].preco}</td>
        </tr>`
    }
    document.getElementById('tabelaProdutosCategoria').innerHTML = txt;
}

const removerProduto = (id) => {
    let new_produto = produtos[id]
    let item_carrinho_index = itensCarrinho.findIndex((obj => obj.descricao == new_produto.descricao));
    if (item_carrinho_index != -1) {
        itensNaoRepetidos.pop(item_carrinho_index)
    }
    valorTotal.pop(produtos[id].preco)

    let node = document.getElementById(`${"'" + id + 'idTrCarrinho' + "'"}`);
    c(node)
    if (node.parentNode) {
    node.parentNode.removeChild(node);
    }

    montaTabelaCarrinho()
}

const alteraQtdadeCarrinho = (id, operacao) => {
    let new_produto = produtos[id]
    let item_carrinho_index = itensCarrinho.findIndex((obj => obj.descricao == new_produto.descricao));
    let quantidade = itensNaoRepetidos[item_carrinho_index].quantity
    let quantidadeTela = document.getElementById(id + 'idCarrinho') 
    
    switch(operacao) {
        case '-':
            quantidade--
            break;
        case '+':
            quantidade++
            break;
    }

    itensNaoRepetidos[item_carrinho_index].quantity = quantidade
    quantidadeTela.innerText = '-' + quantidade + '+'
}