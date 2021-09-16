import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";    ---------Error con useParams()---------------
import { getAlbum, getAlbumPhotos } from "../../services/AlbumsService";

const Album = ({ match: { params } }) => {
  const { albumId } = params;

  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState(null);
  const [loadingPhotos, setLoadingPhotos] = useState(true);

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
        <p>Loading Album...</p>
      ) : (
        <div className="Album__data">
          <h1>{album.title}</h1>
        </div>
      )}
      {loadingPhotos ? (
        <p>Loading Photos...</p>
      ) : photos && photos.length > 0 ? (
        photos.map((photo) => (
          <div className="col-sm-4 my-3" key={photo.title}>
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
    </div>
  );
};

export default Album;
