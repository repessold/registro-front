import { HttpClient, HttpParams } from '@angular/common/http';
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

  public relatorio(inicio?: Date, fim?: Date): Observable<any[]> {
    let params = new HttpParams();

    if (inicio) {
      params = params.set('inicio', this.formatDate(inicio));
    }
    if (fim) {
      params = params.set('fim', this.formatDate(fim));
    }

    return this.http.get<any[]>(`${this.url}/relatorio`, { params });
  }

  // Método para converter a data para o formato 'yyyy-MM-dd'
  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // Converte para 'YYYY-MM-DD'
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
