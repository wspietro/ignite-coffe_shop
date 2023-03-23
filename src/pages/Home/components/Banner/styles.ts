import styled from "styled-components"
import { defaultTheme } from '../../../../styles/themes/default'

export const BannerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Information = styled.div`
  max-width: 36.75rem;

  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const InformationText = styled.div`
  flex-shrink: 2;
  
  h1 {
    font-weight: 800;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.base.title};
  }

  > p {
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
`

export const InformationItems = styled.div`
  max-width: 35.4375rem;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 1.25rem 2rem;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.base.text}
    }
`

interface IconWrapperProps {
  color?: keyof typeof defaultTheme.colors.product;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    background-color: ${({ theme, color }) => color ? theme.colors.product[color] : theme.colors.base.text};
    border-radius: 50%;

      svg {
        color: ${({ theme }) => theme.colors.base.background};
      }
`