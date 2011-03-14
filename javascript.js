// Funciones y Efectos para el Sitio

//Pre-Carga de Imagenes
function MM_preloadImages() {
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

//Spoiler de Imagen
function spoiler(nam){//Mostrar la imagen
	document.getElementById('spoiler'+nam).style.display="block";
	document.getElementById('visible'+nam).style.display="none";
	document.getElementById('oculto'+nam).style.display="block";
}
function ocultar(nam){//Ocultar la imagen
	document.getElementById('spoiler'+nam).style.display="none";
	document.getElementById('visible'+nam).style.display="block";
	document.getElementById('oculto'+nam).style.display="none";
}

//Spoiler de Parrafo
function ver(nem){//Mostrar Parrafo
	document.getElementById('ver'+nem).style.display="block";
	document.getElementById('no_ver'+nem).style.display="none";
	document.getElementById('link'+nem).style.display="none";
}

//Spoiler Suscriptores
function usuario_1(){
	document.getElementById('name').style.display="block";
	document.getElementById('mail').style.display="none";
}
function usuario_2(){
	document.getElementById('mail').style.display="block";
	document.getElementById('name').style.display="none";
}

//spoiler ganadores
function ganadores_01(){
	document.getElementById('ra_1').style.display="block";
	document.getElementById('ra_2').style.display="none";
	document.getElementById('ra_3').style.display="none";
}
function ganadores_02(){
	document.getElementById('ra_1').style.display="none";
	document.getElementById('ra_2').style.display="block";
	document.getElementById('ra_3').style.display="none";
}
function ganadores_03(){
	document.getElementById('ra_1').style.display="none";
	document.getElementById('ra_2').style.display="none";
	document.getElementById('ra_3').style.display="block";
}

//efecto de imagenes en la galeria
function cambio(num){//cambiar imagen
	document.imagen.src="img/"+num+".jpg";
	document.getElementById('galery').style.display="block";
	document.getElementById('gale_fondo').style.display="block";
	i = num;
}
function cerrar(){//cerrar imagen
	document.getElementById('galery').style.display="none";
	document.getElementById('gale_fondo').style.display="none";
}
function anterior(){//imagen anterior
	if(i>1){
	i--
	var numi = i;
	} else {
	i = 1;
	numi = i;  
	}  
	document.imagen.src = "img/0"+numi+".jpg";  
}
function siguiente(){//imagen siguiente
	if(i<9){
	i++
	var numi = i;
	} else {  
	i = 9;
	var numi = i;
	}  
	document.imagen.src = "img/0"+numi+".jpg";  
}

//efecto votacion
function votar_01(nam){
	if(document.getElementById('voton'+nam).style.display!="none"){
	document.getElementById('votop'+nam).style.background="url('img/01_mas.png')";
	document.getElementById('voton'+nam).style.display="none";
	alert('Muchas Gracias por su Voto!');
	}else{
	alert('Solo puede Votar una vez!');
	}
}
function votar_02(nam){
	if(document.getElementById('votop'+nam).style.display!="none"){
	document.getElementById('voton'+nam).style.background="url('img/02_mas.png')";
	document.getElementById('votop'+nam).style.display="none";
	alert('Muchas Gracias por su Voto!');
	}else{
	alert('Solo puede Votar una vez!');
	}
}

//validar formulario
function valida_enviar(){

//validar nombre
if (document.suscribirse.nombre.value == ""){
	alert("Por favor, tiene que escribir su Nombre");
	return false
}
//valida email
if (document.suscribirse.mail.value == ""){
	alert("Por favor, tiene que escribir su E-Mail");
	return false
}

return true
}

//validar ideas
function valida_ideas(){

//valida tipo de usuario
if (!document.enviar_idea.user[0].checked && !document.enviar_idea.user[1].checked){
	alert("Por favor, seleccione tipo de usuario");
	return false
}

//validar nombre y mail
if (document.enviar_idea.nombre.value == "" && document.enviar_idea.mail.value == ""){
	alert("Por favor, hay datos obligatorios sin completar");
	return false
}

//valida idea
if (document.enviar_idea.idea.value == ""){
	alert("Por favor, déjenos su Idea");
	return false
}

return true
}

//noticias
//primer noticia
function noti_cambio_1(){
document.getElementById('chanta01').style.display="none";
document.getElementById('chanta02').style.display="block";
document.getElementById('chanta03').style.display="none";
}
//segunda noticia
function noti_cambio_2(){
document.getElementById('chanta01').style.display="none";
document.getElementById('chanta02').style.display="none";
document.getElementById('chanta03').style.display="block";
}
//tercer noticia
function noti_cambio_3(){
document.getElementById('chanta01').style.display="block";
document.getElementById('chanta02').style.display="none";
document.getElementById('chanta03').style.display="none";
}
//spoiler nav_chico
function mostrarlo(memo){
document.getElementById('uno_'+memo).style.display="block";
}

//publicidad
function publi_cambia(){

var nimo= Math.random();
nimo = parseInt(nimo*3);

return nimo;
}