import React from 'react'

import { ProductDetails } from '../../../objects/checkout'
import Button from '../../Button'

import * as styles from './styles'

interface ProductTileProps extends ProductDetails {
  onAddToCart?: (productId: string) => void
}

const ProductTile = (props: ProductTileProps):JSX.Element => {
  const { id, name, description, price, onAddToCart } = props

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(id)
    }
  }

  return (
    <article className={styles.productTile}>
      <div className={styles.productTileInner}>
          <div className={styles.contentTextWrapper}>
            <h4 className={styles.productName}>{name}</h4>
            <p className={styles.productDescription}>{description}</p>
          </div>
          <div className={styles.contentWrapper}>
            {price > 0 && <p className={styles.productPrice}>${price}</p>}
            <Button id={`${id}-add-to-cart-btn`} onClick={handleAddToCart}>Add to Cart</Button>
          </div>
      </div>
    </article>
  )
}

export default ProductTile