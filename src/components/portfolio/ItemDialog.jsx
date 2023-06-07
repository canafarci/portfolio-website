import React from "react";
import {
  FaGooglePlay,
  FaGithub,
  FaBehanceSquare,
  FaAppStoreIos,
} from "react-icons/fa";
import "./portfolio.css";
import "./portfoliocards.css";

function ItemDialog({ selectedItem }) {
  console.log("asd");
  return (
    <>
      <div className="socials">
        <h2>{selectedItem.title}</h2>
        <div className="social_links">
          {selectedItem.github_link && (
            <a
              href={selectedItem.github_link}
              target="_blank"
              className="button"
              rel="noreferrer"
            >
              <FaGithub size={40} className="icon" />
              <h4> Source Code</h4>
            </a>
          )}
          {selectedItem.google_play_link && (
            <a
              href={selectedItem.google_play_link}
              target="_blank"
              className="button"
              rel="noreferrer"
            >
              <FaGooglePlay size={40} className="icon" />
              <h4> Play Store</h4>
            </a>
          )}
          {selectedItem.app_store_link && (
            <a
              href={selectedItem.app_store_link}
              target="_blank"
              className="button"
              rel="noreferrer"
            >
              <FaAppStoreIos size={40} className="icon" />
              <h4> App Store</h4>
            </a>
          )}
          {selectedItem.behance_link && (
            <a
              href={selectedItem.behance_link}
              target="_blank"
              className="button"
              rel="noreferrer"
            >
              <FaBehanceSquare size={40} className="icon" />
              <h4> Behance</h4>
            </a>
          )}
        </div>
      </div>
      <div className="row">
        <h4>Date: </h4>
        <p>{selectedItem.date}</p>
      </div>
      {selectedItem.skills && (
        <div className="row">
          <h4>Skills: </h4>
          <p>{selectedItem.skills}</p>
        </div>
      )}
      <div className="row">
        <h4>Work Type: </h4>
        <p>{selectedItem.job_type}</p>
      </div>
      {selectedItem.location && (
        <div className="row">
          <h4>Location: </h4>
          <p>{selectedItem.location}</p>
        </div>
      )}
      {selectedItem.role && (
        <div className="row">
          <h4>Role: </h4>
          <p> {selectedItem.role}</p>
        </div>
      )}
      {selectedItem.genre && (
        <div className="row">
          <h4>Genre: </h4>
          <p>{selectedItem.genre}</p>
        </div>
      )}
      <p>{selectedItem.description}</p>
      <p>{selectedItem.detailed_description}</p>
      {selectedItem.webGLUrl && (
        <div className="media">
          <iframe
            frameborder="0"
            src={selectedItem.webGLUrl}
            allowfullscreen="1"
            width={selectedItem.webgl_width}
            height={selectedItem.webgl_height}
            title="webglplayer"
          ></iframe>
        </div>
      )}
      {selectedItem.pdf_link && (
        <div className="pdf_display">
          <iframe
            src={selectedItem.pdf_link}
            width="100%"
            height="600px"
          ></iframe>
        </div>
      )}
      {selectedItem.videoUrl && (
        <div className="media">
          <iframe
            width={selectedItem.horizontalImages ? "830" : "850"}
            height="400"
            src={selectedItem.videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="videoplayer"
          ></iframe>
        </div>
      )}
      {selectedItem.videos && (
        <div className="image-row">
          {selectedItem.videos.map((video, index) => (
            <iframe
              height={300}
              src={video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="videoplayer"
              className="portfolio_video"
            ></iframe>
          ))}
        </div>
      )}
      {selectedItem.images && (
        <div className={selectedItem.horizontalImages ? "image-row" : ""}>
          {selectedItem.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${selectedItem.title} ${index}`}
              className={
                selectedItem.doubleImage ? "double_image" : "portfolio_image"
              }
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ItemDialog;
