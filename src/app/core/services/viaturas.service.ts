import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/shared/environment';

@Injectable({
  providedIn: 'root'
})
export class ViaturasService {
  // private readonly baseUrl = environment.SERVER_API_URL;
  private readonly SERVER_API_URL = 'http://localhost:8080';
  private readonly url = '/api/viaturas';



  constructor(private http: HttpClient) { }

  public getViaturas(): Observable<string[]> {
    return this.http.get<string[]>(`${this.SERVER_API_URL}${this.url}`);
  }



}
