import { Person }     from "../model/Person.js"
import { PersonList } from "../model/PersonList.js"
import { PersonView } from "../view/PersonView.js"
import { Repository } from "../model/Repository.js"

export class PersonController{

  constructor(){
    this._inputName   = document.querySelector('#name')
    this._inputAge    = document.querySelector('#age')
    this._inputWeight = document.querySelector('#weight')
    this._inputHeight = document.querySelector('#height')

    this._newList     = new PersonList()
    this._view        = new PersonView(document.querySelector('#table'))

    this._view._update(this._newList)

    this._repository = new Repository()
  }

  _add(evt){

    evt.preventDefault()

    this._newList.addPerson(this._createPerson())

    this._repository.updateRepo(this._createPerson())

    this._view._update(this._newList)


  }

  _createPerson(){
    return new Person(
      this._inputName.value,
      this._inputAge.value,
      this._inputWeight.value,
      this._inputHeight.value
    )
  }

  _formClean(){
    this._inputName.value   = ''
    this._inputAge.value    = ''
    this._inputWeight.value = ''
    this._inputHeight.value = ''

    this._inputName.focus()
  }
}