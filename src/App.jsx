import { Col, Container, Row } from "react-bootstrap";
import data from "./data/data";
import "./App.css";

const App = () => {
  const desenhos = data.desenhos;
  return (
    <Container>
      <h1>Luísa</h1>
      <hr />
      <p>bla bla bla</p>
      <Row>
        {desenhos.map((item) => (
          <Col key={item.id}>{item.nome}</Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
