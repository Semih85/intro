import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

function App() {
  // let titleProduct = "Product List";
  let productInfo = {title:"Product List"};
  let categoryInfo = {title:"Category List"};
  return (
    <div>
      {/* <h3>Hello from react!!!</h3> */}

      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
