import PropTypes from 'prop-types';
import axios from 'axios';

export const GetUsers = async page => {
  const url = new URL('https://645e8b678d08100293023073.mockapi.io/data/users');
  url.searchParams.append('limit', 3);
  url.searchParams.append('page', page);

  const response = await axios.get(url);

  return response.data;
};

GetUsers.propTypes = {
  page: PropTypes.number.isRequired,
};

export default GetUsers;
