import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductsModule} from "./features/products/products.module";
import {SharedModule} from "./shared/shared.module";
import {ProductService} from "./shared/services/product-service.service";
import {NgbAccordion} from "@ng-bootstrap/ng-bootstrap";
import {MainModule} from "./features/main/main.module";
import {OrderModule} from "./features/order/order.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ProductsModule,
    MainModule,
    OrderModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [ProductService, NgbAccordion],
  bootstrap: [AppComponent]
})
export class AppModule {
}
