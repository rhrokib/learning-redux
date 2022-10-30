import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { roleItem, setRole, updateRole } from "../../reducers/roleSlice";
import { useEffect, useState } from "react";
import { RootState } from "../../app/Store";

function Role() {
  const dispatch = useDispatch();
  const roleUrl = "/role";
  const [roles, setRoles] = useState([]);
  const role = useSelector((state: RootState) => state.role);
  const [flag, setFlag] = useState(true);
  const [editMode, SetEditMode] = useState(false);
  const [refresh, setRefresh] = useState(true);

  const [name, setName] = useState("");
  const [accessArea, setaccessArea] = useState("");
  const [dUser, setDuser] = useState("");
  const [status, setStatus] = useState(0);
  const [id, setId] = useState(0);

  useEffect(() => {
    axios.get(roleUrl).then((resp) => {
      setRoles(resp.data);
      console.log(resp.data);
    });
  }, [role, flag, refresh]);

  const handleDelete = (id: number, index: number) => {
    // eslint-disable-next-line no-restricted-globals
    let proceed = confirm("Are you sure?");
    if (proceed) {
      const deleteUrl = `/role/${id}`;
      axios.delete(deleteUrl).then((res) => {
        if (res.data === 1) {
          roles.splice(index, 1);
          dispatch(updateRole(roles[index]));
          setFlag(!flag);
        }
      });
    } else {
      return;
    }
  };

  const handleEdit = (data: any) => {
    setId(data.id);
    setName(data.name);
    setaccessArea(data.accessArea);
    setDuser(data.designatedUser);
    setStatus(data.status);
    SetEditMode(true);
  };

  const handleReset = function (e: any) {
    e.preventDefault();
    setId(0);
    setName("");
    setaccessArea("");
    setDuser("");
    setStatus(0);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (editMode && !!name && !!accessArea && !!dUser) {
      axios
        .put("/role", {
          id: id,
          name: name,
          accessArea: accessArea,
          designatedUser: dUser,
          status: status === 1 ? true : false,
        })
        .then((response) => {
          if (response.status === 200) {
            setId(0);
            setName("");
            setaccessArea("");
            setDuser("");
            setStatus(0);
            alert("Edit successful");
          }
        });
      SetEditMode(false);
      setRefresh(!refresh);
      return;
    }
    const role: roleItem = {
      roleName: name,
      accessArea,
      designatedUser: dUser,
      status,
    };

    if (!!name && !!accessArea && !!dUser) {
      axios
        .post("/role", {
          name: name,
          accessArea: accessArea,
          designatedUser: dUser,
          status: status === 1 ? true : false,
        })
        .then((res) => {
          if (res.status === 200) {
            dispatch(setRole({ value: [role] }));
            setName("");
            setaccessArea("");
            setDuser("");
            setStatus(0);
          }
        });
    }
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleAccessChange = (e: any) => {
    setaccessArea(e.target.value);
  };

  const handleStatusChange = (e: any) => {
    setStatus(e.target.value ? 1 : 0);
  };

  const handleDUserChange = (e: any) => {
    setDuser(e.target.value);
  };

  return (
    <div className="container container-sm-fluid">
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
        <div className="col-md-4">
          <div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add Role</h5>
                <form className="row g-3">
                  <input type="number" defaultValue={id} hidden />
                  <div className=" col-md-12">
                    <label htmlFor="role" className="form-label required">
                      Role
                    </label>
                    <input
                      name="name"
                      value={name}
                      onChange={handleNameChange}
                      type="text"
                      id="name"
                      className="form-control"
                      maxLength={16}
                      placeholder="Role Name"
                    />
                    <p className="error-text"></p>
                  </div>
                  <div className=" col-md-12">
                    <label htmlFor="accessArea" className="form-label required">
                      Access Area
                    </label>
                    <input
                      name="accessArea"
                      value={accessArea}
                      onChange={handleAccessChange}
                      type="text"
                      className="form-control"
                      maxLength={256}
                      id="accessArea"
                      placeholder="Access Area"
                    />
                    <p />
                  </div>
                  <div className=" col-md-12">
                    <label
                      htmlFor="designatedUser"
                      className="form-label required"
                    >
                      Designated User
                    </label>
                    <input
                      value={dUser}
                      name="dUser"
                      onChange={handleDUserChange}
                      type="text"
                      className="form-control"
                      maxLength={256}
                      id="designatedUser"
                      placeholder="Designated User"
                    />
                    <p className="error-text"></p>
                  </div>
                  <div className="col-12">
                    <div className=" form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        checked={!!status}
                        onChange={handleStatusChange}
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Is Active
                      </label>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-success px-3 mr-3"
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary px-3 mx-3"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Existing Roles</h5>
              </div>

              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Role Name</th>
                    <th scope="col">Access Area</th>
                    <th scope="col">Designated User</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((data: any, index: number) => {
                    return (
                      <tr key={data.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.name}</td>
                        <td>{data.accessArea}</td>
                        <td>{data.designatedUser}</td>
                        <td>{data.status ? "Active" : "Deactive"}</td>
                        <td>
                          <div>
                            <button
                              className="btn btn-primary btn-sm mx-2"
                              onClick={() => handleEdit(data)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(data.id, index)}
                            >
                              Del
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
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
