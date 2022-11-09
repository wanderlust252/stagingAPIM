import {
  BellOutlined,
  DownOutlined,
  MenuOutlined,
  MessageOutlined,
  ProfileOutlined,
  SettingOutlined,
  UnlockOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Select, Space } from 'antd';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

import { COLORS } from '@/global-styles';
import { useAppDispatch } from '@/hooks/hookStore';
import { Logout, Menu, MenuItem, StyledBtn, StyledHeader, Text } from '@/layouts/components/header-styled';
import { collapseSidebar } from '@/store/common/commonSlice';
import { useTranslation } from 'react-i18next';
import './styles/_header.scss';

const { Option } = Select;

const ProfileMenu = () => {
  return (
    <Menu direction={'vertical'}>
      <MenuItem>
        <ProfileOutlined />
        <span>My Profile</span>
      </MenuItem>
      <MenuItem>
        <MessageOutlined />
        <span>Messenger</span>
      </MenuItem>
      <MenuItem>
        <SettingOutlined />
        <span>Account Settings</span>
      </MenuItem>
      <Logout>
        <UnlockOutlined />
        <span>Logout</span>
      </Logout>
    </Menu>
  );
};

const Header = () => {
  const screen = useBreakpoint();
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const handleChangeLanguage = (e: string) => {
    window.localStorage.setItem('i18n', e);
    i18n.changeLanguage(e);
  };
  return (
    <StyledHeader>
      <Space style={{ height: '100%' }} size={8}>
        <StyledBtn>
          <BellOutlined />
        </StyledBtn>
        <div>
          <Select
            defaultValue="Korea"
            className="language__select  antd-select-custom"
            bordered={false}
            onChange={(e: string) => handleChangeLanguage(e)}
            style={{ width: 100, zIndex: '10000000000' }}>
            <Option value="kr">Korean</Option>
            <Option value="en">English</Option>
          </Select>
        </div>
        <Dropdown
          trigger={['click']}
          overlayStyle={{ backgroundColor: 'transparent' }}
          overlay={ProfileMenu}
          placement="bottom">
          <Space size={20} style={{ cursor: 'pointer' }} align={'center'}>
            <Avatar
              shape={'square'}
              size="large"
              src={'https://i.pravatar.cc/300'}
              style={{
                backgroundColor: '#87d068',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid ' + COLORS.grey_2,
              }}
              icon={<i className="icon icon-bell2" />}
            />
            {screen.md && (
              <Space style={{ textAlign: 'left' }} size={0} direction={'vertical'}>
                <Text color={COLORS.grey_2} fontSize={'1.5rem'}>
                  John caterina
                </Text>
                <Text color={COLORS.grey_1} fontSize={'1.2rem'}>
                  Project manager
                </Text>
              </Space>
            )}
            <DownOutlined />
          </Space>
        </Dropdown>
        {!screen.md && (
          <Button onClick={() => dispatch(collapseSidebar())} style={{ fontSize: '2rem' }} type={'link'}>
            <MenuOutlined />
          </Button>
        )}
      </Space>
    </StyledHeader>
  );
};

export default Header;
