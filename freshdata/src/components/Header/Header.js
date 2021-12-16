import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="flex justify-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/creator">Creator</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
}

export default Header;
