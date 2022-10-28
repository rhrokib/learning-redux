import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import { loginUser } from "./reducers/loginSlice";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
    navigate("/user");
  };

  return (
    <div>
      <div className="App">
        <section className="gradient-custom">
          <div className="container p-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-md-5 mt-md-4 pb-5">
                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <div className="form-outline form-white mb-4">
                          <input
                            type="text"
                            id="typeEmailX"
                            className="form-control form-control-lg"
                            name="username"
                            onChange={handleUsernameChange}
                          />
                          <label className="form-label" htmlFor="username">
                            username
                          </label>
                        </div>
                        <div className="form-outline form-white mb-4">
                          <input
                            type="password"
                            id="typePasswordX"
                            className="form-control form-control-lg"
                            name="password"
                            onChange={handlePasswordChange}
                          />
                          <label className="form-label" htmlFor="typePasswordX">
                            Password
                          </label>
                        </div>
                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      <Link to="/user">Check Previous</Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col justify-content-center">
            <Link
              className="display-6 text-decoration-none btn btn-dark w-100"
              to={"/login"}
            >
              Login
            </Link>
          </div>
          <div className="col justify-content-center">
            <Link
              className="display-6 text-decoration-none btn btn-dark w-100"
              to={"/user"}
            >
              User
            </Link>
          </div>
          <div className="col justify-content-center">
            <Link
              className="display-6 text-decoration-none btn btn-dark w-100"
              to={"/role"}
            >
              Role
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
