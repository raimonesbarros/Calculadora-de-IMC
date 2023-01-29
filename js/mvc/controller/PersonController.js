// Importando todas as classes que serão controladas por aqui
import { Message }    from "../view/Message.js"
import { Person }     from "../model/Person.js"
import { PersonList } from "../model/PersonList.js"
import { Repository } from "./Repository.js"
import { PersonView } from "../view/PersonView.js"

export class PersonController{

  constructor(){
    this._inputName   = document.querySelector('#name')
    this._inputAge    = document.querySelector('#age')
    this._inputWeight = document.querySelector('#weight')
    this._inputHeight = document.querySelector('#height')

    this.message      = new Message()
    this._personList  = new PersonList()
    this._personView  = new PersonView()
    this._repository  = new Repository()
    
  }
  // Pede para personView gerar visualição inicial da tabela
  initView(){
    this._personView.initTable()
  }
  // informa o main se há dados no repositório
  get repository(){
    return localStorage.getItem('_repository') ? true : false
  }
  // Cria um repositório
  setRepository(){
    localStorage.setItem('_repository', [])
  }

  _add(evt){

    evt.preventDefault()
    // Envia nova pessoa criada para adicionar a lista de pessoas
    this._personList.addPerson(this._createPerson())
    // Envia a lista de pessoas para adicionar ao repositório 
    this._repository.upObj(this._personList.list)
    // Pede para mostrar a lista na tela
    this.show()
    // Pede para mostrar uma mensagem rápida de sucesso
    this.message.flashMsg('Calculado com sucesso!', 'success')
  }

  // Pede para mostrar lista de pessoas
  show(){
    this.downList()
    this._personView.view(this._personList.list)
  }

  // Apaga toda tabela
  clearTable(){
    // Apaga o repositório anterior
    localStorage.removeItem('_repository')
    // Cria um novo repositório  vazio
    localStorage.setItem('_repository', [])

    // Envia o repositório vazio para limpar a lista de pessoas
    this._personList.setRepo([])
  }

  // Apaga linha da tabela
  clearElement(element){
    // Pede para remover a pessoa da lista de pessoas
    this._personList.removePerson(element)
    // Envia a lista SEM A PESSOA para o repositório
    this._repository.upObj(this._personList.list)
    // Se tiver pessoas na lista mostra,
    //caso contrário à limpa e deixa pronta para uso.
    if(this._personList.list[0]){
      this.show()
    } else{
      localStorage.removeItem('_repository')
      localStorage.setItem('_repository', [])
      this._personView._table.innerHTML = ''
      this._personView.initTable()
    }
  }

  downList(){
    // Baixa a lista permanente
    this._repository.downObj()
    // Insere na lista de pessoas
    this._personList.setRepo(this._repository._objLocal)
  }

  _createPerson(){
    // Cria pessoa com os valores de input
    return new Person(
      this._inputName.value,
      this._inputAge.value,
      this._inputWeight.value,
      this._inputHeight.value
    )
  }

  // Limpa o formulário e o deixa pronto para uso
  _formClean(){
    this._inputName.value   = ''
    this._inputAge.value    = ''
    this._inputWeight.value = ''
    this._inputHeight.value = ''

    this._inputName.focus()
  }
}