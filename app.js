// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    inputAmigo.value = "";
    document.getElementById("resultado").innerHTML = "";
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agregue nombres antes de sortear.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    mostrarResultado(amigoSorteado);
    amigos = [];
    mostrarListaAmigos();
}

function mostrarResultado(amigoSorteado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `Amigo secreto: ${amigoSorteado}`;
    listaResultado.appendChild(li);
}