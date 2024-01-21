import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl: string = 'https://apitester.ir/api/Categories';
  private itemsPerPage: number = 20;

  constructor(private http: HttpClient) {
  }

  // fetch categories
  getCategories(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/`);
  }

  // fetch one category
  getCategory(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }
}
