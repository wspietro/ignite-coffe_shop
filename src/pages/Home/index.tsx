import { useEffect, useState } from "react";
import { Banner } from "./components/Banner";
import { CoffeeCard } from "./components/CoffeeCard";

import { HomeWrapper, OurProducts, Products } from "./styles";
import { api } from "../../lib/axios";

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

export function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('products', {
        params: {
          categories: 3
        }
      })
      setProducts(response.data)
    }

    fetchData();
  }, [])

  console.log(products)

  return (
    <HomeWrapper>
      <Banner />

      <OurProducts>
        <h3>Nossos Cafés</h3>
        <Products>
          {products.map(product => <CoffeeCard key={product.name} />)}
        </Products>
      </OurProducts>
    </HomeWrapper>
  )
}
