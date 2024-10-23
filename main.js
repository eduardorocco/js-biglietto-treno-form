console.log('Ciao')

//PREZZO al km = 0.21 euro
// 20 % ai minorenni
// 40 % agli over 65
//output prezzo finale max 2 cifre dopo la virgola



const userKm =  parseInt(prompt('Inserisci i kilometri da percorrere:')) //km dell'utente //number
const userAge = parseInt(prompt('Inserisci la tua età:'))  //età utente //number
const costXkm = 0.21 //number (decimale)


//console.log(userKm, userAge, costXkm)


// x km * 0.21 euro = costo al km
// costo al km - eventuale sconto = costo del biglietto




const kmPrice = userKm * costXkm //number

//console.log(kmPrice)

// SE minorenne applica 20%
// SE over 65 applica 40%


//FORMULA PER IL CALCOLO DELLO SCONTO = sconto = prezzo * 20 / 100

let discout = 0

if (userAge < 18) {
    discout = (kmPrice * 20) / 100 
} if (userAge >= 65) {
    discout = (kmPrice * 40) / 100 
}

//console.log(discout)

let price = kmPrice - discout 

console.log(`Il costo del biglietto è ${price} €`)