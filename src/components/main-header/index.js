import React, {Component} from 'react';
import { Col } from 'reactstrap';
import AddPath from "../add-path";

class MainHeader extends Component {
  render() {
    return (
     <Col col="12">
       <div className="justify-content-between d-flex border-bottom">
         <h1>Saunter</h1>
         <AddPath/>
       </div>
     </Col>
    );
  }
}

export default MainHeader;
