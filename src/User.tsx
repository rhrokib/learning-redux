import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./App.css";
import { RootState } from "./app/Store";

function User() {
  const loginInfo = useSelector((state: RootState) => state.login);

  return (
    <div>
      <div>
        <div className="container align-content-center">
          <p className="display-5">Username: {loginInfo.username}</p>
        </div>
        <div className="container align-content-center">
          <p className="display-5">Password: {loginInfo.password}</p>
        </div>
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

export default User;
