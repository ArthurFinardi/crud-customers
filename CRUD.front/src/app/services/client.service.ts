import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Client {
  id?: number;
  name: string;
  document: string;
  birthDate?: string;
  email: string;
  phone: string;
  type: 'PF' | 'PJ';
  ie?: string;
  address: {
    zipCode: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = `${environment.apiUrl}/clients`;

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }

  updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${id}`, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  checkDocumentExists(document: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/check-document/${document}`);
  }

  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/check-email/${email}`);
  }
} 