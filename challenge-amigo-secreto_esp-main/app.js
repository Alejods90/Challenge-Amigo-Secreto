// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Challenge del juego amigo secreto


// Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
// Usa Math.random() y Math.floor() para obtener un índice aleatorio.

// Tareas específicas:

// Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

// Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

// Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

// Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  
// e innerHTML para mostrar el amigo sorteado.

let amigos = [];

function limpiarCaja(){
    document.getElementById("amigo").value= '';
}

lista = document.getElementById("listaAmigos")
lista.innerHTML = amigos



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
        console.log(amigos)
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
