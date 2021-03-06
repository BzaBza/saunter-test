import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, Label, Input, Col} from 'reactstrap';
import AddPathMap from "../map/addPathMap";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {addNewPathData} from "../../redux-stuff/actions/addNewPathData";
import {getNewPath} from "../../redux-stuff/actions/newPath";
import {getDistance} from "../../redux-stuff/actions/getDistance";

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
    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddNewPathData(
     {
       pathTitle: this.state.title,
       pathDescription: this.state.shortDescription,
       shortDescription: this.state.shortDescription,
       pathLength: this.props.distance,
       isFavorite: false,
       coordinates: this.props.newPath,
       id: '_' + Math.random().toString(36).substr(2, 9)
     }
    );
    this.toggle()
  };

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
         <ModalHeader toggle={this.toggle}>Add new path</ModalHeader>
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
                        maxlength="80"
                        style={{resize: "none"}}
                        value={this.state.shortDescription}
                        onChange={e => this.setState({ shortDescription: e.target.value })}/>
                 <Label htmlFor="">Full description</Label>
                 <Input type="textarea"
                        maxlength="160"
                        style={{resize: "none"}}
                        value={this.state.fullDescription}
                        onChange={e => this.setState({ fullDescription: e.target.value })}/>
                 <div>Distance: {this.props.distance}</div>
                 <Button color="primary" type="submit">Add</Button>
               </Form>
             </Col>
             <Col md="6">
               <AddPathMap directions={this.directions}/>
             </Col>
           </div>
         </ModalBody>
       </Modal>
     </div>
    );
  }
}

AddPath.propTypes = {
  pathData: PropTypes.array,
  currentPathData: PropTypes.array,
  distance: PropTypes.string,
};
export default connect(
 state => ({
   pathData: state.pathData,
   newPath: state.newPath,
   distance: state.distance,
 }), dispatch => ({
   onAddNewPathData: (newPathData) => {
     dispatch(addNewPathData(newPathData));
   },
   onGetNewPath: () => {
     dispatch(getNewPath());
   },
   onGetDistance: () => {
     dispatch(getDistance());
   },
 }))(AddPath);


