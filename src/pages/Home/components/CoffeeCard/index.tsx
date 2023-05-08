
import {
  CardWrapper,
  ImgWrapper,
  Title,
  Description,
  Tags,
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
import { priceFormatter } from '../../../../utils/formatter';

interface Categories {
  traditional: boolean;
  cold: boolean;
  milk: boolean;
  special: boolean;
  alcohol: boolean;
}

interface CoffeCardProps {
  name: string;
  description: string;
  price: number;
  categories: Categories;
}

export function CoffeeCard(product: CoffeCardProps) {
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value)
    setCount(value);
  }

  const formattedPrice = priceFormatter.format(product.price / 100);
  const priceWithoutSymbol = formattedPrice.replace('R$', '');

  return (
    <CardWrapper>
      <ImgWrapper>
        <img src={trad} alt="" />
      </ImgWrapper>


      <Tags>
        {Object.entries(product.categories).map(([name, value]) => {
          if (value) {
            return (
              <DescriptionTag>
                {name}
              </DescriptionTag>
            )
          }
        })}
      </Tags>

      <Title>
        {product.name}
      </Title>

      <Description>
        {product.description}
      </Description>

      <Footer>
        <PriceInfo>
          R$ <span>{priceWithoutSymbol}</span>
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