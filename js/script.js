var letra;
var setor;
var limite		= 75;
var palavra 	= "bingo";
var letras		= palavra.split('');
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
var setores		= document.getElementById('setores');

//função 
function createCard(title, width){
	var card = document.createElement('div');
	card.classList.add('card');
	card.style.width = width+"%";

	var h1 = document.createElement('h1');
	h1.innerHTML = title.toUpperCase();
	card.append(h1);

	var p = document.createElement('p');
	p.id = title;
	card.append(p);

	return card;
}

for(var e = 0; e < letras.length; e++) {
	var section = createCard(letras[e],(100/letras.length));
	setores.append(section);
}


//função para gerar numeros inteiros aleatórios
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function newNum(){
	if(!finalizado){

		var newNum = randomInt(1,limite);

		if(!nums.includes(newNum)){

			//verifica a letra a que o número pertence
			for(var i = 0; i < letras.length; i++){
				if(newNum >= ((i * perLetra) + 1) && newNum <= ((i+1)*perLetra)){
					letra = letras[i];
				}
			}

			setor = document.getElementById(letra);
			//Adiciona o novo número na letra correspondente
			if(setor.innerHTML == ''){
				setor.innerHTML += newNum;
			}else{
				setor.innerHTML += ', '+newNum;
			}

			//Escreve o último número na div correspondente
			lastNumP.innerHTML = "<h1>"+letra.toUpperCase()+"</h1><p>"+newNum+"</p>";

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