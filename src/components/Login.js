import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFormValues = {
    username: "",
    password: "",
}

const Login = (props) => {

    const [ formValues, setFormValues ] = useState(initialFormValues);
    const [error, setError] = useState(null);
    const { push } = useHistory();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value })
    };

    const clearForm = () => {
        setFormValues(initialFormValues );
    }

    const handleSubmit = (e) => {
        setError(null);
        e.preventDefault();
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

    return(
    <ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Secret Recipe List</h1>
            <h2>Please enter your account information.</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input
                    id="username"
                    type="text"
                    value={formValues.username}
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                />
                <input
                    id="password"
                    type="password"
                    value={formValues.password}
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                /> 
                {error && <p id="error" className="error">{error}</p>}
                <button id="submit" type="submit">
                    Log In
                </button>
            </form>
        </ModalContainer>
    </ComponentContainer>
    );
};

export default Login;
