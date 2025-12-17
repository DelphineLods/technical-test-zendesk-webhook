import { CustomField } from './CustomField'

export interface Ticket {
  id: number
  group_id: number
  custom_fields: CustomField[]
}
