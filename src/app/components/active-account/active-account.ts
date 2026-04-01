import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardHeader, MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { A11yModule } from "@angular/cdk/a11y";
import { ActivatedRoute, Router } from '@angular/router';
import { UserActiveDto } from '../../core/dtos/user/active';
import { UserServices } from '../../core/services/userServices';
import { PatternResultOnly } from '../../core/models/pattern-result.model';

@Component({
  standalone: true,
  selector: 'app-active-account',
  imports: [CommonModule, MatCardModule, MatCard, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardHeader, A11yModule, MatProgressSpinnerModule],
  templateUrl: './active-account.html',
  styleUrl: './active-account.scss',
  providers: [UserServices]
})

export class ActiveAccount {
  userActive: boolean = false;
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private userService: UserServices
    ) { }
    async ngOnInit(): Promise<void> {
    const email = this.route.snapshot.queryParamMap.get('email');
    const token = this.route.snapshot.queryParamMap.get('token');
    const active = this.route.snapshot.queryParamMap.get('accepted');
    if (email && token) {
      this.userActive = await this.ActiveAccount(email, token, active === 'true');
    }
    else {
      this.router.navigate(['/']);
    }
  }

  async ActiveAccount(email: string , token: string, active: boolean ) : Promise<boolean> {
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    const request: UserActiveDto = {
      email: email,
      token: token,
      accepted: active
    };
    await this.userService.active(request).pipe().subscribe({
      next: (response : PatternResultOnly) => {
        if(response.statusCode === 200){
          this.userActive = true;
        }
        else{
          this.userActive = false;
        }
      },
      error: (error) => {
        console.error('Erro ao ativar conta:', error);
        this.userActive = false;
      }
    });
    return true;
  }

  GoToLogin() : void {
   this.router.navigate(['/']);
  }
}
