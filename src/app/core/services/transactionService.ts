import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { TransactionCreateDto } from "../dtos/transaction/create";

@Injectable({
  providedIn: 'root' // Isso garante que o serviço seja um Singleton global
})
export class TransactionServices {
    private readonly API_URL = `${environment.apiUrl}`;
    
    constructor(private http: HttpClient) {}

    getAllByUserId(userId: string) {
        return this.http.get(`${this.API_URL}/Transaction/User/${userId}`);
    }

    create(dto: TransactionCreateDto) {
        return this.http.post(`${this.API_URL}/Transaction`, dto);
    }
}