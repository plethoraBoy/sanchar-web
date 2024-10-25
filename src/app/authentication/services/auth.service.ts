import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;
  private userRole: string | null = null;
  private apiUrl = 'https://fakestoreapi.com'; 

  constructor(private router: Router, private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const payload = { username, password };
    return this.http.post(`${this.apiUrl}/auth/login`, payload); 
  }

  handleLoginResponse(response: any): void {
    this.loggedIn = true;
    this.userRole = response.role; 
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', response.role);
  }

  logout(): void {
    this.loggedIn = false;
    this.userRole = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  hasRole(role: string): boolean {
    return localStorage.getItem('userRole') === role;
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }
}
