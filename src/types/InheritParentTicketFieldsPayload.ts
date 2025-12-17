import { IsNumber } from 'class-validator'

export class InheritParentTicketFieldsPayload {
  @IsNumber()
  parentId: number
}
