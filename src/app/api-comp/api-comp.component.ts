import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category.service";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-api-comp',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './api-comp.component.html',
  styleUrl: './api-comp.component.css'
})
export class ApiCompComponent implements OnInit {
  categories: any[] = [];
  itemsPerPage: number = 20;
  currentPage: number = 1;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (results: any) => {
        this.categories = results;
      }
    );
  }

  getDisplayCategories(): any[] {
    let startIndex: number = (this.currentPage - 1) * this.itemsPerPage;
    return this.categories.slice(startIndex, startIndex + this.itemsPerPage);
  }

  pageChange(newPage: number): void {
    this.currentPage = newPage;
  }

}
