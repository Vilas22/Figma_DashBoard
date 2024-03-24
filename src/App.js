import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './Components/navabar'
import './App.css';
import Investors from './Components/Invester'
import AddInvestor from './Components/AddInvestors';
import InvestorDetails from './Components/InvestmentDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <SideNav />
        <Routes>

          <Route path='/Investors' Component={Investors} />
          <Route path='/Add-investors' Component={AddInvestor} />
          <Route path='/invesmtent_details' Component={InvestorDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
