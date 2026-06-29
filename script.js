window.onload = function () {
    alert("Bem-vindo ao portal da Seleção Alemã!");
};

let titulo = document.querySelector("h1");

titulo.addEventListener("mouseover", function () {
    titulo.style.color = "gold";
});

titulo.addEventListener("mouseout", function () {
    titulo.style.color = "";
});

titulo.addEventListener("click", function () {
    alert("Alemanha! Rumo ao penta!");
});

let paragrafo = document.querySelector("p");

paragrafo.addEventListener("dblclick", function () {
    paragrafo.innerHTML = "A Alemanha foi a primeira seleção europeia a conquistar uma Copa do Mundo disputada nas Américas, em 2014.";
});