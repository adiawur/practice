import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api/product'; 

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<any[]>(url);
  }

  getProductById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addProduct(product: any): Observable<any> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<any>(url, product);
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<any>(url);
  }

  updateProduct(id: number, product: any): Observable<any> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<any>(url, product);
  }
}
