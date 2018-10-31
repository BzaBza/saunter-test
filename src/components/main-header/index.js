import React, {Component} from 'react';

class MainHeader extends Component {
  render() {
    return (
     <header className="col-md-12 justify-content-between d-flex border-bottom">
        <h1>Saunter</h1>
       <button className="btn-primary">Add path</button>
     </header>
    );
  }
}

export default MainHeader;
