import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productcards',
  templateUrl: './productcards.component.html',
  styleUrls: ['./productcards.component.css']
})
export class ProductcardsComponent implements OnInit {
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
}
