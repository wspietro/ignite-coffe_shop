import styled from "styled-components"


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
`

export const SideActions = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    width: 2.375rem;
    height: 2.375rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.product.yellowLight};
    color: ${({ theme }) => theme.colors.product.yellowDark};

    border-radius: 6px;

    :focus {
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.product.yellowDark};
    }

    svg {
      transition: transform .4s ease-in-out;

      :hover {
        transform: rotate(360deg);
      }
    }
  }
`

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.product.purpleLight};
  color: ${({ theme }) => theme.colors.product.purpleDark};

   span {
    font-size: 0.875rem;
    font-weight: 00;
   }
`