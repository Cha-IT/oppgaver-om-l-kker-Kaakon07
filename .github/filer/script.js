let correctPass = false
let tries = 3

function whileLøkke() {
    let whileLoop = document.getElementById("while");
    let i = 0;
    while (i <= 10) {
        let currentI = i;  // Lag en kopi av 'i' for hver iterasjon
        setTimeout(function(){
            whileLoop.innerHTML += currentI + " ";
        }, 500 * i);
        i++;
    }
}
    


function forLøkke() {
    let forLoop = document.getElementById("for")
    for (let i = 0; i <= 10; i++) {
        setTimeout(function(){
            forLoop.innerHTML += i + " ";
        },500 * i)
    }
    console.log("for")
}


function checkPass() {
    let password = "a" 
    let attemptedPass = prompt("skriv passord")
    if (password === attemptedPass && tries > 0) {
        return true
    }
    else {
        tries--;
    }
    
    return false
}

function gangeTabbel() {
    let gangeTabbel = document.getElementById("gangetabbel");
    let html = ""; 
    let delay = 100; 
    
    let i = 1;
    function printNumber() {
        if (i <= 10) {
            for (let x = 1; x <= 10; x++) {
                html += i * x + (x === 10 ? "<br>" : " ");
            }
            gangeTabbel.innerHTML = html; 
            i++;
            setTimeout(printNumber, delay);
        }
    }
    
    printNumber(); 
}

function even() {
    let text = document.getElementById("numbers")
    text.innerHTML = ""
    for (let i=0; i <= 100; i++) {
        if ((i & 1) === 0)
        text.innerHTML += i + " "
    }

}

function odd() {
    let text = document.getElementById("numbers")
    text.innerHTML = ""
    for (let i=0; i <= 100; i++) {
        if ((i & 1) != 0)
        text.innerHTML += i + " "
    }

}


while (correctPass === false && tries > 0) {
    correctPass = checkPass()
    if (tries <= 0) {
        document.body.innerHTML = "You entered the wrong password too many times"
    }
}





whileLøkke()
forLøkke()
gangeTabbel()

