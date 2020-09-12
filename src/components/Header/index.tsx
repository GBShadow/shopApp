import React from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <Link to="/">ShopApp</Link>
      </div>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>5 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  )
}

export default Header
