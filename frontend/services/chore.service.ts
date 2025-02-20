// File: frontend/src/app/services/chore.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class ChoreService {
  constructor(private http: HttpClient) {}
  addChore(chore: any) { return this.http.post('http://localhost:3000/api/chores/add', chore); }
  getChores() { return this.http.get('http://localhost:3000/api/chores'); }
}