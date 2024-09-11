import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {OrderData} from "../../../types/order-data";


@Injectable()
export class ProductService implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }

  createOrder(data: OrderData) {
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.ru/order-tea`, data);
  }

  searchProducts(name: string) {
    return this.http.get<ProductType[]>(`https://testologia.ru/tea?search=${name}`)
      .pipe(
        map(result => {
          if (result.length === undefined) {
            result = Object.values(result)
          }
          return result;
        }),
        catchError(error => {
          return of([]);
        })
      )
  }
}
