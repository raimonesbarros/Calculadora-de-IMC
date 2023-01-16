export class PersonView{

  constructor(table){
    this._table = table
  }

  _template(model){
    return `
    <table>
      <tr>
        <th id="thName"> Nome </th>
        <th id="imc"> IMC </th>
        <th id="c"> Situação </th>
      </tr>
      ${model.list.map(el=>{
        return `
          <tr>
            <td> ${el.name} </td>
            <td> ${el.imc} </td>
            <td> ${el.classIMC()} </td>
          </tr>
        `
        }).join('')
      }

    <table>
    `
  }

  _update(model){
    this._table.innerHTML = this._template(model)
  }
}
