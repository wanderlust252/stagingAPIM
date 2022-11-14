import React from 'react';
import styled from 'styled-components';

import { TYPE_MODAL } from '@/pages/agents/model';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/global-styles';
import { Button, ButtonGroup } from 'react-bootstrap';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export interface IAgentDetailProps {
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
    width: 100%;
    margin-top: 1rem;
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

const TdBold = styled.td`
  font-weight: 700;
`;

const AgentDetail: React.FC<IAgentDetailProps> = ({ openModal }) => {
  const { t } = useTranslation();

  return (
    <WrapperStyled>
      <table>
        <tbody>
          <tr>
            <TdBold>{`${t('agents.agents_detail.nick_name')}`}</TdBold>
            <td>
              kkang
              <ButtonStyled onClick={() => openModal(TYPE_MODAL.CHANGE_USERNAME)}>
                <BorderColorIcon />
              </ButtonStyled>
            </td>
            <TdBold>{`${t('agents.agents_detail.agent_rating')}`}</TdBold>
            <td>
              <SpanStyled bgColor={COLORS.green}>Master Agent</SpanStyled>
            </td>
          </tr>
          <tr>
            <TdBold>{`${t('agents.agents_detail.holding_points')}`}</TdBold>
            <td className={'text-right'}>0 POINT</td>
            <TdBold>{`${t('agents.agents_detail.point_rate')}`}</TdBold>
            <td className={'text-right'}>
              7%
              <ButtonStyled onClick={() => openModal(TYPE_MODAL.CHANGE_POINT)}>
                <BorderColorIcon />
              </ButtonStyled>
            </td>
          </tr>
          <tr>
            <TdBold>{`${t('agents.agents_detail.holding_cash')}`}</TdBold>
            <td className={'text-right'}>0 KRW</td>
            <TdBold>{`${t('agents.agents_detail.notify_balance')}`}</TdBold>
            <td className={'text-right'}>6</td>
          </tr>
          <tr>
            <TdBold>{`${t('agents.agents_detail.account_info')}`}</TdBold>
            <td>worri kkang 343534</td>
            <TdBold>{`${t('agents.agents_detail.contact')}`}</TdBold>
            <td>kkang@email.com</td>
          </tr>
          <tr>
            <TdBold>{`${t('agents.agents_detail.register_date')}`}</TdBold>
            <td>2022-08-11 19:08:23</td>
            <TdBold>{`${t('agents.agents_detail.situation')}`} </TdBold>
            <td>
              <SpanStyled bgColor={COLORS.orange}>{`${t('agents.agents_detail.not_approved')}`}</SpanStyled>
            </td>
          </tr>
          <tr>
            <TdBold>API TOKEN</TdBold>
            <td>11ea6f40-6d5c-433d-930d-b3ab80492e20</td>
            <TdBold> API URL</TdBold>
            <td>https://api.spadeapi.org/api</td>
          </tr>
        </tbody>
      </table>
      <div className="btn-group">
        <ButtonGroup>
          <Button className={'btn btn--left'} onClick={() => openModal(TYPE_MODAL.CREATE_REF)}>
            {`${t('agents.agents_detail.sub_creation')}`}
          </Button>
          <Button className={'btn'} onClick={() => openModal(TYPE_MODAL.PAYMENT)}>
            {`${t('agents.agents_detail.point_payment')}`}
          </Button>
          <Button className={'btn btn--right'} onClick={() => openModal(TYPE_MODAL.CHANGE_PW)}>
            {`${t('agents.agents_detail.chang_pw')}`}
          </Button>
        </ButtonGroup>
      </div>
    </WrapperStyled>
  );
};
export default AgentDetail;
