//Pide al usuario que ingrese su nombre.
const nombre = prompt("Hola! Como te llamas?", "Nombre");

//Crea un saludo en el html.
 document.getElementById("saludo").innerHTML = `Hola ${nombre}, Bienvenido a mi pagina!`;

 //accede a la clase titulo y al id lista para luego modificarlos.
const titulo = document.querySelector('.titulo')
const list = document.getElementById('#lista');

//Cambia el titulo en el html.
titulo.innerHTML = 'Practicando como modificar el DOM';
console.log(titulo.innerHTML)

//Cada vez que se actualiza la pagina el titulo cambia de color.
const colors = ['darkviolet', 'deepskyblue', 'deeppink', 'darkcyan']
let randomColor = Math.floor(Math.random()*colors.length)

titulo.style.color = colors[randomColor]

//Muestra cada nombre del array en una lista.
const arrayLista = ['Ana', 'Maria', 'Juan'];

let listado = '';

arrayLista.forEach(item => {
    listado += `
    <li class="list">
    <b>Nombre: </b> <span class="text-danger">${item}</span>
    </li>`
});
lista.innerHTML = listado;
