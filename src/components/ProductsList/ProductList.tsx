import React from 'react'

import { ProductDetails } from '../../objects/checkout'
import products from '../../data/products'
import ProductTile from './ProductTile'

import * as styles from './styles'

type ProductsListProps = {
  onAddToCart?: (productId: string) => void
}

const ProductsList = (props: ProductsListProps):JSX.Element => {
  const { onAddToCart } = props

  return (
    <ul className={styles.productList}>
      {products.map((product: ProductDetails) => (
        <li key={product?.name} className={styles.productListItem}>
          <ProductTile
            name={product?.name || ''}
            description={product?.description || ''}
            price={product?.price || 0}
            id={product?.id || ''}
            onAddToCart={onAddToCart}
          />
        </li>
      ))}
    </ul>
  )
}

export default ProductsList