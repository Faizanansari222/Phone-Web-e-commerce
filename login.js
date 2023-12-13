let input = document.querySelector('#emailInput')
let subBtn = document.querySelector('#subBtn')
let emailArr = []

function emailSubmit (event){
    input.value=''
event.preventDefault()
emailArr.push(input.value)

}


subBtn.addEventListener('click', emailSubmit)

