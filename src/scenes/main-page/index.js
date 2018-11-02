import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Col, Form} from 'reactstrap';
import SimpleMap from "../../components/map";
import TableItem from "./components/table-item";
import {fetchPathData} from "../../redux-stuff/actions/fetchPathData";
import {getCurrentPath} from "../../redux-stuff/actions/currentPath";

class MainPage extends Component {
  componentWillMount() {
    this.props.onFetchPathData();
  }

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
         <TableItem pathData={this.props.pathData}/>
       </Col>
       <Col md="6">
         <div className="d-flex justify-content-between">
           <h3>{this.props.currentPathData.pathTitle}</h3>
           <span>{this.props.currentPathData.pathLength}</span>
         </div>
         <p>{this.props.currentPathData.pathDescription}</p>
         <SimpleMap/>
         <button>Favorite</button>
         <button>Remove</button>
       </Col>
     </div>
    );
  }
}

MainPage.propTypes = {
  pathData: PropTypes.array,
};
export default connect(
 state => ({
   pathData: state.pathData,
   currentPathData: state.currentPathData,
 }), dispatch => ({
   onFetchPathData: () => {
     dispatch(fetchPathData());
   },
   onGetCurrentPath: () => {
     dispatch(getCurrentPath());
   }
 }))(MainPage);
