import { FormGroup, Validators } from "@angular/forms";
import { ErrorMessages } from "../errorMessages.utils";

export const onValidatorInput = (form : FormGroup): string => {
    let error : string = '';
    if(form.get('email')?.hasError('required') || form.get('cpf')?.hasError('required') || form.get('password')?.hasError('required') || form.get('passwordConfirm')?.hasError('required')){
      error += ErrorMessages.emptyData() + ' \n';
    }
    if(Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)(form.get('password')!)){
      error += ErrorMessages.patternPassword() + ' \n';      
    }
    if(Validators.minLength(6)(form.get('password')!)){
      error += ErrorMessages.minLength('Senha', 6) + ' \n';
    }
    //Regras Login
    if(Validators.pattern(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$|^\d{11}$/)(form.get('cpf')!)
      || form.get('cpf')!.value.length < 11)
    {
      error += ErrorMessages.cpf() + ' \n';
    }
    if(Validators.email(form.get('email')!))
    {
        error += ErrorMessages.email() + ' \n';
    }
    if (form.get('password')?.value !== form.get('passwordConfirm')?.value) {
        error += ErrorMessages.passwordNotTheSame() + ' \n';
      }
    return error;
  }