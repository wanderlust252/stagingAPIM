import React from 'react';
import { Typography, Row, Col, Divider } from 'antd';
import styled from 'styled-components';

import CardItem from '../components/CardItem';

const { Title } = Typography;

const WrapperStyled = styled.section`
  padding: 0.5rem;
`;

interface ICard {
  title: string;
  statistics: string;
  subTitle: string;
  icon: string;
}

const data: ICard[] = [
  {
    title: '나의 보유 포인트',
    statistics: '0 POINT',
    subTitle: ' 나의 보유 포인트',
    icon: 'MoneyCollectOutlined',
  },
  {
    title: '나의 보유 캐쉬',
    statistics: '0 KRW',
    subTitle: '나의 보유 캐쉬',
    icon: 'VerticalRightOutlined',
  },
  {
    title: '나의 유저 수',
    statistics: '0 명',
    subTitle: '나의 유저 수',
    icon: 'UserOutlined ',
  },
  {
    title: '벤더 수 / 게임 수',
    statistics: '49 / 4,568',
    subTitle: '벤더 수 / 게임 수',
    icon: 'InfoCircleOutlined ',
  },
  {
    title: '하부(전체) 보유 포인트',
    statistics: '0 POINT',
    subTitle: '하부(전체) 보유 포인트',
    icon: 'MoneyCollectOutlined',
  },
  {
    title: '하부(전체) 보유 캐쉬',
    statistics: '0 KRW',
    subTitle: '하부(전체) 보유 캐쉬',
    icon: 'VerticalRightOutlined',
  },
  {
    title: '하부(전체) 유저 수',
    statistics: '0 명',
    subTitle: '하부(전체) 유저 수',
    icon: 'UsergroupDeleteOutlined',
  },
  {
    title: '하부(전체) 에이전트 수',
    statistics: '24 명',
    subTitle: '하부(전체) 에이전트 수',
    icon: 'UsergroupDeleteOutlined',
  },
];

export default function Dashboard() {
  return (
    <WrapperStyled>
      <Title className="title" level={3}>
        대시보드
      </Title>
      <Row gutter={[20, 20]}>
        {data.map((item, idx) => (
          <Col xs={24} sm={12} lg={6} key={idx}>
            <CardItem {...item} />
          </Col>
        ))}
      </Row>
      <Divider />
      <span>Copyright © APIMP Admin Corp. All Rights Reserved.</span>
    </WrapperStyled>
  );
}
