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
        itensCarrinho.push(produtos[id])
        valorTotal.push(produtos[id].preco)
    }

    // ------------
    c(quantidadeEstoque)
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
        txt += `<tr>
                    <td>${itensNaoRepetidos[i].descricao}</td>
                    <td>${itensNaoRepetidos[i].segmento}</td>
                    <td id=${"'" + produtos.indexOf(itensNaoRepetidos[i]) + 'idCarrinho' + "'"}>${1}</td>
                    <td>${itensNaoRepetidos[i].preco}</td>
                    <td><button class="btn btnAdd" onclick="">Remover</button></td>
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