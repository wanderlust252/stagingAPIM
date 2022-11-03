import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import navigation from './../routes/_nav';
import { LeftCircleOutlined, PieChartOutlined, RightCircleOutlined } from '@ant-design/icons';
import { NavItem } from './models/NavModel';
import './styles/_sidebar.scss';

// import { use } from 'i18next';
import { collapseSidebar } from '@/store/common/commonSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/hookStore';

// const logo = require('assets/images/logo.png');

const { SubMenu } = Menu;
// import PermissionRoute from './../middleware/PermissionRoute';

const rootSubmenuKeys: string[] = [];

const Sidebar = () => {
  // const hasSidebar = useAppSelector((state: any) => state.common.hasSidebar);
  const dispatch = useAppDispatch();
  const [hasSidebar, setHasSideBar] = useState(true);

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey: string | undefined = keys.find((key: string) => openKeys.indexOf(key) === -1);
    if (!latestOpenKey || rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const renderMenus = () => {
    if (!navigation) {
      return null;
    }
    return navigation.items.map((nav: NavItem) => {
      if (!nav.children) {
        return renderMenuItem(nav);
      }
      return renderSubMenuItem(nav);
    });
  };

  const toggleLayout = (): void => {
    setHasSideBar((prev) => !prev);
  };

  function renderMenuItem(item: NavItem) {
    if (!item.children) {
      return (
        <Menu.Item key={`main${item.id}`} icon={item.icon}>
          <Link to={item.url}>{item.name}</Link>
        </Menu.Item>
      );
    }
    return renderSubMenuItem(item);
  }

  function renderSubMenuItem(item: NavItem) {
    rootSubmenuKeys.push(`sub${item.id}`);
    return (
      <SubMenu key={`sub${item.id}`} icon={item.icon} title={item.name}>
        {item.children &&
          item.children.map((nav: NavItem) => {
            return renderMenuItem(nav);
          })}
      </SubMenu>
    );
  }

  return (
    <Layout.Sider
      collapsible
      theme={'dark'}
      collapsed={hasSidebar}
      onCollapse={toggleLayout}
      style={{ position: 'sticky', zIndex: '99999999999999999', height: '100vh' }}
      className="position-rel top-0">
      <div className="display-flex justify-content-center logo">{/*<img src={logo} alt="logo" />*/}</div>
      <Menu
        theme={'dark'}
        className="sidebar-full-height"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}>
        {renderMenus()}
      </Menu>

      {/*<button*/}
      {/*  onClick={toggleLayout}*/}
      {/*  className={collapse ? 'icon-arrow-left icon-nav icon-nav__close' : 'icon-arrow-left icon-nav icon-nav__open'}>*/}
      {/*  toggle*/}
      {/*</button>*/}
    </Layout.Sider>
  );
};

export default React.memo(Sidebar);
