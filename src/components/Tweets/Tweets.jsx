import PropTypes from "prop-types";
import TweetItem from "../../components/TweetItem";
import { BackBtn, TweetList } from "./Tweets.styled";

const Tweets = ({ tweets, userChange }) => {
  return (
    <>
      <BackBtn to="/">Back</BackBtn>
      <TweetList>
        {tweets.map((tweet) => {
          const { id } = tweet;
          return <TweetItem key={id} user={tweet} userChange={userChange} />;
        })}
      </TweetList>
    </>
  );
};

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired,
  userChange: PropTypes.func.isRequired,
};

export default Tweets;
