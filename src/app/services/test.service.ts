import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private http = inject(HttpClient);
  constructor() {
    console.log('cargando el servicio ....');
  }

  getUsers(): Observable<{ id: number; name: string }[]> {
    return this.http.get<{ id: number; name: string }[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
