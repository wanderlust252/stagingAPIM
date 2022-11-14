import { useContext } from 'react';
import { Button, List, ListItem, ListSubheader } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

import { SidebarContext } from 'src/contexts/SidebarContext';
import { MenuTile, MenuWrapper, SubMenuWrapper, TextTile } from './style';
import { Handyman, Dashboard, SupportAgent, Paid } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const { t } = useTranslation();

  const navs = [
    {
      key: 1,
      label: `${t('sidebar.dashboard')}`,
      icon: <Dashboard />,
      path: '/',
    },
    {
      key: 2,
      label: `${t('sidebar.agent.title')}`,
      icon: <SupportAgent />,
      children: [
        {
          key: 3,
          label: `${t('sidebar.agent.tree')}`,
          path: '/agents',
        },
        {
          key: 4,
          label: `${t('sidebar.agent.list')}`,
          path: '/agents/list',
        },
        {
          key: 5,
          label: `${t('sidebar.agent.point')}`,
          path: '/agents/cash-transactions',
        },
        {
          id: 6,
          label: `${t('sidebar.agent.cash')}`,
          path: '/agents/point-transactions',
        },
      ],
    },
    {
      key: 7,
      label: `${t('sidebar.transactions')}`,
      icon: <Paid />,
      path: '/transactions',
    },
    {
      key: 8,
      label: `${t('sidebar.setting')}`,
      icon: <Handyman />,
      path: '/setting',
    },
  ];

  return (
    <MenuWrapper>
      {navs.map((item) => {
        if (item.children) {
          return (
            <List
              key={item.key}
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  <MenuTile>
                    {item.icon}
                    <TextTile>{item.label}</TextTile>
                  </MenuTile>
                </ListSubheader>
              }>
              <SubMenuWrapper>
                <List component="div">
                  {item.children.map((x) => (
                    <ListItem key={x.key} component="div">
                      <Button disableRipple component={RouterLink} onClick={closeSidebar} to={x.path}>
                        {x.label}
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </SubMenuWrapper>
            </List>
          );
        }
        return (
          <SubMenuWrapper key={item.key}>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to={item.path}
                  startIcon={item.icon}>
                  {item.label}
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        );
      })}
    </MenuWrapper>
  );
}

export default SidebarMenu;
