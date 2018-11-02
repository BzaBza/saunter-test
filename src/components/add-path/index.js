import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, Col } from 'reactstrap';
import Map from "../map";

class AddPath extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({backdrop: value});
  }

  render() {
    return (
     <div className="d-flex align-items-center">
       <Button color="primary" onClick={this.toggle}>Add path</Button>
       <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}
              backdrop={this.state.backdrop}>
         <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
         <ModalBody>
             <div className="d-flex">
               <Col md="6">
                 <Form>
                   <Label htmlFor="">Title</Label><Input type="text"/>
                   <Label htmlFor="">Short description</Label><Input  type="textarea"/>
                   <Label htmlFor="">Full description</Label><Input type="textarea"/>
                   <div>length</div>
                 </Form>
               </Col>
               <Col md="6">
                 <Map/>
               </Col>
             </div>
         </ModalBody>
         <ModalFooter>
           <Button color="primary" onClick={this.toggle}>Add</Button>
         </ModalFooter>
       </Modal>
     </div>
    );
  }
}

export default AddPath;

