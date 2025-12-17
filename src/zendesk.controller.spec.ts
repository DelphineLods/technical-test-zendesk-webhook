import { Test, TestingModule } from '@nestjs/testing'
import { ZendeskController } from './zendesk.controller'
import { ZendeskService } from './zendesk.service'
import { ZendeskConfig } from './zendesk.config'

describe('ZendeskController', () => {
  let zendeskController: ZendeskController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ZendeskController],
      providers: [ZendeskService, ZendeskConfig],
    }).compile()

    zendeskController = app.get<ZendeskController>(ZendeskController)
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
        custom_fields: [
          { id: 10000005, value: 'product_information' },
          { id: 10000002, value: 'store_lesquin' },
        ],
      })
    })
  })
})
