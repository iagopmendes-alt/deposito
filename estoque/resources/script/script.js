// lista de items
let produtos = ["Teclado","Mouse","Monitor","Gabinete","Webcam","Headset","Roteador","Fonte","SSD","Cadeira"];
let recebe = prompt("Digite um item de pc")
// Colocando mais coisas com push
produtos.push("Placa de Vídeo", "Processador");

// Vendo se tem Webcam na lista
if (produtos.includes("Webcam")) {
  console.log("Achou o produto!");
} else {
  console.log("Não achou o produto!");
}

// vendo se tem impressora 
if (produtos.includes("Impressora")) {
  console.log("Achou o produto!");
} else {
  console.log("Não achou o produto!");
}

// Pegando so os nomes grandes (mais de 5 letras)
let produtosFiltrados = produtos.filter((p) => p.length > 5);

// Mostrando tudo na tela
console.log(produtos);
console.log(produtosFiltrados);