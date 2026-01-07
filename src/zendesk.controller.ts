import { Body, Controller, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common'
import { ZendeskService } from './zendesk.service'
import { InheritParentTicketFieldsPayload } from './types/InheritParentTicketFieldsPayload'
import type { Ticket } from './types/Ticket'

@Controller()
export class ZendeskController {
  constructor(private readonly zendeskService: ZendeskService) {}

  /**
   * Endpoint triggered when a child ticket is created in Zendesk.
   * Copies relevant fields from a parent ticket to the child ticket and set the correct requester
   *
   * @param ticketId Child ticket ID
   * @param payload Payload containing parent ticket ID
   */
  @Post(String.raw`/:ticketId\:inherit-parent-fields`)
  inheritParentTicketFields(
    @Param('ticketId', ParseIntPipe) ticketId: number,
    @Body(new ValidationPipe()) payload: InheritParentTicketFieldsPayload,
  ): Ticket {
    return this.zendeskService.copyParentTicketToChildTicket(ticketId, payload.parentId)
  }
}
