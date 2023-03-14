import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          <ListGroupItem action active href="#" tag="a">
            Cras justo odio
          </ListGroupItem>
          <ListGroupItem action href="#" tag="a">
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem action href="#" tag="a">
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem action href="#" tag="a">
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem action disabled href="#" tag="a">
            Vestibulum at eros
          </ListGroupItem>
        </ListGroup>
        <p />
      </div>
    );
  }
}
