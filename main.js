//PREZZO al km = 0.21 euro
// 20 % ai minorenni
// 40 % agli over 65
//output prezzo finale max 2 cifre dopo la virgola


//CONST UI

const userKm = document.getElementById('user-km') //km dell'utente 

const userAge = document.getElementById('user-age')  //età utente 

const userName = document.getElementById('user-name') //nome utente


// CONST PRIZE CALCULATOR

const costXkm = 0.21 //number (decimale)


// CONST FORM

const formElement = document.getElementById('form-km')

const ticketPreview = document.getElementById('ticket-preview').style.display = 'none'

const ticketTable = document.getElementById('ticket-table')


formElement.addEventListener('submit', function (event) {
   
    ticketTable.innerHTML = ''

    event.preventDefault()

    
    //CONST PRIZE CALCULATOR

    const km = parseInt(userKm.value)

    const age = userAge.value

    const travelerName = userName.value

    const kmPrice =  km * costXkm 

    let discout = 0

    
    
    //TICKET PREViEW

    ticketTable.innerHTML += `<td >${travelerName}</td>`

    if (age === 'under18') {

        discout = (kmPrice * 20) / 100 

        ticketTable.innerHTML += `<td >Under 18</td>`

    }else if (age=== 'over65') {

        discout = (kmPrice * 40) / 100 

        ticketTable.innerHTML += `<td >Over 65</td>`

    } else {

        ticketTable.innerHTML += `<td >Biglietto Strandard</td>`

    }

    let price = kmPrice - discout

    let priceFixed = price.toFixed(2)


    ticketTable.innerHTML += `<td >${carriageNum()}</td>`

    ticketTable.innerHTML += `<td >${CPcodeNum()}</td>`

    ticketTable.innerHTML += `<td >${priceFixed} €</td>`

    //!TICKET PREVIEW

    //console.log(travelerName)


    //DISPLAY FUNCTION

    toggleDisplay('ticket-preview')

    

    console.log(priceFixed)

})

formElement.addEventListener('reset', function (event) {

    toggleDisplay('ticket-preview')
    
})



function toggleDisplay(id) {

    let element = document.getElementById(id);


    if (element.style.display === "none") {

        element.style.display = "block"

    } else {
        element.style.display = "none"
    }
}


function carriageNum() {
    return Math.floor(Math.random() * 9) + 1
}



function CPcodeNum() {
    return Math.floor(Math.random() * 999 + 9000) + 1
}

