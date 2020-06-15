import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
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


}
