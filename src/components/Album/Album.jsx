import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";    ---------Error con useParams()---------------
import { getAlbum, getAlbumPhotos } from "../../services/AlbumsService";
import { ThemeContext } from "../../contexts/ThemeContext";

const Album = ({ match: { params } }) => {
  const { albumId } = params;

  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState(null);
  const [loadingPhotos, setLoadingPhotos] = useState(true);

  const { lightMode } = useContext(ThemeContext);

  useEffect(() => {
    getAlbum(albumId).then((res) => setAlbum(res));
  }, [albumId]);

  useEffect(() => {
    getAlbumPhotos(albumId).then((res) => setPhotos(res));
  }, [albumId]);

  useEffect(() => {
    if (album) setLoading(false);
  }, [album]);

  useEffect(() => {
    if (photos) setLoadingPhotos(false);
  }, [photos]);

  return (
    <div className="Album row">
      {loading ? (
        <p style={{ color: lightMode ? "black" : "white" }}>Loading Album...</p>
      ) : (
        <div className="Album__data mt-5">
          <h1 style={{ color: lightMode ? "black" : "white" }}>
            {album.title}
          </h1>
        </div>
      )}
      <div className="Album__buttons p-3 d-flex justify-content-end">
        <Link
          to={`/album/${Number(albumId) - 1}`}
          className={`btn ${
            lightMode ? "btn-outline-dark" : "btn-outline-light"
          } m-1`}
        >
          Previous album
        </Link>
        <Link
          to={`/album/${Number(albumId) + 1}`}
          className={`btn ${
            lightMode ? "btn-outline-dark" : "btn-outline-light"
          } m-1`}
        >
          Next album
        </Link>
      </div>
      {loadingPhotos ? (
        <p>Loading Photos...</p>
      ) : photos && photos.length > 0 ? (
        photos.map((photo) => (
          <div
            className="Album__photos col-sm-4 py-3 d-flex justify-content-center"
            key={photo.title}
          >
            <div className="card h-100" style={{ width: "18rem" }}>
              <img
                src={photo.thumbnailUrl}
                className="card-img"
                alt={photo.title}
              />
              <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No photos</h1>
      )}

      <div className="Album__buttons m-3 d-flex justify-content-end">
        <Link
          to={`/album/${Number(albumId) - 1}`}
          className={`btn ${
            lightMode ? "btn-outline-dark" : "btn-outline-light"
          } m-1`}
        >
          Previous album
        </Link>
        <Link
          to={`/album/${Number(albumId) + 1}`}
          className={`btn ${
            lightMode ? "btn-outline-dark" : "btn-outline-light"
          } m-1`}
        >
          Next album
        </Link>
      </div>
    </div>
  );
};

export default Album;
