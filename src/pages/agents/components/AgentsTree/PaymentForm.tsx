import React from 'react';
import { Space, Form, Input, InputNumber, Button } from 'antd';
import styled from 'styled-components';

export interface IPaymentFormProps {}

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

const PaymentForm: React.FC<IPaymentFormProps> = ({}) => {
  const form = Form.useFormInstance();

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
      <Form.Item initialValue={0} label={'요청 금액'} name={'number'}>
        <InputNumber
          className={'full-width'}
          controls={false}
          formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        />
      </Form.Item>
      <Form.Item label={'비고'} name={'note'}>
        <Input />
      </Form.Item>

      <ul className="list">
        <li>마이너스(-)로 입력시 보유 금액을 차감합니다.</li>
        <li>나의 보유 금액보다 큰 금액을 지급할 수 없습니다.</li>
        <li>대상의 보유 금액보다 큰 금액을 차감할 수 없습니다.</li>
      </ul>

      <Space className={'btn-group'} size={0}>
        <Button className={'btn round-left '} onClick={() => suggest(10000000)}>
          1천만
        </Button>
        <Button className={'btn'} onClick={() => suggest(50000000)}>
          5천만
        </Button>
        <Button className={'btn'} onClick={() => suggest(100000000)}>
          1억
        </Button>
        <Button className={'btn'} onClick={() => suggest(300000000)}>
          3억
        </Button>
        <Button className={'btn'} onClick={() => suggest(500000000)}>
          5억
        </Button>
        <Button className={'btn'} onClick={() => suggest(1000000000)}>
          10억
        </Button>
        <Button className={'btn round-right'} onClick={() => suggest(0, true)}>
          초기화
        </Button>
      </Space>
    </WrapperStyled>
  );
};
export default PaymentForm;
