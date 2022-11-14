import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputField from '../../../components/FormFiled/InputField';
import '../styles/login.scss';
import { Box } from '@mui/material';
import Loading from '@/components/loading/loading';
import { useForm } from 'react-hook-form';
import { validator } from './validator/validator';

const Login: React.FC = (): JSX.Element => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: validator(),
  });
  const onSubmit = (values: any) => {
    console.log('Success:', values);
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
              {loading && <Loading />}
              LOG IN
            </Button>
          </Box>
        </Form>
      </div>
    </div>
  );
};

export default Login;
