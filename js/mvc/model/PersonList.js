export class PersonList{

  constructor(){
    this._personList = []
  }

  // Adiciona pessoa à lista
  addPerson(person){
    this._personList.unshift(person)
  }

  // Remove a pessoa da lista
  removePerson(person){
    this._personList = this._personList.filter(el=>{
      return el._name!=person
    })
  }

  // Troca a lista de pessoas pela lista definitiva do repositório
  setRepo(repo){
    this._personList = repo
  }

  // Cria uma cópia da lista de pessoas
  get list(){
    return [].concat(this._personList)
  }

}