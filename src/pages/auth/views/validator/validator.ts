import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
export const validator = () => {
  return yupResolver(
    Yup.object().shape({
      username: Yup.string().required('Username is required.'),
      password: Yup.string().required('Password is required.')
    })
  )
};