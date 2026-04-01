import { DecimalPipe } from "@angular/common";

export interface TransactionCreateDto {

  "id": string,
  "userId": string,
  "value": DecimalPipe,
  "typeId": number,
  "idAccountOrigin": string,
  "idAccountDestination": string,
  "dateCreate": Date,
  "dateFinally": Date,
  "active": boolean
}