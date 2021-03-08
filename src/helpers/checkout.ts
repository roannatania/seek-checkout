import { PricingRulesData, CustomerDetails } from '../objects/checkout'
import customers from '../data/customers'
import products from '../data/products'

export const getCustomerPricingRule = (userId?: string): PricingRulesData => customers?.find((customer: CustomerDetails) => customer?.id === userId)?.pricingRules || [] as PricingRulesData

export const getProductname = (productId: string):string => products.find(product => product?.id === productId)?.name || ''
