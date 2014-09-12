//Declarada...
window.onload = function()
{
//Declarada...

var elementos = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
var puntua = [0 , 0]; //Puntuaciones Juego, HUMANO, PC...
var nomDiv = function(id)
{
return document.getElementById(id);//capturar 
}
nomDiv("btnjuega").addEventListener("click", function(e)
{
jugar();
});
//Expresada...
function jugar()
{
var humano = Number(nomDiv("jugada_humano").value);
	
var pc = Math.floor((Math.random() * 5) + 1);
var txt1="";

if(pc==1){
	
	console.log("piedra");
	
	}else{
		 if(pc==2){
	     console.log("papel");
        
	     }
	 }if(pc==3){
	     console.log("tijeras");
     
	     }else{
		 if(pc==4){
	     console.log("lagarto");
	     
	     }

	   }if(pc==5){
	     console.log("spock");
	   
	     }

	     
	     
	           
 


	


var txt = "";
//alert("La jugada del pc es: " + elementos[pc - 1]);
//alert("Humano: " + elementos[nomDiv("jugada_humano").value - 1] + " PC " + elementos[pc - 1]);
juego_user_pc(humano, pc, function(gana, mensaje)
{
//Hay un empate...
if(gana === 0)
{
txt = "Hubo un empate entre: " + elementos[humano - 1] + " y " + elementos[pc - 1];
}
else
{
if(gana === humano)
{
txt = "Gana el Humano";
puntua[0]++;
nomDiv("pun_1").innerHTML = puntua[0];
}
else
{
txt = "Gana el ROBOT";
puntua[1]++;
nomDiv("pun_2").innerHTML = puntua[1];	
}
txt += " : " + mensaje;
}
nomDiv("resultado").innerHTML = txt;
});
}
function juego_user_pc(jugador_1, jugador_2, callback)
{	
/*
1 = Piedra
2 = Papel
3 = Tijera
4 = Lagarto
5 = Spock
---------------------- Jugadas -------------------------------
3 y 2: Ganana 3 : Las tijeras cortan el papel
2 y 1: Gana 2 : El papel cubre a la piedra ->
1 y 4: Gana 1 : la piedra aplasta al lagarto ->
4 y 5 : Gana 4 : el lagarto envenena a Spock ->
5 y 3 : Gana 5 : Spock destroza las tijeras ->
3 y 4 : Gana 3 : las tijeras decapitan al lagarto ->
4 y 2 : gana 4 : el lagarto se come el papel ->
2 y 5 : Gana 2 : el papel refuta a Spock ->
5 y 1 : Gana 5 : Spock vaporiza la piedra ->
1 y 3 : Gana 3 : Piedra aplasta las tijeras ->
*/	
/*
1 y 2
*/
var jugadas = [{"mov" : [3,2], "gana" : 3,"mensaje" : "<MARQUEE><center> <img src = 'img_3.gif'/></center></MARQUEE><br/>"},
{"mov" : [2,1], "gana" : 2, "mensaje" : "<MARQUEE><center><img src = 'img_2.gif'/></center></MARQUEE><br/>"},
{"mov" : [1,4], "gana" : 1, "mensaje" : "<MARQUEE><center><img src = 'img_1.gif'/></center></br></MARQUEE>"},
{"mov" : [4,5], "gana" : 4, "mensaje" : "<MARQUEE><center><img src = 'img_4.gif'/></center><br/></MARQUEE>"},
{"mov" : [5,3], "gana" : 5, "mensaje" : " <MARQUEE><center><img src = 'img_5.gif'/></center><br/></MARQUEE>"},
{"mov" : [3,4], "gana" : 3, "mensaje" : " <MARQUEE><center><img src = 'img_3.gif'/></center><br/></MARQUEE>"},
{"mov" : [4,2], "gana" : 4, "mensaje" :  "<MARQUEE><center><img src = 'img_4.gif'/></center><br/></MARQUEE>"},
{"mov" : [2,5], "gana" : 2, "mensaje" : "<MARQUEE><center><img src = 'img_2.gif'/></center><br/></MARQUEE>"},
{"mov" : [5,1], "gana" : 5, "mensaje" : "<MARQUEE><center><img src = 'img_5.gif'/></center><br/></MARQUEE>"},
{"mov" : [1,3], "gana" : 5, "mensaje" : " <MARQUEE><center><img src = 'img_1.gif'/></center><br/></MARQUEE>"}
];
var gana = 0; //Empate...
var mensaje = "";
//alert(jugador_1 + " Y " + jugador_2);
if(jugador_1 != jugador_2)
{
for(var i in jugadas)
{
if((jugadas[i].mov[0] === jugador_1 && jugadas[i].mov[1] === jugador_2) || (jugadas[i].mov[0] === jugador_2 && jugadas[i].mov[1] === jugador_1))
{	
gana = jugadas[i].gana;
mensaje = jugadas[i].mensaje;
break;
}
}
}
callback(gana, mensaje);
}
}


