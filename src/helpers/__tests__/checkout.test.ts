import { getCustomerPricingRule } from '../checkout'
import { PRICING_RULE_TYPE, ADS_TYPE } from '../../constants/checkout'

describe('/helpers/checkout', () => {
  describe('getCustomerPricingRule', () => {
    it('should return empty array if user id is not found in privileged customers list', () => {
      expect(getCustomerPricingRule('REC005')).toEqual([])
    })

    it('should return empty array if user id is passed in', () => {
      expect(getCustomerPricingRule()).toEqual([])
    })

    it('should return correct pricing rule for SecondBite', () => {
      expect(getCustomerPricingRule('REC001')).toEqual([{
        adsType: ADS_TYPE.classic,
        type: PRICING_RULE_TYPE.xForY,
        params: {
          x: 3,
          y: 2,
        },
      }])
    })

    it('should return correct pricing rule for Axil Coffee Roasters', () => {
      expect(getCustomerPricingRule('REC002')).toEqual([{
        adsType: ADS_TYPE.standout,
        type: PRICING_RULE_TYPE.specialPrice,
        params: {
          price: 299.99,
        },
      }])
    })

    it('should return correct pricing rule for MYER', () => {
      expect(getCustomerPricingRule('REC003')).toEqual([{
        adsType: ADS_TYPE.premium,
        type: PRICING_RULE_TYPE.specialPrice,
        params: {
          price: 389.99,
        },
      }, {
        adsType: ADS_TYPE.standout,
        type: PRICING_RULE_TYPE.xForY,
        params: {
          x: 5,
          y: 4,
        },
      }])
    })
  })
})