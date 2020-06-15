import { Component, OnInit } from '@angular/core';
import { DataService, itemData, dataupdate } from '../data.service';

@Component({
  selector: 'app-itemtable',
  templateUrl: './itemtable.component.html',
  styleUrls: ['./itemtable.component.css']
})
export class ItemtableComponent implements OnInit {
  dataArr:any


  // updatedData = new itemData()

  // dataupdate = new dataupdate()


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
    }),
    err=>{
      console.log(err)
    }
  }

  // editData(id){
  //   this.dataService.editItem(id).subscribe(
  //     (data) =>{
  //       this.dataupdate = data['data'][0]
  //     }
  //   )
  // }
  

  // updateData(name,model,year,description,quantity,price){
  //   if(this.updateData.name==null){
  //     this.updatedData.name = name
  //   }
  //   if(this.updateData.model==null){
  //     this.updateData.model = model
  //   }
  //   if(this.updateData.year==null){
  //     this.updateData.year = year
  //   }
  //   if(this.updateData.description==null){
  //     this.updateData.description = description
  //   }
  //   if(this.updateData.quantity==null){
  //     this.updateData.quantity = quantity
  //   }
  //   if(this.updateData.price==null){
  //     this.updateData.price = price
  //   }

  // }

  // this.dataService.updateData(this.updateData).subscribe(
  //   res =>{
  //     console.log(res)
  //     this.getItemData()
  //   },
  //   err =>{
  //     console.error(err)
  //   }
  // )

  
}
