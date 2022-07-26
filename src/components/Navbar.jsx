import { Link } from "react-router-dom";
import { client } from "../supabase/client";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Supabase
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  to="#!"
                  onClick={async () => await client.auth.signOut()}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
