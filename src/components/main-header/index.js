import React, {Component} from 'react';
import {Col} from 'reactstrap';
import AddPath from "../add-path";
import {FaExpandArrowsAlt} from "react-icons/fa";

class MainHeader extends Component {
  render() {
    return (
     <Col col="12">
       <div className="justify-content-between d-flex border-bottom">
         <div className="d-flex align-items-center">
           <FaExpandArrowsAlt/>
           <h1>Saunter</h1>
         </div>
         <AddPath/>
       </div>
     </Col>
    );
  }
}

export default MainHeader;
