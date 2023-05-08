import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 32px;
  background-color: ${({ theme }) => theme.colors.base.card};

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  padding: 20px;
`

export const ImgWrapper = styled.div`
  width: 120px;
  margin-top: -40px;
  margin-bottom: 12px;

  img {
    width: 100%;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const DescriptionTag = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.product.yellowDark};

  background-color: ${({ theme }) => theme.colors.product.yellowLight};
  padding: 4px 8px;
  border-radius: 100px;
`

export const Title = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.base.subtitle};
  margin-top: 16px;
`

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.base.label};
  margin-top: 8px;
  margin-bottom: auto;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
`

export const PriceInfo = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.base.text};

  span {
    font-size: 24px;
    font-weight: ${({ theme }) => theme.fontWeight.extraBold};
    font-family: 'Baloo 2', sans-serif;
  }
`

export const ActionGroup = styled.div`
  display: flex;
  gap: 8px;
`

export const CounterInput = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 8px;
  border-radius: 6px;
  gap: 4px;

  background-color: ${({ theme }) => theme.colors.base.button};

  input {
    all: unset;
    background: transparent;
    color: ${({ theme }) => theme.colors.base.title}; 
    font-size: 1rem;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

export const CounterButton = styled.button`
  all: unset;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.product.purple};

    &:hover {
      color: ${({ theme }) => theme.colors.product.purpleDark};
    }
  }
`

export const CartButton = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.colors.product.purpleDark};
  padding: 8px;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.product.purple};
  }

  svg {
    color: ${({ theme }) => theme.colors.base.card}; 
  }
`