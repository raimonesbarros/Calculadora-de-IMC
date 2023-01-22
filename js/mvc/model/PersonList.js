export class PersonList{

  constructor(){
    this._personList = []
  }

  addPerson(person){
    this._personList.push(person)
  }

  setlist(list){
    this._personList = list
  }

  get list(){
    return [].concat(this._personList)
  }

}
