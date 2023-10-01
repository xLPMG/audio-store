import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  category: string | null | undefined = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.category = routeParams['category'];
    });
  }
}
