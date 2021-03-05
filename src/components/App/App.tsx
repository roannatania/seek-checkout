import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { PricingRulesData, CustomerDetails } from '../../objects/checkout'
import { DropdownOption } from '../../objects/formFields'
import { getCustomerPricingRule } from '../../helpers/checkout'
import customers from '../../data/customers'
import Checkout from '../../services/checkout'
import Header from '../Header'
import Footer from '../Footer'
import Select from '../Select'
import ProductsList from '../ProductsList'
import Cart from '../Cart'

import * as styles from './styles'

library.add(faChevronDown)

const App = (): JSX.Element => {
  const [userId, setUserId] = useState('')
  const [userName, setUserName] = useState('')
  const [pricingRules, setPricingRules] = useState<PricingRulesData>([])
  const [checkout, setCheckout] = useState<null | Checkout>(null)
  const [cart, setCart] = useState<Array<string>>([])
  const [total, setTotal] = useState(0)

  const resetBag = () => {
    setTotal(0)
    setCart([])
    checkout?.resetCart()
    setUserPricingRules()
  }

  const getOptions = ():Array<DropdownOption> => {
    const defaultOption = {
      value: "",
      label: "-- Please Select --"
    }

    const userOptions = customers.map((customer: CustomerDetails) => ({
      value: customer.id,
      label: customer.name
    }))

    return [defaultOption, ...userOptions]
  }

  const setUserPricingRules = () => {
    const userPricingRules = getCustomerPricingRule(userId)

    setPricingRules(userPricingRules)
  }

  const handleUserSelect = (e?: React.ChangeEvent<HTMLSelectElement>):void => {
    const selectedUserId = e?.target?.value || ''

    setUserId(selectedUserId)
    setUserName(customers.find((customer: CustomerDetails) => customer.id === selectedUserId)?.name || '')
  }

  const handleAddToCart = (id:string) => {
    checkout?.add(id)

    const totalPurchase = checkout?.total() || 0 as number
    const userCart = checkout?.getCart() || [] as Array<string>

    setCart(userCart)
    setTotal(totalPurchase)
  }

  useEffect(() => {
    setCheckout(new Checkout(pricingRules))
  }, [])

  useEffect(() => {
    resetBag()
  }, [userId])

  useEffect(() => {
    checkout?.setPricingRules(pricingRules)
  }, [pricingRules])

  return (
    <div className={styles.appMainWrapper}>
      <Header name={userName} />
      <div className={styles.appBody}>
        <div className={styles.appBodyInner}>
          <section className={styles.nameSelectSection}>
            <Select
              id="userName"
              label="What is your name?"
              labelColor="white"
              value={userId}
              options={getOptions()}
              onChange={handleUserSelect}
            />
          </section>

          <Cart
            items={cart}
            total={total}
            className={styles.cart}
          />

          <section className={styles.section}>
            <h2 className={styles.sectionHeader}>Select your ads</h2>
            <ProductsList onAddToCart={handleAddToCart} />
          </section>
        </div>
      </div>
      <Footer>
        <div className={styles.footerContent}>
          Created by Roanna Tania
        </div>
      </Footer>
    </div>
  )
}

export default App
