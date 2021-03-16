import { PRICING_RULE_TYPE, ADS_TYPE } from '../constants/checkout'
import {
  SpecialPriceParam,
  XYParam,
  ConditionalSpecialPriceParam,
  RuleParams,
  PricingRulesData
} from '../objects/checkout'
import products from '../data/products'

type AdsCartDetails = {
  adsType?: ADS_TYPE | string
  items?: Array<string>
}

interface CalculateTotalPriceParams extends AdsCartDetails {
  type?: PRICING_RULE_TYPE
  params?: RuleParams
}

export class Checkout {
  private cartItems: Array<string> = []

  private pricingRules: PricingRulesData

  constructor(pricingRules: PricingRulesData) {
    this.add = this.add.bind(this)
    this.pricingRules = pricingRules
  }

  _getTotalAdsOccurence = ({ items = this.cartItems, adsType }: AdsCartDetails): number => items.filter((item) => item?.toLowerCase() === adsType)?.length || 0

  _getAdsPrice = (adsType: ADS_TYPE | string): number => products.find((product) => product?.id === adsType)?.price || 0

  _calculateTotalPricePerRuleOrAds = ({
    type,
    adsType = '',
    params,
    items = this.cartItems}: CalculateTotalPriceParams): number => {
    const totalAds = adsType && items.length ? this._getTotalAdsOccurence({ adsType, items }) : 0
    const adsPrice = adsType ? this._getAdsPrice(adsType) : 0
    const lowerCasedType = type?.toLowerCase()

    if (lowerCasedType === PRICING_RULE_TYPE.specialPrice) {
      const { price = 0, minOrder = 0} = params as SpecialPriceParam

      if (totalAds >= minOrder) return totalAds * price // price is special price in the rule
    }

    if (lowerCasedType === PRICING_RULE_TYPE.xForY) {
      const { x = 0, y = 0 } = params as XYParam

      return totalAds >= x
        ? ((totalAds % x) * adsPrice) + ((((totalAds - (totalAds % x)) / x) * y) * adsPrice)
        : totalAds * adsPrice
    }

    return totalAds * adsPrice
  }

  setPricingRules(pricingRules: PricingRulesData):void {
    this.pricingRules = pricingRules
  }

  resetCart(): void {
    this.cartItems = []
  }

  add(item: string):void {
    if (item) this.cartItems = [...this.cartItems, item]
  }

  getCart():Array<string> {
    return this.cartItems
  }

  subTotal(): number {
    let subTotal = 0
    const cartItems = this.cartItems

    cartItems.forEach((cartItem: string) => {
      subTotal += this._getAdsPrice(cartItem)
    })

    return Math.round(subTotal * 100) / 100
  }

  total(): number {
    let otherItems = this.cartItems
    let total = 0

    this.pricingRules.forEach((rule) => {
      total += this._calculateTotalPricePerRuleOrAds({ ...rule })
      otherItems = otherItems.filter((item) => item !== rule?.adsType)
    })

    const uniqueOtherItems = [...Array.from(new Set(otherItems))]

    if (uniqueOtherItems.length) {
      uniqueOtherItems.forEach((item) => {
        total += this._calculateTotalPricePerRuleOrAds({
          adsType: item || '',
          items: otherItems,
        })
      })
    }

    return Math.round(total * 100) / 100
  }
}

export default Checkout
