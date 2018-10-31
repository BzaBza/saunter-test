import React, {Component} from 'react';

class MainPage extends Component {
  render() {
    return (
     <div className="d-flex">
       <div className="col-md-6">
         <header><input type="text" placeholder={'search'}/></header>
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
             <button className="bg-transparent"> > </button>
           </li>
         </ul>
       </div>
       <div className="col-md-6">
         map
       </div>
     </div>
    );
  }
}

export default MainPage;
