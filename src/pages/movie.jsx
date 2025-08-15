import React, {  useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useParams , useNavigate, Link, useLocation } from "react-router-dom";
export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Récupérer paramètre search de l'URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/movies.xlsx")
  .then((res) => res.arrayBuffer())
  .then((buffer) => {
    const workbook = XLSX.read(buffer, { type: "array" }); 
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    setMovies(jsonData);

        // Si on a un ID dans l'URL → trouver le film
        if (id) {
          const movieFound = jsonData.find((m) => String(m.id) === id);
          if (movieFound) {
            setSelectedMovie(movieFound);
            // Ouvrir le modal Bootstrap automatiquement
            setTimeout(() => {
              const modalElement = document.getElementById("movieModal");
              const modal = new window.bootstrap.Modal(modalElement);
              modal.show();
              modalElement.addEventListener("hidden.bs.modal", () => {
                navigate("/movies");
              }, { once: true });
            }, 100);
          }
        }
  })
  .catch((err) => console.error("Erreur chargement Excel :", err));
  }, [id, navigate]);
// Filtrer les films selon la recherche
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="movies">
      <div className="container mt-5">
        <h1 className="text-center mt-5">Movies</h1>
        <div className="movies_film">
          <div className="row">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
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
                  <Link
                  to={`/movies/${movie.id}`}
                  className="btn"
                >
                  Lire plus
                </Link>
                </div>
              </div>
            ))
            )
            : (
              <div className="container d-flex text-center mt-4 vh-100 justify-content-center align-items-center ">
                <div className="">
                  <h4>Aucun film trouvé</h4>
                  <p>Essayez une autre recherche</p>
                </div>
              </div>
            )}
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
