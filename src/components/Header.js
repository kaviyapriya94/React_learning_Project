import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
export default function Header(){
    useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	  }, []);
    return(
        <div>
            <section className="pb-3">
                <nav className="navbar bg-primary text-white">
                    <div className="container text-align-center">
                        <div className="navbar-header">
                            <img src={"mindmade.jpg"} alt="mindmade" width="150" height="50"/>
                        </div>
                        <ul className="nav">
                            <li className="nav-item">
                               <NavLink to='/' style={{paddingRight:'20px',textDecoration:'none',color:'white'}} >Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink style={{textDecoration:'none',color:'white'}}  data-bs-toggle="dropdown" to="/">Tasks</NavLink>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <NavLink style={{textDecoration:'none'}}to='/agecalculator' >Age Calculator</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink to='/timer'  style={{textDecoration:'none'}}>Timer</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </div>
    );
}