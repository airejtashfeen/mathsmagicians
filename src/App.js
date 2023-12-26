import React, { Component } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={(<Missions />)} />
            <Route path="/myProfile" element={<MyProfile/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
