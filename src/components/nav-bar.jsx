import { Link } from "react-router-dom";
import "./nav-bar.css";
export function NavBar() {
  return (
    <div className="navbar">
      <h2>React and Axios</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new" className="new-btn">
            New Post
          </Link>
        </li>
      </ul>
    </div>
  );
}
