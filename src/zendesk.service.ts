import { Injectable } from '@nestjs/common'
import { ZendeskConfig } from './zendesk.config'
import { UpdateTicketRequest } from './types/UpdateTicketRequest'
import { Ticket } from './types/Ticket'

@Injectable()
export class ZendeskService {
  private readonly tickets = new Map<number, Ticket>([
    [
      1,
      {
        id: 1,
        group_id: 20,
        custom_fields: [
          { id: 10000002, value: 'store_lesquin' },
          { id: 10000003, value: 'Delphine' },
          { id: 10000004, value: 'Lody' },
          { id: 10000005, value: 'product_information' },
        ],
      },
    ],
  ])

  constructor(private readonly zendeskConfig: ZendeskConfig) {}

  copyParentTicketToChildTicket(ticketId: number, parentId: number): Ticket {}

  getTicket(ticketId: number): Ticket {
    const ticket = this.tickets.get(ticketId)

    if (!ticket) {
      throw new Error(`Ticket ${ticketId} not found`)
    }

    return ticket
  }

  updateTicket(ticketId: number, data: UpdateTicketRequest): Ticket {
    const ticketUpdated: Ticket = {
      id: ticketId,
      ...data,
    }

    this.tickets.set(ticketId, ticketUpdated)
    return this.getTicket(ticketId)
  }
}
