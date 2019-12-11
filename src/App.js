import React from 'react';
//import img from './img/photo.jpg'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Users from './users/Users';
import OneUser from './user/OneUser';


const App = (props) => {
    return (
     <Router>
         <Route exact path = '/' component = {Home} />
         <Route path = '/user' component = {Users} />
         <Route path = '/user/:id' component = {OneUser} />
     </Router>
    )};

export default App;