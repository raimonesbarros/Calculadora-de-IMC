export class PersonList{

  constructor(){
    this._personList = []
  }

  addPerson(person){
    this._personList.push(person)
  }

  clearList(){
    this._personList.shift()
  }

  get list(){
    return [].concat(this._personList)
  }
}
