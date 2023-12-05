const handleCounter = document.getElementById('handleCounter')
const count = document.getElementById('counter')

let counter = 0

handleCounter.addEventListener('click',()=>{
    count.innerHTML = counter++
})