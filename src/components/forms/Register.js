import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../utils/actions";


class Register extends React.Component{

    state = {
        email: "",
        password1: "",
        password2: "",
        first_name: "",
        last_name: "",
        passwordMatch: true,
    }

    

    handleChanges = (e) => {
        e.persist();
        this.setState({[e.target.name]: e.target.value });
    };

    registerUser = (e) => {
        e.preventDefault();
        if (this.state.password1 === this.state.password2){
            const newUser = {
                email: this.state.email,
                password: this.state.password1,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
            };
            this.props.registerUser(newUser, this.props.history);
            this.setState({
                email: "",
                password1: "",
                password2: "",
                first_name: "",
                last_name: "",
            });
        } else {
            this.setState({...this.state, passwordMatch: false });
        }
    };

    render() {
      return (
        <div className="registration-page-container">
          <div className="registration-form-container">
            {this.props.registeringUser ? (
              <h2>Loading</h2>
            ) : (
              <>
                <form className="form-container" onSubmit={this.registerUser}>
                  <div className="registration-form-header">
                    <h3>Welcome to</h3>
                    <h2>Secret Recipes</h2>
                  </div>
                  <p>Email</p>
                  <input
                    type="text"
                    required
                    name="email"
                    onChange={this.handleChanges}
                    value={this.input}
                  />
                  <p>Create password</p>
                  <input
                    type="password"
                    required
                    name="password1"
                    onChange={this.handleChanges}
                    value={this.input}
                  />
                  <p>Confirm password</p>
                  <input
                    type="password"
                    required
                    name="password2"
                    onChange={this.handleChanges}
                    value={this.input}
                  />
                  {passwordMatch ? (
                    <p>Oops! Your passwords don't match</p>
                  ) : (
                    ""
                  )}
                  <p>First Name</p>
                  <input
                    type="text"
                    required
                    name="first_name"
                    onChange={this.handleChanges}
                    value={this.input}
                  />
                  <p>Last Name</p>
                  <input
                    type="text"
                    required
                    name="last_name"
                    onChange={this.handleChanges}
                    value={this.input}
                  />
                  <br />
                  <button className="register-btn" type="submit">
                    Register
                  </button>
                  <p className="register-small-font">
                    Already a member? Log in{" "}
                    <Link to="/login" className="login-link">
                      here
                    </Link>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    registeringUser: state.registeringUser
  });

    export default withRouter(connect(mapStateToProps, {registerUser})(Register));