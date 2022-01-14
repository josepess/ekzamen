/* Массив с ягодами. */
let BerriesArray = {
    1: 'Вишня',
    2:'Слива',
    3:'Смородина',
}

/* Массив с овощами. */
let VegetableArray = {
    1:'Картофель',
    2:'Свекла',
    3:'Морковь',
    4:'Репа',
}

/* Массив с фруктами. */
let FruitsArray = {
    1:'Яблоко',
    2:'Груша',
    3:'Банан',
    4:'Айва',
}
function getNewButtons(){
    let btnBer = document.createElement('button')
	let btnVeg = document.createElement('button')
	let btnFru = document.createElement('button')
	btnBer.innerHTML = 'Ягоды'
	btnBer.innerHTML = 'Овощи'
	btnBer.innerHTML = 'Фрукты'
}
function getAndSetRandomFromArrays(){
    let arrayKeys = Object.keys(latUtterancesArray)
    let id = arrayKeys[Math.floor(Math.random() * arrayKeys.length)]
	for (id = 0, id<length.BerriesArray, id++){
    appendTableRow(id, _latUtterancesArray[id], _rusUtterancesArray[id])
	}
}
let btnStart = document.createElement('button')
btnStart.innerHTML = 'Начать'
btnStart.onclick = getNewButtons
btnBer.onclick = getBerriesArray
btnVeg.onclick = getVegetablesArray
btnFru.onclick = getFruitsArray
