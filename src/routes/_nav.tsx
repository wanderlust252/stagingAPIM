import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

export default {
  items: [
    { id: 1, name: '대시보드', url: '/', icon: <AppstoreOutlined /> },
    {
      id: 2,
      name: '  에이전트 관리  ',
      icon: <UsergroupAddOutlined />,
      children: [
        {
          id: 8,
          name: ' 에이전트 트리뷰 ',
          url: '/agents',
          icon: <ShoppingCartOutlined />,
        },
        {
          id: 3,
          name: '  에이전트 목록  ',
          url: '/agents/list',
        },
        {
          id: 4,
          name: ' 포인트 트랜잭션 내역 ',
          url: '/agents/point-transactions',
        },
        {
          id: 5,
          name: ' 캐쉬 트랜잭션 내역 ',
          url: '/agents/cash-transactions',
        },
      ],
    },
    { id: 7, name: ' 대시보드 ', url: '/transactions', icon: <UserOutlined /> },
    { id: 8, name: ' 환경 ', url: '/setting', icon: <SettingOutlined /> },
  ],
};
