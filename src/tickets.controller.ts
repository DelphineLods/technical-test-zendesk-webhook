import { Body, Controller, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common'
import { TicketsService } from './tickets.service'
import { InheritParentTicketFieldsPayload } from './types/InheritParentTicketFieldsPayload'
import type { Ticket } from './types/Ticket'

@Controller()
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  /**
   * Endpoint triggered when a child ticket is created in Zendesk.
   * It copies specific fields from the parent ticket to the child ticket.
   *
   * @param ticketId Child ticket ID
   * @param payload Payload containing parent ticket ID
   */
  @Post(String.raw`/:ticketId\:inherit-parent-fields`)
  inheritParentTicketFields(
    @Param('ticketId', ParseIntPipe) ticketId: number,
    @Body(new ValidationPipe()) payload: InheritParentTicketFieldsPayload,
  ): Ticket {
    return this.ticketsService.copyTicketDataFromParent(ticketId, payload.parentId)
  }
}
