let produtosStorage = [
{descricao: "Sombra e Ossos", segmento: "Livros", estoque: 20, preco: 50.00, quantity: 0},
{descricao: "Sol e Tormenta", segmento: "Livros", estoque: 22, preco: 50.00, quantity: 0},
{descricao: "Ruína e Ascensão", segmento: "Livros", estoque: 15, preco: 50.00, quantity: 0},
{descricao: "Corte de Espinhos e rosas", segmento: "Livros", estoque: 40, preco: 50.00, quantity: 0},
{descricao: "Corte de Névoa e Fúria", segmento: "Livros", estoque: 19, preco: 50.00, quantity: 0},
{descricao: "Corte de Asas e Ruína", segmento: "Livros", estoque: 20, preco: 50.00, quantity: 0},
{descricao: "Nevernight: A sombra do corvo", segmento: "Livros", estoque: 22, preco: 50.00, quantity: 0},
{descricao: "Godsgrace: O espetáculo sangrento", segmento: "Livros", estoque: 15, preco: 50.00, quantity: 0},
{descricao: "Darkdawn: As cinzas da república", segmento: "Livros", estoque: 40, preco: 50.00, quantity: 0},
{descricao: "O nome do vento", segmento: "Livros", estoque: 19, preco: 50.00, quantity: 0},
{descricao: "Tenis", segmento: "Vestuario", estoque: 20, preco: 250.00, quantity: 0},
{descricao: "Camiseta", segmento: "Vestuario", estoque: 22, preco: 50.00, quantity: 0},
{descricao: "Calça", segmento: "Vestuario", estoque: 15, preco: 70.00, quantity: 0},
{descricao: "Meia", segmento: "Vestuario", estoque: 40, preco: 15.00, quantity: 0},
{descricao: "Jaqueta", segmento: "Vestuario", estoque: 19, preco: 250.00, quantity: 0},
{descricao: "Arroz", segmento: "Alimentação", estoque: 40, preco: 11.00, quantity: 0},
{descricao: "Milho", segmento: "Alimentação", estoque: 22, preco: 4.50, quantity: 0},
{descricao: "Feijão", segmento: "Alimentação", estoque: 15, preco: 3.50, quantity: 0},
{descricao: "Peito de frango", segmento: "Alimentação", estoque: 40, preco: 19.90, quantity: 0},
{descricao: "Picanha", segmento: "Alimentação", estoque: 19, preco: 45.90, quantity: 0},
{descricao: "Atemoia", segmento: "Alimentação", estoque: 40, preco: 5.00, quantity: 0},
{descricao: "Maça", segmento: "Alimentação", estoque: 22, preco: 2.50, quantity: 0},
{descricao: "Pera", segmento: "Alimentação", estoque: 15, preco: 3.50, quantity: 0},
{descricao: "Batata", segmento: "Alimentação", estoque: 40, preco: 7.90, quantity: 0},
{descricao: "Uva", segmento: "Alimentação", estoque: 19, preco: 4.90, quantity: 0},
{descricao: "Tenis Corrida", segmento: "Vestuario", estoque: 20, preco: 250.00, quantity: 0},
{descricao: "Camiseta Academia", segmento: "Vestuario", estoque: 22, preco: 60.00, quantity: 0},
{descricao: "Bermuda", segmento: "Vestuario", estoque: 15, preco: 70.00, quantity: 0},
{descricao: "Vestido", segmento: "Vestuario", estoque: 40, preco: 99.00, quantity: 0},
{descricao: "Camisa", segmento: "Vestuario", estoque: 19, preco: 69.00, quantity: 0}
]

const pegaDadosProdutos = () => {
    localStorage.setItem('Produtos', JSON.stringify(produtosStorage))
}
