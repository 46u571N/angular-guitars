import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guitar } from './guitar-list/guitar';


const URL = "http://localhost:3000/guitars";

@Injectable({
  providedIn: 'root'
})
export class GuitarDataService {

  constructor(private http: HttpClient) { }


  public getAll(): Observable<Guitar[]> {

    return this.http.get<Guitar[]>(URL);
  }
}
