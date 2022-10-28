import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col justify-content-center">
            <Link className="display-6 text-decoration-none btn btn-dark w-100" to={"/login"}>
              Login
            </Link>
          </div>
          <div className="col justify-content-center">
            <Link className="display-6 text-decoration-none btn btn-dark w-100" to={"/user"}>
              User
            </Link>
          </div>
          <div className="col justify-content-center">
            <Link className="display-6 text-decoration-none btn btn-dark w-100" to={"/role"}>
              Role
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
