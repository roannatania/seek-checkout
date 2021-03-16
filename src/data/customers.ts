import { PRICING_RULE_TYPE, ADS_TYPE } from '../constants/checkout'

const customers = [{
  id: 'REC001',
  name: 'SecondBite',
  pricingRules: [{
    adsType: ADS_TYPE.classic,
    type: PRICING_RULE_TYPE.xForY,
    params: {
      x: 3,
      y: 2,
    },
  }],
}, {
  id: 'REC002',
  name: 'Axil Coffee Roasters',
  pricingRules: [{
    adsType: ADS_TYPE.standout,
    type: PRICING_RULE_TYPE.specialPrice,
    params: {
      price: 299.99,
    },
  }],
}, {
  id: 'REC003',
  name: 'MYER',
  pricingRules: [{
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
  }, {
    adsType: ADS_TYPE.classic,
    type: PRICING_RULE_TYPE.specialPrice,
    params: {
      minOrder: 3,
      price: 249.99
    }
  }],
}, {
  id: 'REC004',
  name: 'David Jones'
}, {
  id: 'REC005',
  name: 'The Kettle Black'
}, {
  id: 'REC006',
  name: 'JORA',
  pricingRules: [{
    adsType: ADS_TYPE.premium,
    type: PRICING_RULE_TYPE.specialPrice,
    params: {
      minOrder: 4,
      price: 379.99
    }
  }]
}]

export default customers