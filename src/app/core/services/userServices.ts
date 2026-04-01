import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { UserRegisterDto } from "../dtos/user/register";
import { UserActiveDto } from "../dtos/user/active";
import { PatternResult, PatternResultOnly } from "../models/pattern-result.model";

@Injectable({
  providedIn: 'root' // Isso garante que o serviço seja um Singleton global
})
export class UserServices {
    
    private readonly API_URL = `${environment.apiUrl}`;
    constructor(private http: HttpClient) {}

    register(userData: UserRegisterDto) {
        return this.http.post<PatternResultOnly>(`${this.API_URL}/User/Register`, userData);
    }

    active(userActive: UserActiveDto){
        return this.http.put<PatternResultOnly>(`${this.API_URL}/User/Active`, userActive);
    }
}

    