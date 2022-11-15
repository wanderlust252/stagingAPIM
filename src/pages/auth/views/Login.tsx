import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputField from '../../../components/FormFiled/InputField';
import '../styles/login.scss';
import { Box } from '@mui/material';
import Loading from '@/components/loading/loading';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validator } from './validator/validator';
import { useLogin } from '@/apis/service';
import { Account } from '@/interfaces';

const Login: React.FC = (): JSX.Element => {
  const { mutate, isLoading } = useLogin();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Account>({
    resolver: validator(),
  });
  const onSubmit: SubmitHandler<Account> = (values) => {
    const payload = {
      username: values.username,
      password: values.password,
    };
    mutate(payload);
  };
  return (
    <div className="login__container">
      <div className="login__wraper">
        <h1>Api management</h1>
        <Form name="normal_login" className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="User name"
            name="username"
            placeholder="User name"
            controlId="validationUsername"
            errors={errors}
            control={control}
            type="text"
          />
          <InputField
            label="Password"
            name="password"
            placeholder="Password"
            controlId="validationPassword"
            errors={errors}
            control={control}
            type="password"
          />
          <Box>
            <Button type="submit" className="login-form-button full-w-btn">
              {isLoading && <Loading />}
              LOG IN
            </Button>
          </Box>
        </Form>
      </div>
    </div>
  );
};

export default Login;
