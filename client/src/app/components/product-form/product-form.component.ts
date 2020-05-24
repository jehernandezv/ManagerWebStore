import { Component, OnInit, HostBinding} from '@angular/core';
import { Product } from 'src/app/models/Product';
import {ProductsService} from '../../services/products.service';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
   
  @HostBinding('class') classes ='row';
  product:Product ={
    name:'',
    cant:0
  };

  today= new Date();
  jstoday = '';
  getDate() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-EN', '+0530');
  }

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }


    saveNewProduct(){
      this.productService.saveProduct(this.product).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );
    }
}
