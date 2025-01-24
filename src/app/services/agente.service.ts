import { HttpClient,  } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agente } from '../model/agente';

@Injectable({
  providedIn: 'root'
})
export class AgenteService {

  private API = 'http://localhost:8080/api/agente/';

  //Nova forma de consumir o HttpClient atráves de injeção de depedência
  private http = inject(HttpClient)

  createAgente(agente: Agente): Observable<Agente> {
    return this.http.post<Agente>(`${this.API}save`, agente);
  }

  readAgentes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}findAll`)
  }

  readAgente(nome: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}findByNome/${nome}`);
  }

  editAgente(id: number, agente: any): Observable<any>{
    return this.http.put<any>(`${this.API}update/${id}`, agente);
  }

  deleteAgente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}delete/${id}`);
  }

}
