import { Test, TestingModule } from '@nestjs/testing'
import { TicketsController } from './tickets.controller'
import { TicketsService } from './tickets.service'
import { AppConfig } from './app.config'
import { ZendeskService } from './zendesk.service'

describe('TicketsController', () => {
  let zendeskController: TicketsController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TicketsController],
      providers: [TicketsService, ZendeskService, AppConfig],
    }).compile()

    zendeskController = app.get<TicketsController>(TicketsController)
  })

  describe('inheritParentTicketFields', () => {
    it('should copy parent ticket fields to child ticket', () => {
      const ticketId = 2
      const parentId = 1

      const result = zendeskController.inheritParentTicketFields(ticketId, { parentId })

      expect(result).toEqual({
        id: 2,
        group_id: 20,
        requester_id: 102,
        store: 'store_lesquin',
        contactReason: 'product_information',
      })
    })
  })
})
