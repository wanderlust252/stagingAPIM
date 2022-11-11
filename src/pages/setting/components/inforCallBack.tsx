import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Input from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '@/pages/setting/style/setting.css';
function InforCallBack() {
  const IMG_WARNING = require('@/assets/images/waning.svg');
  const COLOR_BLUE = '#3F3B6C';
  const [showDialog, setShowDialog] = useState(false);
  const handleCloseDialog = () => setShowDialog(false);
  const handleShowDialog = () => setShowDialog(true);
  return (
    <div className="px-4" style={{ marginTop: '2em' }}>
      <div className="shadow-form">
        <div style={{ backgroundColor: COLOR_BLUE, borderRadius: '10px 10px 0 0', padding: '10px 0 12px 22px' }}>
          <h5 style={{ color: '#fff' }}>Callback 정보</h5>
        </div>
        <Row className="border-form p-2  m-0">
          <Col className="mr-3 mt-3">
            <Input className="mb-3">
              {/* <Input style={{ marginBottom: '10px' }} defaultValue="d99b4b12-9a2f-4b1c-901e-317d7fd5cce1" /> */}
              <Form.Control disabled aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              <Button
                onClick={handleShowDialog}
                style={{ backgroundColor: '#9c6aff', border: 'none' }}
                id="inputGroup-sizing-coin">
                재발급
              </Button>
            </Input>
            <Modal show={showDialog} onHide={handleCloseDialog}>
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src="/static/images/waning.svg"
                    className="mt-4"
                    alt="logo"
                    style={{ width: '150px', height: '150px' }}
                  />
                </div>
                <p style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '15px', textAlign: 'center' }}>Warning</p>
                <p style={{ textAlign: 'center' }}>잔액(POINT) 이하 알림을 변경 하시겠습니까?</p>
              </div>
              <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={handleCloseDialog}>
                  Close
                </Button>
                <Button size="sm" variant="primary" onClick={handleCloseDialog}>
                  OK
                </Button>
              </Modal.Footer>
            </Modal>
            <ul>
              <li>Callback TOKEN은(는) 콜백 API 개발 시 아래와 같이 전송 받으신 헤더를 체크 하셔야 합니다.</li>
              <li>Callback-Token: 콜백 토큰값</li>
              <li>하부 콜백 요청 시 헤더의 Callback-Token 값을 콜백 토큰 값으로 보내오니 꼭 체크 바랍니다.</li>
              <li>헤더 Callback-Token 해당값이 현재 페이지의 Callback TOKEN값과 다른 경우 ERROR 리턴 조치 바랍니다.</li>
            </ul>
          </Col>
          <Col className="ml-3 mt-3">
            <Input className="mb-3">
              {/* <Input style={{ marginBottom: '10px' }} defaultValue="11ea6f40-6d5c-433d-930d-b3ab80492e20" /> */}
              <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              <Button
                onClick={handleShowDialog}
                style={{ backgroundColor: '#9c6aff', border: 'none' }}
                id="inputGroup-sizing-coin">
                변경
              </Button>
            </Input>
            <ul>
              <li>Callback URL은(는) http://, https:// 중 하나로 시작해야 합니다.</li>
              <li>ex) https://test.com/callback</li>
              <li>콜백 URL 설정 후 실서버 적용까지 최대 10분 정도 소요 될 수 있습니다.</li>
              <li>트랜스퍼 지갑 방식 사용 시 Callback URL을 비워주세요.</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default InforCallBack;
