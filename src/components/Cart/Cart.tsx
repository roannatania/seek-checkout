import React, { useState, useEffect } from 'react'
import { cx } from '@emotion/css'

import { getProductname } from '../../helpers/checkout'

import * as styles from './styles'

type CartProps = {
  items: Array<string>
  total: number
  totalDiscount?: number
  className?: string
}

const Cart = (props: CartProps): JSX.Element => {
  const { items = [], total = 0, totalDiscount = 0, className} = props

  const [uniqueItems, setUniqueItems] = useState<Array<string>>([])

  useEffect(() => {
    const uniqueCartItems = [...Array.from(new Set(items))] || [] as Array<string>

    setUniqueItems(uniqueCartItems)
  }, [items])

  const getItemQuantity = (item: string):number => items.filter(currentItem => currentItem === item).length || 0

  if (!items.length && total <= 0) return <></>

  return (
    <div data-testid="cart" className={cx(styles.cartWrapper, className)}>
      <ul className={styles.cartItemsList}>
        {uniqueItems.map((item: string) => {
          const name = getProductname(item) || ''

          if (!name) return null

          return (
            <li key={item} className={styles.cartItems}>
              <div className={styles.cartItemNameWrapper}>
                <p data-testid={`${item}-cart-list-item`} className={styles.cartItemName}>{name}</p>
              </div>
              <div className={styles.quantityWrapper}>
                <span className={styles.quantityLabel}>Qty</span>
                <span data-testid={`${item}-cart-qty`} className={styles.cartItemQuantity}>{getItemQuantity(item)}</span>
              </div>
            </li>
          )
        })}
      </ul>
      {totalDiscount > 0 && (
        <div className={styles.totalSavingWrapper}>
          <span className={styles.totalSavingLabel}>You&apos;re saving a total of:</span>
          <span data-testid="cart-total-discount" className={styles.totalSavingAmount}>${totalDiscount}</span>
        </div>
      )}
      <div className={styles.totalPurchaseWrapper}>
        <span className={styles.totalLabel}>Total</span>
        <span data-testid="cart-total" className={styles.totalAmount}>${total}</span>
      </div>
    </div>
  )
}

export default Cart