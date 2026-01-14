import { Injectable } from '@nestjs/common'
import { UpdateTicketRequest } from './types/UpdateTicketRequest'
import { Ticket } from './types/Ticket'

@Injectable()
export class ZendeskService {
  // Mock ticket storage
  private readonly tickets = new Map<number, Ticket>([
    [
      1,
      {
        id: 1,
        group_id: 20,
        store: 'store_lesquin',
        firstName: 'Delphine',
        lastName: 'Lody',
        contactReason: 'product_information',
      },
    ],
    [
      2,
      {
        id: 2,
        parentId: 1,
        group_id: undefined,
      },
    ],
  ])

  // Mock method to simulate Zendesk API interactions
  getTicket(ticketId: number): Ticket {
    const ticket = this.tickets.get(ticketId)

    if (!ticket) {
      throw new Error(`Ticket ${ticketId} not found`)
    }

    return ticket
  }

  // Mock method to simulate Zendesk API interactions
  updateTicket(ticketId: number, data: UpdateTicketRequest): Ticket {
    const ticketUpdated: Ticket = {
      id: ticketId,
      ...data,
    }

    this.tickets.set(ticketId, ticketUpdated)
    return this.getTicket(ticketId)
  }
}
