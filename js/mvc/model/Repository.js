export class Repository{

  constructor(){
    this._repository   = localStorage.getItem('_repository') ? true : false
    this._getRepo      = ''
    this._listRepo     = []
    this._listRepoJSON = JSON.stringify(this.listRepo)

  }

  createRepo(){
    this._repository==true ? '' : localStorage.setItem('_repository', [])
  }

  addRepo(person){
    this._listRepo.push(person)
  }

  updateRepo(person){

    if(this._repository == true){
      //trago o repo
      this.listRepo
      console.log(this.listRepo)
      //espalho na lista
      this._listRepo   = [...this._getRepo]
      //add novo
      this.addRepo(person)
      //removo repo antigo
      localStorage.removeItem('_repository')
      // add novo repo
      localStorage.setItem('_repository', this._listRepoJSON)
    } else {
      this.addRepo(person)
      localStorage.setItem('_repository', this._listRepoJSON)
    }
  }

  get listRepo(){
    return this._getRepo
  }

}