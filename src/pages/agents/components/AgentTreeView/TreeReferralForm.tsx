import React from 'react';
import { Box, Stack } from '@mui/material';
import { Form } from 'react-bootstrap';
import { UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/hooks';
import { validateMessage } from '@/interfaces/constants';

export interface TreeReferralFormProps {
  register: UseFormRegister<Record<string, any>>;
}

const TreeReferralForm: React.FC<TreeReferralFormProps> = ({ register }) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.common.languageInput);

  return (
    <Stack spacing={1} direction="column">
      <Box>
        <Form.Label htmlFor="username">{t('agents.referralForm.agent_parent')}</Form.Label>
        <Form.Control
          autoComplete="off"
          required
          as={'input'}
          size="sm"
          type="text"
          id="username"
          {...register('parent_agent', {
            required: `${t('agents.referralForm.agent_parent')} ${validateMessage[language].required}`,
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="nick_name">{t('agents.referralForm.username')}</Form.Label>
        <Form.Control
          autoComplete="off"
          required
          as={'input'}
          size="sm"
          type="text"
          id="nick_name"
          {...register('nick_name', {
            required: `${t('agents.referralForm.username')} ${validateMessage[language].required}`,
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="id">{t('agents.referralForm.user')}</Form.Label>
        <Form.Control
          autoComplete="off"
          required
          as={'input'}
          size="sm"
          type="text"
          id="id"
          {...register('id', {
            required: `${t('agents.referralForm.user')} ${validateMessage[language].required}`,
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="pw">{t('agents.referralForm.password')}</Form.Label>
        <Form.Control
          autoComplete="off"
          required
          as={'input'}
          size="sm"
          type="password"
          id="pw"
          {...register('pw', {
            required: `${t('agents.referralForm.password')} ${validateMessage[language].required}`,
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="confirm_pw">{t('agents.referralForm.password_confirm')}</Form.Label>
        <Form.Control
          autoComplete="off"
          required
          as={'input'}
          size="sm"
          type="password"
          id="confirm_pw"
          {...register('confirm_pw', {
            required: `${t('agents.referralForm.password_confirm')} ${validateMessage[language].required}`,
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="point_rate">{t('agents.referralForm.percent_point')}</Form.Label>
        <Form.Control
          autoComplete="off"
          required
          as={'input'}
          size="sm"
          type="number"
          id="point_rate"
          {...register('point_rate', {
            required: `${t('agents.referralForm.percent_point')} ${validateMessage[language].required}`,
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="agent_privileges">{t('agents.referralForm.agent_privileges')}</Form.Label>
        <Form.Select
          autoComplete="off"
          defaultValue={undefined}
          placeholder={t('common.choose')}
          {...register('agent_privileges', {
            required: `${t('agents.referralForm.agent_privileges')} ${validateMessage[language].required}`,
          })}>
          <option value="1">AgentA</option>
          <option value="2">AgentB</option>
          <option value="3">AgentC</option>
          <option value="4">AgentD</option>
        </Form.Select>
      </Box>
    </Stack>
  );
};
export default TreeReferralForm;
