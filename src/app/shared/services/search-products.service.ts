import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchProductsService {
  show$: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  foundProducts() {
    this.show$.next(false);
  }
  notFoundProducts() {
    this.show$.next(true);
  }
}
