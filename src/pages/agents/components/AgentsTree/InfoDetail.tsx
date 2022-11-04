import React from 'react';
import styled from 'styled-components';
import { Button, Tooltip } from 'antd';
import { SettingOutlined, UserOutlined, FormOutlined } from '@ant-design/icons';

import { COLORS } from '@/global-styles';
import { TYPE_MODAL } from '@/pages/agents/model';

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
      background-color: ${COLORS.violet};
      border: 1px solid ${COLORS.violet};

      &--left {
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
      }

      &--right {
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
      }

      &:hover {
        background-color: #7550bf;
        border-color: #7550bf;
      }
    }
  }
`;

const InfoDetail: React.FC<IInfoDetailProps> = ({ openModal }) => {
  return (
    <WrapperStyled>
      <table>
        <tbody>
          <tr>
            <td>닉네임 (아이디)</td>
            <td>
              깡본사 (kkang)
              <Tooltip placement={'right'} title={'닉네임 변경'}>
                <ButtonStyled onClick={() => openModal(TYPE_MODAL.CHANGE_USERNAME)}>
                  <FormOutlined />
                </ButtonStyled>
              </Tooltip>
            </td>
            <td>에이전트 등급</td>
            <td>
              <SpanStyled bgColor={COLORS.yellow}>Master Agent</SpanStyled>{' '}
            </td>
          </tr>
          <tr>
            <td>보유포인트</td>
            <td className={'text-right'}>0 POINT</td>
            <td>포인트요율</td>
            <td className={'text-right'}>
              7%
              <Tooltip placement={'right'} title={'포인트요율 변경'}>
                <ButtonStyled onClick={() => openModal(TYPE_MODAL.CHANGE_POINTS)}>
                  <FormOutlined />
                </ButtonStyled>
              </Tooltip>
            </td>
          </tr>
          <tr>
            <td>보유캐쉬</td>
            <td className={'text-right'}>0 KRW</td>
            <td>잔액(POINT) 이하 알림</td>
            <td className={'text-right'}>6</td>
          </tr>
          <tr>
            <td>계좌정보</td>
            <td>worri kkang 343534</td>
            <td>연락처</td>
            <td>kkang@email.com</td>
          </tr>
          <tr>
            <td>등록일</td>
            <td>2022-08-11 19:08:23</td>
            <td>상태 </td>
            <td>
              <SpanStyled bgColor={COLORS.orange}> 미승인</SpanStyled>
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
          하부생성
        </Button>{' '}
        <Button
          size={'large'}
          icon={<UserOutlined />}
          type="primary"
          className={'btn'}
          onClick={() => openModal(TYPE_MODAL.PAYMENT)}>
          포인트 지급&차감
        </Button>
        <Button
          size={'large'}
          icon={<SettingOutlined />}
          type="primary"
          className={'btn btn--right'}
          onClick={() => openModal(TYPE_MODAL.CHANGE_PW)}>
          비밀번호 변경
        </Button>
      </div>
    </WrapperStyled>
  );
};
export default InfoDetail;
