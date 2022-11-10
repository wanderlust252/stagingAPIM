import React from 'react';
import { BellOutlined, DownOutlined, MenuOutlined, SettingOutlined, UnlockOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Select, Space } from 'antd';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

import { LANGUAGE } from '@/common/enum';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/global-styles';
import { useAppDispatch } from '@/hooks/hookStore';
import { Logout, Menu, MenuItem, StyledBtn, StyledHeader, Text } from '@/layouts/components/header-styled';
import { changeLanguageInput, collapseSidebar } from '@/store/common/commonSlice';
import './styles/_header.scss';

const { Option } = Select;

const ProfileMenu: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Menu direction={'vertical'}>
      <MenuItem>
        <SettingOutlined />
        <span>{`${t('header.account_setting')}`}</span>
      </MenuItem>
      <Logout>
        <UnlockOutlined />
        <span>{`${t('header.logout')}`}</span>
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
    dispatch(changeLanguageInput(e));
  };
  return (
    <StyledHeader>
      <Space style={{ height: '100%' }} size={8}>
        <StyledBtn>
          <BellOutlined />
        </StyledBtn>
        <div>
          <Select
            defaultValue="kr"
            className="language__select  antd-select-custom"
            bordered={false}
            onChange={(e: string) => handleChangeLanguage(e)}
            style={{ width: 100, zIndex: '10000000000' }}>
            <Option value={LANGUAGE.KR}>Korean</Option>
            <Option value={LANGUAGE.EN}>English</Option>
          </Select>
        </div>
        <Dropdown
          trigger={['click']}
          overlayStyle={{ backgroundColor: 'transparent' }}
          overlay={() => <ProfileMenu />}
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
                  Admin
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
