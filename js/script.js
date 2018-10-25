function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var letra;
var setor;
var nums 		= [];
var acabado		= false;
var title		= document.getElementById('title');
var botao 		= document.getElementById('caller');
var botaoReset 	= document.getElementById('rstbtn');
var lastNumP 	= document.getElementById('lastNum');
var numsP 		= document.getElementById('nums');

function newNum(){
	if(!acabado){
		var newNum = randomInt(1,75);
		if(!nums.includes(newNum)){
			if(newNum >= 1 && newNum <= 15){
				letra = "b";
			}
			else if(newNum >= 16 && newNum <= 30){
				letra = "i";
			}
			else if(newNum >= 31 && newNum <= 45){
				letra = "n";
			}
			else if(newNum >= 46 && newNum <= 60){
				letra = "g";
			}
			else if(newNum >= 61 && newNum <= 75){
				letra = "o";
			}
			nums.push(newNum);
			setor = document.getElementById(letra);
			setor.innerHTML += newNum+', ';
			lastNumP.innerHTML = "<h1>"+letra.toUpperCase()+"</h1><h3>"+newNum+"</h3>";
			if(nums.length == 75){
				title.innerHTML += " - Finalizado"
				caller.disabled = 'disabled';
				acabado = true;
			}
		}else{
			this.newNum();
		}
		numsP.innerHTML = "<h2>Já foram:</h2>"+nums.join(', ');
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