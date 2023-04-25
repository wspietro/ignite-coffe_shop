
import {
  CardWrapper,
  ImgWrapper,
  Title,
  Description,
  DescriptionTag,
  Footer,
  PriceInfo,
  ActionGroup,
  CounterInput,
  CounterButton,
  CartButton
} from './styles'

import trad from '../../../../assets/expresso-tradicional.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

export function CoffeeCard() {
  const [count, setCount] = useState(1);

  function handleClickIncrement() {
    setCount(prevState => prevState + 1)
  }

  function handleClickDecrement() {
    if (count > 1) {
      setCount(prevState => prevState - 1)
    }
    else {
      setCount(1)
    }
  }

  function handleChange(e) {
    setCount(e.target.value);
  }

  return (
    <CardWrapper>
      <ImgWrapper>
        <img src={trad} alt="" />
      </ImgWrapper>

      <DescriptionTag>
        Tradicional
      </DescriptionTag>

      <Title>
        Expresso Tradicional
      </Title>

      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <Footer>
        <PriceInfo>
          R$ <span>9,90</span>
        </PriceInfo>

        <ActionGroup>
          <CounterInput>
            <CounterButton onClick={handleClickDecrement}>
              <Minus size={14} weight='bold' />
            </CounterButton>
            <input
              type="number"
              min={1}
              max={99}
              step={1}
              value={count}
              onChange={handleChange}
            />
            <CounterButton onClick={handleClickIncrement}>
              <Plus size={14} weight='bold' />
            </CounterButton>
          </CounterInput>

          <CartButton>
            <ShoppingCart size={22} weight='fill' />
          </CartButton>
        </ActionGroup>
      </Footer>
    </CardWrapper>
  )
}