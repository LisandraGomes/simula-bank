import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CreateBankDto } from "../dtos/bank/create";
import { PatternResult, PatternResultOnly } from "../models/pattern-result.model";
import { BankModel } from "../models/bank.model";

@Injectable({
  providedIn: 'root'
})
export class BankServices {
    private readonly API_URL = `${environment.apiUrl}`;

    constructor(private http: HttpClient) {}

    Create(dto: CreateBankDto) {
        return this.http.post<PatternResultOnly>(`${this.API_URL}/Bank`, dto);
    }

    getByUserId(userId: string) {
        return this.http.get<PatternResult<BankModel>>(`${this.API_URL}/Bank/User/${userId}/true`);
    }

    getById(id: string) {
        return this.http.get<PatternResult<BankModel>>(`${this.API_URL}/Bank/${id}`);
    }

    update(id: string) {
        return this.http.put<PatternResultOnly>(`${this.API_URL}/Bank/${id}`, {});
    }

    delete(id: string) {
        return this.http.delete<PatternResultOnly>(`${this.API_URL}/Bank/${id}`);
    }

}
