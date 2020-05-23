import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //Arreglo para almacenar los productos traidos de la base de datos del servidor
  products: any = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
    res => {
      this.products = res;
    },
    err => console.error(err)
    ); 

  }

}
