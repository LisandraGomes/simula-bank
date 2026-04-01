import { ChangeDetectorRef, Component } from '@angular/core';
import { MatCard, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardHeader } from "@angular/material/card";
import { CaixinhasResponse } from '../../core/dtos/bank/caixinhas';
import { CurrencyPipe } from '@angular/common';
import { BankServices } from '../../core/services/bankServices';

@Component({
  selector: 'app-home-bank',
  imports: [MatCard, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardHeader, CurrencyPipe],
  templateUrl: './home-bank.html',
  styleUrl: './home-bank.scss',
})
export class HomeBank {
  isLoading: boolean = false;
  listCaixinhas: CaixinhasResponse[] = [];

  constructor(private bankService: BankServices, private cdRef: ChangeDetectorRef) {}
  ngOnInit() {
    //consultar usuario logado e exibir nome verificar se ele está ativo
    //consultar caixinhas para o usuario logado e exibir 
    this.listCaixinhas.push({
      id: 1,
      nome: 'Viagem para a praia',
      valorAtual: 1500,
      valorMeta: 5000,
      dataCriacao: '2024-01-01',
      dataVencimento: '2024-12-31'
    });
  }

  async getCaixinhas(): Promise<CaixinhasResponse[]> {
    // Aqui você faria a chamada ao serviço para obter as caixinhas do usuário logado
    // Exemplo: return this.caixinhasService.getCaixinhasByUserId(userId);
    const userObject = localStorage.getItem('user');
    const user = userObject ? JSON.parse(userObject) : null;
    if (!user) {
      throw new Error('Usuário não encontrado. Faça login novamente.');
    }
     await this.bankService.getByUserId(user.id).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.cdRef.detectChanges();
        console.log('Login realizado com sucesso:', response);
      },
      error: (error) => {
        this.isLoading = false;
        this.cdRef.detectChanges();
        console.error('Erro ao fazer login:', error, this.isLoading);
        alert(error.message || 'Algo de errado aconteceu. Tente novamente.');
        //this.error = error.message || 'Erro ao fazer login. Tente novamente.';
      }
    });
    return Promise.resolve(this.listCaixinhas); // Retorna a lista de caixinhas (atualmente hardcoded)
  }

}
