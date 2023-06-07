import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import {
  FaGooglePlay,
  FaGithub,
  FaBehanceSquare,
  FaAppStoreIos,
  FaArrowCircleLeft,
} from "react-icons/fa";
import "./itemdialog.css";

function ItemDialog({ selectedItem, onCloseClicked }) {
  return (
    <div className="item_container">
      <div className="close_button">
        <IconButton
          disableRipple={true}
          aria-label="delete"
          className="close_button"
          onClick={onCloseClicked}
        >
          <FaArrowCircleLeft size={20} className="close_icon" />
          &nbsp; <span className="medium">close </span>
        </IconButton>
      </div>
      <h2>{selectedItem.title}</h2>
      <div className="socials">
        <div className="social_links">
          {selectedItem.github_link && (
            <a
              href={selectedItem.github_link}
              target="_blank"
              className="button"
              rel="noreferrer"
            >
              <FaGithub size={25} className="icon" />
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
              <FaGooglePlay size={25} className="icon" />
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
              <FaAppStoreIos size={25} className="icon" />
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
              <FaBehanceSquare size={25} className="icon" />
              <h4> Behance</h4>
            </a>
          )}
        </div>
      </div>
      <div>
        <span className="bold">Date: </span>
        {"  "}
        <span className="medium"> {selectedItem.date}</span>
      </div>
      {selectedItem.skills && (
        <div>
          <span className="bold">Skills: </span>
          {"  "}
          <span className="medium"> {selectedItem.skills}</span>
        </div>
      )}
      <div>
        <span className="bold">Work Type: </span>
        {"  "}
        <span className="medium"> {selectedItem.job_type}</span>
      </div>
      {selectedItem.location && (
        <div>
          <span className="bold">Location: </span>
          {"  "}
          <span className="medium"> {selectedItem.location}</span>
        </div>
      )}
      {selectedItem.role && (
        <div>
          <span className="bold">Role: </span>
          {"  "}
          <span className="medium"> {selectedItem.role}</span>
        </div>
      )}
      {selectedItem.genre && (
        <div>
          <span className="bold">Genre: </span>
          {"  "}
          <span className="medium"> {selectedItem.genre}</span>
        </div>
      )}
      <div className="descriptions">
        <p>{selectedItem.description}</p>
        <p>{selectedItem.detailed_description}</p>
      </div>
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
            title="pdfDisplay"
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
    </div>
  );
}

export default ItemDialog;
