let produtosStorage = [
{descricao: "Sombra e Ossos", segmento: "Livros", estoque: 20, preco: 50.00},
{descricao: "Sol e Tormenta", segmento: "Livros", estoque: 22, preco: 50.00},
{descricao: "Ruína e Ascensão", segmento: "Livros", estoque: 15, preco: 50.00},
{descricao: "Corte de Espinhos e rosas", segmento: "Livros", estoque: 40, preco: 50.00},
{descricao: "Corte de Névoa e Fúria", segmento: "Livros", estoque: 19, preco: 50.00},
{descricao: "Corte de Asas e Ruína", segmento: "Livros", estoque: 20, preco: 50.00},
{descricao: "Nevernight: A sombra do corvo", segmento: "Livros", estoque: 22, preco: 50.00},
{descricao: "Godsgrace: O espetáculo sangrento", segmento: "Livros", estoque: 15, preco: 50.00},
{descricao: "Darkdawn: As cinzas da república", segmento: "Livros", estoque: 40, preco: 50.00},
{descricao: "O nome do vento", segmento: "Livros", estoque: 19, preco: 50.00},
{descricao: "Tenis", segmento: "Vestuario", estoque: 20, preco: 250.00},
{descricao: "Camiseta", segmento: "Vestuario", estoque: 22, preco: 50.00},
{descricao: "Calça", segmento: "Vestuario", estoque: 15, preco: 70.00},
{descricao: "Meia", segmento: "Vestuario", estoque: 40, preco: 15.00},
{descricao: "Jaqueta", segmento: "Vestuario", estoque: 19, preco: 250.00},
{descricao: "Arroz", segmento: "Alimentação", estoque: 40, preco: 11.00},
{descricao: "Milho", segmento: "Alimentação", estoque: 22, preco: 4.50},
{descricao: "Feijão", segmento: "Alimentação", estoque: 15, preco: 3.50},
{descricao: "Peito de frango", segmento: "Alimentação", estoque: 40, preco: 19.90},
{descricao: "Picanha", segmento: "Alimentação", estoque: 19, preco: 45.90},
{descricao: "Atemoia", segmento: "Alimentação", estoque: 40, preco: 5.00},
{descricao: "Maça", segmento: "Alimentação", estoque: 22, preco: 2.50},
{descricao: "Pera", segmento: "Alimentação", estoque: 15, preco: 3.50},
{descricao: "Batata", segmento: "Alimentação", estoque: 40, preco: 7.90},
{descricao: "Uva", segmento: "Alimentação", estoque: 19, preco: 4.90},
{descricao: "Tenis Corrida", segmento: "Vestuario", estoque: 20, preco: 250.00},
{descricao: "Camiseta Academia", segmento: "Vestuario", estoque: 22, preco: 60.00},
{descricao: "Bermuda", segmento: "Vestuario", estoque: 15, preco: 70.00},
{descricao: "Vestido", segmento: "Vestuario", estoque: 40, preco: 99.00},
{descricao: "Camisa", segmento: "Vestuario", estoque: 19, preco: 69.00}
]

const pegaDadosProdutos = () => {
    localStorage.setItem('Produtos', JSON.stringify(produtosStorage))
}
