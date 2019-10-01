console.log("HELLO JULIET PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
console.log("HELLO JULIET PLATOON!")
// -- if there isn't anything in local storage called 'numToGuess' create it. written like this so that the page knows to create the random number. Won't roll the number until the window is closed or the correct number is guessed and the storage is cleared.
if (!window.localStorage.getItem('numToGuess')) {
    window.localStorage.setItem('numToGuess', Math.floor(Math.random()*100) + 1)
}
if (!window.localStorage.getItem('guessedNums')) {
    window.localStorage.setItem('guessedNums', '')
}
// to cheat uncomment the next line
// console.log(window.localStorage.getItem('numToGuess'))


processGuess = () => {
        let guess = Number(document.getElementsByName('num')[0].value)
        let numToGuess = Number(window.localStorage.getItem('numToGuess'))
        if (guess == numToGuess) {
            alert ('You got it!')
            window.localStorage.setItem('numToGuess', Math.floor(Math.random()*100) + 1)
            window.localStorage.setItem('guessedNums', '')
        } else if (guess < numToGuess) {
            alert ('Higher!')
            window.localStorage.setItem('guessedNums', window.localStorage.getItem('guessedNums') + ',' + guess)
        } else {
            alert ('Lower!')
            window.localStorage.setItem('guessedNums', window.localStorage.getItem('guessedNums') + ',' + guess)
        }
}

updateList = () => {
    list = window.localStorage.getItem('guessedNums')
    output_string = ''
    for (let num of list.split(',').slice(1)) {
        if (num != 0) {
            output_string = output_string + num + '<br>'
        }
    }
    document.getElementById("guesses").innerHTML = output_string
}