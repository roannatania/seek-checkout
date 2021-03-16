import { getCustomerPricingRule } from '../../helpers/checkout'
import Checkout from '../checkout'

describe('/services/checkout', () => {
  describe('add', () => {
    const checkout = new Checkout([])

    it('should add productId string to cartItems', () => {
      checkout.add('standout')
      checkout.add('standout')
      checkout.add('premium')
      expect(checkout.getCart()).toEqual(['standout', 'standout', 'premium'])
    })
  })

  describe('subTotal', () => {
    it('should calculate total purchase without any discounts applied', () => {
      const axilPricingRule = getCustomerPricingRule('REC002')

      const checkout = new Checkout(axilPricingRule)

      checkout.add('standout')
      checkout.add('standout')
      checkout.add('standout')
      checkout.add('premium')

      expect(checkout.subTotal()).toEqual(1363.96)
    })
  })

  describe('total', () => {
    it('should calculate correct total for default customers',() => {
      //default customer don't have pricing rules
      const checkout = new Checkout([])

      checkout.add('classic')
      checkout.add('standout')
      checkout.add('premium')

      expect(checkout.total()).toEqual(987.97)
    })

    describe('privileged customers', () => {
      it('should calculate correct total for SecondBite', () => {
        const secondBitePricingRule = getCustomerPricingRule('REC001')

        const checkout = new Checkout(secondBitePricingRule)

        checkout.add('classic')
        checkout.add('classic')
        checkout.add('classic')
        checkout.add('premium')

        expect(checkout.total()).toEqual(934.97)
      })

      it('should calculate correct total for Axil Coffee Roasters', () => {
        const axilPricingRule = getCustomerPricingRule('REC002')

        const checkout = new Checkout(axilPricingRule)

        checkout.add('standout')
        checkout.add('standout')
        checkout.add('standout')
        checkout.add('premium')

        expect(checkout.total()).toEqual(1294.96)
      })

      it('should calculate correct total for MYER', () => {
        const myerPricingRule = getCustomerPricingRule('REC003')

        const checkout = new Checkout(myerPricingRule)

        checkout.add('standout')
        checkout.add('standout')
        checkout.add('standout')
        checkout.add('standout')
        checkout.add('standout')
        checkout.add('standout')
        checkout.add('standout')
        checkout.add('premium')
        checkout.add('premium')
        checkout.add('classic')
        checkout.add('classic')
        checkout.add('classic')

        expect(checkout.total()).toEqual(3467.89)
      })

      it('should calculate correct total for JORA', () => {
        const joraPricingRule = getCustomerPricingRule('REC006')

        const checkout = new Checkout(joraPricingRule)

        checkout.add('premium')
        checkout.add('premium')
        checkout.add('premium')
        checkout.add('premium')
        checkout.add('standout')
        checkout.add('classic')

        expect(checkout.total()).toEqual(2112.94)
      })
    })
  })
})