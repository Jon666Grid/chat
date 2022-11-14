import axios from 'axios'

export const getUserByItems = async (item) => {
      const data = await axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${item}`);
      return data;
}
