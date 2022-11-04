import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/global-styles';

export interface IInfoDetailProps {}

const WrapperStyled = styled.div`
  padding: 1rem 1.5rem;
  .antd-input {
    border-radius: 4px;
  }
  table {
    border-collapse: collapse;
  }
  td {
    padding: 0.5rem;
    border: 0.5px solid ${COLORS.border_grey};
  }
`;

const InfoDetail: React.FC<IInfoDetailProps> = ({}) => {
  return (
    <WrapperStyled>
      <table>
        <tbody>
          <tr>
            <td>닉네임 (아이디)</td>
            <td>깡본사 (kkang)</td>
            <td>에이전트 등급</td>
            <td>Master Agent</td>
          </tr>
          <tr>
            <td>보유포인트</td>
            <td>0 POINT</td>
            <td>포인트요율</td>
            <td>7 %</td>
          </tr>
          <tr>
            <td>보유캐쉬</td>
            <td>0 KRW</td>
            <td>잔액(POINT) 이하 알림</td>
            <td>6</td>
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
            <td> 상태</td>
            <td>미승인</td>
          </tr>
          <tr>
            <td>API TOKEN</td>
            <td>11ea6f40-6d5c-433d-930d-b3ab80492e20</td>
            <td> API URL</td>
            <td>https://api.spadeapi.org/api</td>
          </tr>
        </tbody>
      </table>
    </WrapperStyled>
  );
};
export default InfoDetail;
