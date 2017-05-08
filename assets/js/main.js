function MiembroSquad(nombre, apellido, edad,hobbies,hobbies1,hobbies2){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;  
	this.hobbies1 = hobbies1;
	this.hobbies2 = hobbies2; 

}

var guardar=[];

var Valentina = new MiembroSquad("Valentina", "Lopez", 25,"tarot","idiomas","peliculas mudas");
guardar.push(Valentina);
var Trinidad = new MiembroSquad("Trinidad", "Fuentes", 26, "videoJuegos","pugLover","dormir");
guardar.push(Trinidad);
var Diana = new MiembroSquad("Diana","Monsalve",29,"negocios","scratch","musica");
guardar.push(Diana);
var Daniela = new MiembroSquad("Daniela","Sanchez",26,"mùsica","cantar","ver series");
guardar.push(Daniela);
var Pez = new MiembroSquad("Maria Paz", "Rojas", 26, "mùsica","comer","hablar ingles");
guardar.push(Pez);
var Gilia= new MiembroSquad("Gilia", "Góngora", 28, "misteriosa","musica","skate");
guardar.push(Gilia);

/*guardar.forEach(function(element)){
      console.log();
}
*/

var mostrarvalentina = document.getElementById("Valentina");
var mostrartrinidad = document.getElementById("Trinidad");
var mostrardiana = document.getElementById("Diana");
var mostrardaniela = document.getElementById("Daniela")
var mostrarpez = document.getElementById("Pez");
var mostrargilia = document.getElementById("Gilia");

mostrarvalentina.innerHTML = "<strong>Nombre: </strong>" + Valentina.nombre + " " + Valentina.apellido +
"<br> <strong>Edad: </strong>" + Valentina.edad +"<br> <strong>Hobbies: </strong> <li>" + Valentina.hobbies + "</li>" + "<li>" + Valentina.hobbies1 + "</li>" +  "<li>" + Valentina.hobbies2 + "</li>" + "<br>";
"<br>"
mostrartrinidad.innerHTML = "<strong>Nombre: </strong>" + Trinidad.nombre + " " + Trinidad.apellido +
"<br> <strong>Edad: </strong>" + Trinidad.edad +"<br> <strong>Hobbies: </strong> <li>" + Trinidad.hobbies + "</li>" + "<li>" + Trinidad.hobbies1 + "</li>" +  "<li>" + Trinidad.hobbies2 + "</li>" + "<br>";
"<br>"
mostrardiana.innerHTML = "<strong>Nombre: </strong>" + Diana.nombre + " " + Diana.apellido +
"<br> <strong>Edad: </strong>" + Diana.edad +"<br> <strong>Hobbies: </strong> <li>" + Diana.hobbies + "</li>" + "<li>" + Diana.hobbies1 + "</li>" +  "<li>" + Diana.hobbies2 + "</li>" +  "<br>";
"<br>"
mostrardaniela.innerHTML = "<strong>Nombre: </strong>" + Daniela.nombre + " " + Daniela.apellido +
"<br> <strong>Edad: </strong>" + Daniela.edad +"<br> <strong>Hobbies: </strong> <li>" + Daniela.hobbies + "</li>" + "<li>" + Daniela.hobbies1 + "</li>" +  "<li>" + Daniela.hobbies2 + "</li>" +  "<br>";
"<br>"
mostrarpez.innerHTML = "<strong>Nombre: </strong>" + Pez.nombre + " " + Pez.apellido +
"<br> <strong>Edad: </strong>" + Pez.edad +"<br> <strong>Hobbies: </strong> <li>" + Pez.hobbies + "</li>" + "<li>" + Pez.hobbies1 + "</li>" +  "<li>" + Pez.hobbies2 + "</li>" + "<br>";
"<br>"
mostrargilia.innerHTML = "<strong>Nombre: </strong>" + Gilia.nombre + " " + Gilia.apellido +
"<br> <strong>Edad: </strong>" + Gilia.edad +"<br> <strong>Hobbies: </strong> <li>" + Gilia.hobbies + "</li>" + "<li>" + Gilia.hobbies1 + "</li>" +  "<li>" + Gilia.hobbies2 + "</li>" + "<br>";
"<br>"


function comentario (){
  document.getElementById("miTextarea").select();
}







