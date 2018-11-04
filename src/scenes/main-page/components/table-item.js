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
    console.log(pathData)
  }

  render() {
    return (
       <ListGroup className="path-list">
         {this.props.pathData.filter(item => item.pathTitle.includes(this.props.search || '')).map((value, index)=>
           <ListGroupItem className="d-flex align-items-center" key={index} onClick={()=>{this.openPath(value)}}>
             <div>
               <FaExpandArrowsAlt/>
             </div>
             <div>
               <div className="d-flex">
                 <div className={`${value.isFavorite ? 'd-block' : 'd-none'}`}><MdStarBorder/></div>
                 <h3>{value.pathTitle}</h3>
               </div>
               <span>{value.shortDescription}</span>
             </div>
             <div>
               <p>{value.pathLength}</p>
             </div>
             <div><FaChevronRight/></div>
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
