console.log('hello')

let titleDiv = document.getElementById('titleDiv')

console.log('before: ',titleDiv.innerText)

let message = "GoodBye my friend"
titleDiv.innerText= message;

console.log('after: ',titleDiv.innerText);

titleDiv.innerHTML = `<p>${message}</p`

titleDiv.style.color = 'red'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

redDiv.onclick = () => console.log("red") 
yellowDiv.onclick = () => console.log("yellow") 
greenDiv.onclick = () => console.log("green") 

const square = document.querySelectorAll('.colorSquare')
console.log(square)


// console.log(square[0].value)
// console.log(square[1].value)
// console.log(square[2].value)

square.forEach(square => {
    square.onclick = () => console.log(square.value)
})

const timesClicked = {'red':0, 'yellow':0, 'green':0}

square.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] +=1;
        square.innerText = [timesClicked[square.value]]
        console.log(square.innerText)
    }
})



function clear() {
    square.forEach(square => {
        timesClicked[square.value] = 0;
        square.innerText = [timesClicked[square.value]]
        console.log(square.innerText)
    })
}

const clearB = document.getElementById('clear-game')
clearB.onclick = () => clear()