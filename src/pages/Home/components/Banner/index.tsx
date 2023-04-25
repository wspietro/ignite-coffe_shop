import {
  Timer,
  ShoppingCart,
  Package,
  Coffee
} from "phosphor-react"

import {
  BannerHome,
  Information,
  InformationText,
  InformationItems,
  Item,
  IconWrapper,
  ImgWrapper
} from './styles'

import bannerImg from '../../../../assets/banner-img.svg'

export function Banner() {
  return (
    <BannerHome>
      <Information>
        <InformationText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </InformationText>

        <InformationItems>
          <Item>
            <IconWrapper color="yellowDark">
              <ShoppingCart size={16} weight='fill' />
            </IconWrapper>
            <span>Compra simples e segura</span>
          </Item>
          <Item>
            <IconWrapper>
              <Package size={16} weight='fill' />
            </IconWrapper>
            <span>Embalagem mantém o café intacto</span>
          </Item>
          <Item>
            <IconWrapper color="yellow">
              <Timer size={16} weight='fill' />
            </IconWrapper>
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item>
            <IconWrapper color="purple">
              <Coffee size={16} weight='fill' />
            </IconWrapper>
            <span>O café chega fresquinho até você</span>
          </Item>
        </InformationItems>
      </Information>

      <ImgWrapper>
        <img src={bannerImg} alt="" />
      </ImgWrapper>

    </BannerHome>
  )
}