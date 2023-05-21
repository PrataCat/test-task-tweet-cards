import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackBtn = styled(Link)`
  display: block;
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin: 0 auto 20px auto;
  text-align: center;

  background: var(--secondary-accent-color);
  box-shadow: var(--btn-box-shadow);
  border-radius: 10.3108px;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: var(--primaru-text-color);
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background: var(--title-color);
    box-shadow: var(--primary-box-shadow);
    outline: 0;
  }

  :focus {
    box-shadow: var(--primary-box-shadow);
    outline: 0;
  }
`;

export const TweetList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;
