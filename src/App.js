import React, {Component} from 'react';
import './App.css';
import MainPage from "./scenes/main-page";
import MainHeader from "./components/main-header";

class App extends Component {
  render() {
    return (
     <div className="App">
       <MainHeader/>
       <MainPage/>
     </div>
    );
  }
}

export default App;
