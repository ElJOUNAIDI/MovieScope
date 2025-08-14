import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/movies.xlsx")
  .then((res) => res.arrayBuffer())
  .then((buffer) => {
    const workbook = XLSX.read(buffer, { type: "array" }); // type: "array" pour ArrayBuffer
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    console.log(jsonData);
    setMovies(jsonData);
  })
  .catch((err) => console.error("Erreur chargement Excel :", err));
  }, []);

  return (
    <div className="movies">
      <div className="container mt-5">
        <h1 className="text-center mt-5">Movies</h1>
        <div className="movies_film">
          <div className="row">
            {movies.map((movie) => (
              <div className="col-12 col-md-4 col-lg-3 mb-4" key={movie.id}>
                <div className="card">
                  <img
                    src={movie.image_url}
                    className="card-img-top"
                    alt={movie.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.summary}</p>
                    <p><strong>Année:</strong> {movie.year}</p>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Note:</strong> {movie.rating}</p>
                  </div>
                  <button className="btn" data-bs-toggle="modal" data-bs-target="#movieModal" onClick={() => setSelectedMovie(movie)}>Lire plus</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Modal Bootstrap */}
      <div
        className="modal fade"
        id="movieModal"
        tabIndex="-1"
        aria-labelledby="movieModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {selectedMovie && (
              <>
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="movieModalLabel">
                    {selectedMovie.title}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    src={selectedMovie.image_url}
                    alt={selectedMovie.title}
                    className="img-fluid mb-3"
                  />
                  <p>{selectedMovie.summary}</p>
                  <p><strong>Année:</strong> {selectedMovie.year}</p>
                  <p><strong>Genre:</strong> {selectedMovie.genre}</p>
                  <p><strong>Note:</strong> {selectedMovie.rating}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fermer
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
