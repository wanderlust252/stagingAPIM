import { AppstoreOutlined, SettingOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const createLink = ({ label, url }: { label: string; url: string }) => <Link to={url}>{label}</Link>;

export default [
  { key: 1, label: createLink({ url: '/dashboard', label: ' 대시보드 ' }), icon: <AppstoreOutlined /> },
  {
    key: 2,
    label: ' 에이전트 관리 ',
    icon: <UsergroupAddOutlined />,
    children: [
      {
        key: 3,
        label: createLink({ url: '/agents', label: ' 에이전트 트리뷰 ' }),
      },
      {
        key: 4,
        label: createLink({ url: '/agents/list', label: ' 에이전트 목록 ' }),
      },
      {
        key: 5,
        label: createLink({ url: '/agents/cash-transactions', label: ' 포인트 트랜잭션 내역 ' }),
      },
      {
        id: 6,
        label: createLink({ url: '/agents/point-transactions', label: ' 캐쉬 트랜잭션 내역 ' }),
      },
    ],
  },
  {
    key: 7,
    label: createLink({ url: '/transactions', label: '대시보드 ' }),
    icon: <UserOutlined />,
  },
  { key: 8, label: createLink({ url: '/setting', label: '환경 ' }), icon: <SettingOutlined /> },
];
