import { useEffect, useReducer, useState } from "react";
import { CoffeeCard } from "../CoffeeCard";
import { OurProducts, ToggleGroupRoot, ToggleGroupItem, Products } from './styles'
import { api } from "../../../../lib/axios";

interface Categories {
  traditional: boolean;
  cold: boolean;
  milk: boolean;
  special: boolean;
  alcohol: boolean;
}

interface Product {
  name: string;
  description: string;
  price: number;
  categories: Categories;
}

interface ActionType {
  type: 'traditional' | 'cold' | 'milk' | 'special' | 'alcohol'
}

interface Params {
  'categories.traditional'?: boolean;
  'categories.cold'?: boolean;
  'categories.milk'?: boolean;
  'categories.special'?: boolean;
  'categories.alcohol'?: boolean;
}


function reducer(params: Params, action: ActionType) {
  switch (action.type) {
    case 'traditional':
      const traditional = params["categories.traditional"] ? undefined : true
      return {
        ...params,
        ["categories.traditional"]: traditional
      }
    case 'special':
      const special = params["categories.special"] ? undefined : true
      return {
        ...params,
        ["categories.special"]: special
      }
    case 'milk':
      const milk = params["categories.milk"] ? undefined : true
      return {
        ...params,
        ["categories.milk"]: milk
      }
    case 'alcohol':
      const alcohol = params["categories.alcohol"] ? undefined : true
      return {
        ...params,
        ["categories.alcohol"]: alcohol
      }
    case 'cold':
      const cold = params["categories.cold"] ? undefined : true
      return {
        ...params,
        ["categories.cold"]: cold
      }
    default:
      throw new Error();
  }
}


export function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [params, dispatch] = useReducer<Params>(reducer, {})

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('products', {
        params: params
      })
      setProducts(response.data)
    }

    fetchData();
  }, [params])


  return (
    <OurProducts>
      <h3>Nossos Cafés</h3>

      <ToggleGroupRoot
        type="multiple"
        aria-label="Filtro de produtos"
      >
        <ToggleGroupItem value="traditional" onClick={() => dispatch({ type: 'traditional' })}>
          Tradicional
        </ToggleGroupItem>
        <ToggleGroupItem value="special" onClick={() => dispatch({ type: 'special' })}>
          Especial
        </ToggleGroupItem>
        <ToggleGroupItem value="milk" onClick={() => dispatch({ type: 'milk' })}>
          Com Leite
        </ToggleGroupItem>
        <ToggleGroupItem value="alcohol" onClick={() => dispatch({ type: 'alcohol' })}>
          Alcoólico
        </ToggleGroupItem>
        <ToggleGroupItem value="cold" onClick={() => dispatch({ type: 'cold' })}>
          Gelado
        </ToggleGroupItem>
      </ToggleGroupRoot>

      <Products>
        {products.map(product => <CoffeeCard key={product.name} {...product} />)}
      </Products>
    </OurProducts>
  )
}