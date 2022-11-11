import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Input from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '@/pages/setting/style/setting.css';
function InforUser() {
  // const IMG_WARNING = require('');
  const COLOR_BLUE = '#3F3B6C';
  const [show, setShow] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseDialog = () => setShowDialog(false);
  const handleShowDialog = () => setShowDialog(true);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.ChangeEvent<any>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="px-4">
      <Row>
        <Col className="shadow-form">
          <div style={{ backgroundColor: COLOR_BLUE, borderRadius: '10px 10px 0 0', padding: '10px 0 12px 22px' }}>
            <h5 style={{ color: '#fff' }}>기본 정보</h5>
          </div>
          <div className="border-form">
            <div style={{ display: 'flex', padding: '20px' }}>
              <div style={{ width: '50%', paddingRight: '15px' }}>
                <Input className="mb-3">
                  {/* <Input.Text id="inputGroup-sizing-default" /> */}
                  <Form.Control
                    disabled
                    placeholder="아이디"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </Input>
                <Input className="mb-3">
                  {/* <Input.Text style={{ width: '100%' }}  /> */}
                  <Form.Control
                    disabled
                    placeholder="에이전트 등급"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </Input>
                <Input className="mb-3">
                  {/* <Input.Text style={{ width: '100%' }} placeholder="잔액(POINT) 이하 알림" /> */}
                  <Form.Control disabled placeholder="잔액(POINT) 이하 알림" aria-describedby="inputGroup-sizing-sm" />
                  <Input.Text>POINT</Input.Text>
                </Input>
                <Input className="mb-3">
                  {/* <Input placeholder="보유포인트" style={{ width: '100%' }} /> */}
                  <Form.Control placeholder="보유포인트" aria-label="Small" aria-describedby="inputGroup-sizing-coin" />
                  <Button
                    onClick={handleShowDialog}
                    style={{ backgroundColor: '#9c6aff', border: 'none' }}
                    id="inputGroup-sizing-coin">
                    변경
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
                    <p style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '15px', textAlign: 'center' }}>
                      Warning
                    </p>
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
              </div>
              <div style={{ width: '50%', paddingLeft: '15px' }}>
                <Input className="mb-3">
                  {/* <Input.Text placeholder="닉네임" style={{ width: '100%'}} /> */}
                  <Form.Control
                    disabled
                    placeholder="닉네임"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </Input>
                <Input className="mb-3">
                  {/* <Input.Text style={{ width: '100%', marginBottom: '10px' }} /> */}
                  <Form.Control
                    disabled
                    placeholder="포인트요율"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                  <Input.Text>%</Input.Text>
                </Input>
                <Input className="mb-3">
                  {/* <Input.Text style={{ width: '100%', marginBottom: '10px' }} /> */}
                  <Form.Control
                    disabled
                    placeholder="보유캐쉬"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                  <Input.Text>KRW</Input.Text>
                </Input>
                <Input className="mb-3">
                  {/* <Input.Text style={{ width: '100%' }}  /> */}
                  <Form.Control
                    disabled
                    placeholder="상태"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </Input>
                <Input className="mb-3">
                  {/* <Input.Text style={{ width: '100%' }}  /> */}
                  <Form.Control
                    placeholder="Whitelist IP:"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </Input>
              </div>
            </div>
            <Button
              onClick={handleShow}
              style={{ margin: '0 20px 20px 20px', borderRadius: '5px', backgroundColor: '#9c6aff', border: 'none' }}>
              비밀번호 변경
            </Button>
            <Modal className="p-4" show={show} onHide={handleClose}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="p-4" style={{ width: '100%' }}>
                  <h3 className="text-center">비밀번호 변경</h3>
                  <p className="mt-4">새 비밀번호</p>
                  <Input className="mb-3">
                    <Form.Control required type="password" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    <Form.Control.Feedback type="invalid">잘못된 비밀번호</Form.Control.Feedback>
                  </Input>
                  <p>새 비밀번호 재입력</p>
                  <Input>
                    <Form.Control required type="password" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    <Form.Control.Feedback type="invalid">잘못된 비밀번호</Form.Control.Feedback>
                  </Input>
                </div>
                <Modal.Footer>
                  <Button size="sm" variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button size="sm" variant="primary" type="submit">
                    Ok
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </div>
        </Col>
        <Col className="shadow-form">
          <div style={{ backgroundColor: COLOR_BLUE, borderRadius: '10px 10px 0 0', padding: '10px 0 12px 22px' }}>
            <h5 style={{ color: '#fff' }}>계좌 정보</h5>
          </div>
          <Form className="border-form">
            <div style={{ width: '100%', padding: '20px' }}>
              <div style={{ width: '100%', paddingRight: '15px' }}>
                <Input className="mb-3">
                  {/* <Input style={{ width: '100%', marginBottom: '10px' }}  /> */}
                  <Form.Control placeholder="연락처" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </Input>
                <Input className="mb-3">
                  {/* <Input style={{ width: '100%', marginBottom: '10px' }} /> */}
                  <Form.Control placeholder="계좌번호" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </Input>
                <Input className="mb-3">
                  {/* <Input style={{ width: '100%', marginBottom: '10px' }}  /> */}
                  <Form.Control placeholder="은행명" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </Input>
                <Input className="mb-3">
                  {/* <Input style={{ width: '100%', marginBottom: '10px' }} /> */}
                  <Form.Control placeholder="예금주" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </Input>
              </div>
            </div>
            <Button style={{ margin: '20px', borderRadius: '5px', backgroundColor: '#9c6aff', border: 'none' }}>
              계좌 정보 변경
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default InforUser;
