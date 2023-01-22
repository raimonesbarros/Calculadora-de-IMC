import { PersonController } from "./mvc/controller/PersonController.js"

let personController = new PersonController()

const form           = document.querySelector('form')
const msg            = document.querySelector('.msg')

form.addEventListener('submit', evt=>{
  
  msg.classList.remove('disable')
  
  personController._add(evt)
  
  personController._formClean()
  
  setTimeout(()=>{
    msg.classList.add('disable')
  }, 1500)
})