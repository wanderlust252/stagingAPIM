import { useAppDispatch, useAppSelector } from '@/hooks/hookStore';
import { collapseSidebar } from '@/store/common/commonSlice';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

import useNavigation from '@/routes/_nav';
import { DrawerStyled, MenuFixedStyled, SiderFixedStyled, SiderToggleStyled } from './components/sidebar-styled';
import './styles/_sidebar.scss';

const logo = require('assets/images/logo.png');

const Sidebar = () => {
  const screens = useBreakpoint();
  const collapse = useAppSelector((state) => state.common.collapse);
  const dispatch = useAppDispatch();
  const nav = useNavigation();

  const toggleSidebar = () => {
    dispatch(collapseSidebar());
  };

  if (screens.md)
    return (
      <SiderFixedStyled width={250}>
        <div className="display-flex justify-content-center logo">
          <img src={logo} alt="logo" />
        </div>
        <MenuFixedStyled theme={'dark'} items={nav} className="sidebar-full-height" mode="inline" />
      </SiderFixedStyled>
    );

  return (
    <DrawerStyled
      onClose={toggleSidebar}
      zIndex={10000}
      width={280}
      maskStyle={{ backgroundColor: 'transparent' }}
      open={collapse}
      placement={'left'}>
      <SiderToggleStyled>
        <div style={{ height: '15vh' }} className="display-flex justify-content-center logo">
          <img src={logo} alt="logo" />
        </div>
        <MenuFixedStyled theme={'dark'} items={nav} className="sidebar-full-height" mode="inline" />
      </SiderToggleStyled>
    </DrawerStyled>
  );
};

export default Sidebar;
