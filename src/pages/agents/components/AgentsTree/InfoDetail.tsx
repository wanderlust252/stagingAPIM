import React from 'react';
import styled from 'styled-components';
import { Button, Tooltip } from 'antd';
import { SettingOutlined, UserOutlined, FormOutlined, PayCircleOutlined } from '@ant-design/icons';

import { COLORS } from '@/global-styles';
import { TYPE_MODAL } from '@/pages/agents/model';
import { useTranslation } from 'react-i18next';

export interface IInfoDetailProps {
  openModal: (type: TYPE_MODAL) => void;
}

const SpanStyled = styled.span<{ bgColor: string }>`
  display: inline-block;
  color: white;
  padding: 0.1rem 0.5rem;
  background-color: ${(props) => props.bgColor};
  margin-right: 0.3rem;
`;

const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  color: ${COLORS.blue};
  cursor: pointer;
  font-weight: 700;
  font-size: 2rem;
`;

const WrapperStyled = styled.div`
  padding: 1rem 1.5rem;
  padding-top: 0;
  margin-top: 2rem;
  .antd-input {
    border-radius: 4px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
  }
  td {
    padding: 0.5rem;
    border: 0.5px solid ${COLORS.border_grey};
  }
  .btn-group {
    margin-top: 2rem;
    display: flex;
    gap: 2px;
    max-width: 100%;
    justify-content: space-between;
    .btn {
      border-radius: unset;
      transition: none;
      flex: 1;

      &--left {
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
      }

      &--right {
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
      }
    }
  }
`;

const InfoDetail: React.FC<IInfoDetailProps> = ({ openModal }) => {
  const { t } = useTranslation();

  return (
    <WrapperStyled>
      <table>
        <tbody>
          <tr>
            <td>{`${t('agents.agents_detail.nick_name')}`}</td>
            <td>
              kkang
              <Tooltip placement={'right'} title={`${t('agents.changeUsernameForm.title')}`}>
                <ButtonStyled onClick={() => openModal(TYPE_MODAL.CHANGE_USERNAME)}>
                  <FormOutlined />
                </ButtonStyled>
              </Tooltip>
            </td>
            <td>{`${t('agents.agents_detail.agent_rating')}`}</td>
            <td>
              <SpanStyled bgColor={COLORS.green}>Master Agent</SpanStyled>
            </td>
          </tr>
          <tr>
            <td>{`${t('agents.agents_detail.holding_points')}`}</td>
            <td className={'text-right'}>0 POINT</td>
            <td>{`${t('agents.agents_detail.point_rate')}`}</td>
            <td className={'text-right'}>
              7%
              <Tooltip placement={'right'} title={`${t('agents.changePointForm.title')}`}>
                <ButtonStyled onClick={() => openModal(TYPE_MODAL.CHANGE_POINTS)}>
                  <FormOutlined />
                </ButtonStyled>
              </Tooltip>
            </td>
          </tr>
          <tr>
            <td>{`${t('agents.agents_detail.holding_cash')}`}</td>
            <td className={'text-right'}>0 KRW</td>
            <td>{`${t('agents.agents_detail.notify_balance')}`}</td>
            <td className={'text-right'}>6</td>
          </tr>
          <tr>
            <td>{`${t('agents.agents_detail.account_info')}`}</td>
            <td>worri kkang 343534</td>
            <td>{`${t('agents.agents_detail.contact')}`}</td>
            <td>kkang@email.com</td>
          </tr>
          <tr>
            <td>{`${t('agents.agents_detail.register_date')}`}</td>
            <td>2022-08-11 19:08:23</td>
            <td>{`${t('agents.agents_detail.situation')}`} </td>
            <td>
              <SpanStyled bgColor={COLORS.orange}>{`${t('agents.agents_detail.not_approved')}`}</SpanStyled>
            </td>
          </tr>
          <tr>
            <td>API TOKEN</td>
            <td>11ea6f40-6d5c-433d-930d-b3ab80492e20</td>
            <td> API URL</td>
            <td>https://api.spadeapi.org/api</td>
          </tr>
        </tbody>
      </table>
      <div className="btn-group">
        <Button
          size={'large'}
          icon={<UserOutlined />}
          type="primary"
          className={'btn btn--left'}
          onClick={() => openModal(TYPE_MODAL.CREATE_REF)}>
          {`${t('agents.agents_detail.sub_creation')}`}
        </Button>
        <Button
          size={'large'}
          icon={<PayCircleOutlined />}
          type="primary"
          className={'btn'}
          onClick={() => openModal(TYPE_MODAL.PAYMENT)}>
          {`${t('agents.agents_detail.point_payment')}`}
        </Button>
        <Button
          size={'large'}
          icon={<SettingOutlined />}
          type="primary"
          className={'btn btn--right'}
          onClick={() => openModal(TYPE_MODAL.CHANGE_PW)}>
          {`${t('agents.agents_detail.chang_pw')}`}
        </Button>
      </div>
    </WrapperStyled>
  );
};
export default InfoDetail;
