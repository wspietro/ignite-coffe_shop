import styled, { ThemeConsumer } from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 140px;
`

export const OurProducts = styled.div`
  > h3 {
    font-weight: 800;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
`

export const Products = styled.div`
  padding: 56px 0px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 40px 32px;
  justify-items: center;
`