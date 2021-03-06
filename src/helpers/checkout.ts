import { PricingRulesData, CustomerDetails } from '../objects/checkout'
import privilegedCustomers from '../data/privilegedCustomers'
import products from '../data/products'

export const getCustomerPricingRule = (userId?: string): PricingRulesData => privilegedCustomers?.find((customer: CustomerDetails) => customer?.id === userId)?.pricingRules || [] as PricingRulesData

export const getProductname = (productId: string):string => products.find(product => product?.id === productId)?.name || ''
