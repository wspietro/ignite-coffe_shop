import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../Components/Header/Header";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

const LayoutContainer = styled.body`
  max-width: 74rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
`