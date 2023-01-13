import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row justify-content-between pt-3">
            <div className="col-3">
              <h1>Logo</h1>
            </div>
            <div className="col-3">
              <ul className="list">
                <Link to="/" style={{textDecoration:"none"}}>
                  <li className="list_item">Home</li>
                </Link>
                <Link to="/section" style={{textDecoration:"none"}}>
                  <li className="list_item">Section</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
