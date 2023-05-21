import { Container, Title } from './HomePage.styled';
import { FcSms } from 'react-icons/fc';

const HomePage = () => {
  return (
    <Container>
      <Title to="/tweets">
        Welcome to tweets <FcSms />
      </Title>
    </Container>
  );
};

export default HomePage;
