import React from 'react';
import { Box, Stack } from '@mui/material';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { validateMessage } from '@/interfaces/constants';
import { useAppSelector } from '@/hooks/hooks';

export interface IPaymentForm {
  register: UseFormRegister<Record<string, any>>;
}

const PaymentForm: React.FC<IPaymentForm> = ({ register }) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.common.languageInput);

  const suggest = (value: number, reset = false) => {};

  return (
    <Stack spacing={2} sx={{ pb: 2 }} direction="column">
      <Box>
        <Form.Label htmlFor="new_password">{t('agents.paymentForm.amount_request')}</Form.Label>
        <Form.Control
          autoComplete="off"
          required
          as={'input'}
          size="sm"
          type="number"
          id="number"
          {...register('number', {
            required: `${t('agents.paymentForm.amount_request')} ${validateMessage[language].required}`,
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="confirm_pw">{t('agents.paymentForm.note')}</Form.Label>
        <Form.Control
          autoComplete="off"
          required
          as={'input'}
          size="sm"
          type="text"
          id="note"
          {...register('note', {
            required: `${t('agents.paymentForm.note')} ${validateMessage[language].required}`,
          })}
        />
      </Box>

      <ul className="list mt-4 mb-2">
        <li>{t('agents.paymentForm.policy.policy_1')}</li>
        <li>{t('agents.paymentForm.policy.policy_2')}</li>
        <li>{t('agents.paymentForm.policy.policy_3')}</li>
      </ul>

      <ButtonGroup className="d-flex" style={{ gap: '2px' }}>
        <Button className={'btn round-left '} onClick={() => suggest(10000000)}>
          {t('agents.paymentForm.suggest.10m')}
        </Button>
        <Button className={'btn'} onClick={() => suggest(50000000)}>
          {t('agents.paymentForm.suggest.50m')}
        </Button>
        <Button className={'btn'} onClick={() => suggest(100000000)}>
          {t('agents.paymentForm.suggest.1m')}
        </Button>
        <Button className={'btn'} onClick={() => suggest(300000000)}>
          {t('agents.paymentForm.suggest.300m')}
        </Button>
        <Button className={'btn'} onClick={() => suggest(500000000)}>
          {t('agents.paymentForm.suggest.500m')}
        </Button>
        <Button className={'btn'} onClick={() => suggest(1000000000)}>
          {t('agents.paymentForm.suggest.10b')}
        </Button>
        <Button className={'btn round-right'} onClick={() => suggest(0, true)}>
          {t('agents.paymentForm.suggest.init')}
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default PaymentForm;
