import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import Tweets from "../../components/Tweets";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GetUsers from "../../servises/Api/GetUsers";
import { Container } from "./TweetsPage.styled";
import PutUsers from "../../servises/Api/PutUsers";
import LoadButton from "../../components/LoadButton";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [isDabledBtn, setIsDisabledBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMassege, setErrorMassege] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setIsDisabledBtn(false);
    if (page === 0) {
      setPage(1);
      setIsLoading(false);
      return;
    }
    (async () => {
      try {
        const data = await GetUsers(page);

        if (!data.length) {
          setErrorMassege("There are no more tweets.");
        } else {
          setUsers((prevState) => [...prevState, ...data]);
          setIsDisabledBtn(true);
        }
      } catch (error) {
        setErrorMassege("Tweets loading error. Please refresh the page.");
        setIsDisabledBtn(false);
      }
    })();
    setIsLoading(false);
  }, [page]);

  const PutUser = async (id, user) => {
    try {
      const data = await PutUsers(id, user);
      return data;
    } catch (error) {
      setErrorMassege("Tweets updating error.");
    }
  };

  const userChange = (cangedUser) => {
    const { id } = cangedUser;
    PutUser(id, cangedUser);
  };

  const hendelClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Container>
      <Tweets tweets={users} userChange={userChange} location={location} />
      {isDabledBtn && <LoadButton onClickBtn={hendelClick} />}
      {isLoading && <Loader />}
      {errorMassege && <h2>{errorMassege}</h2>}
    </Container>
  );
};

TweetsPage.propTypes = {
  id: PropTypes.string,
  user: PropTypes.object,
};

export default TweetsPage;
