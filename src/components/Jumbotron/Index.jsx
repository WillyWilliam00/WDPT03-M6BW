import { Container, Row, Col, Button } from "react-bootstrap";
import { Pencil, CameraFill } from "react-bootstrap-icons";
import "./jumbotron.scss"
import { useState } from "react";
import ModifyImg from "./ModifyImg.jsx"

export default function Jumbotron({myProfile, getMyProfile, myId}) {
    
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


        
   
    return (
        <Container fluid className="bg-white container-fluid border rounded-3">
            <Row>
                <Col xs={12} className="jumbotronBackground d-flex justify-content-center" >
                    <img  src={myProfile["image"]} alt="link_back" className="rounded-top-3" />
                    <div className="jumbotron_camera">
                        <CameraFill />
                    </div>
                   
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="ps-4">
                    <div className="jumbotronProfile">
                        
                        
                      <div onClick={myId === myProfile["_id"] ? handleShow : handleClose} style={myId === myProfile["_id"] ? {cursor: "pointer"} : {cursor: "inherit"}} >
                        <img src={myProfile["image"]} className="rounded-circle" alt=""/>
                     </div>
                        <Button variant="light" className="rounded-circle"><Pencil /></Button>
                    </div>
                    <div className="my-4 d-flex justify-content-between">
                        <div>
                                <h3 className="m-0 fs-4 text">{myProfile["name"]} {myProfile["surname"]}</h3>
                                <p className="mb-1">{myProfile["title"]}</p>
                                <p className="text-secondary fs-7 m-0">{myProfile["area"]} · <span className="fw-semibold colorBlu">Informazioni di contatto</span> </p>
                                <p className="fs-7 fw-semibold colorBlu">93 collegamenti</p>
                                <Button  className="rounded-pill fw-semibold btn-blue me-2">Disponibile Per</Button>
                                <Button  className="rounded-pill fw-semibold btn-white me-2">Aggiungi sezione del profilo</Button>
                                <Button  className="rounded-pill fw-semibold btn-grey">Altro</Button>
                        </div>
                        <div className="me-auto ms-20"><p className="fw-semibold">Ultima esperienza</p></div>
                    </div>
                </Col>
            </Row>
            <ModifyImg show={show} setShow={setShow} myProfile={myProfile} getMyProfile={getMyProfile}/>
        </Container>

    )
}
