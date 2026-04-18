import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductType } from '../types/productType';

@Injectable({
  providedIn: 'root',
})
export class Http {
  httpClient = inject(HttpClient);

  baseUrl:string = 'https://api.escuelajs.co/api/v1';
  getProduct(){
    return this.httpClient.get<ProductType[]>(`${this.baseUrl}/products`);
  }
}
