import React from 'react';
import { Box, Stack } from '@mui/material';
import { Form } from 'react-bootstrap';
import { UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/hooks';
import { validateMessage } from '@/interfaces/constants';

interface IChangePasswordForm {
  register: UseFormRegister<Record<string, any>>;
}

const ChangePasswordForm: React.FC<IChangePasswordForm> = ({ register }) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.common.languageInput);

  return (
    <Stack spacing={2} sx={{ pb: 2 }} direction="column">
      <Box>
        <Form.Label htmlFor="new_password">{t('agents.ChangePwForm.new_pw')}</Form.Label>
        <Form.Control
          autoComplete="off"
          required
          as={'input'}
          size="sm"
          type="password"
          id="new_password"
          {...register('new_password', {
            required: `${t('agents.ChangePwForm.new_pw')} ${validateMessage[language].required}`,
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="confirm_pw">{t('agents.ChangePwForm.confirm_pw')}</Form.Label>
        <Form.Control
          autoComplete="off"
          required
          as={'input'}
          size="sm"
          type="password"
          id="confirm_pw"
          {...register('confirm_pw', {
            required: `${t('agents.ChangePwForm.confirm_pw')} ${validateMessage[language].required}`,
          })}
        />
      </Box>
    </Stack>
  );
};
export default ChangePasswordForm;
