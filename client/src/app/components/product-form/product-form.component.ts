import { Component, OnInit, HostBinding} from '@angular/core';
import { Product } from 'src/app/models/Product';
import {ProductsService} from '../../services/products.service';
import {formatDate } from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
   
  @HostBinding('class') classes ='row';

  product:Product ={
    _id:'',
    name:'',
    cant:0
  };

  edit:boolean = false;

  today= new Date();
  jstoday = '';
  getDate() {
    this.jstoday = formatDate(this.today,'dd-MM-yyyy hh:mm:ss a', 'en-EN', '+0530');
  }

  constructor(private productService:ProductsService, private router:Router,
    private activedRoute:ActivatedRoute, private notificacion:NotificationsService) { }

  ngOnInit(): void {
   const params = this.activedRoute.snapshot.params;
   if(params.id){
     this.productService.getProduct(params.id)
     .subscribe(
       res => {
        this.product = res[0];
        this.edit = true;
       },
       err => {
         console.error(err)
         this.onError('No se pueden listar los productos');
       }
     );
   }
  }
    saveNewProduct(){
      this.productService.saveProduct(this.product).subscribe(
        res => {
          console.log(res);
          this.onSuccess('Producto Creado Exitosamente');
        },
        
        err => {
          console.error(err)
          this.onError('Ha ocurrido un error inesperado');
        }
      );
    }

    updateProduct(){
      this.productService.updateProduct(this.product._id,this.product)
      .subscribe(
        res => {
          console.log(res);
          this.onSuccess('Se ha actualizado el producto exitosamente');
        },
        err => {
          console.error(err)
          this.onError('No ha podido actualizar el registro');
        }
      );
    }

    onSuccess(message){
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
