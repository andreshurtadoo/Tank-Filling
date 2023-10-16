// Components
const tanque1 = document.getElementsByClassName('tanque1')[0]
const tagNivelT1 = document.getElementById('nivel1')
const tagLtsT1 = document.getElementById('lts1')

const tanque2 = document.getElementsByClassName('tanque2')[0]
const tagNivelT2 = document.getElementById('nivel2')
const tagLtsT2 = document.getElementById('lts2')
const tub = document.querySelector('.tub')
// Liters x Second
var tap1 = parseFloat(document.getElementById('flu1').value) || 1
var tap2 = parseFloat(document.getElementById('flu2').value) || 1
var tap3 = 1
// Capacity x Lts
var capT1 = parseFloat(document.getElementById('cap1').value) || 10
var capT2 = parseFloat(document.getElementById('cap2').value) || 10
// Max and Min Porcents
const maxT1 = 75/100
const maxT2 = 75/100
const minT1 = 25/100
const minT2 = 25/100
// Water level x Lts
var levelT1 = 0
var levelT2 = 0

// ------------------------FUNCTIONS-------------------------------------
// Llenar tanque 1
const fillT1 = () => {
	// No dejamos que pase el 75%
	if( (levelT1+=tap1) >= maxT1*capT1 ){
		levelT1-=tap1;    //Quitamos un lt
		clearInterval(interval1);    //Paramos el llenado del T1
		llenarT2();    //Empezamos a llenar el T2
		return console.log('El tanque 1 ya se lleno!!')
	}

	console.log(`Tanque1 = {
		"Lts T1": ${levelT1},
		"Porc T1": ${(levelT1/capT1)*100}%,
		"FlujoxLst1": ${tap1},
		"Cap1": ${capT1}
	}`)

	// Mostramos los datos y el nivel de agua!
	tanque1.style.cssText = `background-size: calc(100% - 0px) calc(0% + ${(levelT1/capT1)*100}%); transition:3s`
	tagNivelT1.innerHTML = `${(levelT1/capT1)*100}%`
	tagLtsT1.innerHTML = `${levelT1}lts`
}

function fillT2() {
	levelT2 += tap2
	levelT1 -= tap2
	
	// No dejamos que el T2 pase el 75%
	if( levelT2 >= maxT2*capT2 ){
		clearInterval(interval3);	//Paramos de llenar el T2
		return console.log('El tanque 2 esta apunto de llenarse!')
	}
	// No dejamos que el T1 baje del 25%
	else if( levelT1 <= minT1*capT1 ){
		clearInterval(interval3);	//Paramos de llenar el T2
		return console.log('El tanque 1 esta apunto de vaciarce!!')
	}

	console.log(`Tanque2 = {
		"nivel T2": ${levelT2},
		"Porc T2": ${(levelT2/capT2)*100},
		"nivel T1"; ${levelT1},
		"Porc T1": ${(levelT1/capT1)*100},
		"Cap2": ${capT2},
	}`)

	// LLenamos el tanque 2
	tanque2.style.cssText = `background-size: calc(100% - 0px) calc(0% + ${(levelT2/capT2)*100}%); transition:3s`
	// Vaciamos el tanque 1
	tanque1.style.cssText = `background-size: calc(100% - 0px) calc(${(levelT1/capT1)*100}%); transition:3s`
	tub.style.color = '#03A9F4'

	tagNivelT2.innerHTML = `${(levelT2/capT2)*100}%`
	tagLtsT2.innerHTML = `${levelT2}lts`
	tagNivelT1.innerHTML = `${(levelT1/capT1)*100}%`
	tagLtsT1.innerHTML = `${levelT1}lts`
}

// -------------------------CALLS----------------------------------------
let interval1; //Llenar tanque1
let interval3; //Llenar tanque2

// LLenar tanque 1
const llenarT1 = () => {
	getValue()
	if(!interval1){
		interval1 = setInterval(fillT1, 1000)
	}
}

// LLenar tanque 2
const llenarT2 = () => {
	getValue()
	if(!interval3){
		interval3 = setInterval(fillT2, 1000)
	}
}

// -------------------------GetValues---------------------------------------
function getValue(){
	this.tap1 = parseFloat(document.getElementById('flu1').value) || 1
	this.tap2 = parseFloat(document.getElementById('flu2').value) || 1
	this.capT1 = parseFloat(document.getElementById('cap1').value) || 10
	this.capT2 = parseFloat(document.getElementById('cap2').value) || 10
}

