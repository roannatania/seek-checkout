import { PRICING_RULE_TYPE, ADS_TYPE } from '../constants/checkout'

export type SpecialPriceParam = {
  price: number
  minOrder?: number
}

export type XYParam = {
  x: number
  y: number
}

export type ConditionalSpecialPriceParam = {
  price: number
  minOrder: number
}

export type RuleParams = XYParam | SpecialPriceParam | ConditionalSpecialPriceParam

export type PricingRulesData = Array<{
  adsType: ADS_TYPE
  type: PRICING_RULE_TYPE
  params: RuleParams
}>

export type ProductDetails = {
  name: string
  description: string
  id: string
  price: number
}

export type CustomerDetails = {
  id: string
  name: string
  pricingRules?: PricingRulesData
}
