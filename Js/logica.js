function corrercd() {
	/*
	¿Que vamos a hacer?
	
	Bien... son 3 computadoras y 1 router 

	1		2		router 		3
	In		Envia 				Envia request
	an		request	
	im
	ad
	a
	

	tiempos: 1 seg, 2 seg, 3 seg
	obtener tiempos
	si la 2 es antes cancela la 3 y haz la animacion de la 1
	si la 2 llega primero entonces hacer animacion
	
	metodos a hacer:
	inanimar la 1 
	enviar request 2 a 3
		-envia clear to send
		-enviar datos 2 a 3
		-enviar clear to send
		-enviar request 3 a 2
		-enviar datos 3 a 2

	enviar request 3 a 2
		-enviar datos 3 a 2
		-enviar clear to send
		-enviar request 2 a 3
		-enviar datos 2 a 3
	
	choque 2 y 3
		-tiempos de espera: 2 seg, 3 seg, 4 seg


	*/
	//Sin colision C
	

	/*
	rtspc3firstC();
	ctsap_pc2firstC();
	dtspc3_pc2firstC();
	rtspc2firstC();
	ackap_pc2firstC();
	ctsap_pc3firstC();
	dtspc2_pc3firstC();*/

	/* Sin colision B
	rtspc2B();
	ctsap_pc3B();
	dtspc2_pc3B();
	ackap_pc3B();
	rtspc3colB();
	ctsap_pc2B();
	dtspc3_pc2B();
	*/

	/*meta
	rtspc2colision();
	rtspc3colision();*/
	
	/*caso B
	rtspc3first();
	ctsap_pc2first();
	dtspc3_pc2first();
	rtspc2first();
	ackap_pc2first();
	ctsap_pc3first();
	dtspc2_pc3first();
	*/


	/*
	para caso A
	rtspc2();
	ctsap_pc3();
	dtspc2_pc3();
	ackap_pc3();
	rtspc3col();
	ctsap_pc2();
	dtspc3_pc2();
	*/
	console.log("Iniciando simulacion CD");
	//asignamos turnos a las pcs
	//1 o 2
		//var Math.random() + (1 + max - min) + min;
	var valorpc2 = Math.round(Math.random() + (2-1));
	console.log("el valor de la pc 2 es:"+valorpc2);

	var valorpc3 = Math.round(Math.random() + (2-1));
	console.log("el valor de la pc 3 es:"+valorpc3);

	//colisión
	//para probar
	/*
	valorpc2=2; 
	valorpc3=2;*/
	if (valorpc2==valorpc3) {
		colision();
	} else if (valorpc3>valorpc2){
		//pc2 va primero
		dosfirst();	
	} else if (valorpc2>valorpc3){
		//pc3 va primero
		tresfirst();	
	}
}

function rtspc2colision(){
	var pos_x=376;
	var whi = 0;
	function animrtspc2colision(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'orange';
		//x,y,width,height
		//376
		ctx.clearRect(375,85,310,30)
		ctx.fillRect(pos_x,85,30,30);
		pos_x+=1;
		if(pos_x<685){
			setTimeout(animrtspc2colision, 5);
		}
	}
	animrtspc2colision();
}   

function rtspc3colision(){
	var pos_x=1010;
	function animrtspc3colision(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'orange';
		//x,y,width,height
		ctx.clearRect(1042,85,-325,30)
		ctx.fillRect(pos_x,85,30,30);
		pos_x-=1;
		if(pos_x>710){
			setTimeout(animrtspc3colision, 5);
		}	
	}
	animrtspc3colision();
}

//si pc2 es primero---------------------------------------------
function rtspc2(){
	var pos_x=376;
	function animrtspc2(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'orange';
		//x,y,width,height
		//376
		ctx.clearRect(375,125,310,30)
		ctx.fillRect(pos_x,125,30,30);
		pos_x+=1;
		if(pos_x<685){
			setTimeout(animrtspc2, 5);
		}
	}
	animrtspc2();	
}

function ctsap_pc3(){
	var pos_x=685;
	function animctsap_pc3(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'green';
		//x,y,width,height
		//376
		ctx.clearRect(685,165,357,30)
		ctx.fillRect(pos_x,165,30,30);
		pos_x+=1;
		if(pos_x<1042){
			setTimeout(animctsap_pc3, 5);
		}
	}
	animctsap_pc3();	
}

function dtspc2_pc3(){
	var pos_x=375;
	function animdtspc2_pc3(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'blue';
		//x,y,width,height
		//376
		ctx.clearRect(375,205,310,30)
		ctx.fillRect(pos_x,205,30,30);
		pos_x+=1;
		if(pos_x<685){
			setTimeout(animdtspc2_pc3, 5);
		}
	}
	animdtspc2_pc3();	
}

function ackap_pc3(){
	var pos_x=685;
	function animackap_pc3(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'yellow';
		//x,y,width,height
		//376
		ctx.clearRect(685,245,357,30)
		ctx.fillRect(pos_x,245,30,30);
		pos_x+=1;
		if(pos_x<1042){
			setTimeout(animackap_pc3, 5);
		}
	}
	animackap_pc3();
}

function rtspc3col(){
	var pos_x=1010;
	function animrtspc3col(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'orange';
		//x,y,width,height
		ctx.clearRect(1042,285,-325,30)
		ctx.fillRect(pos_x,285,30,30);
		pos_x-=1;
		if(pos_x>710){
			setTimeout(animrtspc3col, 5);
		}	
	}
	animrtspc3col();
}

function ctsap_pc2(){
	var pos_x=710;
	function animctsap_pc2(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'green';
		//x,y,width,height
		ctx.clearRect(740,325,-365,30)
		ctx.fillRect(pos_x,325,30,30);
		pos_x-=1;
		if(pos_x>375){
			setTimeout(animctsap_pc2, 5);
		}	
	}
	animctsap_pc2();
}

function dtspc3_pc2(){
	var pos_x=1010;
	function animdtspc3_pc2(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'blue';
		//x,y,width,height
		ctx.clearRect(1042,365,-325,30)
		ctx.fillRect(pos_x,365,30,30);
		pos_x-=1;
		if(pos_x>710){
			setTimeout(animdtspc3_pc2, 5);
		}	
	}
	animdtspc3_pc2();
}

//---------------------------------------------------

//si pc3 es primero +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function rtspc3first(){
	var pos_x=1010;
	function animrtspc3first(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'orange';
		//x,y,width,height
		ctx.clearRect(1042,125,-325,30)
		ctx.fillRect(pos_x,125,30,30);
		pos_x-=1;
		if(pos_x>710){
			setTimeout(animrtspc3first, 5);
		}	
	}
	animrtspc3first();
}

function ctsap_pc2first(){
	var pos_x=710;
	function animctsap_pc2first(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'green';
		//x,y,width,height
		ctx.clearRect(740,165,-365,30)
		ctx.fillRect(pos_x,165,30,30);
		pos_x-=1;
		if(pos_x>375){
			setTimeout(animctsap_pc2first, 5);
		}	
	}
	animctsap_pc2first();
}

function dtspc3_pc2first(){
	var pos_x=1010;
	function animdtspc3_pc2first(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'blue';
		//x,y,width,height
		ctx.clearRect(1042,205,-325,30)
		ctx.fillRect(pos_x,205,30,30);
		pos_x-=1;
		if(pos_x>710){
			setTimeout(animdtspc3_pc2first, 5);
		}	
	}
	animdtspc3_pc2first();
}

function ackap_pc2first(){
	var pos_x=710;
	function animackap_pc2first(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'yellow';
		//x,y,width,height
		ctx.clearRect(740,245,-365,30)
		ctx.fillRect(pos_x,245,30,30);
		pos_x-=1;
		if(pos_x>375){
			setTimeout(animackap_pc2first, 5);
		}	
	}
	animackap_pc2first();
}

function rtspc2first(){
	var pos_x=376;
	function animrtspc2first(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'orange';
		//x,y,width,height
		//376
		ctx.clearRect(375,285,310,30)
		ctx.fillRect(pos_x,285,30,30);
		pos_x+=1;
		if(pos_x<685){
			setTimeout(animrtspc2first, 5);
		}
	}
	animrtspc2first();	
}

function ctsap_pc3first(){
	var pos_x=685;
	function animctsap_pc3first(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'green';
		//x,y,width,height
		//376
		ctx.clearRect(685,325,357,30)
		ctx.fillRect(pos_x,325,30,30);
		pos_x+=1;
		if(pos_x<1042){
			setTimeout(animctsap_pc3first, 5);
		}
	}
	animctsap_pc3first();	
}

function dtspc2_pc3first(){
	var pos_x=375;
	function animdtspc2_pc3first(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'blue';
		//x,y,width,height
		//376
		ctx.clearRect(375,365,310,30)
		ctx.fillRect(pos_x,365,30,30);
		pos_x+=1;
		if(pos_x<685){
			setTimeout(animdtspc2_pc3first, 5);
		}
	}
	animdtspc2_pc3first();	
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//si pc2 es primero caso 1*********************************************
function rtspc2B(){
	var pos_x=376;
	function animrtspc2B(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'orange';
		//x,y,width,height
		//376
		ctx.clearRect(375,85,310,30)
		ctx.fillRect(pos_x,85,30,30);
		pos_x+=1;
		if(pos_x<685){
			setTimeout(animrtspc2B, 5);
		}
	}
	animrtspc2B();	
}

function ctsap_pc3B(){
	var pos_x=685;
	function animctsap_pc3B(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'green';
		//x,y,width,height
		//376
		ctx.clearRect(685,125,357,30)
		ctx.fillRect(pos_x,125,30,30);
		pos_x+=1;
		if(pos_x<1042){
			setTimeout(animctsap_pc3B, 5);
		}
	}
	animctsap_pc3B();	
}

function dtspc2_pc3B(){
	var pos_x=375;
	function animdtspc2_pc3B(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'blue';
		//x,y,width,height
		//376
		ctx.clearRect(375,165,310,30)
		ctx.fillRect(pos_x,165,30,30);
		pos_x+=1;
		if(pos_x<685){
			setTimeout(animdtspc2_pc3B, 5);
		}
	}
	animdtspc2_pc3B();	
}

function ackap_pc3B(){
	var pos_x=685;
	function animackap_pc3B(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'yellow';
		//x,y,width,height
		//376
		ctx.clearRect(685,205,357,30)
		ctx.fillRect(pos_x,205,30,30);
		pos_x+=1;
		if(pos_x<1042){
			setTimeout(animackap_pc3B, 5);
		}
	}
	animackap_pc3B();
}

function rtspc3colB(){
	var pos_x=1010;
	function animrtspc3colB(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'orange';
		//x,y,width,height
		ctx.clearRect(1042,245,-325,30)
		ctx.fillRect(pos_x,245,30,30);
		pos_x-=1;
		if(pos_x>710){
			setTimeout(animrtspc3colB, 5);
		}	
	}
	animrtspc3colB();
}

function ctsap_pc2B(){
	var pos_x=710;
	function animctsap_pc2B(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'green';
		//x,y,width,height
		ctx.clearRect(740,285,-365,30)
		ctx.fillRect(pos_x,285,30,30);
		pos_x-=1;
		if(pos_x>375){
			setTimeout(animctsap_pc2B, 5);
		}	
	}
	animctsap_pc2B();
}

function dtspc3_pc2B(){
	var pos_x=1010;
	function animdtspc3_pc2B(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'blue';
		//x,y,width,height
		ctx.clearRect(1042,325,-325,30)
		ctx.fillRect(pos_x,325,30,30);
		pos_x-=1;
		if(pos_x>710){
			setTimeout(animdtspc3_pc2B, 5);
		}	
	}
	animdtspc3_pc2B();
}

//*************************************************************
//si pc3 es primero sin colision ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿

function rtspc3firstC(){
	var pos_x=1010;
	function animrtspc3firstC(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'orange';
		//x,y,width,height
		ctx.clearRect(1042,85,-325,30)
		ctx.fillRect(pos_x,85,30,30);
		pos_x-=1;
		if(pos_x>710){
			setTimeout(animrtspc3firstC, 5);
		}	
	}
	animrtspc3firstC();
}

function ctsap_pc2firstC(){
	var pos_x=710;
	function animctsap_pc2firstC(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'green';
		//x,y,width,height
		ctx.clearRect(740,125,-365,30)
		ctx.fillRect(pos_x,125,30,30);
		pos_x-=1;
		if(pos_x>375){
			setTimeout(animctsap_pc2firstC, 5);
		}	
	}
	animctsap_pc2firstC();
}

function dtspc3_pc2firstC(){
	var pos_x=1010;
	function animdtspc3_pc2firstC(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'blue';
		//x,y,width,height
		ctx.clearRect(1042,165,-325,30)
		ctx.fillRect(pos_x,165,30,30);
		pos_x-=1;
		if(pos_x>710){
			setTimeout(animdtspc3_pc2firstC, 5);
		}	
	}
	animdtspc3_pc2firstC();
}

function ackap_pc2firstC(){
	var pos_x=710;
	function animackap_pc2firstC(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'yellow';
		//x,y,width,height
		ctx.clearRect(740,205,-365,30)
		ctx.fillRect(pos_x,205,30,30);
		pos_x-=1;
		if(pos_x>375){
			setTimeout(animackap_pc2firstC, 5);
		}	
	}
	animackap_pc2firstC();
}

function rtspc2firstC(){
	var pos_x=376;
	function animrtspc2firstC(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'orange';
		//x,y,width,height
		//376
		ctx.clearRect(375,245,310,30)
		ctx.fillRect(pos_x,245,30,30);
		pos_x+=1;
		if(pos_x<685){
			setTimeout(animrtspc2firstC, 5);
		}
	}
	animrtspc2firstC();	
}

function ctsap_pc3firstC(){
	var pos_x=685;
	function animctsap_pc3firstC(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'green';
		//x,y,width,height
		//376
		ctx.clearRect(685,285,357,30)
		ctx.fillRect(pos_x,285,30,30);
		pos_x+=1;
		if(pos_x<1042){
			setTimeout(animctsap_pc3firstC, 5);
		}
	}
	animctsap_pc3firstC();	
}

function dtspc2_pc3firstC(){
	var pos_x=375;
	function animdtspc2_pc3firstC(){
		var micanvas = document.getElementById('lienzo');
		var ctx = micanvas.getContext("2d");
		//dibujamos un cuadrado
		ctx.fillStyle = 'blue';
		//x,y,width,height
		//376
		ctx.clearRect(375,325,310,30)
		ctx.fillRect(pos_x,325,30,30);
		pos_x+=1;
		if(pos_x<685){
			setTimeout(animdtspc2_pc3firstC, 5);
		}
	}
	animdtspc2_pc3firstC();	
}

//¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿
//99999999999999999999999999999999999999999999999999999999999999
function colision(){
	//aqui agregamos la animacion de colision
	rtspc2colision();
	rtspc3colision();
	//ponemos un tiempo de espera
	console.log("ha ocurrido una colision... asignando" 
		+ " tiempo de espera");

	var timewaitpc2 = Math.round(Math.random() + (3-1));
	console.log("el tiempo de espera de la pc"
		+ " 2 es:"+timewaitpc2);

	var timewaitpc3 = 0;

	if (timewaitpc2==2) {
		timewaitpc3=3;
	} else if (timewaitpc2==3) {
		timewaitpc3=2;
	}
	//para probar
	/*
	timewaitpc2=3;
	timewaitpc3=2;*/
	console.log("el tiempo de espera de la pc"
		+ " 3 es:"+timewaitpc3);
	/*
	if (timewaitpc2<timewaitpc3) {
		var timepc2_1 = timewaitpc2;
	}*/
	var t1 = timewaitpc2*1000;
	if (timewaitpc2<timewaitpc3) {

		var timeF1_1CA = 4000 + (Math.round(Math.random() + (3-1))*1000);
		function f1_1() {
			//envia consola 
			console.log("esperando: "+timeF1_1CA+" para el rts");
		}
		setTimeout(f1_1,timeF1_1CA);

		var timeF1CA = timeF1_1CA
		 + (Math.round(Math.random() + (3-1))*1000);
		function f1(){
			//request to send de pc 2 a AP
			console.log("soy la funcion 1");
			rtspc2();
		}
		setTimeout(f1,timeF1CA);

		var timeF2_1CA = timeF1CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f2_1() {
			//envia consola 
			console.log("el tiempo de espera para"
					+"el clear to send"+timeF2_1CA);
		}
		setTimeout(f2_1,timeF2_1CA);

		var timeF2CA = timeF2_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f2() {
			//clear to send de Ap a pc3
			ctsap_pc3();
				console.log("soy la f2");
		}
		setTimeout(f2,timeF2CA);

		var timeF3_1CA = timeF2CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f3_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"enviar los datos "+timeF3_1CA);
		}
		setTimeout(f3_1,timeF3_1CA);

		var timeF3CA = timeF3_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f3() {
			//datos de pc2 a pc3
			dtspc2_pc3();
				console.log("soy la f3");
		}
		setTimeout(f3,timeF3CA);

		var timeF4_1CA = timeF3CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f4_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"el ack "+timeF4_1CA);
		}
		setTimeout(f4_1,timeF4_1CA);

		var timeF4CA = timeF4_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f4() {
			//ack de ap a pc3
			ackap_pc3();
				console.log("soy la f4");
		}
		setTimeout(f4,timeF4CA);

		var timeF5_1CA = timeF4CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f5_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"rts de pc3 "+timeF5_1CA);
		}
		setTimeout(f5_1,timeF5_1CA);

		var timeF5CA = timeF5_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f5() {
			//rts pc3 a ap
			rtspc3col();
				console.log("soy la f5");
		}
		setTimeout(f5,timeF5CA);

		var timeF6_1CA = timeF5CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f6_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"cts ap a pc2 "+timeF6_1CA);
		}
		setTimeout(f6_1,timeF6_1CA);

		var timeF6CA = timeF6_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f6() {
			//clear to send Ap a pc2
			ctsap_pc2();
				console.log("soy la f6");
		}
		setTimeout(f6,timeF6CA);

		var timeF7_1CA = timeF6CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f7_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"dts ap a pc2 "+timeF7_1CA);
		}
		setTimeout(f7_1,timeF7_1CA);

		var timeF7CA = timeF7_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f7() {
			//datos pc3 a ap
			dtspc3_pc2();
				console.log("soy la f7");
		}
		setTimeout(f7,timeF7CA);
	} if (timewaitpc2>timewaitpc3) {
		var timeF1_1CA = 4000 + (Math.round(Math.random() + (3-1))*1000);
		function f1_1() {
			//envia consola 
			console.log("esperando: "+timeF1_1CA+" para el rts");
		}
		setTimeout(f1_1,timeF1_1CA);

		var timeF1CA = timeF1_1CA
		 + (Math.round(Math.random() + (3-1))*1000);
		function f1(){
			//request to send de pc3 a AP
			rtspc3first();
			console.log("soy la funcion 1");
		}
		setTimeout(f1,timeF1CA);

		var timeF2_1CA = timeF1CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f2_1() {
			//envia consola 
			console.log("el tiempo de espera para"
					+"el clear to send"+timeF2_1CA);
		}
		setTimeout(f2_1,timeF2_1CA);

		var timeF2CA = timeF2_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f2() {
			//clear to send de Ap a pc2
			ctsap_pc2first();
				console.log("soy la f2");
		}
		setTimeout(f2,timeF2CA);

		var timeF3_1CA = timeF2CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f3_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"enviar los datos "+timeF3_1CA);
		}
		setTimeout(f3_1,timeF3_1CA);

		var timeF3CA = timeF3_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f3() {
			//datos de pc3 a ap
			dtspc3_pc2first();
				console.log("soy la f3");
		}
		setTimeout(f3,timeF3CA);

		var timeF4_1CA = timeF3CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f4_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"el ack "+timeF4_1CA);
		}
		setTimeout(f4_1,timeF4_1CA);

		var timeF4CA = timeF4_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f4() {
			//ack de ap a pc2
			ackap_pc2first();
			
				console.log("soy la f4");
		}
		setTimeout(f4,timeF4CA);

		var timeF5_1CA = timeF4CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f5_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"rts de pc2 "+timeF5_1CA);
		}
		setTimeout(f5_1,timeF5_1CA);

		var timeF5CA = timeF5_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f5() {
			//rts pc2 a ap
			rtspc2first();
				console.log("soy la f5");
		}
		setTimeout(f5,timeF5CA);

		var timeF6_1CA = timeF5CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f6_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"cts ap a pc3 "+timeF6_1CA);
		}
		setTimeout(f6_1,timeF6_1CA);

		var timeF6CA = timeF6_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f6() {
			//clear to send Ap a pc3
			ctsap_pc3first();
				console.log("soy la f6");
		}
		setTimeout(f6,timeF6CA);

		var timeF7_1CA = timeF6CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f7_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"dts pc2 a ap "+timeF7_1CA);
		}
		setTimeout(f7_1,timeF7_1CA);

		var timeF7CA = timeF7_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f7() {
			//datos pc2 a ap
			dtspc2_pc3first();
				console.log("soy la f7");
		}
		setTimeout(f7,timeF7CA);
	}


/*
		if (timewaitpc2<timewaitpc3) {
			//casoA
			var timepc2_1 = timewaitpc2;
			var timepc2_01 = timepc2_1 * 2000;
			console.log("esperando: "+timepc2_01+" para el rts");
			function f1(){
				//request to send de pc 2 a AP
				alert("soy la f1")
			}
			setTimeout(f1,timepc2_01);

			function f2() {
				//clear to send de Ap a pc3
				alert("soy la f2")
			}

			var timectscaseA = Math.round(Math.random() + (3-1));
			var timectscase0A = timectscaseA * 1000;
			console.log("el tiempo de espera para"
					+"el clear to send"+timectscase0A);

			setTimeout(f2,timectscase0A);

			function f3() {
				//datos de pc2 a Ap
				alert("soy la f3")
			}

			var timedtscaseA = Math.round(Math.random() + (3-1));
			var timedtscase0A = timedtscaseA * 1000;
			console.log("el tiempo de espera para"
					+"enviar los datos "+timectscase0A);

			setTimeout(f3,timectscase0A);

			function f4() {
				//ack de Ap a pc3
				alert("soy la f4")
			}

			var timeackcaseA = Math.round(Math.random() + (3-1));
			var timeackcase0A = timeackcaseA * 1000;
			console.log("el tiempo de espera para"
					+"el ack "+timeackcase0A);

			setTimeout(f4,timeackcase0A);

			function f5() {
				//request to send pc3 a Ap
				alert("soy la f5")
			}

			var timerts2caseA = Math.round(Math.random() + (3-1));
			var timerts2case0A = timerts2caseA * 1000;
			console.log("el tiempo de espera para"
					+"rts de pc3 "+timerts2case0A);

			setTimeout(f5,timerts2case0A);

			function f6() {
				//clear to send Ap a pc2
				alert("soy la f6")
			}

			var timects2caseA = Math.round(Math.random() + (3-1));
			var timects2case0A = timects2caseA * 1000;
			console.log("el tiempo de espera para"
					+"cts ap a pc2 "+timects2case0A);

			setTimeout(f6,timects2case0A);

			function f7() {
				//datos pc3 a Ap
				alert("soy la f7")
			}

			var timedts2caseA = Math.round(Math.random() + (3-1));
			var timedts2case0A = timedts2caseA * 1000;
			console.log("el tiempo de espera para"
					+"dts ap a pc2 "+timedts2case0A);

			setTimeout(f7,timedts2case0A);
			
		} else if (timewaitpc2>timewaitpc3) {
			//entonces la pc 2 espera mas tiempo por lo cual la pc 
			//3 es la que va primero
			var timepc3_1 = timewaitpc3;
			console.log("esperando: "+timepc3_1+" para el rts");
		}*/

}

function dosfirst() {
	var timeF1_1CA = (Math.round(Math.random() + (3-1))*1000);
		function f1_1() {
			//envia consola 
			console.log("esperando: "+timeF1_1CA+" para el rts");
		}
		setTimeout(f1_1,timeF1_1CA);

		var timeF1CA = timeF1_1CA
		 + (Math.round(Math.random() + (3-1))*1000);
		function f1(){
			rtspc2B();
			//request to send de pc 2 a AP
			console.log("soy la funcion 1");
		}
		setTimeout(f1,timeF1CA);

		var timeF2_1CA = timeF1CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f2_1() {
			//envia consola 
			console.log("el tiempo de espera para"
					+"el clear to send"+timeF2_1CA);
		}
		setTimeout(f2_1,timeF2_1CA);

		var timeF2CA = timeF2_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f2() {
			//clear to send de Ap a pc3
			ctsap_pc3B();
				console.log("soy la f2");
		}
		setTimeout(f2,timeF2CA);

		var timeF3_1CA = timeF2CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f3_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"enviar los datos "+timeF3_1CA);
		}
		setTimeout(f3_1,timeF3_1CA);

		var timeF3CA = timeF3_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f3() {
			//datos de pc2 a pc3
			dtspc2_pc3B();
				console.log("soy la f3");
		}
		setTimeout(f3,timeF3CA);

		var timeF4_1CA = timeF3CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f4_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"el ack "+timeF4_1CA);
		}
		setTimeout(f4_1,timeF4_1CA);

		var timeF4CA = timeF4_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f4() {
			//ack de ap a pc3
			ackap_pc3B();
				console.log("soy la f4");
		}
		setTimeout(f4,timeF4CA);

		var timeF5_1CA = timeF4CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f5_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"rts de pc3 "+timeF5_1CA);
		}
		setTimeout(f5_1,timeF5_1CA);

		var timeF5CA = timeF5_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f5() {
			//rts pc3 a ap
			rtspc3colB();
				console.log("soy la f5");
		}
		setTimeout(f5,timeF5CA);

		var timeF6_1CA = timeF5CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f6_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"cts ap a pc2 "+timeF6_1CA);
		}
		setTimeout(f6_1,timeF6_1CA);

		var timeF6CA = timeF6_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f6() {
			//clear to send Ap a pc2
			ctsap_pc2B();
				console.log("soy la f6");
		}
		setTimeout(f6,timeF6CA);

		var timeF7_1CA = timeF6CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f7_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"dts ap a pc2 "+timeF7_1CA);
		}
		setTimeout(f7_1,timeF7_1CA);

		var timeF7CA = timeF7_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f7() {
			//datos pc3 a ap
			dtspc3_pc2B();
				console.log("soy la f7");
		}
		setTimeout(f7,timeF7CA);
}

function tresfirst() {
	var timeF1_1CA = (Math.round(Math.random() + (3-1))*1000);
		function f1_1() {
			//envia consola 
			console.log("esperando: "+timeF1_1CA+" para el rts");
		}
		setTimeout(f1_1,timeF1_1CA);

		var timeF1CA = timeF1_1CA
		 + (Math.round(Math.random() + (3-1))*1000);
		function f1(){
			//request to send de pc3 a AP
			rtspc3firstC();
			console.log("soy la funcion 1");
		}
		setTimeout(f1,timeF1CA);

		var timeF2_1CA = timeF1CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f2_1() {
			//envia consola 
			console.log("el tiempo de espera para"
					+"el clear to send"+timeF2_1CA);
		}
		setTimeout(f2_1,timeF2_1CA);

		var timeF2CA = timeF2_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f2() {
			//clear to send de Ap a pc2
			ctsap_pc2firstC();
				console.log("soy la f2");
		}
		setTimeout(f2,timeF2CA);

		var timeF3_1CA = timeF2CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f3_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"enviar los datos "+timeF3_1CA);
		}
		setTimeout(f3_1,timeF3_1CA);

		var timeF3CA = timeF3_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f3() {
			//datos de pc3 a ap
			dtspc3_pc2firstC();
				console.log("soy la f3");
		}
		setTimeout(f3,timeF3CA);

		var timeF4_1CA = timeF3CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f4_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"el ack "+timeF4_1CA);
		}
		setTimeout(f4_1,timeF4_1CA);

		var timeF4CA = timeF4_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f4() {
			//ack de ap a pc2
			rtspc2firstC();
				console.log("soy la f4");
		}
		setTimeout(f4,timeF4CA);

		var timeF5_1CA = timeF4CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f5_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"rts de pc2 "+timeF5_1CA);
		}
		setTimeout(f5_1,timeF5_1CA);

		var timeF5CA = timeF5_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f5() {
			//rts pc2 a ap
			ackap_pc2firstC();
				console.log("soy la f5");
		}
		setTimeout(f5,timeF5CA);

		var timeF6_1CA = timeF5CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f6_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"cts ap a pc3 "+timeF6_1CA);
		}
		setTimeout(f6_1,timeF6_1CA);

		var timeF6CA = timeF6_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f6() {
			//clear to send Ap a pc3
			ctsap_pc3firstC();
				console.log("soy la f6");
		}
		setTimeout(f6,timeF6CA);

		var timeF7_1CA = timeF6CA + 4000
		 + (Math.round(Math.random() + (3-1))*1000);
		function f7_1() {
			//envia a consola 
			console.log("el tiempo de espera para"
					+"dts pc2 a ap "+timeF7_1CA);
		}
		setTimeout(f7_1,timeF7_1CA);

		var timeF7CA = timeF7_1CA 
		+ (Math.round(Math.random() + (3-1))*1000);
		function f7() {
			//datos pc2 a ap
			dtspc2_pc3firstC();
				console.log("soy la f7");
		}
		setTimeout(f7,timeF7CA);
}
//99999999999999999999999999999999999999999999999999999999999999
function lienzos(){
	var micanvas = document.getElementById('lienzo');
	var ctx = micanvas.getContext("2d");

	//insertamos primera imagen de pc
	var img1 = new Image();
	img1.src = "Img/img1.png";
	img1.onload = function(){
		ctx.drawImage(img1,0,0,150,80);
	}

	//insertamos segunda imagen de pc
	var img2 = new Image();
	img2.src = "Img/img1.png";
	img2.onload = function(){
		ctx.drawImage(img2,316,0,150,80);
	}

	//insertamos imagen 
	var img3 = new Image();
	img3.src = "Img/img3.png";
	img3.onload = function(){
		ctx.drawImage(img3,632,0,150,80);
	}

	//insertamos tercera imagen de pc
	var img4 = new Image();
	img4.src = "Img/img1.png";
	img4.onload = function(){
		ctx.drawImage(img4,950,0,150,80);
	}


}

function borrarlienzo() {
	location.reload();
}