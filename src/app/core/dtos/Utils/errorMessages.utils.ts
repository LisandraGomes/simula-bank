export const ErrorMessages = {
  emptyData : () => 'Por favor, preencha todos os campos corretamente.',

  passwordNotTheSame: () => 'As senhas não coincidem.',
  
  required: () => 'Este campo é obrigatório.',
  
  minLength: (campo: string, min: number) => `O campo ${campo} deve ter no mínimo ${min} caracteres.`,
  
  maxLength: (campo: string ,max: number) => `O campo ${campo} não pode ultrapassar ${max} caracteres.`,
  
  email: () => 'Informe um e-mail válido.',

  cpf: () => 'Informe um CPF válido.',

  valor: () => 'Informe um valor válido.',
  
  invalidLogin: () => 'Usuário ou senha inválidos.',
  
  patternLogin: () => 'O login deve ser um e-mail válido ou um CPF com 11 dígitos.',
  
  patternPassword: () => 'A senha deve conter pelo menos 6 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.'
};