import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 50px 20px 50px 20px;
`;

export const Title = styled(Link)`
  padding: 50px 20px 50px 20px;
  font-weight: 600;
  font-size: 32px;
  text-align: center;

  :hover {
    color: var(--title-color);
  }
`;
