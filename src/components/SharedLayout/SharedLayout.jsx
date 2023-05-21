import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, StyledLink } from "./SharedLayout.styled";
import Loader from "../Loader";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
