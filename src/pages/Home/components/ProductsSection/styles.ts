import styled from "styled-components"
import * as ToggleGroup from '@radix-ui/react-toggle-group';


export const OurProducts = styled.div`
  > h3 {
    font-weight: 800;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
`

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
  display: flex;
  gap: 0.5rem;

  margin-top: 32px;
`
export const ToggleGroupItem = styled(ToggleGroup.Item)`
  border: none;

  font-size: 12px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.product.yellowDark};

  background-color: ${({ theme }) => theme.colors.product.yellowLight};
  padding: 4px 8px;
  border-radius: 100px;

  cursor: pointer;


  :focus, :hover {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.product.yellowDark};
  }

  &[data-state='on'] {
    background-color: ${({ theme }) => theme.colors.product.yellowDark};
    color: ${({ theme }) => theme.colors.base.white}
  }
`

export const Products = styled.div`
  padding: 56px 0px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 40px 32px;
  justify-items: center;
`