import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getAlbums } from "../../services/AlbumsService.js";
import { ThemeContext } from "../../contexts/ThemeContext";

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(true);

  const { lightMode } = useContext(ThemeContext);

  useEffect(() => {
    getAlbums().then((res) => setAlbums(res));
  }, []);

  useEffect(() => {
    if (albums) setLoading(false);
  }, [albums]);

  return (
    <div className={`Albums row mt-5 ${
      lightMode ? "navbar-light bg-light" : "navbar-dark bg-dark"
    }`}>
      {loading ? (
        <p>Loading Albums...</p>
      ) : (
        <>
          {albums &&
            albums.map((album) => (
              <div className="col-sm-4 my-3" key={album.id}>
                <div className="card h-100" style={{ width: "18rem" }}>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{album.title}</h5>
                    <Link to={`/album/${album.id}`} className="btn btn-dark">
                      See details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Albums;
