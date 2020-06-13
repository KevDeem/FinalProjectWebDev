import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get('http://apiaddress')
  }

  insertData(data){
    return this.httpClient.post('http://apiaddress',data)

  }
  deleteData(id){
    return this.httpClient.delete('http://apiaddress'+id)
  }


}
