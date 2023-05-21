import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin: 26px auto 0 auto;
  text-align: center;

  background: var(--title-color);;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
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

  :hover,
  :focus {
    background: var(--secondary-accent-color);
    box-shadow: 0 0 0 2px var(--title-color);, 0 3px 8px 0 var(--title-color);
    outline: 0;
  }
`;
