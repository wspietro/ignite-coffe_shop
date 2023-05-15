import { useEffect, useReducer, useState } from "react";
import { CoffeeCard } from "../CoffeeCard";
import { OurProducts, ToggleGroupRoot, ToggleGroupItem, Products } from './styles'
import { api } from "../../../../lib/axios";
import { ActionType, Params, productsParamsReducer } from "../../../../reducers/products-params";

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


export function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [params, dispatch] = useReducer<React.Reducer<Params, ActionType>>(productsParamsReducer, {})

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
        <ToggleGroupItem value="traditional" onClick={() => dispatch({ type: "traditional" })}>
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