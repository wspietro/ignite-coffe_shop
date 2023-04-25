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
  flex: 1;
  gap: 4.125rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 2rem;
  }
`

export const InformationText = styled.div`
  h1 {
    font-weight: 800;
    font-size: clamp(2rem, 2.5vw + 1rem, 3rem);
    color: ${({ theme }) => theme.colors.base.title};
  }

  > p {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
`

export const InformationItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 1.25rem 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
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

export const ImgWrapper = styled.div`
  flex: 1;
  max-width: 476px;
  img {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`