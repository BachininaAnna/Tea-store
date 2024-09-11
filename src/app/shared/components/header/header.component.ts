import {Component, OnInit} from '@angular/core';
import {SearchProductsService} from "../../services/search-products.service";
import {Router} from "@angular/router";


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  show = false;
  searchTitle: string = '';
  toggle: boolean = false;
  constructor(public searchService: SearchProductsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.searchService.show$.subscribe((data: boolean) => {
      this.show = data
    });
  }

  eventInput() {
    this.router.navigate(['/products', {search: this.searchTitle}]);
  }
}
