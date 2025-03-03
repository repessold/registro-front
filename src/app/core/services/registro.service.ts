import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/shared/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private readonly baseUrl = environment.SERVER_API_URL;
  private readonly url = `${this.baseUrl}`;

  constructor(private http: HttpClient) { }

  public all(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/all`);
  }

  public newRegistry(data: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.url}/new`, data);
  }

  public atualizarRegistro(id: any, data: any): Observable<any[]> {
    return this.http.put<any[]>(`${this.url}/atualizarRegistro/${id}`, data);
  }

  public deletarRegistro(id: any): Observable<any> {
    return this.http.delete<any[]>(`${this.url}/deletarRegistro/${id}`);
  }
}
