import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class itemData{
  id:any
  name:any
  model:any
  year:any
  description:any
  quantity:any
  price:any
}

export class dataupdate{
  id:any
  name:any
  model:any
  year:any
  description:any
  quantity:any
  price:any
}

export class DataService {

  constructor(private httpClient: HttpClient) { }
  

  getData(){
    return this.httpClient.get('./assets/data/data.json')
  }

  insertData(data){
    return this.httpClient.post('http://http://18.141.200.130/api/items',data)

  }
  deleteData(id){
    return this.httpClient.delete('http://18.141.200.130/api/items'+id)
  }

  updateData(data){
    return this.httpClient.post('http://18.141.200.130/api/items',data)
  }


  editItem(id){
    return this.httpClient.post('http://18.141.200.130/api/items',id)
  }

  cartData(data){
    return this.httpClient.get('.assets/data/data.json')
  }

}
