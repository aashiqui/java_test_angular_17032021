import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  getCatById(catId: any) {
    return this.http.get(AUTH_API + 'category/get/'+catId);
  }
  
  
  getUserById(userId: any) {
    return this.http.get(AUTH_API + 'user/get/'+userId);
  }

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signin', 
      credentials
    );
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signup', user)
  }

  saveSubCar(subCategory): Observable<any> {
    return this.http.post(AUTH_API + 'sub-category/save', subCategory)
  }

  processData(data): Observable<any> {
    return this.http.post(AUTH_API + 'post-data', data)
  }

  saveCat(cat): Observable<any> {
    return this.http.post(AUTH_API + 'category/save', cat)
  }
  getSubCat(): Observable<any>{

    return this.http.get(AUTH_API + 'sub-category/get');
  }

  getCat(): Observable<any>{

    return this.http.get(AUTH_API + 'category/get');
  }
  uploadFile(formData): Observable<any>{

        return this.http.post(`${AUTH_API}upload-csv-file`, formData);
  }

  getPostById(id): Observable<any>{

    return this.http.get(AUTH_API + 'post/get/'+id);
  }
  getSubCatById(id): Observable<any>{

    return this.http.get(AUTH_API + 'sub-category/get/'+id);
  }
}