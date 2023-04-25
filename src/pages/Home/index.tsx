import { Banner } from "./components/Banner";
import { InformationItems } from "./components/Banner/styles";
import { CoffeeCard } from "./components/CoffeeCard";

import { HomeWrapper, OurProducts, Products } from "./styles";

export function Home() {
  const cards = Array.from({ length: 14 }, (_, index) => index + 1)
  console.log(cards);

  return (
    <HomeWrapper>
      <Banner />

      <OurProducts>
        <h3>Nossos Cafés</h3>
        <Products>
          {cards.map(card => <CoffeeCard />)}
        </Products>
      </OurProducts>
    </HomeWrapper>
  )
}
