import { CustomField } from './CustomField'

export interface UpdateTicketRequest {
  requester_id: number
  group_id: number
  custom_fields: CustomField[]
}
