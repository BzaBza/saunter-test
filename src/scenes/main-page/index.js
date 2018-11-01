import React, {Component} from 'react';
import {Col, Button, Form} from 'reactstrap';
import SimpleMap from "../../components/map";

class MainPage extends Component {
  render() {
    return (
     <div className="d-flex">
       <Col md="6">
         <header>
           <Form className="form-inline">
             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
           </Form>
         </header>
         <ul>
           <li className="d-flex align-items-center">
             <div>
               Logo
             </div>
             <div>
               <h3>Path title</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et
                 explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde
                 voluptatibus.</p>
             </div>
             <div>
               <p>1KM</p>
             </div>
             <Button color="bg-transparent"> > </Button>
           </li>
         </ul>
       </Col>
       <Col md="6">
         <SimpleMap/>
       </Col>
     </div>
    );
  }
}

export default MainPage;
