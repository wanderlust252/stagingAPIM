import { AppstoreOutlined, SettingOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const createLink = ({ label, url }: { label: string; url: string }) => <Link to={url}>{label}</Link>;

const useNavigation = () => {
  const { t } = useTranslation();

  const navigation = [
    {
      key: 1,
      label: createLink({ url: '/dashboard', label: `${t('sidebar.dashboard')}` }),
      icon: <AppstoreOutlined />,
    },
    {
      key: 2,
      label: `${t('sidebar.agent.title')}`,
      icon: <UsergroupAddOutlined />,
      children: [
        {
          key: 3,
          label: createLink({ url: '/agents', label: `${t('sidebar.agent.tree')}` }),
        },
        {
          key: 4,
          label: createLink({ url: '/agents/list', label: `${t('sidebar.agent.list')}` }),
        },
        {
          key: 5,
          label: createLink({ url: '/agents/cash-transactions', label: `${t('sidebar.agent.point')}` }),
        },
        {
          id: 6,
          label: createLink({ url: '/agents/point-transactions', label: `${t('sidebar.agent.cash')}` }),
        },
      ],
    },
    {
      key: 7,
      label: createLink({ url: '/transactions', label: `${t('sidebar.transactions')}` }),
      icon: <UserOutlined />,
    },
    {
      key: 8,
      label: createLink({ url: '/setting', label: `${t('sidebar.setting')}` }),
      icon: <SettingOutlined />,
    },
  ];

  return navigation;
};

export default useNavigation;
