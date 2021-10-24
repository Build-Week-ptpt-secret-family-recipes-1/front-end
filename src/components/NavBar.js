import React from "react";
import { NavLink, withRouter } from "react-router-dom";
// import { BASE_URL } from "../utils";

const Navigation = ({ history }) => {
    const logOut = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };

    return (
        <div className="App">
            <nav className="nav">
              <div className="title-bar">
                <h1>Secret Family Recipes</h1>
              </div>
              <div className="nav-links">
                {/* <a href={BASE_URL} target="_blank">Home</a> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to={`/users/${window.localStorage.getItem('userId')}/recipes/add`}>Add New Recipe</NavLink>
                <NavLink to="/">Sign Out</NavLink>
                {/* <button onClick={logOut}>Sign Out</button> */}
              </div>
            </nav>
        </div>
    )
}

export default withRouter(Navigation);