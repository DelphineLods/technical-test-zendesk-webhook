export class ZendeskConfig {
  zendeskCustomFieldIds: Record<string, number> = {
    store: 10000002,
    firstName: 10000003,
    lastName: 10000004,
    contactReason: 10000005,
  }

  systemAccountId = 101

  storeToRequesterMap: Record<string, number> = {
    store_lesquin: 102,
    store_lyon: 103,
  }
}
