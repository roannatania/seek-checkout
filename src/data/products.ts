import { ADS_TYPE } from '../constants/checkout'

const products = [{
  id: ADS_TYPE.classic,
  name: 'Classic Ad',
  description: 'Offers the most basic level of advertisement',
  price: 269.99,
}, {
  id: ADS_TYPE.standout,
  name: 'Stand out Ad',
  description: 'Allows advertisers to use a company logo and use a longer presentation text',
  price: 322.99,
}, {
  id: ADS_TYPE.premium,
  name: 'Premium Ad',
  description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
  price: 394.99,
}]

export default products
