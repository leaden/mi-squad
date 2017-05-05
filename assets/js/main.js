function MiembroSquad(nombre, apellido, edad,hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;   

}

var Valentina = new MiembroSquad("Valentina", "Lopez", 25,"tarot");
var Trinidad = new MiembroSquad("Trinidad", "Fuentes", 26, "videoJuegos");
var Diana = new MiembroSquad("Diana","Monsalve",29,"negocios");
var Daniela = new MiembroSquad("Daniela","Sanchez","musica");
var Pez = new MiembroSquad("Maria Paz", "Rojas", 26, "música");
var Gilia= new MiembroSquad("Gilia", "Góngora", 28, "misteriosa");

var mostrarvalentina = document.getElementById("Valentina");
var mostrartrinidad = document.getElementById("Trinidad");
var mostrardiana = document.getElementById("Diana");
var mostrardaniela = document.getElementById("Daniela")
var mostrarpez = document.getElementById("Pez");
var mostrargilia = document.getElementById("Gilia");

mostrarvalentina.innerHTML = "<strong>Nombre: </strong>" + Valentina.nombre + " " + Valentina.apellido +
"<br> <strong>Edad: </strong>" + Valentina.edad +"<br> <strong>Hobbies: </strong> <li>" + Valentina.hobbies + "</li>" + "<br>";
"<br>"
mostrartrinidad.innerHTML = "<strong>Nombre: </strong>" + Trinidad.nombre + " " + Trinidad.apellido +
"<br> <strong>Edad: </strong>" + Trinidad.edad +"<br> <strong>Hobbies: </strong> <li>" + Trinidad.hobbies + "</li>" + "<br>";
"<br>"
mostrardiana.innerHTML = "<strong>Nombre: </strong>" + Diana.nombre + " " + Diana.apellido +
"<br> <strong>Edad: </strong>" + Diana.edad +"<br> <strong>Hobbies: </strong> <li>" + Diana.hobbies + "</li>" + "<br>";
"<br>"








