export interface CreateBankDto {
  title: string,
  description: string,
  goalValue: number,
  idealCurrentValue: number,
  currentValue: number,
  status: number,
  createDate: Date,
  monthOfDeadline: 0,
  dueDate: Date,
  valueAutoDeductValueAccount: 0,
  dayAutoDeductValueAccount: 0,
  idUser: string
}