import { Banner } from "./components/Banner";

import { HomeWrapper } from "./styles";
import { ProductsSection } from "./components/ProductsSection";


export function Home() {

  return (
    <HomeWrapper>
      <Banner />
      <ProductsSection />
    </HomeWrapper>
  )
}
