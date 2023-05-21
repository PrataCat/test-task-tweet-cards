import PropTypes from 'prop-types';
import {
  Tweet,
  Logo,
  Marks,
  Line,
  Avatar,
  Сircle,
  Stat,
  Info,
  Count,
  Btn,
} from './TweetItem.styled';
import logo from '../../images/logo.png';
import marks from '../../images/marks.png';
import ellipse from '../../images/ellipse.png';
import { useEffect, useState } from 'react';

const TweetItem = ({ user, userChange }) => {
  const [currentUser, setCurrentUser] = useState(user);
  const [startStatus, setStartStatus] = useState('FirstRender');

  const { id, avatar, tweets, followers, color, status } = currentUser;

  useEffect(() => {
    if (startStatus === 'FirstRender') {
      return;
    }
    userChange(currentUser);
  }, [currentUser, startStatus, userChange]);

  const increment = () => {
    setCurrentUser(prevState => ({
      ...prevState,
      followers: prevState.followers + 1,
      status: 'following',
      color: '#5cd3a8',
    }));
    if (startStatus !== 'NextRender') {
      setStartStatus('NextRender');
    }
  };

  const decrement = () => {
    setCurrentUser(prevState => ({
      ...prevState,
      followers: prevState.followers - 1,
      status: 'follow',
      color: '',
    }));
    if (startStatus !== 'NextRender') {
      setStartStatus('NextRender');
    }
  };

  const hendleClick = event => {
    const value = event.currentTarget.textContent.toLowerCase();

    if (value === 'follow') {
      increment();
    } else {
      decrement();
    }
  };

  return (
    <Tweet key={id}>
      <Logo src={logo} alt="logo" />
      <Marks src={marks} alt="dialog icon" />
      <Line></Line>
      <Avatar src={avatar} alt="avatar" />
      <Сircle src={ellipse} alt="avatar" />
      <Stat>
        <Info>
          <Count>
            {tweets.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Count>{' '}
          tweets
        </Info>
        <Info>
          <Count>
            {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Count>{' '}
          followers
        </Info>
      </Stat>
      <Btn onClick={hendleClick} background={color}>
        {status}
      </Btn>
    </Tweet>
  );
};

TweetItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    tweets: PropTypes.number,
    followers: PropTypes.number,
    color: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  userChange: PropTypes.func.isRequired,
};

export default TweetItem;
