import { Col, Divider, Row, Typography } from 'antd';
import styled from 'styled-components';

import { useDashboardQuery } from '@/apis/service/dashboard';
import { useTranslation } from 'react-i18next';
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

export default function Dashboard() {
  const { data } = useDashboardQuery('https://jsonplaceholder.typicode.com/todos');
  const { t } = useTranslation();
  const List: ICard[] = [
    {
      title: `${t('dashboard.holding_points')}`,
      statistics: '0 POINT',
      subTitle: `${t('dashboard.holding_points')}`,
      icon: 'MoneyCollectOutlined',
    },
    {
      title: `${t('dashboard.cache_points')}`,
      statistics: '0 KRW',
      subTitle: `${t('dashboard.cache_points')}`,
      icon: 'VerticalRightOutlined',
    },
    {
      title: `${t('dashboard.number_users')}`,
      statistics: `0 ${t('common.number')}`,
      subTitle: `${t('dashboard.number_users')}`,
      icon: 'UserOutlined ',
    },
    {
      title: `${t('dashboard.number_vendors_games')}`,
      statistics: '49 / 4,568',
      subTitle: `${t('dashboard.number_vendors_games')}`,
      icon: 'InfoCircleOutlined ',
    },
    {
      title: `${t('dashboard.retained_points')}`,
      statistics: '0 POINT',
      subTitle: `${t('dashboard.retained_points')}`,
      icon: 'MoneyCollectOutlined',
    },
    {
      title: `${t('dashboard.retained_cache')}`,
      statistics: '0 KRW',
      subTitle: `${t('dashboard.retained_cache')}`,
      icon: 'VerticalRightOutlined',
    },
    {
      title: `${t('dashboard.number_lower_users')}`,
      statistics: `0 ${t('common.number')}`,
      subTitle: `${t('dashboard.number_lower_users')}`,
      icon: 'UsergroupDeleteOutlined',
    },
    {
      title: `${t('dashboard.number_lower_agents')}`,
      statistics: `24 ${t('common.number')}`,
      subTitle: `${t('dashboard.number_lower_agents')}`,
      icon: 'UsergroupDeleteOutlined',
    },
  ];

  return (
    <WrapperStyled>
      <Title className="title" level={3}>
        {`${t('dashboard.title')}`}
      </Title>
      <Row gutter={[20, 20]}>
        {List.map((item, idx) => (
          <Col xs={24} sm={12} lg={6} key={idx}>
            <CardItem {...item} />
          </Col>
        ))}
      </Row>

      <Divider />
    </WrapperStyled>
  );
}
