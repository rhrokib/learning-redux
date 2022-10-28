import { useState } from "react";
import { useDispatch } from "react-redux";
import { roleItem, setRole } from "../../reducers/roleSlice";
import axios from "../../utils/axios";

function RoleForm() {
  const [name, setName] = useState("");
  const [accessArea, setaccessArea] = useState("");
  const [dUser, setDuser] = useState("");
  const [status, setStatus] = useState(0);

  const dispatch = useDispatch();

  const handleReset = function (e: any) {
    e.preventDefault();
    setName("");
    setaccessArea("");
    setDuser("");
    setStatus(0);
  };

  const handleSubmit = (e: any) => {
    const role: roleItem = {
      roleName: name,
      accessArea,
      designatedUser: dUser,
      status,
    };
    e.preventDefault();

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
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Role</h5>
          <form className="row g-3">
            <div className=" col-md-10">
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
            <div className=" col-md-10">
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
            <div className=" col-10">
              <label htmlFor="designatedUser" className="form-label required">
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
  );
}

export default RoleForm;
