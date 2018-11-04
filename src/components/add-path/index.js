import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, Col} from 'reactstrap';
import AddPathMap from "../map/addPathMap";

class AddPath extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      title: '',
      fullDescription: '',
      shortDescription: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.title)
  };

  handelChange(event) {
    event.preventDefault();
    // console.log(this.title.value)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  changeBackdrop(e) {
    let value = e.target.value;
    console.log(value);
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
               <Form onSubmit={this.handleSubmit}>
                 <Label htmlFor="">Title</Label>
                 <Input type="text"
                        value={this.state.title}
                        onChange={e => this.setState({ title: e.target.value })}/>
                 <Label htmlFor="">Short description</Label>
                 <Input type="textarea"
                        value={this.state.shortDescription}
                        onChange={e => this.setState({ shortDescription: e.target.value })}/>
                 <Label htmlFor="">Full description</Label>
                 <Input type="textarea"
                        value={this.state.fullDescription}
                        onChange={e => this.setState({ fullDescription: e.target.value })}/>
                 <div>length</div>
                 <Button color="primary" type="submit">Add</Button>
               </Form>
             </Col>
             <Col md="6">
               <AddPathMap/>
             </Col>
           </div>
         </ModalBody>
       </Modal>
     </div>
    );
  }
}

export default AddPath;

