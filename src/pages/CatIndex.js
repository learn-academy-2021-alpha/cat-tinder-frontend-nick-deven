import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Jumbotron, Container } from 'reactstrap';
class CatIndex extends Component {
  render() {
    return (
      <>
          <div>
      <Jumbotron fluid  className="display-3">
        <Container fluid className="display-3">
        <h1 className="display-3">Here are your eligible kitties</h1>
        <ul className="lead">
          {this.props.cats.map((cat) => {
            return (
            <li key={cat.id}>
                <NavLink to={`/catshow/${cat.id}`}>{cat.name}</NavLink>
            </li>
            )
          })}
        </ul>
        </Container>
      </Jumbotron>
    </div>
      </>
    );
  }
}
export default CatIndex;
