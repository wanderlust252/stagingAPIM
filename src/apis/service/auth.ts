import requestApi from '../config';

interface Account {
  username: string;
  password: string;
}
const login = async (data: Account) => {
  const url = '/login';
  try {
    return await requestApi.post(url, data);
  } catch (error) {
    throw error;
  }
};

export { login };
