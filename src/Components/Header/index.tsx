import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"

import {
  HeaderContainer,
  SideActions,
  LocationBox
} from './styles'

import logoCoffeDelivery from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeDelivery} alt="Logo Coffee Delivery" />

      <SideActions>
        <LocationBox>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationBox>

        <NavLink to="/checkout">
          <ShoppingCart weight="fill" size={18} />
        </NavLink>
      </SideActions>
    </HeaderContainer>
  )
}

