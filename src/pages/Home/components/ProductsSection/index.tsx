import { useEffect, useState } from "react";
import { CoffeeCard } from "../CoffeeCard";
import { OurProducts, ToggleGroupRoot, ToggleGroupItem, Products } from './styles'
import { api } from "../../../../lib/axios";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

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

interface Params {
  'categories.traditional': boolean;
  'categories.cold': boolean;
  'categories.milk': boolean;
  'categories.special': boolean;
  'categories.alcohol': boolean;
}


export function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [params, setParams] = useState<Params>({
    'categories.traditional': true,
    'categories.cold': true,
    'categories.milk': false,
    'categories.special': false,
    'categories.alcohol': false,
  })

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
        // defaultValue="center"
        aria-label="Filtro de produtos"
      >
        <ToggleGroupItem value="tradicional">
          Tradicional
        </ToggleGroupItem>
        <ToggleGroupItem value="especial">
          Especial
        </ToggleGroupItem>
        <ToggleGroupItem value="leite">
          Com Leite
        </ToggleGroupItem>
        <ToggleGroupItem value="alcoolico">
          Alcoólico
        </ToggleGroupItem>
        <ToggleGroupItem value="right">
          Gelado
        </ToggleGroupItem>
      </ToggleGroupRoot>

      <Products>
        {products.map(product => <CoffeeCard key={product.name} {...product} />)}
      </Products>
    </OurProducts>
  )
}