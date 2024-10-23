//PREZZO al km = 0.21 euro
// 20 % ai minorenni
// 40 % agli over 65
//output prezzo finale max 2 cifre dopo la virgola



const userKm = document.getElementById('user-km') //km dell'utente 

const userAge = document.getElementById('user-age')  //età utente 

const costXkm = 0.21 //number (decimale)

const formElement = document.getElementById('form-km')

const ticketPreview = document.getElementById('ticket-preview').style.display = 'none'




formElement.addEventListener('submit', function (event) {
   
    event.preventDefault()

    const km = parseInt(userKm.value)

    const age = userAge.value


    const kmPrice =  km * costXkm 



    let discout = 0

    if (age === 'under18') {

        discout = (kmPrice * 20) / 100 

    } if (age=== 'over65') {

        discout = (kmPrice * 40) / 100 
    }



    let price = kmPrice - discout
    
    let priceFixed = price.toFixed(2)


    console.log(priceFixed)

    toggleDisplay('ticket-preview')

})


function toggleDisplay(id) {

    let element = document.getElementById(id);


    if (element.style.display === "none") {

        element.style.display = "block"

    }
}