import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // @Input() title;
  title:string = "";
  toggle = 'none';

  ss = {backgroundColor:'#daa'}

  showHead(){
      return 'none'
  }
  ngOnInit(): void {
  }

}
