const todoIcon = document.querySelector('.fa-plus')
const todoList = document.querySelector('.todoList')
const container = document.querySelector('#container')
todoIcon.addEventListener('click', clickOnPlus, {once: true})

function clickOnPlus (e){
    e.preventDefault()
    newEle= document.createElement('div')
    newEle.classList= ('todoIn')
    container.appendChild(newEle)

    let addInput = document.createElement('input')
    addInput.setAttribute('type', 'text')
    addInput.setAttribute('placeholder', 'Create a new to do ...')
    newEle.appendChild(addInput)

}
