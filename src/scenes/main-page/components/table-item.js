import React, {Component} from 'react';
import { Button } from 'reactstrap';
import {connect} from "react-redux";
import {getCurrentPath} from "../../../redux-stuff/actions/currentPath";

class TableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: props.usersData,
    };
    this.openPath = this.openPath.bind(this)
  }

  openPath(pathData){
    this.props.onGetCurrentPath(pathData);
  }

  render() {
    return (
       <ul>
         {this.props.pathData.map((value, index)=>
           <li className="d-flex align-items-center" key={index} onClick={()=>{this.openPath(value)}}>
             <div>
               Logo
             </div>
             <div>
               <div className="d-flex">
                 <div className={`${value.isFavorite ? 'd-block' : 'd-none'}`}>X</div>
                 <h3>{value.pathTitle}</h3>
               </div>
               <p>{value.pathDescription}</p>
             </div>
             <div>
               <p>{value.pathLength}</p>
             </div>
             <Button color="bg-transparent"> > </Button>
           </li>
         )}
       </ul>
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
