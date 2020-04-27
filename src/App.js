import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    NavLink,
    Route
} from "react-router-dom"
import Lagou from "./views/Lagou";
import Login from "./views/Login";
function App() {
  return (
    <div className="App">
         <nav>
             <NavLink to={"/"} exact>拉勾</NavLink>|
             <NavLink to={"/login"}>登陆</NavLink>|
             <NavLink to={"/loginLog"}>查看登陆记录</NavLink>
         </nav>
          <Route path={"/"} exact component={Lagou}></Route>
        <Route path={"/login"}  component={Login}></Route>
    </div>
  );
}

export default App;
