import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {connect} from "react-redux";
import {getCurrentPath} from "../../../redux-stuff/actions/currentPath";
import { FaChevronRight, FaExpandArrowsAlt } from "react-icons/fa";
import { MdStarBorder } from "react-icons/md";

class TableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.openPath = this.openPath.bind(this)
  }

  openPath(pathData){
    this.props.onGetCurrentPath(pathData);
  }

  render() {
    return (
       <ListGroup className="path-list">
         {this.props.pathData.filter(item => item.pathTitle.includes(this.props.search || '')).sort(function(a){
           if(a.isFavorite === true){
             return -1
           } else{ return 1}
         }).map((value, index)=>
           <ListGroupItem className="path-list-item d-flex align-items-center justify-content-between" key={index} onClick={()=>{this.openPath(value)}}>
             <div className="d-flex align-items-center">
               <div>
                 <FaExpandArrowsAlt/>
               </div>
               <div>
                 <div className="d-flex">
                   <div className={`${value.isFavorite ? 'd-block' : 'd-none'}`}><MdStarBorder/></div>
                   <h3 className="path-title">{value.pathTitle}</h3>
                 </div>
                 <span className="path-description">{value.shortDescription}</span>
               </div>
             </div>
            <div className="d-flex align-items-center">
              <div>
                <span>{value.pathLength}</span>
              </div>
              <div><FaChevronRight/></div>
            </div>
           </ListGroupItem>
         )}
       </ListGroup>
    );
  }
}

export default connect(
 state => ({
   currentPathData: state.currentPathData,
 }), dispatch => ({
   onGetCurrentPath: (pathData) => {
     dispatch(getCurrentPath(pathData));
   }
 }))(TableItem);
