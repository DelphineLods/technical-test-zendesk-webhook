import { Body, Controller, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common'
import { ZendeskService } from './zendesk.service'
import { InheritParentTicketFieldsPayload } from './types/InheritParentTicketFieldsPayload'
import type { Ticket } from './types/Ticket'

@Controller()
export class ZendeskController {
  constructor(private readonly zendeskService: ZendeskService) {}

  // In Zendesk, it is possible to create a child ticket from a parent ticket
  // When a child ticket is created, Zendesk triggers this endpoint
  @Post(String.raw`/:ticketId\:inherit-parent-fields`)
  inheritParentTicketFields(
    @Param('ticketId', ParseIntPipe) ticketId: number,
    @Body(new ValidationPipe()) payload: InheritParentTicketFieldsPayload,
  ): Ticket {
    return this.zendeskService.copyParentTicketToChildTicket(ticketId, payload.parentId)
  }
}
