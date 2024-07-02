import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
   return (
      <Container className="">
         <Row className="justify-content-md-center">
            <Col className="form-background" xs={12} md={6}>
               {children}
            </Col>
         </Row>
      </Container>
   );
};

export default FormContainer;
