import { useEffect, useState } from "react";
import { CoffeeCard } from "../CoffeeCard";
import { OurProducts, Products } from './styles'
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
    'categories.cold': false,
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

  console.log(products)

  return (
    <OurProducts>
      <h3>Nossos Cafés</h3>
      <Products>
        {products.map(product => <CoffeeCard key={product.name} {...product} />)}
      </Products>
    </OurProducts>
  )
}