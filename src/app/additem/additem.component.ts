import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { additem } from './additem.model';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  id:any
  name:any
  model:any
  year:any
  desc:any
  quantity:any
  price:any
  item = new additem()
  dataArr:any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getItemData(){
    console.log('hello')
    this.dataService.getData().subscribe(res => {
      this.dataArr=res
    }) 
  }

  insertData(){
    console.log('hi')
    this.dataService.insertData(this.item).subscribe(res => {
      this.getItemData()
    })
  }

}
