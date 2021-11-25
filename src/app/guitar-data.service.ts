import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guitar } from './guitar-list/guitar';




@Injectable({
  providedIn: 'root'
})
export class GuitarDataService {

  constructor(private http: HttpClient) { }


  public getAll(): Observable<Guitar[]> {

    return this.http.get<Guitar[]>(environment.apiUrl);
  }
}
