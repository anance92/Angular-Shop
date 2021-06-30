import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  products = [{title:"Desk"}]

  status = new Promise((resolve,reject) => {
    setTimeout(()=>{
      resolve('Online')
    }, 2000);
  })
  

  title:string = ''

  updateTitle(e:Event){
    this.title = (<HTMLInputElement> e.target).value
  }

  onAdd(){
    this.products.push({title:this.title})
  }


  ngOnInit(): void {
  }

}
