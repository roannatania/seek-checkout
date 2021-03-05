import React, { useState, useEffect } from 'react'
import { cx } from '@emotion/css'

import products from '../../data/products'

import * as styles from './styles'

type CartProps = {
  items: Array<string>
  total: number
  className?: string
}

const Cart = (props: CartProps): JSX.Element => {
  const { items = [], total = 0, className} = props

  const [uniqueItems, setUniqueItems] = useState<Array<string>>([])

  useEffect(() => {
    const uniqueCartItems = [...Array.from(new Set(items))] || [] as Array<string>

    setUniqueItems(uniqueCartItems)
  }, [items])

  const getItemQuantity = (item: string):number => items.filter(currentItem => currentItem === item).length || 0

  const getProductname = (item: string):string => products.find(product => product?.id === item)?.name || item

  if (!items.length && total <= 0) return <></>

  return (
    <div className={cx(styles.cartWrapper, className)}>
      <ul className={styles.cartItemsList}>
        {uniqueItems.map((item: string) => (
          <li key={item} className={styles.cartItems}>
            <div className={styles.cartItemNameWrapper}>
              <p className={styles.cartItemName}>{getProductname(item)}</p>
            </div>
            <div className={styles.quantityWrapper}>
              <span className={styles.quantityLabel}>Qty</span>
              <span className={styles.cartItemQuantity}>{getItemQuantity(item)}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.totalPurchaseWrapper}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalAmount}>${total}</span>
      </div>
    </div>
  )
}

export default Cart