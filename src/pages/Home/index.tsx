import React, { useEffect, useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import axios from 'axios'

import { ProductList } from './styles'

import formatPrice from '../../utils/formarPrice'

interface Product {
  id: number
  title: string
  price: number
  image: string
  priceFormatted: string
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axios.get('http://localhost:3333/products').then(response => {
      const data = response.data.map((product: Product) => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))

      setProducts(data)
    })
  }, [])

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {''}
              {}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

export default Home
