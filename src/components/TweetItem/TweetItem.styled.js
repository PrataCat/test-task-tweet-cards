import styled from 'styled-components';

export const Tweet = styled.li`
  position: relative;
  padding-top: 28px;
  width: 380px;
  height: 460px;
  background: var(--bg-color);
  box-shadow: var(--card-box-shadow);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
`;

export const Marks = styled.img`
  display: block;
  margin: 0 auto;
  width: 308px;
  height: 168px;
`;

export const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
  width: 100%;
  height: 8px;
  background-color: var(--secondary-accent-color);
  box-shadow: var(--line-box-shadow);
`;

export const Сircle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  border-radius: 50%;
  background-color: var(--img-bg-color);
`;

export const Stat = styled.div`
  margin-top: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Info = styled.p`
  display: flex;
  gap: 8px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: var(--secondary-accent-color);
`;

export const Count = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: var(--secondary-accent-color);
`;

export const Btn = styled.button`
  display: block;
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin: 26px auto 0 auto;
  text-align: center;

  background: ${({ background }) =>
    background || 'var(--secondary-accent-color)'};
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
    background: ${({ background }) =>
      background
        ? 'var(--secondary-accent-color)'
        : 'var(--primary-accent-color);'};
    box-shadow: var(--primary-box-shadow);
    outline: 0;
  }

  :focus {
    box-shadow: var(--primary-box-shadow);
    outline: 0;
  }
`;
