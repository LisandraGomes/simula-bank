import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, throwError, catchError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginRequest, LoginResponse } from '../models/auth.model';
import { PatternResult } from '../models/pattern-result.model';
import { jwtDecode } from 'jwt-decode';
import { UserToken } from '../dtos/userToken';

@Injectable({
  providedIn: 'root' // Isso garante que o serviço seja um Singleton global
})
export class AuthService {
  private readonly API_URL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<PatternResult<LoginResponse>>(`${this.API_URL}/Autenthication`, credentials).pipe(
      map(response => {
        // Verifica se a requisição foi bem-sucedida (statusCode 200)
        if (response.statusCode === 200 && response.object) {
          // Extrai o objeto genérico encapsulado no PatternResult
          const loginData = response.object;
          
          // Salva o token se existir
          if (loginData.token) {
            this.saveToken(loginData.token);
            this.saveUserToken(loginData.token);
          }     

          // Retorna apenas os dados de login (LoginResponse)
          return loginData;
        } else {
          // Se statusCode não for 200, retorba um erro
          const errorMessage = response.error?.message || 'Erro desconhecido na autenticação';
          throw new Error(errorMessage);
        }
      }),
      // Tratamento de erros HTTP
      catchError(error => {
        let errorMessage = 'Erro ao conectar ao servidor';
        
        // Se for um erro de resposta do HTTP
        if (error.status) {
          errorMessage = error.error?.error?.message || 
                        error.error?.message ||   
                        `Erro ${error.status}: ${error.statusText}`;
        } else if (error instanceof Error) {
          // Se for um erro nativo do JavaScript
          errorMessage = error.message;
        }
        
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  /**
   * Métodos auxiliares de gerenciamento de sessão
   */
  private saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  private saveUserToken(token: string): void {
    const decodedToken = jwtDecode<UserToken>(token);
    localStorage.setItem('user_token', JSON.stringify(decodedToken.user));
    localStorage.setItem('user_role', JSON.stringify(decodedToken.roleJson));
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    // Aqui você também poderia navegar para o login
  }

  isLoggedIn(): boolean {
    return !!this.getToken(); // Retorna true se existir token
  }
}