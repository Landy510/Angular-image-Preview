import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  baseUrl = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getFiles(): Observable<any> {
    return this.http.get(this.baseUrl + 'author');
  }

  uploadFiles(queryParam: any): Observable<any> {
    return this.http.post(this.baseUrl + 'author', queryParam, { reportProgress: true, observe: 'events'})
  }

  deleteFile(id:string): Observable<any> {
    return this.http.delete(this.baseUrl + 'author/' + id);
  }
}
