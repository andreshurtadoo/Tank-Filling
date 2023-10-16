// Llenar tanque 1
const fillT1 = () => {
	// Sobrepasa el 75%
	if( levelT1 >= maxT1/capT1 ){
		clearInterval(interval1);    //Paramos el llenado del T1
		start2();	//Comenzamos a vaciar el T1
		start3();   //Comenzamos a llenar el T2
		return console.log('El tanque 1 ya se lleno!!')
	}

	levelT1 += tap1
	console.log(levelT1, (levelT1/capT1)*100, maxT1)
	tanque1.style.cssText = `background-size: calc(100% - 0px) calc(0% + ${(levelT1/capT1)*100}%); transition:4s`
	tagNivelT1.innerHTML = `${(levelT1/capT1)*100}%`
	tagLtsT1.innerHTML = `${levelT1}lts`
}
// Vaciar tanque 1
const drainT1 = () => {
	// Baja el 25% del nivel de agua
	if( levelT1 <= minT1/capT1 ){
		clearInterval(interval2);	//Paramos de vaciar el T1
		start();	//Empezamos a llenarlos de nuevo
		return console.log('El tanque 1 ya se vacio!!')
	}

	levelT1 -= tap2
	console.log(levelT1, (levelT1/capT1)*100, minT1)
	tanque1.style.cssText = `background-size: calc(100% - 0px) calc(${(levelT1/capT1)*100}% - 0%); transition:4s`
	tagNivelT1.innerHTML = `${(levelT1/capT1)*100}%`
	tagLtsT1.innerHTML = `${levelT1}lts`
}
// Llenar tanque 2
const fillT2 = () => {
	// Sobrepasa el 75%
	if( levelT2 >= maxT2/capT2 ){
		clearInterval(interval3);	//Paramos de llenar el T2
		start4();	//Vaciamos el T2
		return console.log('El tanque 2 ya se lleno!!')
	}

	levelT2 += tap2
	console.log(levelT2, (levelT2/capT1)*100, maxT2)
	// LLenamos el tanque 2
	tanque2.style.cssText = `background-size: calc(100% - 0px) calc(0% + ${(levelT2/capT2)*100}%); transition:4s`
	// Vaciamos el tanque 1
	tanque1.style.cssText = `background-size: calc(100% - 0px) calc(0% + ${(levelT2/capT2)*100}%); transition:4s`
	tagNivelT2.innerHTML = `${(levelT2/capT2)*100}%`
	tagLtsT2.innerHTML = `${levelT2}lts`
}
// Vaciar tanque 2
const drainT2 = () => {
	// Baja del 25% de nivel de agua
	if( levelT2 <= minT2/capT2 ){
		clearInterval(interval4);	//Paramos de vaciarlo
		return console.log('El tanque 2 ya se vacio!!')
	}

	levelT2 -= tap3
	console.log(levelT2, (levelT2/capT2)*100, minT2)
	tanque2.style.cssText = `background-size: calc(100% - 0px) calc(${(levelT2/capT2)*100}% - 0%); transition:4s`
	tagNivelT2.innerHTML = `${(levelT2/capT2)*100}%`
	tagLtsT2.innerHTML = `${levelT2}lts`
}