export interface UpdateTicketRequest {
  requester_id: number
  group_id?: number
  store?: string
  firstName?: string
  lastName?: string
  contactReason?: string
}
