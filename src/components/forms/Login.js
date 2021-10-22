import React from 'react';
import styled from 'styled-components';
import { Link, Redirect} from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { logIn } from '../../utils/actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class Login extends React.Component {

    state = {
        credentials: {
            email: "",
            password:"",
        }
    }


    handleChanges = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    logIn = (e) => {
        e.preventDefault();
        this.props.logIn(this.state.credentials, this.props.history);
        this.setState({
            credentials: {
                email: "",
                password: "",
            }
        });
        // axiosWithAuth
        //     .post("login", formValues)
        //     .then(({data}) => {
        //         const { username, role, token } = data;
        //         window.localStorage.setItem("username", username);
        //         window.localStorage.setItem("role", role);
        //         window.localStorage.setItem("token", token);
        //         clearForm();
        //     })
        //     .catch((error) => {
        //         console.log(error.response.data);
        //         setError(error.response.data.error);
        //     })
        //     .finally(() => {
        //         push("/recipelist")
        //     })
    };

    render() {
        if(localStorage.getItem("token")) {
            return <Redirect to="/" />; 
        }
        return (
            <div className='login-container'>
                <div>
                    {this.props.loggingIn ? (
                        <h1>Loading</h1>
                    ) : (
                        <>
                            <form className='form-container' onSubmit={this.logIn}>
                                <h1>Welcome to Secret Recipe List</h1>
                                <h2>Please enter your account information.</h2>
                                    <p>e-mail:</p>
                                    <input
                                        id="username"
                                        type="text"
                                        value={this.input}
                                        placeholder="e-mail"
                                        name="e-mail"
                                        onChange={this.handleChanges}
                                    />
                                    <p>password:</p>
                                    <input
                                        id="password"
                                        type="password"
                                        value={this.value}
                                        placeholder="password"
                                        name="password"
                                        onChange={this.handleChanges}
                                    /> 
                                    <button className="login-btn" type="submit" onClick={this.logIn}>
                                        Log In
                                    </button>
                                    <p> Not a member? Sign up {''}
                                    <Link className="register-link" to="/registration">
                                        here </Link>
                                        </p>
                            </form>
                        </>
                    )}
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    success: state.success,
})

export default withRouter(connect(mapStateToProps, {logIn})(Login));
