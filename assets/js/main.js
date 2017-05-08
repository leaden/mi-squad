function MiembroSquad(nombre, apellido, edad,hobbies,hobbies1,hobbies2,imagen){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;  
	this.hobbies1 = hobbies1;
	this.hobbies2 = hobbies2; 
     this.imagen = imagen;
}

var guardar=[];

var Valentina = new MiembroSquad("Valentina", "Lopez", 25,"tarot","idiomas","peliculas mudas","<img src='http://www.exprimiendolinkedin.com/wp-content/uploads/2011/05/perfil-linkedin1.jpg' alt='placeholder+image'>");
guardar.push(Valentina);
var Trinidad = new MiembroSquad("Trinidad", "Fuentes", 26, "videoJuegos","pugLover","dormir","<img src='https://www.marketingdirecto.com/wp-content/uploads/2012/04/perfiles-twitter-imprescindibles.jpg' alt='placeholder+image'>");
guardar.push(Trinidad);
var Diana = new MiembroSquad("Diana","Monsalve",29,"negocios","scratch","musica","<img src='http://animaleshoy.net/wp-content/uploads/2016/08/cachorrro1.jpg'alt='placeholder+image'>");
guardar.push(Diana);
var Daniela = new MiembroSquad("Daniela","Sanchez",26,"mùsica","cantar","ver series","<img src='http://st-listas.20minutos.es/images/2011-10/304749/list_640px.jpg?1317589615' alt='placeholder+image'>");
guardar.push(Daniela);
var Pez = new MiembroSquad("Maria Paz", "Rojas", 26, "mùsica","comer","hablar ingles","<img src='https://s-media-cache-ak0.pinimg.com/736x/c3/9a/86/c39a8639fab7664eaf8fedb182d184c3.jpg' alt='placeholder+image'>");
guardar.push(Pez);
var Gilia= new MiembroSquad("Gilia", "Góngora", 28, "misteriosa","musica","skate","<img src='http://news.xinhuanet.com/photo/2011-11/21/122311411_81n.jpg' alt='placeholder+image'>");
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

mostrarvalentina.innerHTML = Valentina.imagen + "<strong>Nombre: </strong>" + Valentina.nombre + " " + Valentina.apellido +
"<br> <strong>Edad: </strong>" + Valentina.edad +"<br> <strong>Hobbies: </strong> <li>" + Valentina.hobbies + "</li>" + "<li>" + Valentina.hobbies1 + "</li>" +  "<li>" + Valentina.hobbies2 + "</li>" + "<br>";
"<br>"
mostrartrinidad.innerHTML = Trinidad.imagen + "<strong>Nombre: </strong>" + Trinidad.nombre + " " + Trinidad.apellido +
"<br> <strong>Edad: </strong>" + Trinidad.edad +"<br> <strong>Hobbies: </strong> <li>" + Trinidad.hobbies + "</li>" + "<li>" + Trinidad.hobbies1 + "</li>" +  "<li>" + Trinidad.hobbies2 + "</li>" + "<br>";
"<br>"
mostrardiana.innerHTML = Diana.imagen +"<strong>Nombre: </strong>" + Diana.nombre + " " + Diana.apellido +
"<br> <strong>Edad: </strong>" + Diana.edad +"<br> <strong>Hobbies: </strong> <li>" + Diana.hobbies + "</li>" + "<li>" + Diana.hobbies1 + "</li>" +  "<li>" + Diana.hobbies2 + "</li>" +  "<br>";
"<br>"
mostrardaniela.innerHTML = Daniela.imagen +"<strong>Nombre: </strong>" + Daniela.nombre + " " + Daniela.apellido +
"<br> <strong>Edad: </strong>" + Daniela.edad +"<br> <strong>Hobbies: </strong> <li>" + Daniela.hobbies + "</li>" + "<li>" + Daniela.hobbies1 + "</li>" +  "<li>" + Daniela.hobbies2 + "</li>" +  "<br>";
"<br>"
mostrarpez.innerHTML = Pez.imagen +"<strong>Nombre: </strong>" + Pez.nombre + " " + Pez.apellido +
"<br> <strong>Edad: </strong>" + Pez.edad +"<br> <strong>Hobbies: </strong> <li>" + Pez.hobbies + "</li>" + "<li>" + Pez.hobbies1 + "</li>" +  "<li>" + Pez.hobbies2 + "</li>" + "<br>";
"<br>"
mostrargilia.innerHTML = Gilia.imagen +"<strong>Nombre: </strong>" + Gilia.nombre + " " + Gilia.apellido +
"<br> <strong>Edad: </strong>" + Gilia.edad +"<br> <strong>Hobbies: </strong> <li>" + Gilia.hobbies + "</li>" + "<li>" + Gilia.hobbies1 + "</li>" +  "<li>" + Gilia.hobbies2 + "</li>" + "<br>";
"<br>"


function Comentario (){
  document.getElementById("miTextarea").select();
     alert("Estamos trabajando para mejorar cada dia");
}







