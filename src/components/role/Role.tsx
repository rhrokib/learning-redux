import { Link } from "react-router-dom";
import RoleForm from "./RoleForm";
import RoleList from "./RoleList";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { setRole } from "../../reducers/roleSlice";

function Role() {
  // const roleUrl = "/role";
  // const roles: any = [];
  // axios.get(roleUrl).then((resp) => resp.data.map((x: any) => roles.push(x)));
  
  // const dispatch = useDispatch();
  // dispatch(setRole(roles));

  return (
    <div className="container-fluid">
      <div>
        <section className="content-header">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6 my-2">
                <h1>
                  Role
                  <small>Setup</small>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="row">
        <div className="col-md-6">
          <RoleForm />
        </div>
        <div className="col-md-6">
          <RoleList />
        </div>
      </div>
      <hr className="mt-5" />
      <div className="container mt-5">
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

export default Role;
