import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Input from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '@/pages/setting/style/setting.css';
function InforApi() {
  // const IMG_WARNING = require('');
  const COLOR_BLUE = '#3F3B6C';
  const [showDialog, setShowDialog] = useState(false);
  const handleCloseDialog = () => setShowDialog(false);
  const handleShowDialog = () => setShowDialog(true);
  return (
    <div className="px-4">
      <div className="box-form">
        <div style={{ backgroundColor: COLOR_BLUE, borderRadius: '10px 10px 0 0', padding: '10px 0 12px 22px' }}>
          <h5 style={{ color: '#fff' }}>API 정보</h5>
        </div>
        <Row className="border-form" style={{ margin: '0' }}>
          <Col className="mt-4 mb-3">
            <Input className="mb-3">
              {/* <Input style={{ width: '100%', marginTop: '-10px' }} /> */}
              <Form.Control disabled placeholder="API TOKEN" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
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
                  Ok
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col className="mt-4 mb-3">
            <Input className="mb-3">
              {/* <Input style={{ width: '100%', marginBottom: '10px', marginTop: '10px' }} /> */}
              <Form.Control disabled placeholder="API URL" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </Input>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default InforApi;
