import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAlbums } from "../../services/AlbumsService.js";

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlbums().then((res) => setAlbums(res));
  }, []);

  useEffect(() => {
    if (albums) setLoading(false);
  }, [albums]);

  return (
    <div className="Albums row">
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
                    <Link to={`/album/${album.id}`} className="btn btn-primary">
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
