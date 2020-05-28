import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SimpleNotificationsModule} from 'angular2-notifications';


import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import {ProductsService} from './services/products.service'
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    // Animations need to be imported in to your project to use the library
    BrowserAnimationsModule, 
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
