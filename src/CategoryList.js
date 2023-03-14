import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { catgoryId: 1, catgoryName: "Beverages" },
        { catgoryId: 2, catgoryName: "Condiments" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((catgory) => (
            <ListGroupItem key={catgory.catgoryId}>
              {catgory.catgoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
