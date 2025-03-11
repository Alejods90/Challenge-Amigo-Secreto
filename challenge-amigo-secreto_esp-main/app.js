// Challenge del juego amigo secreto


let amigos = [];

function limpiarCaja(){
    document.getElementById("amigo").value= '';
}

lista = document.getElementById("listaAmigos")

function crearLista() {
    lista.innerHTML = ""
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`
    }
}

function agregarAmigo(nombre) {
    nombre = document.getElementById("amigo").value
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        amigos.push(nombre);
        crearLista();   
        limpiarCaja();
        return;
    }

}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.")
        return;
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
    }
}
