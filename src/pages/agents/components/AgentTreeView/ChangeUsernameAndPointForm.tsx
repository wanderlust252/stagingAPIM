import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Box } from '@mui/material';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/hooks';
import { validateMessage } from '@/interfaces/constants';

export interface ChangeUsernameAndPointProps {
  register: UseFormRegister<Record<string, any>>;
}

const ChangePoint: React.FC<ChangeUsernameAndPointProps> = ({ register }) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.common.languageInput);

  return (
    <Box sx={{ pb: 1.4 }}>
      <Form.Label htmlFor="point_rate">{t('agents.changePointForm.percent_point')}</Form.Label>
      <Form.Control
        required
        as={'input'}
        size="sm"
        type="text"
        id="point_rate"
        {...register('point_rate', {
          required: `${t('agents.changePointForm.percent_point')} ${validateMessage[language].required}`,
        })}
      />
    </Box>
  );
};

const ChangeUsername: React.FC<ChangeUsernameAndPointProps> = ({ register }) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.common.languageInput);

  return (
    <Box sx={{ pb: 1.4 }}>
      <Form.Label htmlFor="username">{t('agents.changeUsernameForm.new_username')}</Form.Label>
      <Form.Control
        required
        as={'input'}
        size="sm"
        type="text"
        id="username"
        {...register('username', {
          required: `${t('agents.changeUsernameForm.new_username')} ${validateMessage[language].required}`,
        })}
      />
    </Box>
  );
};

export { ChangeUsername, ChangePoint };
