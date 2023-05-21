import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://645e8b678d08100293023073.mockapi.io/data';

export const PutUsers = async (id, user) => {
  const response = await axios.put(`/users/${id}`, user);

  return response.data;
};

PutUsers.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default PutUsers;
