let correctPass = false

function whileLøkke() {
    let num = 0
    while (num <= 10) {
        console.log(num)
        num++
    }
    console.log("while")

    
}

function forLøkke() {
    for (i = 0; i <= 10; i++) {
        console.log(i)
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