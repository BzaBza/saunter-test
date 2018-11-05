import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Col, Input} from 'reactstrap';
import Map from "../../components/map";
import TableItem from "./components/table-item";
import {fetchPathData} from "../../redux-stuff/actions/fetchPathData";
import {getCurrentPath} from "../../redux-stuff/actions/currentPath";
import {removeCurrentPath} from "../../redux-stuff/actions/removeCurrentPath";
import {isFavorite} from "../../redux-stuff/actions/isFavorite";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    this.props.onFetchPathData();
  }


  render() {
    return (
     <div className="d-flex">
       <Col md="6">
         <div>
           <Input type="search"
                  placeholder="search"
                  value={this.state.search}
                  onChange={e => this.setState({search: e.target.value})}/>
         </div>
         <TableItem pathData={this.props.pathData} search={this.state.search}/>
       </Col>
       <Col md="6">
         <div className="d-flex justify-content-between">
           <h3>{this.props.currentPathData.pathTitle}</h3>
           <span>Distance: {this.props.currentPathData.pathLength}</span>
         </div>
         <p>{this.props.currentPathData.fullDescription}</p>
         <Map currentPathData={this.props.currentPathData}/>
      <div className="d-flex justify-content-between container">
        <button className="btn" onClick={()=>{this.props.onIsFavorite()}}>Favorite</button>
        <button className="btn" onClick={()=>{this.props.onRemoveCurrentPath(this.props.currentPathData.id)}}>Remove</button>
      </div>
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
   },
   onRemoveCurrentPath: (currentPath) => {
     dispatch(removeCurrentPath(currentPath));
   },
   onIsFavorite: () => {
     dispatch(isFavorite());
   }
 }))(MainPage);
