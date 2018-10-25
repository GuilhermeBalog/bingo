var letra;
var setor;
var limite		= 75;
var letras		= ['b','i','n','g','o'];
var qtLetra		= letras.length;
var perLetra	= limite/qtLetra ;
var nums 		= [];
var finalizado	= false;
//elementos
var title		= document.getElementById('title');
var botao 		= document.getElementById('caller');
var botaoReset 	= document.getElementById('rstbtn');
var lastNumP 	= document.getElementById('lastNum');
var numsP 		= document.getElementById('nums');

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function newNum(){
	if(!finalizado){

		var newNum = randomInt(1,limite);

		if(!nums.includes(newNum)){

			//Verifica a letra a que o número pertence 
			if(newNum >= (0*perLetra + 1) && newNum <= (1*perLetra) ){
				letra = "b";
			}
			else if(newNum >= (1*perLetra + 1) && newNum <= (2*perLetra)){
				letra = "i";
			}
			else if(newNum >= (2*perLetra + 1) && newNum <= (3*perLetra)){
				letra = "n";
			}
			else if(newNum >= (3*perLetra + 1) && newNum <= (4*perLetra)){
				letra = "g";
			}
			else if(newNum >= (4*perLetra + 1) && newNum <= (5*perLetra)){
				letra = "o";
			}

			setor = document.getElementById(letra);
			//Adiciona o novo número na letra correspondente
			if(setor.innerHTML == ''){
				setor.innerHTML += newNum;
			}else{
				setor.innerHTML += ', '+newNum;
			}

			//Escreve o último número na div correspondente
			lastNumP.innerHTML = "<h1>"+letra.toUpperCase()+"</h1><h3>"+newNum+"</h3>";

			//Adiciona o novo número no array dos já foram
			nums.push(newNum);

			//confere se o jogo foi finalizado
			if(nums.length == limite){
				title.innerHTML += " - Finalizado"
				caller.disabled = 'disabled';
				finalizado = true;
			}

			// Escreve os números que já foram em ordem decrescente
			for(var c = nums.length; c > 0; c--){
				if(c == nums.length){
					numsP.innerHTML = nums[c-1];
				}else{
					numsP.innerHTML += ", "+nums[c-1];
				}
			}
		}else{
			this.newNum();
		}
	}
}

document.addEventListener('keyup',function(event){
	event.preventDefault();
	if(event.keyCode === 13){
		newNum();
	}
});

function reset(){
	location.reload();
}