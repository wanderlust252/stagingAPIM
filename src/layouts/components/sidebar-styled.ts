import { Drawer, Menu, Layout, DrawerProps } from 'antd';
import styled from 'styled-components';
import { COLORS } from '@/global-styles';

const { Sider } = Layout;

export const DrawerStyled = styled(Drawer)<DrawerProps>`
  &&& {
    .ant-drawer-content-wrapper {
      .ant-drawer-content {
        .ant-drawer-wrapper-body {
          .ant-drawer-header {
            display: none;
          }

          .ant-drawer-body {
            padding: 0;
            background-color: ${COLORS.dark_blue};
          }
        }
      }
    }
  }
`;

export const SiderFixedStyled = styled(Sider)`
  &&&.ant-layout-sider {
    padding: 0 1.5rem;
  }
`;
export const SiderToggleStyled = styled.div`
  width: 100%;
  padding: 0 1.5rem;
`;

export const MenuFixedStyled = styled(Menu)`
  &&&.ant-menu.ant-menu-root {
    height: 85vh;
    overflow-y: auto;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    scroll-padding: 1rem 0;

    .ant-menu-item-icon {
      font-size: 1.5rem;
    }

    .ant-menu-title-content {
      font-size: 1.5rem;
    }

    .ant-menu-item-selected {
      background-color: rgba(255, 255, 255, 0.06);
      border-radius: 8px;
    }

    .ant-menu-sub {
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &::before {
      content: '';
      width: 100%;
      background-color: rgba(255, 255, 255, 0.2);
      height: 1px;
      margin-bottom: 1rem;
    }

    .ant-menu-item,
    .ant-menu-submenu {
      font-size: 1.2rem;

      &:hover {
        background-color: rgba(255, 255, 255, 0.06);
        border-radius: 8px;
      }

      &.ant-menu-submenu-open:hover {
        background-color: transparent;
      }
    }

    .ant-menu-item {
      padding: 1rem 2rem;
    }
  }
`;

// header
