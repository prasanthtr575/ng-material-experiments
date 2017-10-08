import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    {
      name: "Mac"
    },
    {
      name: "iPad"
    },
    {
      name: "iPhone"
    },
    {
      name: "Watch"
    },
    {
      name: "TV"
    },
    {
      name: "Music"
    }
  ];

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  gotoDetails(product) {
    this._router.navigateByUrl('/details/' + product.name);
  }

}
