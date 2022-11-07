import React, { useState } from 'react';
import { Button, Row, Input, Col, Space, Select, Cascader } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { CheckOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import '@/pages/setting/styles/setting.scss';
const Setting: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1 className='text-header'>설정 및 정보</h1>
      <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Col span={11} className="shadow">
          <div style={{ backgroundColor: '#7FB5FF', borderRadius: '10px 10px 0 0', padding: '10px 0 12px 22px' }}>
            <h3 style={{ color: '#fff' }}>기본 정보</h3>
          </div>
          <div style={{ width: '100%', padding: '20px' }}>
            <Space style={{ width: '50%', paddingRight: '15px' }} direction="vertical">
              <Input size="large" style={{ width: '100%', marginBottom: '10px' }} placeholder="아이디" />
              <Input size="large" style={{ width: '100%', marginBottom: '10px' }} placeholder="에이전트 등급" />
              <Input
                size="large"
                style={{ width: '100%', marginBottom: '10px' }}
                addonAfter={<SettingOutlined />}
                placeholder="잔액(POINT) 이하 알림"
              />
              <Input size="large" placeholder="보유포인트" style={{ width: '100%' }} addonAfter={<SettingOutlined />} />
            </Space>
            <Space style={{ width: '50%', paddingLeft: '15px' }} direction="vertical">
              <Input size="large" placeholder="닉네임" style={{ width: '100%', marginBottom: '10px' }} />
              <Input
                size="large"
                style={{ width: '100%', marginBottom: '10px' }}
                addonAfter={<SettingOutlined />}
                placeholder="포인트요율"
              />
              <Input
                size="large"
                style={{ width: '100%', marginBottom: '10px' }}
                addonAfter={<SettingOutlined />}
                placeholder="보유캐쉬"
              />
              <Input size="large" style={{ width: '100%' }} placeholder="상태" />
            </Space>
          </div>
          <Button size='large' style={{ margin: '20px', borderRadius: '5px'}} type="primary">
            비밀번호 변경
          </Button>
        </Col>
        <Col span={11} className="shadow">
          <div style={{ backgroundColor: '#7FB5FF', borderRadius: '10px 10px 0 0', padding: '10px 0 12px 22px' }}>
            <h3 style={{ color: '#fff' }}>Callback 정보</h3>
          </div>
          <div style={{ width: '100%', padding: '20px' }}>
            <Space style={{ width: '50%', paddingRight: '15px' }} direction="vertical">
              <Input size="large" style={{ width: '100%', marginBottom: '10px' }} defaultValue="d99b4b12-9a2f-4b1c-901e-317d7fd5cce1" />
              <ul>
                <li>Callback TOKEN은(는) 콜백 API 개발 시 아래와 같이 전송 받으신 헤더를 체크 하셔야 합니다.</li>
                <li>Callback-Token: 콜백 토큰값</li>
                <li>하부 콜백 요청 시 헤더의 Callback-Token 값을 콜백 토큰 값으로 보내오니 꼭 체크 바랍니다.</li>
                <li>
                  헤더 Callback-Token 해당값이 현재 페이지의 Callback TOKEN값과 다른 경우 ERROR 리턴 조치 바랍니다.
                </li>
              </ul>
            </Space>
            <Space style={{ width: '50%', paddingLeft: '15px' }} direction="vertical">
              <Input size="large" style={{ width: '100%', marginBottom: '10px' }} defaultValue="11ea6f40-6d5c-433d-930d-b3ab80492e20" />
              <ul>
                <li>Callback URL은(는) http://, https:// 중 하나로 시작해야 합니다.</li>
                <li>ex) https://test.com/callback</li>
                <li>콜백 URL 설정 후 실서버 적용까지 최대 10분 정도 소요 될 수 있습니다.</li>
                <li>트랜스퍼 지갑 방식 사용 시 Callback URL을 비워주세요.</li>
              </ul>
            </Space>
          </div>
          <Button size='large' style={{ margin: '20px', borderRadius: '5px'}} type="primary">
            비밀번호 변경
          </Button>
        </Col>
        <Col span={23} className="shadow">
          <div style={{ backgroundColor: '#7FB5FF', borderRadius: '10px 10px 0 0', padding: '10px 0 12px 22px' }}>
            <h3 style={{ color: '#fff' }}>계좌 정보</h3>
          </div>
          <div style={{ width: '100%', padding: '20px' }}>
            <Space style={{ width: '50%', paddingRight: '15px' }} direction="vertical">
              <Input size="large" style={{ width: '100%', marginBottom: '10px' }} placeholder="연락처"/>
              <Input size="large" style={{ width: '100%', marginBottom: '10px' }} placeholder="계좌번호"/>
            </Space>
            <Space style={{ width: '50%', paddingLeft: '15px' }} direction="vertical">
              <Input size="large" style={{ width: '100%', marginBottom: '10px' }} placeholder="은행명"/>
              <Input size="large" style={{ width: '100%', marginBottom: '10px' }} placeholder="예금주"/>
            </Space>
          </div>
          <Button size='large' style={{ margin: '20px', borderRadius: '5px'}} type="primary">
            비밀번호 변경
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Setting;
