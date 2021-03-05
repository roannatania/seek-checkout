import { PricingRulesData, CustomerDetails } from '../objects/checkout'
import privilegedCustomers from '../data/privilegedCustomers'

export const getCustomerPricingRule = (userId?: string): PricingRulesData => privilegedCustomers?.find((customer: CustomerDetails) => customer?.id === userId)?.pricingRules || [] as PricingRulesData
