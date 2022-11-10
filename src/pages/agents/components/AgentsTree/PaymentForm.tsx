import { Button, Form, Input, InputNumber, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const WrapperStyled = styled(Space)`
  .list {
  }

  .btn-group {
    .btn.ant-btn {
      border-radius: 0;

      &:hover {
      }
    }
  }

  .round-left {
    border-bottom-left-radius: 4px !important;
    border-top-left-radius: 4px !important;
  }

  .round-right {
    border-bottom-right-radius: 4px !important;
    border-top-right-radius: 4px !important;
  }
`;

const PaymentForm = ({}) => {
  const form = Form.useFormInstance();
  const { t } = useTranslation();

  const suggest = (value: number, reset = false) => {
    if (reset) {
      form.setFieldValue('number', 0);
      return;
    }
    const oldValue = form.getFieldValue('number');
    form.setFieldValue('number', (oldValue ?? 0) + value);
  };

  return (
    <WrapperStyled direction={'vertical'}>
      <Form.Item
        rules={[{ required: true }]}
        initialValue={0}
        label={t('agents.paymentForm.amount_request') as string}
        name={'number'}>
        <InputNumber
          style={{ width: '100%' }}
          controls={false}
          formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        />
      </Form.Item>
      <Form.Item rules={[{ required: true }]} label={t('agents.paymentForm.note') as string} name={'note'}>
        <Input />
      </Form.Item>

      <ul className="list">
        <li>{t('agents.paymentForm.policy.policy_1') as string}</li>
        <li>{t('agents.paymentForm.policy.policy_2') as string}</li>
        <li>{t('agents.paymentForm.policy.policy_3') as string}</li>
      </ul>

      <Space className={'btn-group'} size={0}>
        <Button className={'btn round-left '} onClick={() => suggest(10000000)}>
          {t('agents.paymentForm.suggest.10m') as string}
        </Button>
        <Button className={'btn'} onClick={() => suggest(50000000)}>
          {t('agents.paymentForm.suggest.50m') as string}
        </Button>
        <Button className={'btn'} onClick={() => suggest(100000000)}>
          {t('agents.paymentForm.suggest.1m') as string}
        </Button>
        <Button className={'btn'} onClick={() => suggest(300000000)}>
          {t('agents.paymentForm.suggest.300m') as string}
        </Button>
        <Button className={'btn'} onClick={() => suggest(500000000)}>
          {t('agents.paymentForm.suggest.500m') as string}
        </Button>
        <Button className={'btn'} onClick={() => suggest(1000000000)}>
          {t('agents.paymentForm.suggest.10b') as string}
        </Button>
        <Button className={'btn round-right'} onClick={() => suggest(0, true)}>
          {t('agents.paymentForm.suggest.init') as string}
        </Button>
      </Space>
    </WrapperStyled>
  );
};
export default PaymentForm;
