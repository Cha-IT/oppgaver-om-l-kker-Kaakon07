let correctPass = false

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
    let password = "balls" 
    let attemptedPass = prompt("skriv passord")
    if (password === attemptedPass) {
        return true
    }
    return false
}

function gangeTabbel() {
    for (i = 1; i <= 10; i++) {
        for (x = 1; x <= 10; x++) {
            console.log(i*x)
        }
    }

}

while (correctPass === false) {
    correctPass = checkPass()
}





whileLøkke()
forLøkke()
gangeTabbel()