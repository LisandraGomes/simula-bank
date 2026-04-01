/**
 * Padrão genérico de resposta da API do .NET
 * Encapsula o resultado com StatusCode, objeto e erros
 */

export interface PatternResultOnly {
    statusCode: number; // HttpStatusCode como número (200, 400, 500, etc)
    message: string; // Mensagem de sucesso ou erro
}
export interface PatternResult<T> {
  statusCode: number; // HttpStatusCode como número (200, 400, 500, etc)
  object?: T; // Dados genéricos encapsulados
  error?: Error; // Informações de erro
}

/**
 * Estrutura de erro retornada pela API
 */
export interface Error {
  message: string;
  code?: string;
  details?: string[];
}
