import { Injectable } from '@nestjs/common'
import { Ticket } from './types/Ticket'
import { ZendeskService } from './zendesk.service'
import { AppConfig } from './app.config'

@Injectable()
export class TicketsService {
  constructor(
    private appConfig: AppConfig,
    private readonly zendeskService: ZendeskService,
  ) {}

  copyTicketDataFromParent(childTicketId: number, parentTicketId: number): Ticket {
    // To implement
  }
}
