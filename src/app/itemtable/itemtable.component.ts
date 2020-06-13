import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-itemtable',
  templateUrl: './itemtable.component.html',
  styleUrls: ['./itemtable.component.css']
})
export class ItemtableComponent implements OnInit {
  dataArr:any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getItemData()
  }

  getItemData(){
    console.log('hello')
    this.dataService.getData().subscribe(res => {
      this.dataArr=res
    }) 
  }

  deleteData(id){
    this.dataService.deleteData(id).subscribe(res => {
      this.getItemData()
    })
  }

  
}
