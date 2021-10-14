import React from "react";
import {Link} from "route-reactor-dom";


const Register = (props) => {

    initialFormValues = {
        email: "",
        password1: "",
        password2: "",
        first_name: "",
        last_name: "",
        passwordMatch: true,
    }

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
        e.preventDefault();
        if (password1 === password2){
            const newUser = {
                email: {email},
                password: {password1},
                first_name: {first_name},
                last_name: {last_name},
            };
            setState({
                email: "",
                password1: "",
                password2: "",
                first_name: "",
                last_name: "",
            });
        } else {
            setState({...state, error })
        }
    };

    return (
        <div className="registration-page-container">
          <div className="registration-form-container">
            {newUser ? (
              <h2>Loading</h2>
            ) : (
              <>
                <form className="form-container" onSubmit={this.signUp}>
                  <div className="registration-form-header">
                    <h3>Welcome to</h3>
                    <h2>Secret Recipes</h2>
                  </div>
                  <p>Email</p>
                  <input
                    type="text"
                    required
                    name="email"
                    onChange={handleChanges}
                    value={input}
                  />
                  <p>Create password</p>
                  <input
                    type="password"
                    required
                    name="password1"
                    onChange={handleChanges}
                    value={input}
                  />
                  <p>Confirm password</p>
                  <input
                    type="password"
                    required
                    name="password2"
                    onChange={handleChanges}
                    value={input}
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
                    onChange={handleChanges}
                    value={input}
                  />
                  <p>Last Name</p>
                  <input
                    type="text"
                    required
                    name="last_name"
                    onChange={handleChanges}
                    value={input}
                  />
                  <br />
                  <button className="signup-btn" type="submit">
                    Sign Up
                  </button>
                  <p className="signup-small-font">
                    Already a member? Sign in{" "}
                    <Link to="/login" className="signup-link">
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

    export default Register;