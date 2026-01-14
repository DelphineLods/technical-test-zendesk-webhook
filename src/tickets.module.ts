import { AppConfig } from './app.config'
import { TicketsService } from './tickets.service'
import { TicketsController } from './tickets.controller'
import { Module } from '@nestjs/common'
import { ZendeskService } from './zendesk.service'

@Module({
  controllers: [TicketsController],
  providers: [TicketsService, ZendeskService, AppConfig],
})
export class TicketsModule {}
