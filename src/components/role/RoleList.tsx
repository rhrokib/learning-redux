import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/Store";
import { updateRole } from "../../reducers/roleSlice";
import axios from "../../utils/axios";

function RoleList() {
  const dispatch = useDispatch();
  const roleUrl = "/role";
  const [roles, setRoles] = useState([]);
  const role = useSelector((state: RootState) => state.role);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    axios.get(roleUrl).then((resp) => {
      setRoles(resp.data);
    });
  }, [role, flag]);

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

  const handleEdit = (id: number, index: number) => {
    
  };

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
              return (
                <tr key={data.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.accessArea}</td>
                  <td>{data.designatedUser}</td>
                  <td>{data.status === 1 ? "Active" : "Deactive"}</td>
                  <td>
                    <button className="btn btn-primary btn-sm mx-2">
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(data.id, index)}
                    >
                      Del
                    </button>
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
