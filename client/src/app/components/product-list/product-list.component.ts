import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductsService} from '../../services/products.service';
import { Product } from 'src/app/models/Product';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //Arreglo para almacenar los productos traidos de la base de datos del servidor
  products: any = [];
  @HostBinding('class') classes = 'row';

  constructor(private productService: ProductsService,private notificacion:NotificationsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

    getProducts(){
      this.productService.getProducts().subscribe(
        res => {
          this.products = res;
        },
        err => console.error(err)
        ); 
    }

  //obtener el id a eliminar
    deleteProduct(id:string){
      this.productService.deleteProduct(id).subscribe(
        res => {
          this.onSuccess('Se ha eliminado el producto satisfactoriamente');
          console.log(res);
          this.getProducts();
        },
        err => {
          console.error(err)
          this.onError('No ha podido eliminar el producto');
        }
      );
    }

     //editar producto
     editProduct(id:string,productNew:Product){
        this.productService.updateProduct(id,productNew).subscribe(
          res => {
            console.log(res);
          },
          err => console.error(err)
      );    
      
    }

    onSuccess(message):void{
      this.notificacion.success('Completado',message,{
        position: ['botton','right'],
        timeOut:4000,
        animate: 'fade',
        showProgressBar:true
      });
    }

    onError(message){
      this.notificacion.error('Error',message,{
        position: ['botton','right'],
        timeOut:4000,
        animate: 'fade',
        showProgressBar:true
      });
    }
}