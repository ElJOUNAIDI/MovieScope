import React, { useState } from "react";
import logo from "../images/logo-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
    const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/movies?search=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate("/movies");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <img src={logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Acceuil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  A propos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  Movies
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn " type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
