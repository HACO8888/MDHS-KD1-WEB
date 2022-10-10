import './index.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

export default function Note() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const AddPrivateNote = () => NotReady()

    const HandleNoteSubmit = event => {
        event.preventDefault();
        alert('此內容不會記錄\n\n您的標題:\n' + event.nativeEvent.srcElement[2].value + '\n\n您的內容:\n' + event.nativeEvent.srcElement[3].value)
    }

    return (
        <div>

            <br />
            <h1 className='title1'>班級記事</h1>
            <br />
            <Button variant="primary" onClick={handleShow}>
                新增共享筆記
            </Button>
            &emsp;
            <Button variant="primary" onClick={AddPrivateNote} disabled>
                新增私人筆記
            </Button>
            <br />

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="modal-control"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form className='note-form' onSubmit={HandleNoteSubmit}>
                    <Modal.Header className="modal-dark noSelect">
                        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
                            感謝您新增本班共享筆記內容
                        </Modal.Title>
                        <CloseButton variant="white" aria-label="Hide" onClick={handleClose} />
                    </Modal.Header>
                    <Modal.Body className="modal-dark">
                        <Alert key="warning" variant="warning">
                            請按照表格填寫所有資訊以便後續資料處裡！
                        </Alert>

                        <p className="modal-body-title noSelect">請選擇記事類別:</p>
                        <Form.Select className="modal-body-select" disabled>
                            <option>此功能尚未開放</option>
                            <option>廢文</option>
                            <option>筆記</option>
                            <option>迷因</option>
                        </Form.Select>
                        <p className="modal-body-title paddingtop noSelect">請輸入記事標題:</p>
                        <Form.Group
                            className="mb-3"
                            controlId="NoteSubmitForm.Title"
                        >
                            <Form.Control className="modal-body-input-short" as="textarea" rows={3} maxLength="20" />
                        </Form.Group>
                        <p className="modal-body-title noSelect">請輸入記事內容:</p>
                        <Form.Group
                            className="mb-3"
                            controlId="NoteSubmitForm.Content"
                        >
                            <Form.Control className="modal-body-input-long" as="textarea" rows={3} maxLength="1000" />
                        </Form.Group>
                        {/* <p className="modal-body-title noSelect">請輸入記事內容:</p>
                        <Form.Group controlId="NoteSubmitForm.File" className="mb-3">
                            <Form.Control type="file" size="lg" disabled/>
                        </Form.Group> */}

                        <br />
                    </Modal.Body>
                    <Modal.Footer className="modal-dark noSelect">
                        <Button variant="false" className="cancle-button" aria-label="Hide" onClick={handleClose}><p className="modal-cancle-button-text">取消</p></Button>
                        <Button variant="false" className="modal-button" type="submit"><p className="modal-button-text">送出</p></Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </div >
    )
}

function NotReady() {
    alert("功能開發中尚不可使用")
}