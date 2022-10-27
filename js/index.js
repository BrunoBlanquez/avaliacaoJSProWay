const c = console.log.bind(document)
let produtos = []
if (localStorage.getItem('Produtos') != null) {
    produtos = JSON.parse(localStorage.getItem('Produtos'))
}

const preencheTabela = () => {
    document.getElementById('divProdutos').classList.toggle('oculto')
    let txt = ''

    let itensNaoRepetidos = []
    let itemSelecionado = []
    let arrayTemp = produtos
    
    for (let i = 0; itemSelecionado.length < 12; i++) {
        let random = Math.floor(Math.random() * (30 - 1) + 1)

        itemSelecionado[i] = arrayTemp[random]
        let itensNaoRepetidos = [... new Set(itemSelecionado)]

        if(itemSelecionado[i]) {
            txt += `<tr>
            <td>${itemSelecionado[i].descricao}</td>
            <td>${itemSelecionado[i].segmento}</td>
            <td>${itemSelecionado[i].estoque}</td>
            <td>${itemSelecionado[i].preco}</td>
            <td><button class="btn btnAdd" onclick="adicionarCarrinho(${"'" + itemSelecionado[i].descricao + "'"})">Add</button></td>
            </tr>`
        }
    }
    document.getElementById('tabelaProdutos').innerHTML = txt;
  }

  const adicionarCarrinho = (nome) => {
    let itemEscolhido = []
    itemEscolhido.push(nome)
    document.addEventListener('click', e => e.preventDefault())

    let itemCarrinho;
    
    let txt = ''
    document.getElementById('divCarrinho').classList.remove('oculto')

    
    for(let i = 0; i < produtos.length; i++) {
        if(produtos[i].descricao == nome) {
            txt += `<tr>
            <td>${produtos[i].descricao}</td>
            <td>${produtos[i].segmento}</td>
            <td>${produtos[i].estoque}</td>
            <td>${produtos[i].preco}</td>
            <td><button class="btn btnAdd" onclick="adicionarCarrinho()">Add</button></td>
            </tr>`
        }
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
        <td><button class="btn btnAdd" onclick="adicionarCarrinho()">Add</button></td>
        </tr>`
    }
    document.getElementById('tabelaProdutosCategoria').innerHTML = txt;
  }

  const criaTabela = (array, idDiv) => {
    let txt = ''
    document.getElementById(`${idDiv}`).classList.toggle('oculto')
  }