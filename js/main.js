import { PersonView } from "./mvc/view/PersonView.js"
import { PersonController } from "./mvc/controller/PersonController.js"

// Instanciar modelo de visualização
let personView       = new PersonView()
// Instanciar modelo de controlador
let personController = new PersonController()

// Iniciar visualização da tabela
personView.initTable()

// Mostrar dados guardados
if(localStorage.getItem('_repository')){
  personController.show()
} else {
// Criar repositório para guardar dados
  localStorage.setItem('_repository', [])
}

// Informações de formulário
const form = document.querySelector('form')

form.addEventListener('submit', evt=>{
  // Enviar o evento ao controlador
  personController._add(evt)
  // Pedir para o controlador limpar o formulário
  personController._formClean()
  
})

// Apaga linha da tabela parte 2/3
export function toClearElement(element){
  personController.clearElement(element)
}

// Apaga toda tabela parte 2/3
export function toClearTable(){
  personController.clearTable()
}