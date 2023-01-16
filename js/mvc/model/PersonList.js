export class PersonList{

  constructor(){
    this._personList = []
  }

  addPerson(person){
    this._personList.push(person)
  }

  get list(){
    return [].concat(this._personList)
  }
}
