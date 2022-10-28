import { useEffect, useState } from "react";
import axios from "../../utils/axios";

function RoleList() {
  const roleUrl = "/role";
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get(roleUrl).then((resp) => {
      setRoles(resp.data);
    });
  }, []);

  return (
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
              console.log(data);
              return (
                <tr key={data.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.accessArea}</td>
                  <td>{data.designatedUser}</td>
                  <td>{data.status === 1 ? "Active" : "Deactive"}</td>
                  <td>
                    <button className="btn btn-primary btn-sm mx-2">✒</button>
                    <button className="btn btn-danger btn-sm">⛔</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RoleList;
