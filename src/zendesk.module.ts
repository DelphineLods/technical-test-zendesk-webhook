import { ZendeskConfig } from './zendesk.config'
import { ZendeskService } from './zendesk.service'
import { ZendeskController } from './zendesk.controller'
import { Module } from '@nestjs/common'

@Module({
  controllers: [ZendeskController],
  providers: [ZendeskService, ZendeskConfig],
})
export class ZendeskModule {}
